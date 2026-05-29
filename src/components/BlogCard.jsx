import { motion, AnimatePresence } from "framer-motion";
import { FiCalendar, FiClock, FiX, FiArrowUpRight, FiBookOpen } from "react-icons/fi";
import { HiTag } from "react-icons/hi";
import { useTheme } from "../context/ThemeProvider";
import { useState } from "react";
import { createPortal } from "react-dom";

const formatDate = (dateString) => {
  if (!dateString) return "";
  const options = { year: "numeric", month: "long", day: "numeric" };
  return new Date(dateString).toLocaleDateString("en-US", options);
};

// ─── Modal ────────────────────────────────────────────────────────────────────
function BlogModal({ blog, onClose, isDark }) {
  return createPortal(
    <AnimatePresence>
      <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4 sm:p-6 md:p-10">
        {/* Backdrop */}
        <motion.div
          key="backdrop"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          onClick={onClose}
          className="absolute inset-0"
          style={{
            background: isDark
              ? "rgba(0,0,0,0.85)"
              : "rgba(10,10,10,0.75)",
            backdropFilter: "blur(20px)",
            WebkitBackdropFilter: "blur(20px)",
          }}
        />

        {/* Panel */}
        <motion.div
          key="panel"
          initial={{ opacity: 0, y: 40, scale: 0.97 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 40, scale: 0.97 }}
          transition={{ type: "spring", damping: 28, stiffness: 320 }}
          className={`relative w-full max-w-3xl max-h-[88vh] flex flex-col rounded-[2rem] overflow-hidden shadow-2xl z-10 ${
            isDark
              ? "bg-[#111111] border border-white/10"
              : "bg-white border border-slate-200"
          }`}
          onClick={(e) => e.stopPropagation()}
        >
          {/* Decorative top gradient bar */}
          <div
            className="absolute top-0 left-0 right-0 h-1 z-20"
            style={{
              background: "linear-gradient(90deg, rgb(249,115,22), rgb(234,88,12), rgb(249,115,22))",
              backgroundSize: "200% 100%",
            }}
          />

          {/* Header */}
          <div
            className={`flex items-start justify-between p-8 pb-6 shrink-0 border-b ${
              isDark ? "border-white/5" : "border-slate-100"
            }`}
          >
            <div className="flex items-center gap-3 mr-10">
              <div
                className="p-2 rounded-xl"
                style={{ background: "rgba(249,115,22,0.12)" }}
              >
                <FiBookOpen size={20} style={{ color: "rgb(249,115,22)" }} />
              </div>
              <span
                className="text-xs font-bold uppercase tracking-[0.18em]"
                style={{ color: "rgb(249,115,22)" }}
              >
                Article
              </span>
            </div>

            <button
              onClick={onClose}
              className={`p-2.5 rounded-full transition-all duration-200 shrink-0 ${
                isDark
                  ? "bg-white/5 hover:bg-white/12 text-gray-400 hover:text-white"
                  : "bg-slate-100 hover:bg-slate-200 text-slate-500 hover:text-slate-900"
              }`}
            >
              <FiX size={18} />
            </button>
          </div>

          {/* Scrollable body */}
          <div
            className="flex-1 overflow-y-auto px-8 py-8 custom-scrollbar"
          >
            {/* Category + Meta row */}
            <div className="flex flex-wrap items-center gap-3 mb-7">
              {blog.category && (
                <span
                  className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-bold"
                  style={{
                    background: "rgba(249,115,22,0.12)",
                    color: "rgb(249,115,22)",
                    border: "1px solid rgba(249,115,22,0.25)",
                  }}
                >
                  <HiTag size={11} />
                  {blog.category}
                </span>
              )}
              {blog.date && (
                <span
                  className={`inline-flex items-center gap-1.5 text-xs font-medium ${
                    isDark ? "text-gray-400" : "text-slate-500"
                  }`}
                >
                  <FiCalendar size={11} />
                  {formatDate(blog.date)}
                </span>
              )}
              {blog.read_time && (
                <span
                  className={`inline-flex items-center gap-1.5 text-xs font-medium ${
                    isDark ? "text-gray-400" : "text-slate-500"
                  }`}
                >
                  <FiClock size={11} />
                  {blog.read_time}
                </span>
              )}
            </div>

            {/* Title */}
            <h2
              className={`text-2xl sm:text-3xl md:text-4xl font-extrabold leading-[1.2] tracking-tight mb-8 ${
                isDark ? "text-white" : "text-slate-900"
              }`}
            >
              {blog.title}
            </h2>

            {/* Divider */}
            <div
              className="mb-8 rounded-full h-px w-full"
              style={{
                background: isDark
                  ? "linear-gradient(90deg, rgba(249,115,22,0.5), rgba(249,115,22,0.05) 80%)"
                  : "linear-gradient(90deg, rgba(249,115,22,0.4), rgba(249,115,22,0.04) 80%)",
              }}
            />

            {/* Description / Full Article body */}
            <div
              className={`text-base sm:text-lg leading-[1.9] whitespace-pre-line ${
                isDark ? "text-gray-300" : "text-slate-600"
              }`}
            >
              {blog.description}
            </div>

            {/* Author Section */}
            <div
              className={`mt-10 pt-8 border-t flex items-center gap-4 ${
                isDark ? "border-white/8" : "border-slate-100"
              }`}
            >
              {/* Avatar — from DB or fallback to profile image */}
              <div className="relative shrink-0">
                <img
                  src={blog.author_avatar || "./profileImage.png"}
                  alt={blog.author_name || "Dharamraj"}
                  className="w-14 h-14 rounded-full object-cover"
                  loading="lazy"
                  decoding="async"
                  style={{
                    border: "2px solid rgba(249,115,22,0.5)",
                    boxShadow: "0 0 0 4px rgba(249,115,22,0.08)",
                  }}
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = "./profileImage.png";
                  }}
                />
              </div>

              <div className="flex flex-col">
                <span
                  className={`text-base font-bold ${
                    isDark ? "text-white" : "text-slate-900"
                  }`}
                >
                  {blog.author_name || "Dharamraj"}
                </span>
                <span
                  className="text-sm font-medium"
                  style={{ color: "rgb(249,115,22)" }}
                >
                  {blog.author_role || "Author"}
                </span>
              </div>
            </div>
          </div>

          {/* Footer glow */}
          <div
            className="absolute bottom-0 left-0 right-0 h-24 pointer-events-none rounded-b-[2rem]"
            style={{
              background: isDark
                ? "linear-gradient(to top, #111111, transparent)"
                : "linear-gradient(to top, #ffffff, transparent)",
            }}
          />
        </motion.div>
      </div>
    </AnimatePresence>,
    document.body
  );
}

