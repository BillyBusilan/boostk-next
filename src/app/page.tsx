import { Hero } from "@/components/Landing Page/Hero Section/Hero";
import { Global } from "@/components/Landing Page/Global Impact Section/Global";
import Barrier from "@/components/Landing Page/Barrier Section/BarrierSection";
import { Pricing } from "@/components/Landing Page/Pricing Section/Pricing";
import { Steps } from "@/components/Landing Page/Steps Section/StepsSection";
import { Calling } from "@/components/Landing Page/Calling";
import { Footer } from "@/components/Landing Page/Footer";
import { HeadquartersSection } from "@/components/Landing Page/Headquarters Section/HeadquartersSection";

export default function Home() {
  return (
    <main>
      <Hero />
      <Global />
      {/* <Carousel /> */}
      <Barrier />
      <HeadquartersSection />
      {/* <Marquee /> */}
      <Steps />
      <Pricing />
      <Calling />
      <Footer />
    </main>
  );
}
