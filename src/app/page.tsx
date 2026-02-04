import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Experts from "@/components/Experts";
import SilentBarrier from "@/components/SilentBarrier";
import PricingTiers from "@/components/PricingTiers";
import Globe from "@/components/Globe";
import Footer from "@/components/Footer";
import { ChatWidget } from "@/components/footer/ChatWidget";

export default function Home() {
  return (
    <>
      <div className="relative z-10">
        <Header />
        <main className="flex flex-col">
          <Hero />
          <Experts />
          <SilentBarrier />
          <PricingTiers />
          {/* <Globe /> */}
        </main>
        <Footer />
      </div>
      <ChatWidget />
    </>
  );
}
