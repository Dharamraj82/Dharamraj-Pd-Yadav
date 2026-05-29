/**
 * useApiCache.js
 * ──────────────────────────────────────────────────────────────
 * React hook — wraps cachedFetch with state management.
 *
 * Usage:
 *   const { data, loading } = useApiCache(import.meta.env.VITE_API_URL + "/blogs", { ttl: 3 * 60 * 1000 });
 *
 * Behaviour:
 *   - If cached data exists → sets data instantly, loading = false
 *   - If cached data is stale → serves stale instantly, refetches silently
 *   - If no cache → loading = true until first fetch completes
 */

import { useState, useEffect, useRef } from "react";
import { cachedFetch } from "./apiCache";

export function useApiCache(url, options = {}) {
  const { ttl, transform, enabled = true } = options;

  const [data, setData]       = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError]     = useState(null);
  const mountedRef            = useRef(true);

  useEffect(() => {
    mountedRef.current = true;
    return () => { mountedRef.current = false; };
  }, []);

  useEffect(() => {
    if (!url || !enabled) return;

    let cancelled = false;

    const load = async () => {
      try {
        const result = await cachedFetch(url, {
          ttl,
          // Called synchronously if cache hit — instant UI update
          onCacheHit: (cached) => {
            if (!cancelled && mountedRef.current) {
              const processed = transform ? transform(cached) : cached;
              setData(Array.isArray(processed) ? processed : processed);
              setLoading(false);
            }
          },
        });

        if (!cancelled && mountedRef.current) {
          const processed = transform ? transform(result.data) : result.data;
          setData(processed);
          setLoading(false);
          setError(null);
        }
      } catch (err) {
        if (!cancelled && mountedRef.current) {
          setError(err);
          setLoading(false);
        }
      }
    };

    load();

    return () => { cancelled = true; };
  }, [url, enabled]);

  return { data, loading, error };
}
