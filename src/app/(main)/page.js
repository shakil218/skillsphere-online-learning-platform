import Gallery from "@/components/home/Gallery";
import Hero from "@/components/home/Hero";
import HowItWorks from "@/components/home/HowItWorks";
import LabWorks from "@/components/home/LabWorks";
import LearnSection from "@/components/home/LearnSection";
import LevelsSection from "@/components/home/LevelsSection";
import WhatYouGetSection from "@/components/home/WhatYouGetSection";

export default function Home() {
  return (
    <div className="px-5 md:px-0 space-y-16">
      <Hero />
      <Gallery />
      <LearnSection />
      <HowItWorks />
      <WhatYouGetSection />
      <LabWorks />
      <LevelsSection />
      <div>hello something test</div>
    </div>
  );
}
