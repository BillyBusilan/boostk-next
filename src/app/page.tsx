import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Experts from "@/components/Experts";
import SilentBarrier from "@/components/SilentBarrier";

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex flex-col">
        <Hero />
        <Experts />
        <SilentBarrier />
      </main>
    </>
  );
}
