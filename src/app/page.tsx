import { MarqueeBanner } from "@/components/MarqueeBanner";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Policies } from "@/components/Policies";
import { VoterIDGenerator } from "@/components/VoterIDGenerator";
import { Cabinet } from "@/components/Cabinet";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-white font-sans selection:bg-brand-pink selection:text-white relative">
      <MarqueeBanner />
      <Navbar />
      <Hero />
      <Policies />
      <VoterIDGenerator />
      <Cabinet />
      <Footer />
    </main>
  );
}
