import { Hero } from "@/components/Landing Page/Hero Section/Hero";
import { Global } from "@/components/Landing Page/Global Impact Section/Global";
import { Marquee } from "@/components/Landing Page/Features";
import Barrier from "@/components/Landing Page/Barrier Section/Barrier";
import { Pricing } from "@/components/Landing Page/Pricing";
import { Carousel } from "@/components/Landing Page/Carousel";
import { Steps } from "@/components/Landing Page/Steps Section/Steps";
import { Calling } from "@/components/Landing Page/Calling";
import { Footer } from "@/components/Landing Page/Footer";
import { Headquarters } from "@/components/Landing Page/Headquarters Section/Headquarters";

export default function Home() {
  return (
    <main>
      <Hero />
      <Global />
      {/* <Carousel /> */}
      <Barrier />
      <Headquarters />
      {/* <Marquee /> */}
      <Steps />
      <Pricing />
      <Calling />
      <Footer />
    </main>
  );
}
