import Hero from "@/components/Hero";
import WhatWeDo from "@/components/WhatWeDo";
import About from "@/components/About";
import FounderQuote from "@/components/FounderQuote";
import GetInvolved from "@/components/GetInvolved";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen bg-white">
      <Hero />
      <WhatWeDo />
      <FounderQuote />
      <About />
      <GetInvolved />
      <Footer />
    </main>
  );
}
