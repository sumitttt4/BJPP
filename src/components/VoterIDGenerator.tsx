"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { VoterCard } from "./VoterCard";

export function VoterIDGenerator() {
  const [name, setName] = useState("");

  const rankOptions = ["CITIZEN", "PLATINUM MEMBER", "MINISTER", "VIBE CHECKER"];
  const statusOptions = ["CERTIFIED BADDIE", "UNTOUCHABLE", "MAIN CHARACTER", "SLAYING"];
  const constituencyOptions = ["NORTH SLAY DISTRICT", "DOWNTOWN AESTHETICS", "SOUTH VIBE WARD"];

  // Pseudo-random but deterministic based on name length
  const nameVal = name.length > 0 ? name.trim() : "UNTITLED BADDIE";
  const index = name.length > 0 ? name.length : 0;
  
  const rank = rankOptions[index % rankOptions.length];
  const status = statusOptions[(index * 2) % statusOptions.length];
  const constituency = constituencyOptions[(index * 3) % constituencyOptions.length];
  const idNum = name.length > 0 ? `NO. ${Math.abs(name.split('').reduce((a, b) => { a = ((a << 5) - a) + b.charCodeAt(0); return a & a }, 0)).toString().slice(0, 7).padStart(7, '0')}` : "NO. 8008135";

  return (
    <section id="generator" className="w-full bg-white py-24 px-6 lg:px-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        
        {/* Left: Input Form */}
        <div className="order-2 lg:order-1 flex flex-col space-y-8">
          <div className="space-y-4">
            <h2 className="font-sans text-4xl sm:text-5xl font-black text-brand-black uppercase tracking-tighter">
              Create Your<br />Baddie Voter ID
            </h2>
            <p className="font-sans text-lg mt-4 text-brand-muted font-medium tracking-tight max-w-md">
              Enter your name to generate your official Baddie Janta Party identification. Screenshot and share on the timeline.
            </p>
          </div>

          <div className="space-y-6 max-w-md">
            <div className="space-y-2">
              <label htmlFor="baddieName" className="font-sans text-xs font-bold text-brand-black uppercase tracking-widest block">
                Full Legal Slay Name
              </label>
              <input
                id="baddieName"
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="e.g. Riya Sharma"
                maxLength={20}
                className="w-full bg-white border border-brand-pink-border px-6 py-5 font-sans font-bold text-sm tracking-widest uppercase text-brand-black placeholder:text-zinc-300 focus:outline-none focus:border-brand-pink focus:ring-1 focus:ring-brand-pink rounded-xl transition-all"
              />
            </div>

            <motion.button 
              whileHover={{ scale: 1.02 }}
              className="w-full px-8 py-5 bg-brand-black text-white hover:bg-brand-pink transition-colors duration-300 font-sans font-bold text-sm uppercase tracking-widest rounded-xl"
              onClick={() => {
                if(!name) setName("Random Baddie " + Math.floor(Math.random() * 100));
              }}
            >
              Generate Card
            </motion.button>
            <p className="text-center font-sans text-xs text-brand-muted font-medium mt-4">
              No signup. No data saved. Your card is created only on your device.
            </p>
          </div>
        </div>

        {/* Right: Live Preview */}
        <div className="order-1 lg:order-2 flex justify-center items-center relative w-full">
           <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-lg h-[130%] bg-brand-pink/20 blur-[80px] rounded-full z-0 pointer-events-none" />
           <div className="relative z-10 w-full max-w-[450px] scale-105 sm:scale-110 lg:scale-110 transform origin-center">
             <VoterCard 
                name={nameVal} 
                rank={rank}
                status={status}
                constituency={constituency}
                id={idNum}
                interactive={false} 
             />
           </div>
        </div>

      </div>
    </section>
  );
}