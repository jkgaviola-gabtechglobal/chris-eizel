import Hero from "@/components/Hero";
import WhatWeDo from "@/components/WhatWeDo";
import FounderQuote from "@/components/FounderQuote";

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen bg-white">
      <Hero />
      <WhatWeDo />
      <FounderQuote />
    </main>
  );
}
