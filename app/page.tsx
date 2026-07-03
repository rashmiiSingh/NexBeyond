import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import WhyNexBeyond from "@/components/WhyNexBeyond";
import ProblemSection from "@/components/ProblemSection";
import LearningJourney from "@/components/LearningJourney";
import CommunityFeatures from "@/components/CommunityFeatures";
import WeeklySchedule from "@/components/WeeklySchedule";
import Ecosystem from "@/components/Ecosystem";
import WhyJoin from "@/components/WhyJoin";
import Founder from "@/components/Founder";
import Roadmap from "@/components/Roadmap";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import Newsletter from "@/components/Newsletter";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-background relative overflow-hidden">
      {/* Dynamic Ambient Background Gradients */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-[1400px] h-[800px] bg-gradient-orb pointer-events-none z-0" />
      <div className="absolute top-[2000px] right-0 w-[400px] h-[400px] bg-purple-900/10 rounded-full blur-[120px] pointer-events-none z-0" />
      <div className="absolute top-[4000px] left-0 w-[500px] h-[500px] bg-gold/5 rounded-full blur-[150px] pointer-events-none z-0" />
      
      <div className="relative z-10 flex flex-col min-h-screen">
        <Navbar />
        <Hero />
        <WhyNexBeyond />
        <ProblemSection />
        <LearningJourney />
        <CommunityFeatures />
        <WeeklySchedule />
        <Ecosystem />
        <WhyJoin />
        <Founder />
        <Roadmap />
        <Testimonials />
        <FAQ />
        <Newsletter />
        <Footer />
      </div>
    </main>
  );
}
