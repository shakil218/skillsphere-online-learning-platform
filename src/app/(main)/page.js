import Gallery from "@/components/home/Gallery";
import Hero from "@/components/home/Hero";
import LearnSection from "@/components/home/LearnSection";

export default function Home() {
  return (
    <div className="px-5 md:px-0 space-y-16">
      <Hero />
      <Gallery />
      <LearnSection />
      <div>hello something test</div>
    </div>
  );
}
