"use client";

import { motion } from "framer-motion";

export function Footer() {
  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="w-full bg-white py-24 px-6 lg:px-12 relative overflow-hidden border-t border-brand-pink-border">
      
      {/* Decorative large text background */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full text-center pointer-events-none opacity-[0.02] flex flex-col select-none">
        <span className="font-sans text-[12vw] font-black leading-none whitespace-nowrap tracking-tighter">VOTE HOT</span>
        <span className="font-sans text-[12vw] font-black leading-none whitespace-nowrap tracking-tighter">VOTE HOT</span>
      </div>

      <div className="max-w-4xl mx-auto relative z-10 text-center">
        <h2 className="font-sans text-4xl sm:text-5xl font-black text-brand-black uppercase tracking-tighter mb-5">
          READY TO MAKE HISTORY?
        </h2>
        
        <p className="font-sans text-sm sm:text-base text-brand-muted max-w-2xl mx-auto leading-relaxed mb-8 sm:mb-10">
          Create your Baddie Voter ID, claim a ministry, and join the most unserious pink movement on the internet.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-5">
          <motion.button
            whileHover={{ scale: 1.01 }}
            onClick={() => scrollToSection("generator")}
            className="w-full sm:w-auto px-8 py-4 bg-brand-black text-white hover:bg-brand-pink transition-colors duration-300 font-sans font-bold text-sm uppercase tracking-widest rounded-xl sm:rounded-full min-w-[220px]"
          >
            Create Voter Card
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.01 }}
            onClick={() => scrollToSection("cabinet")}
            className="w-full sm:w-auto px-8 py-4 bg-white text-brand-black border border-brand-pink hover:bg-brand-pink-soft transition-colors duration-300 font-sans font-bold text-sm uppercase tracking-widest rounded-xl sm:rounded-full min-w-[220px]"
          >
            Join Cabinet
          </motion.button>
        </div>

        <p className="font-sans text-[11px] sm:text-xs text-brand-muted max-w-xl mx-auto leading-relaxed mt-5 sm:mt-6">
          No signup. No email. No data collection. Everything stays on your device.
        </p>

        <div className="mt-20 pt-8 border-t border-brand-pink-border flex flex-col md:flex-row justify-between items-center gap-6 text-center md:text-left">
          <div className="space-y-2">
            <p className="font-sans text-[10px] font-black tracking-widest text-brand-black uppercase">
              © 2026 Baddie Janta Party
            </p>
            <p className="font-sans text-[10px] font-medium tracking-wider text-brand-muted uppercase">
              Parody project. Not a real political party.
            </p>
          </div>
          <div className="flex gap-6">
            <a 
              href="https://x.com/ohsumitanyways"
              target="_blank"
              rel="noreferrer"
              className="font-sans text-[10px] font-black tracking-widest text-brand-muted hover:text-brand-pink uppercase transition-colors"
            >
              Twitter
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