// ─── Card ─────────────────────────────────────────────────────────────────────
function BlogCard({ blog, index, isFeatured = false }) {
  const { theme } = useTheme();
  const isDark = theme === "dark";
  const [open, setOpen] = useState(false);
  const hasImage = !!blog.image;
  // Only apply featured layout if the blog actually has an image
  const isActuallyFeatured = isFeatured && hasImage;

  return (
    <>
      <motion.article
        onClick={() => setOpen(true)}
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: index * 0.08 }}
        whileHover={{ y: -6 }}
        className={`group relative flex cursor-pointer rounded-2xl overflow-hidden transition-shadow duration-500 ${
          isActuallyFeatured ? "flex-col md:flex-row md:col-span-2" : "flex-col"
        } ${
          isDark
            ? "bg-[#111111] border border-white/6 hover:border-primary/40 shadow-[0_4px_24px_rgba(0,0,0,0.5)] hover:shadow-[0_8px_40px_rgba(249,115,22,0.12)]"
            : "bg-white border border-slate-200/80 hover:border-primary/30 shadow-[0_2px_16px_rgba(0,0,0,0.06)] hover:shadow-[0_8px_40px_rgba(249,115,22,0.1)]"
        }`}
      >
        {/* Image */}
        {hasImage && (
          <div
            className={`relative overflow-hidden shrink-0 ${
              isActuallyFeatured
                ? "h-56 sm:h-72 md:h-auto md:w-[48%]"
                : "h-52 sm:h-56"
            }`}
          >
            <motion.img
              src={blog.image}
              alt={blog.title}
              className="w-full h-full object-cover"
              loading={index === 0 ? "eager" : "lazy"}
              decoding="async"
              whileHover={{ scale: 1.07 }}
              transition={{ duration: 0.6, ease: [0.23, 1, 0.32, 1] }}
            />
            {/* Overlay */}
            <div
              className={`absolute inset-0 ${
                isDark
                  ? "bg-gradient-to-t from-[#111111] via-[#111111]/40 to-transparent"
                  : "bg-gradient-to-t from-white/80 via-white/20 to-transparent"
              }`}
            />

            {/* Category pill */}
            {blog.category && (
              <div className="absolute top-4 left-4">
                <span
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-[11px] font-bold backdrop-blur-xl text-white"
                  style={{
                    background: "rgba(249,115,22,0.85)",
                    border: "1px solid rgba(255,255,255,0.2)",
                  }}
                >
                  <HiTag size={10} />
                  {blog.category}
                </span>
              </div>
            )}

            {/* Reading time */}
            {blog.read_time && (
              <div className="absolute top-4 right-4">
                <span
                  className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-[11px] font-semibold backdrop-blur-xl ${
                    isDark
                      ? "bg-black/70 text-gray-200 border border-white/10"
                      : "bg-white/90 text-slate-700 border border-black/10"
                  }`}
                >
                  <FiClock size={10} />
                  {blog.read_time}
                </span>
              </div>
            )}
          </div>
        )}

        {/* Body */}
        <div
          className={`flex flex-col flex-1 p-6 sm:p-7 ${
            isActuallyFeatured ? "justify-center" : ""
          }`}
        >
          {/* Date */}
          {blog.date && (
            <div
              className={`flex items-center gap-1.5 text-xs font-medium mb-3 ${
                isDark ? "text-gray-500" : "text-slate-400"
              }`}
            >
              <FiCalendar size={11} />
              <time dateTime={blog.date}>{formatDate(blog.date)}</time>
              {blog.author_role && (
                <>
                  <span className="mx-1">·</span>
                  <span>{blog.author_role}</span>
                </>
              )}
            </div>
          )}

          {/* Title */}
          <h3
            className={`font-bold leading-snug mb-3 transition-colors duration-300 group-hover:text-primary ${
              isActuallyFeatured
                ? "text-2xl sm:text-3xl md:text-4xl"
                : "text-xl sm:text-2xl"
            } ${isDark ? "text-white" : "text-slate-900"}`}
          >
            {blog.title}
          </h3>

          {/* Excerpt */}
          <p
            className={`text-sm sm:text-base leading-relaxed mb-5 flex-1 ${
              isDark ? "text-gray-400" : "text-slate-500"
            }`}
            style={{
              display: "-webkit-box",
              WebkitBoxOrient: "vertical",
              WebkitLineClamp: isActuallyFeatured ? 4 : 3,
              overflow: "hidden",
            }}
          >
            {blog.description}
          </p>

          {/* CTA */}
          <div className="flex items-center gap-2 mt-auto">
            <span
              className="inline-flex items-center gap-1.5 text-sm font-bold transition-all duration-200 group-hover:gap-2.5"
              style={{ color: "rgb(249,115,22)" }}
            >
              Read More
              <FiArrowUpRight
                size={16}
                className="transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </span>
          </div>
        </div>

        {/* Hover shine */}
        <motion.div
          className="absolute inset-0 pointer-events-none rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
          style={{
            background:
              "linear-gradient(135deg, rgba(249,115,22,0.05) 0%, transparent 60%)",
          }}
        />
      </motion.article>

      {/* Modal */}
      {open && (
        <BlogModal blog={blog} isDark={isDark} onClose={() => setOpen(false)} />
      )}
    </>
  );
}

export default BlogCard;

// ─── Skeleton ─────────────────────────────────────────────────────────────────
export function BlogCardSkeleton({ isFeatured = false }) {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  return (
    <div
      className={`rounded-2xl overflow-hidden animate-pulse flex ${
        isFeatured ? "flex-col md:flex-row md:col-span-2" : "flex-col"
      } ${
        isDark
          ? "bg-[#111111] border border-white/5"
          : "bg-white border border-slate-200"
      }`}
    >
      <div
        className={`shrink-0 ${
          isFeatured ? "h-56 md:h-auto md:w-[48%]" : "h-52"
        } ${isDark ? "bg-white/5" : "bg-slate-100"}`}
      />
      <div className="p-6 sm:p-7 flex-1">
        <div
          className={`w-24 h-3 rounded-full mb-4 ${isDark ? "bg-white/8" : "bg-slate-200"}`}
        />
        <div
          className={`w-full h-6 rounded-lg mb-2 ${isDark ? "bg-white/10" : "bg-slate-200"}`}
        />
        <div
          className={`w-3/4 h-6 rounded-lg mb-5 ${isDark ? "bg-white/8" : "bg-slate-200"}`}
        />
        <div className="space-y-2 mb-5">
          {[1, 2, 3].map((i) => (
            <div
              key={i}
              className={`h-4 rounded ${i === 3 ? "w-2/3" : "w-full"} ${
                isDark ? "bg-white/5" : "bg-slate-100"
              }`}
            />
          ))}
        </div>
        <div
          className={`w-24 h-4 rounded ${isDark ? "bg-white/8" : "bg-slate-200"}`}
        />
      </div>
    </div>
  );
}
