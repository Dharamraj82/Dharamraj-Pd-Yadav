/**
 * apiCache.js
 * ──────────────────────────────────────────────────────────────
 * Lightweight localStorage-backed cache for API responses.
 *
 * Strategy: Stale-While-Revalidate
 *   1. Return cached data instantly (no loading spinner for repeat visits)
 *   2. Silently refetch in the background if TTL has expired
 *   3. Update the cache & trigger a re-render only when fresh data arrives
 */

const PREFIX = "portfolio_cache_";
const DEFAULT_TTL = 5 * 60 * 1000; // 5 minutes

function cacheKey(url) {
  return PREFIX + btoa(url);
}

/** Read an entry from the cache. Returns { data, stale } or null. */
export function readCache(url) {
  try {
    const raw = localStorage.getItem(cacheKey(url));
    if (!raw) return null;
    const { data, ts, ttl } = JSON.parse(raw);
    const stale = Date.now() - ts > ttl;
    return { data, stale };
  } catch {
    return null;
  }
}

/** Write an entry to the cache. */
export function writeCache(url, data, ttl = DEFAULT_TTL) {
  try {
    localStorage.setItem(
      cacheKey(url),
      JSON.stringify({ data, ts: Date.now(), ttl })
    );
  } catch (e) {
    // localStorage quota exceeded — silently skip
    if (e.name === "QuotaExceededError") clearOldEntries();
  }
}

/** Remove all portfolio cache entries older than their TTL. */
export function clearOldEntries() {
  try {
    Object.keys(localStorage)
      .filter((k) => k.startsWith(PREFIX))
      .forEach((k) => {
        try {
          const { ts, ttl } = JSON.parse(localStorage.getItem(k));
          if (Date.now() - ts > ttl) localStorage.removeItem(k);
        } catch {
          localStorage.removeItem(k);
        }
      });
  } catch {}
}

/**
 * cachedFetch(url, options)
 * ─────────────────────────
 * Drop-in replacement for fetch() with built-in caching.
 *
 * @param {string}   url      The API endpoint
 * @param {object}   options
 *   @param {number}   [options.ttl]         Cache TTL in ms (default 5 min)
 *   @param {function} [options.onCacheHit]  Called instantly with cached data
 *   @param {boolean}  [options.forceRefresh] Skip cache and always refetch
 */
export async function cachedFetch(url, options = {}) {
  const { ttl = DEFAULT_TTL, onCacheHit, forceRefresh = false } = options;

  if (!forceRefresh) {
    const cached = readCache(url);
    if (cached) {
      if (onCacheHit) onCacheHit(cached.data);
      if (!cached.stale) {
        // Fresh — no network call needed
        return { data: cached.data, fromCache: true };
      }
      // Stale — return cached data now, refetch silently below
    }
  }

  try {
    const res = await fetch(url);
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    const json = await res.json();
    const data = json.data ?? json;
    writeCache(url, data, ttl);
    return { data, fromCache: false };
  } catch (err) {
    // Network failure — return whatever is in cache as fallback
    const cached = readCache(url);
    if (cached) return { data: cached.data, fromCache: true, error: err };
    throw err;
  }
}
