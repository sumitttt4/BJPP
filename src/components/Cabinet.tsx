"use client";

import { useEffect, useMemo, useState, type FormEvent } from "react";
import { motion } from "framer-motion";

const MINISTRIES = [
  { role: "Minister of Aesthetics", dept: "Fit Checks & Posture Control" },
  { role: "Chief Vibes Officer", dept: "Energy Matching & Vibe Checks" },
  { role: "Sec. of Situationship Affairs", dept: "Mixed Signal Clearance" },
  { role: "Minister of Anti Toxicity", dept: "Red Flag Detection" },
  { role: "Minister of Glow Up Affairs", dept: "Emergency Glow Up Funds" },
  { role: "Minister of Screenshot Evidence", dept: "Receipt Verification" },
  { role: "Min. of Late Reply Investigations", dept: "Timestamp Auditing" },
  { role: "Minister of Public Slay", dept: "Main Character Energy" },
  { role: "Minister of Aesthetic Pinterest Boards", dept: "Vision Board Curation" },
  { role: "Chief Gaslighting Examiner", dept: "Reality Distortion Fields" },
  { role: "Min. of Block & Delete Operations", dept: "Digital Cleansing" },
  { role: "Minister of Delusion", dept: "Unrealistic Expectations" },
  { role: "Chief Stalking Specialist", dept: "Private Intelligence (Finsta Dept)" },
  { role: "Minister of 'I told you so'", dept: "Hindsight Validation" },
  { role: "Secretary of Outfits & OOTDs", dept: "Wardrobe Coordination" },
  { role: "Min. of Ex-Boyfriend Relations", dept: "No-Contact Enforcement" },
  { role: "Minister of Cancel Culture", dept: "Apology Video Auditing" },
  { role: "Sec. of Instagram Captions", dept: "Witty Typography" },
  { role: "Minister of Brunch Affairs", dept: "Bottomless Mimosas" },
  { role: "Chief Overthinking Director", dept: "Late Night Scenarios" },
  { role: "Min. of Soft Launching", dept: "Strategic Emoji Placement" },
  { role: "Minister of Skincare Propaganda", dept: "Glass Skin Agenda" },
  { role: "Sec. of Iced Coffee Logistics", dept: "Caffeinated Dependency" },
  { role: "Minister of Astrological Placements", dept: "Co-Star Analysis" },
  { role: "Chief Toxic Trait Auditor", dept: "Self-Awareness Division" },
  { role: "Min. of Passive Aggression", dept: "'No worries if not'" },
  { role: "Minister of Y2K Revival", dept: "Low Rise Jeans Committee" },
  { role: "Secretary of Side Eyes", dept: "Subtle Disapproval" },
  { role: "Minister of Boy Math & Girl Math", dept: "Financial Delusion" },
  { role: "Chief Sarcasm Protocol", dept: "Tone Indicator Removal" },
  { role: "Min. of Ranting & Venting", dept: "Emotional Dumping" },
  { role: "Minister of Sleep Deprivation", dept: "3 AM Doomscrolling" },
  { role: "Chief Procrastination Officer", dept: "'I'll do it tomorrow'" },
  { role: "Minister of Main Character Syndrome", dept: "Plot Armor" },
  { role: "Sec. of Gossip & Tea Spilling", dept: "Confidential Briefings" },
  { role: "Minister of Hater Blockers", dept: "Peace Protection" },
  { role: "Min. of Unsolicited Advice", dept: "Therapy Speak" },
  { role: "Chief Bestie Defense Coordinator", dept: "Ride or Die Ops" },
  { role: "Sec. of Apologizing for Being Late", dept: "Time Blindness" },
  { role: "Minister of 'I have nothing to wear'", dept: "Closet Crises" },
  { role: "Min. of Makeup Hacks & Baking", dept: "Contour Strategies" },
  { role: "Chief TikTok Dance Instructor", dept: "FYP Dominance" },
  { role: "Sec. of Playlist Curation", dept: "Auxiliary Chord Control" },
  { role: "Minister of Drunk Texting Prevention", dept: "Phone Confiscation" },
  { role: "Min. of Leaving People on Delivered", dept: "Seen Notifications" },
  { role: "Chief of Niche Internet Micro-Celebs", dept: "Viral Fame" },
  { role: "Minister of Doing It For The Plot", dept: "Questionable Choices" },
  { role: "Sec. of 'We should totally hang out'", dept: "Empty Promises" },
  { role: "Min. of Buying Things I Don't Need", dept: "Retail Therapy" },
  { role: "Chief Red Flag Decorator", dept: "Rose Colored Glasses" },
  { role: "Minister of Being So Real", dept: "Unfiltered Opinions" },
  { role: "Sec. of Pookie & Ray of Sunshine", dept: "Endearment Verification" },
];

