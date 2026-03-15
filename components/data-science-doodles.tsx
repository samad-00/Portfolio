"use client"

import { motion, useReducedMotion } from "framer-motion"

export function DataScienceDoodles() {
  const shouldReduceMotion = useReducedMotion()

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden hidden md:block" aria-hidden>
      <motion.svg
        viewBox="0 0 1200 800"
        className="absolute -top-12 -left-10 w-[70vw] max-w-[900px] text-primary/10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2 }}
      >
        <motion.path
          d="M50 140 L220 80 L360 170 L540 120 L710 210"
          fill="none"
          stroke="currentColor"
          strokeWidth="3"
          strokeLinecap="round"
          animate={{ pathLength: shouldReduceMotion ? 1 : [0.25, 1, 0.85] }}
          transition={{ duration: 9, repeat: shouldReduceMotion ? 0 : Infinity, ease: "easeInOut" }}
        />
        {[50, 220, 360, 540, 710].map((x, index) => (
          <circle key={x} cx={x} cy={[140, 80, 170, 120, 210][index]} r="7" fill="currentColor" />
        ))}
        <rect x="120" y="320" width="22" height="120" rx="4" fill="currentColor" opacity="0.5" />
        <rect x="155" y="280" width="22" height="160" rx="4" fill="currentColor" opacity="0.65" />
        <rect x="190" y="355" width="22" height="85" rx="4" fill="currentColor" opacity="0.4" />
        <rect x="225" y="250" width="22" height="190" rx="4" fill="currentColor" opacity="0.75" />
      </motion.svg>

      <motion.svg
        viewBox="0 0 900 700"
        className="absolute right-[-8rem] top-[24%] w-[45vw] max-w-[620px] text-accent/10"
        animate={shouldReduceMotion ? undefined : { y: [0, -8, 0], rotate: [0, 0.8, 0] }}
        transition={shouldReduceMotion ? undefined : { duration: 10, repeat: Infinity, ease: "easeInOut" }}
      >
        <path
          d="M120 120 L260 210 L410 130 L550 250 L700 200"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeDasharray="9 10"
        />
        <circle cx="120" cy="120" r="9" fill="currentColor" />
        <circle cx="260" cy="210" r="7" fill="currentColor" />
        <circle cx="410" cy="130" r="8" fill="currentColor" />
        <circle cx="550" cy="250" r="7" fill="currentColor" />
        <circle cx="700" cy="200" r="9" fill="currentColor" />
        <rect x="445" y="360" width="210" height="150" rx="14" fill="none" stroke="currentColor" strokeWidth="2" />
        <path d="M480 470 L530 430 L575 452 L620 395" fill="none" stroke="currentColor" strokeWidth="2.5" />
      </motion.svg>

      <motion.div
        className="absolute left-[10%] bottom-[12%] w-56 h-56 rounded-full border border-primary/15"
        animate={shouldReduceMotion ? undefined : { scale: [1, 1.08, 1], opacity: [0.3, 0.45, 0.3] }}
        transition={shouldReduceMotion ? undefined : { duration: 7, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute right-[16%] bottom-[8%] w-36 h-36 rounded-full border border-accent/20"
        animate={shouldReduceMotion ? undefined : { scale: [1, 1.1, 1], opacity: [0.2, 0.35, 0.2] }}
        transition={shouldReduceMotion ? undefined : { duration: 6.5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
      />

      <motion.div
        className="absolute left-[42%] top-[16%] h-72 w-72 rounded-full bg-primary/10 blur-3xl"
        animate={
          shouldReduceMotion
            ? undefined
            : {
                x: [-24, 16, -24],
                y: [8, -10, 8],
                opacity: [0.22, 0.35, 0.22],
              }
        }
        transition={shouldReduceMotion ? undefined : { duration: 14, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute right-[22%] top-[58%] h-64 w-64 rounded-full bg-accent/10 blur-3xl"
        animate={
          shouldReduceMotion
            ? undefined
            : {
                x: [14, -20, 14],
                y: [-10, 14, -10],
                opacity: [0.15, 0.28, 0.15],
              }
        }
        transition={shouldReduceMotion ? undefined : { duration: 16, repeat: Infinity, ease: "easeInOut", delay: 1.2 }}
      />

      <motion.div
        className="absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage:
            "linear-gradient(115deg, transparent 20%, rgba(90, 220, 200, 0.6) 50%, transparent 80%)",
          backgroundSize: "220% 100%",
        }}
        animate={shouldReduceMotion ? undefined : { backgroundPosition: ["0% 0%", "100% 0%"] }}
        transition={shouldReduceMotion ? undefined : { duration: 11, repeat: Infinity, ease: "linear" }}
      />
    </div>
  )
}
