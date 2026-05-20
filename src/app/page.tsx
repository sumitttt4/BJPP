import { MarqueeBanner } from "@/components/MarqueeBanner";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Policies } from "@/components/Policies";
import { VoterIDGenerator } from "@/components/VoterIDGenerator";
import { Cabinet } from "@/components/Cabinet";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-white font-sans selection:bg-brand-pink selection:text-white pb-24 sm:pb-0 relative">
      <MarqueeBanner />
      <Navbar />
      <Hero />
      <Policies />
      <VoterIDGenerator />
      <Cabinet />
      <Footer />
      
      {/* Mobile sticky bottom CTA */}
      <div className="fixed bottom-0 left-0 right-0 p-4 bg-white/80 backdrop-blur-md border-t border-brand-pink-border z-50 sm:hidden">
        <a 
          href="#generator"
          className="flex justify-center items-center w-full py-4 bg-brand-pink text-white font-sans font-bold text-sm uppercase tracking-widest rounded-xl shadow-lg shadow-brand-pink/20"
        >
          Claim Voter Card
        </a>
      </div>
    </main>
  );
}