"use client";

import { motion } from "framer-motion";
import { VoterCard } from "./VoterCard";

export function Hero() {
  return (
    <section className="relative w-full min-h-[85vh] sm:min-h-[90vh] flex flex-col items-center justify-center px-6 lg:px-12 pt-8 pb-20 sm:py-12 lg:py-20 overflow-hidden bg-white">
      
      <div className="relative z-10 max-w-7xl mx-auto w-full flex flex-col lg:grid lg:grid-cols-2 gap-12 sm:gap-16 items-center">
        
        {/* Left: Copy */}
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex flex-col space-y-6 sm:space-y-8 text-center lg:text-left pt-2 sm:pt-10 lg:pt-0 order-2 lg:order-1"
        >
          <div className="space-y-4">
            <span className="font-sans font-bold tracking-widest text-brand-pink uppercase text-xs sm:text-sm mb-2 sm:mb-4 block">Baddie Janta Party</span>
            <h1 className="font-sans text-5xl sm:text-7xl lg:text-[5.5rem] font-black leading-[1.05] tracking-tighter text-brand-black uppercase">
              Of the Baddies,<br/>
              For the Baddies,<br/>
              By the Baddies.
            </h1>
            <p className="font-sans text-base sm:text-xl font-medium text-brand-muted max-w-xl mx-auto lg:mx-0 mt-4 sm:mt-6">
              A national movement for glow ups, clarity, confidence, and slay policies only.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 w-full">
            <motion.button 
              whileHover={{ scale: 1.02 }}
              onClick={() => document.getElementById("generator")?.scrollIntoView({ behavior: "smooth" })}
              className="w-full sm:w-auto px-8 py-5 sm:py-4 bg-brand-black text-white hover:bg-brand-pink transition-colors duration-300 font-sans font-bold text-sm uppercase tracking-wider rounded-xl sm:rounded-full min-w-[200px] min-h-14"
            >
              Claim Voter Card
            </motion.button>
            <motion.button 
              whileHover={{ scale: 1.02 }}
              onClick={() => document.getElementById("manifesto")?.scrollIntoView({ behavior: "smooth" })}
              className="w-full sm:w-auto px-8 py-5 sm:py-4 bg-white text-brand-black border border-brand-pink hover:bg-brand-pink-soft transition-colors duration-300 font-sans font-bold text-sm uppercase tracking-wider rounded-xl sm:rounded-full min-w-[200px] min-h-14"
            >
              Read Manifesto
            </motion.button>
          </div>
        </motion.div>

        {/* Right: Visual */}
        <motion.div
           initial={{ opacity: 0, scale: 0.8 }}
           animate={{ opacity: 1, scale: 1 }}
           transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
           className="relative flex items-center justify-center w-full mt-2 sm:mt-8 lg:mt-0 order-1 lg:order-2"
        >
          {/* Subtle glow behind card */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-lg h-[130%] bg-brand-pink/20 blur-[80px] rounded-full z-0 pointer-events-none" />
          <div className="relative z-10 w-full max-w-[340px] sm:max-w-[450px] scale-100 sm:scale-100 lg:scale-[1.1] transform origin-center">
            <VoterCard />
          </div>
        </motion.div>

      </div>
    </section>
  );
}
