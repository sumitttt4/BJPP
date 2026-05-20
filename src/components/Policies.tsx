"use client";

import { motion } from "framer-motion";

const policies = [
  {
    title: "Anxiety Free Samaj",
    description: "A national mission to reduce overthinking, fake scenarios, and 3 AM breakdowns.",
    className: "col-span-1 md:col-span-2",
  },
  {
    title: "Situationship Mukt Bharat",
    description: "Mandatory clarity within 48 hours. No more “let’s see where this goes” without legal consequences.",
    className: "col-span-1 md:col-span-1",
  },
  {
    title: "Har Ghar Baddie Dilao Yojana",
    description: "Every friend group deserves at least one certified baddie to raise the national aesthetic.",
    className: "col-span-1 md:col-span-1",
  },
  {
    title: "Late Reply Accountability Bill",
    description: "Anyone replying after 6 hours with “sorry just saw this” will be sent for vibe verification.",
    className: "col-span-1 md:col-span-2",
  },
  {
    title: "Screenshot Evidence Adhiniyam",
    description: "All suspicious chats, deleted messages, and weird replies are valid proof in the court of besties.",
    className: "col-span-1 md:col-span-2",
  },
  {
    title: "Red Flag Identification Mission",
    description: "Early detection of gym bros, finance bros, podcast men, and people who say “I am different.”",
    className: "col-span-1 md:col-span-1",
  },
  {
    title: "Main Character Allowance",
    description: "Monthly confidence support for citizens walking into rooms like the lighting was arranged for them.",
    className: "col-span-1 md:col-span-1",
  },
  {
    title: "Bestie Welfare Scheme",
    description: "Emergency funding for iced coffee, rant sessions, and “come outside I need to talk” situations.",
    className: "col-span-1 md:col-span-2",
  },
  {
    title: "Ghosting Prevention Act",
    description: "Disappearing without explanation will result in immediate public side eye.",
    className: "col-span-1 md:col-span-2",
  },
  {
    title: "Garmi Se Azadi Mission",
    description: "Free iced drinks and AC zones whenever the temperature crosses emotional damage levels.",
    className: "col-span-1 md:col-span-1",
  },
];

export function Policies() {
  return (
    <section id="manifesto" className="w-full bg-white py-24 px-6 lg:px-12 border-t border-brand-pink-border flex flex-col items-center">
      <div className="max-w-6xl w-full mx-auto">
        
        <div className="mb-16 md:flex md:flex-col md:items-center text-center">
          <h2 className="font-sans text-4xl sm:text-5xl font-black text-brand-black uppercase tracking-tighter">
            The Pink Manifesto
          </h2>
          <p className="font-sans text-lg mt-4 text-brand-muted font-medium tracking-tight max-w-2xl">
            Official promises for a more dramatic, emotionally stable, fully slayed nation.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-fr">
          {policies.map((policy, idx) => (
            <motion.div
              key={idx}
              whileHover={{ 
                y: -4,
                boxShadow: "0px 15px 40px -10px rgba(255, 0, 122, 0.15)",
                borderColor: "#FF007A"
              }}
              className={`
                relative p-6 sm:p-8 border border-brand-pink-border rounded-xl flex flex-col justify-between transition-all duration-300 bg-white group
                ${policy.className}
              `}
            >
              <div className="mb-8 relative z-10">
                 <span className="inline-block px-3 py-1 bg-brand-pink text-white font-bold text-[10px] sm:text-xs rounded uppercase tracking-widest mb-4 shadow-sm">
                   PROMISE NO. {String(idx + 1).padStart(2, '0')}
                 </span>
                <h3 className="font-sans text-xl sm:text-2xl font-black mb-3 tracking-tighter text-brand-black leading-tight sm:leading-none">
                  {policy.title}
                </h3>
                <p className="font-sans tracking-tight text-sm sm:text-base font-medium leading-relaxed text-brand-muted">
                  {policy.description}
                </p>
              </div>
              
              {/* Fake Stamp */}
              <div className="absolute top-6 right-6 border-2 border-brand-pink text-brand-pink font-sans font-black text-[10px] uppercase tracking-widest px-2 py-1 rounded rotate-[12deg] opacity-60 group-hover:opacity-100 group-hover:rotate-[8deg] transition-all pointer-events-none select-none">
                PASSED
              </div>
              
              {/* Subtle hover background glow */}
              <div className="absolute right-0 bottom-0 w-32 h-32 bg-brand-pink/5 rounded-tl-full opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
