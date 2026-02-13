import { Hero } from "@/components/Landing Page/Hero";
import { Marquee } from "@/components/Landing Page/Features";
import  Barrier from "@/components/Landing Page/Barrier";
import { Pricing } from "@/components/Landing Page/Pricing";
import { Carousel } from "@/components/Landing Page/Carousel";
import { Steps } from "@/components/Landing Page/Steps";
import { Calling } from "@/components/Landing Page/Calling";
import { Footer } from "@/components/Landing Page/Footer";
import { Headquarters } from "@/components/Landing Page/Headquarters";

export default function Home() {
  return (
    <main>
      <Hero />
      <Carousel />
      <Barrier />
      <Headquarters />
      <Marquee />
      <Steps />
      <Pricing />
      <Calling />
      <Footer />
    </main>
  );
}
