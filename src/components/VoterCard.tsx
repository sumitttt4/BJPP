"use client";

import { motion, useMotionValue, useTransform } from "framer-motion";

interface VoterCardProps {
  name?: string;
  constituency?: string;
  rank?: string;
  status?: string;
  id?: string;
  interactive?: boolean;
}

export function VoterCard({
  name = "UNTITLED BADDIE",
  constituency = "NORTH SLAY DISTRICT",
  rank = "CITIZEN",
  status = "CERTIFIED BADDIE",
  id = "NO. 8008135",
  interactive = true,
}: VoterCardProps) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const rotateX = useTransform(y, [-100, 100], [15, -15]);
  const rotateY = useTransform(x, [-100, 100], [-15, 15]);

  function handleMouseMove(event: React.MouseEvent<HTMLDivElement>) {
    if (!interactive) return;
    const rect = event.currentTarget.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    x.set(event.clientX - centerX);
    y.set(event.clientY - centerY);
  }

  function handleMouseLeave() {
    if (!interactive) return;
    x.set(0);
    y.set(0);
  }

  return (
    <div className="perspective-1000 w-full max-w-md mx-auto group">
      <motion.div
        style={interactive ? { rotateX, rotateY, transformStyle: "preserve-3d" } : {}}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        className="relative w-full aspect-[1.6/1] bg-gradient-to-br from-brand-pink-soft to-white border border-brand-black p-6 rounded-2xl shadow-xl flex flex-col justify-between overflow-hidden"
      >
        <div style={{ transform: interactive ? "translateZ(30px)" : "none" }} className="relative z-10">
          <div className="flex justify-between items-start">
            <h3 className="font-sans font-black text-2xl sm:text-3xl uppercase tracking-tighter text-brand-black">Vote Hot</h3>
            <span className="bg-brand-pink text-white font-bold text-[10px] px-2 py-1 rounded-full uppercase">Official ID</span>
          </div>
          <p className="font-sans font-bold text-brand-pink mt-1 tracking-widest text-[10px] sm:text-xs uppercase">Baddie Janta Party</p>
        </div>
        
        {/* Glossy highlight line */}
        <div className="absolute top-0 left-0 w-full h-[50%] bg-gradient-to-b from-white/60 to-transparent pointer-events-none rounded-t-2xl z-0" />

        <div style={{ transform: interactive ? "translateZ(40px)" : "none" }} className="relative z-10 flex justify-between items-end mt-4">
          <div className="flex gap-4 items-end">
            <div className="w-16 h-16 sm:w-20 sm:h-20 bg-brand-black rounded-full border-2 border-brand-pink overflow-hidden shadow-[0_0_15px_rgba(255,0,122,0.4)] flex-shrink-0">
              <div className="w-full h-full bg-brand-pink/20 animate-pulse" />
            </div>
            <div className="flex flex-col">
              <p className="font-sans font-black text-sm sm:text-base uppercase text-brand-black tracking-tight leading-tight line-clamp-1">{name}</p>
              <p className="font-sans text-[10px] uppercase text-brand-muted font-bold tracking-widest">{constituency}</p>
              <p className="font-sans text-[10px] uppercase text-brand-pink font-bold mt-1 tracking-widest">{rank}</p>
            </div>
          </div>
          <div className="text-right flex-shrink-0 ml-2 hidden sm:block">
            <p className="font-sans font-black text-xs uppercase text-brand-black tracking-tight bg-white/50 px-2 py-1 rounded-md backdrop-blur-sm shadow-sm">{status}</p>
            <p className="font-mono font-bold text-[10px] text-brand-muted/70 mt-1">{id}</p>
          </div>
        </div>
        
        <div className="relative z-10 flex justify-between items-center sm:hidden mt-4 pt-4 border-t border-brand-pink-border/50">
           <p className="font-sans font-black text-[10px] uppercase text-brand-black tracking-tight bg-white/80 px-2 py-1 rounded-md backdrop-blur-sm shadow-sm">{status}</p>
           <p className="font-mono font-bold text-[10px] text-brand-muted/70">{id}</p>
        </div>

      </motion.div>
    </div>
  );
}