interface CabinetMember {
  id: string;
  name: string;
  role: string;
  dept: string;
  timestamp: number;
}

export function Cabinet() {
  const [name, setName] = useState("");
  const [selectedRole, setSelectedRole] = useState(MINISTRIES[0].role);
  const [members, setMembers] = useState<CabinetMember[]>([]);
  const [isReady, setIsReady] = useState(false);
  const [isGenerating, setIsGenerating] = useState(false);

  const selectedMinistry = useMemo(
    () => MINISTRIES.find((m) => m.role === selectedRole) || MINISTRIES[0],
    [selectedRole],
  );

  useEffect(() => {
    const frame = requestAnimationFrame(() => {
      const saved = localStorage.getItem("baddie-cabinet");

      if (saved) {
        try {
          setMembers(JSON.parse(saved));
        } catch {
          localStorage.removeItem("baddie-cabinet");
        }
      }

      setIsReady(true);
    });

    return () => cancelAnimationFrame(frame);
  }, []);

  useEffect(() => {
    if (isReady) {
      localStorage.setItem("baddie-cabinet", JSON.stringify(members));
    }
  }, [members, isReady]);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!name.trim() || isGenerating) return;

    setIsGenerating(true);

    const newMember: CabinetMember = {
      id: `BJP-${Math.floor(Math.random() * 9000) + 1000}`,
      name: name.trim(),
      role: selectedMinistry.role,
      dept: selectedMinistry.dept,
      timestamp: Date.now(),
    };

    setMembers((current) => [newMember, ...current].slice(0, 12));
    setName("");
    setIsGenerating(false);
  };

  if (!isReady) return null;

  return (
    <section id="cabinet" className="w-full bg-white py-24 px-0 border-t border-brand-pink-border flex flex-col items-center overflow-hidden">
      <div className="max-w-7xl w-full mx-auto px-6 lg:px-12">
        <div className="text-center mb-10 md:mb-16 max-w-2xl mx-auto">
          <h2 className="font-sans text-4xl sm:text-5xl font-black text-brand-black uppercase tracking-tighter">
            Join the Cabinet
          </h2>
          <p className="font-sans text-brand-muted text-base sm:text-lg mt-4 font-medium tracking-tight">
            Pick your ministry. Claim your seat. Serve the pink agenda.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="max-w-xl mx-auto bg-brand-pink-soft border border-brand-pink-border rounded-2xl p-6 sm:p-8 mb-20 w-full shadow-sm">
          <div className="space-y-6">
            <div className="space-y-2">
              <label htmlFor="cabName" className="font-sans text-xs font-bold text-brand-black uppercase tracking-widest block">
                Your Name
              </label>
              <input
                id="cabName"
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Enter your name"
                maxLength={20}
                required
                className="w-full bg-white border border-brand-pink-border px-6 py-4 font-sans font-bold text-sm tracking-wide text-brand-black placeholder:text-zinc-400 focus:outline-none focus:border-brand-pink focus:ring-1 focus:ring-brand-pink rounded-xl transition-all"
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="cabRole" className="font-sans text-xs font-bold text-brand-black uppercase tracking-widest block">
                Select Ministry (50+ Available)
              </label>
              <div className="relative">
                <select
                  id="cabRole"
                  value={selectedRole}
                  onChange={(e) => setSelectedRole(e.target.value)}
                  className="w-full bg-white border border-brand-pink-border px-6 py-4 pr-10 font-sans font-bold text-sm tracking-wide text-brand-black focus:outline-none focus:border-brand-pink focus:ring-1 focus:ring-brand-pink rounded-xl transition-all appearance-none outline-none"
                >
                  {MINISTRIES.map((m) => (
                    <option key={m.role} value={m.role}>{m.role}</option>
                  ))}
                </select>
                <div className="absolute inset-y-0 right-4 flex items-center pointer-events-none text-brand-black">
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M2.5 4.5L6 8L9.5 4.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
              </div>
            </div>

            <motion.button
              whileHover={{ scale: isGenerating ? 1 : 1.02 }}
              type="submit"
              disabled={isGenerating}
              className="w-full px-8 py-5 bg-brand-black text-white hover:bg-brand-pink disabled:bg-zinc-400 transition-colors duration-300 font-sans font-bold text-sm uppercase tracking-widest rounded-xl mt-4"
            >
              {isGenerating ? "Processing Identity..." : "Claim Seat"}
            </motion.button>
            <p className="text-center font-sans text-xs text-brand-muted font-medium mt-4">
              Saved only in your browser. We do not collect or store cabinet entries.
            </p>
          </div>
        </form>

        {members.length > 0 && (
          <div>
            <div className="mb-8 text-center lg:text-left">
              <h3 className="font-sans text-2xl font-black text-brand-black uppercase tracking-tighter">
                Recent Appointments on This Device
              </h3>
              <p className="font-sans text-brand-pink text-xs font-bold uppercase tracking-widest mt-1">
                Your latest claimed seats are saved on this device.
              </p>
            </div>

            <div className="flex overflow-x-auto snap-x snap-mandatory hide-scrollbar pb-8 -mx-6 px-6 lg:mx-0 lg:px-0 lg:grid lg:grid-cols-3 gap-6">
              {members.map((member) => (
                <motion.div
                  key={member.id + member.timestamp}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="snap-center shrink-0 w-[300px] lg:w-auto bg-white border border-brand-pink-border rounded-2xl p-6 flex flex-col justify-between hover:shadow-[0_10px_30px_-10px_rgba(255,0,122,0.15)] transition-all group text-left relative overflow-hidden"
                >
                  <div className="absolute -right-4 -top-4 w-16 h-16 bg-brand-pink/10 rounded-full blur-xl group-hover:bg-brand-pink/20 transition-colors pointer-events-none" />

                  <div>
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-14 h-14 rounded-full bg-brand-pink-soft border border-brand-pink-border flex flex-col items-center justify-center shrink-0">
                        <span className="font-black text-brand-pink text-xl">{member.name.charAt(0).toUpperCase()}</span>
                      </div>
                      <div>
                        <h4 className="font-sans text-xl font-black text-brand-black tracking-tighter leading-tight relative z-10 break-words">
                          {member.name}
                        </h4>
                        <span className="font-mono text-[10px] font-bold text-zinc-400">ID: {member.id}</span>
                      </div>
                    </div>

                    <p className="font-sans text-brand-pink text-[11px] font-bold uppercase tracking-widest mb-4 line-clamp-1">
                      {member.role}
                    </p>

                    <p className="font-sans text-sm text-brand-muted font-medium mb-6 leading-snug h-10 line-clamp-2">
                      <span className="text-zinc-900 block font-bold text-[10px] uppercase tracking-widest mb-1">Department:</span>
                      {member.dept}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-brand-pink-border flex justify-between items-end">
                    <div className="inline-flex items-center gap-1.5 bg-brand-pink-soft px-2 py-1 rounded text-brand-pink mb-1 border border-brand-pink-border/50">
                      <div className="w-1.5 h-1.5 rounded-full bg-brand-pink animate-pulse" />
                      <span className="font-sans text-[8px] font-black uppercase tracking-widest">Recently Appointed</span>
                    </div>
                  </div>

                  <div className="absolute top-6 right-6 w-5 h-5 bg-brand-pink text-white rounded-full flex items-center justify-center font-serif text-[10px] font-bold shadow-md shadow-brand-pink/30">
                    B
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
