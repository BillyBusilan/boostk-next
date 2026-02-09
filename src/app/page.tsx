import { Hero } from "@/components/Landing Page/Hero";
import { Barriers, Headquarters, Marquee } from "@/components/Landing Page/Features";
import { Pricing } from "@/components/Landing Page/Pricing";
import { Showcase } from "@/components/Landing Page/Showcase";
import { Steps } from "@/components/Landing Page/Steps";
import { Footer } from "@/components/Landing Page/Footer";

export default function Home() {
  return (
    <main>
      <Hero />
      <Barriers />
      <Headquarters />
      <Marquee />
      <Steps />
      <Showcase />
      <Pricing />
      <Footer />
    </main>
  );
}
