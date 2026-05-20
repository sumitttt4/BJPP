"use client";

import { motion } from "framer-motion";

export function MarqueeBanner() {
  const text = " • BADDIE JANTA PARTY • VOTE HOT • SLAY POLICIES ONLY • SITUATIONSHIP MUKT BHARAT • ANXIETY FREE SAMAJ • POWER TO THE PEOPLE • F*CK THE PATRIARCHY";
  
  return (
    <div className="w-full bg-brand-pink text-white overflow-hidden whitespace-nowrap py-3 sm:py-3.5 flex border-b border-brand-pink-border sticky top-0 z-50">
      <motion.div
        className="font-sans font-black text-sm tracking-widest uppercase inline-block"
        animate={{ x: [0, "-50%"] }}
        transition={{
          repeat: Infinity,
          ease: "linear",
          duration: 30,
        }}
      >
        <span>{text}{text}{text}{text}</span>
      </motion.div>
    </div>
  );
}
