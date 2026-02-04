import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Experts from "@/components/Experts";
import SilentBarrier from "@/components/SilentBarrier";
import Globe from "@/components/Globe";

export default function Home() {
  return (
    <>

      <div className="relative z-10">
        <Header />
        <main className="flex flex-col">
          <Hero />
          <Experts />
          <SilentBarrier />
          <Globe />
        </main>
      </div>
    </>
  );
}
