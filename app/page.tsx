import Hero from "@/components/Hero";
import About from "@/components/About";
import Features from "@/components/Features";
import Events from "@/components/Events";
import Resources from "@/components/Resources";
import SuccessStories from "@/components/SuccessStories";

export default function Home() {
  return (
    <main className="min-h-screen bg-neutral-light">
      <Hero />
      <About />
      <Features />
      <Events />
      <Resources />
      <SuccessStories />
    </main>
  );
}
