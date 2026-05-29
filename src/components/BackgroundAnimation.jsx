import { motion } from "framer-motion";
import { useTheme } from "../context/ThemeProvider";

// Helper — random number in range, evaluated once at module load (= once per page load)
const r = (min, max) => Math.random() * (max - min) + min;
const pick = (...arr) => arr[Math.floor(Math.random() * arr.length)];

// Soft blurred background blobs — random positions every reload
const bgBlobs = [
  { id: 1, color: "linear-gradient(to right, #3b82f6, #6366f1)", w: "80vw", h: "60vh", top: `${r(-20, 20)}%`, left: `${r(-30, 10)}%`, rotate: r(20, 50), duration: r(22, 30), delay: 0,       moveY: [0, r(60,100), 0],   moveX: [0, r(-70,-30), 0] },
  { id: 2, color: "linear-gradient(to right, #a855f7, #d946ef)", w: "70vw", h: "50vh", top: `${r(40, 70)}%`, left: `${r(30, 60)}%`, rotate: r(-40,-10), duration: r(28, 36), delay: r(1,3),   moveY: [0, r(-100,-60), 0], moveX: [0, r(40,80), 0] },
  { id: 3, color: "linear-gradient(to right, #22d3ee, #2dd4bf)", w: "60vw", h: "55vh", top: `${r(20, 50)}%`, left: `${r(50, 80)}%`, rotate: r(5,  25),  duration: r(18, 26), delay: r(3,6),   moveY: [0, r(30,70), 0],    moveX: [0, r(-60,-20), 0] },
];

// Wave ribbon configs — colour pairs to pick from
const palettes = [
  { color1: "#3b82f6", color2: "#8b5cf6" },
  { color1: "#ec4899", color2: "#f43f5e" },
  { color1: "#10b981", color2: "#06b6d4" },
  { color1: "#f59e0b", color2: "#ef4444" },
  { color1: "#8b5cf6", color2: "#d946ef" },
  { color1: "#38bdf8", color2: "#34d399" },
];

// Foreground wave ribbons — random starting position, angle & speed every reload
const fgWaves = Array.from({ length: 5 }, (_, i) => {
  const palette = palettes[i % palettes.length];
  const rotate = r(-50, 50);
  return {
    id: `w${i + 1}`,
    top:      `${r(-15, 90)}%`,
    left:     `${r(-35, 30)}%`,
    scale:    r(1.1, 1.6),
    rotate,
    duration: r(10, 20),
    delay:    r(0, 6),
    gradientId: `g${i + 1}`,
    color1:   palette.color1,
    color2:   palette.color2,
    opacity:  r(0.18, 0.38),
    driftY:   [0, r(30, 80), r(-80, -30), 0],
    driftX:   [0, r(60, 150), r(-150, -60), 0],
  };
});

export default function BackgroundAnimation() {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  return (
    <>
      {/* BACKGROUND LAYER — glowing blurred blobs */}
      <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
        {bgBlobs.map((blob) => (
          <motion.div
            key={blob.id}
            className={`absolute rounded-full blur-[100px] ${
              isDark ? "opacity-[0.12]" : "opacity-[0.2]"
            }`}
            style={{
              top: blob.top,
              left: blob.left,
              width: blob.w,
              height: blob.h,
              backgroundImage: blob.color,
              // GPU layer promotion — keeps animation off main thread
              willChange: "transform",
              transform: "translateZ(0)",
            }}
            animate={{
              y: blob.moveY,
              x: blob.moveX,
              rotate: [blob.rotate, blob.rotate + 10, blob.rotate],
            }}
            transition={{
              duration: blob.duration,
              repeat: Infinity,
              ease: "easeInOut",
              delay: blob.delay,
            }}
          />
        ))}
      </div>

      {/* FOREGROUND LAYER — floating ribbon waves */}
      <div className="fixed inset-0 z-[100] pointer-events-none overflow-hidden">
        {fgWaves.map((wave) => (
          <motion.svg
            key={wave.id}
            className="absolute w-[150vw] h-auto"
            style={{
              top: wave.top,
              left: wave.left,
              opacity: isDark ? wave.opacity : wave.opacity * 1.4,
              transformOrigin: "center center",
              color: wave.color1,
              filter: `drop-shadow(0 0 6px ${wave.color1}80)`,
              // GPU layer promotion
              willChange: "transform",
            }}
            initial={{ scale: wave.scale, rotate: wave.rotate }}
            animate={{
              y: wave.driftY,
              x: wave.driftX,
              rotate: [wave.rotate, wave.rotate + 6, wave.rotate - 6, wave.rotate],
            }}
            transition={{
              duration: wave.duration * 2,
              repeat: Infinity,
              ease: "easeInOut",
              delay: wave.delay,
            }}
            viewBox="0 0 2000 320"
            xmlns="http://www.w3.org/2000/svg"
          >
            <motion.path
              initial={{ pathLength: 0.2, pathOffset: 0 }}
              animate={{ pathOffset: [0, 1] }}
              transition={{
                duration: wave.duration,
                repeat: Infinity,
                ease: "linear",
                delay: wave.delay,
              }}
              fill="none"
              stroke={`url(#${wave.gradientId})`}
              strokeWidth="4"
              strokeLinecap="round"
              style={{ opacity: 0.65 }}
              d="M0,192 C150,100 250,280 400,192 C550,100 650,280 800,192 C950,100 1050,280 1200,192 C1350,100 1450,280 1600,192 C1750,100 1850,280 2000,192"
            />
            <defs>
              <linearGradient id={wave.gradientId} x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor={wave.color1} />
                <stop offset="100%" stopColor={wave.color2} />
              </linearGradient>
            </defs>
          </motion.svg>
        ))}
      </div>
    </>
  );
}
