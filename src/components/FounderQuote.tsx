import Image from "next/image";
import { FaQuoteLeft } from "react-icons/fa";

export default function FounderQuote() {
  return (
    <section className="bg-slate-100 py-20 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-8 md:gap-10 lg:gap-12">
        {/* Text side */}
        <div className="w-full md:max-w-xl lg:max-w-2xl shrink-0">
          <FaQuoteLeft className="w-10 h-10 md:w-12 md:h-12 lg:w-16 lg:h-16 mb-4 md:mb-5 lg:mb-6" style={{ color: "#39aecd" }} />
          <p className="text-gray-700 text-lg sm:text-xl md:text-lg lg:text-2xl leading-relaxed mb-4 md:mb-5 lg:mb-6">
            My parents&apos; business went bankrupt when I was in my first year of
            college. I had to sell whatever I could just to afford transportation
            and food to get to my university back in the Philippines. Thankfully,
            my Lolo (grandfather in Filipino), Fidel, paid for my college tuition.
            If not for my Lolo Fidel, I wouldn&apos;t have been able to establish a
            career and, later on, my own staffing business.
          </p>
          <p className="font-bold text-base sm:text-lg md:text-base lg:text-xl leading-relaxed mb-6 md:mb-6 lg:mb-8" style={{ color: "#39aecd" }}>
            I want to be my Lolo Fidel to the youth of today on a global scale,
            starting in the US and in the Philippines.
          </p>
          <div>
            <p className="font-bold text-gray-900 text-lg">Chris Yap</p>
            <p className="text-gray-500 text-sm">
              Founder and President of Chris &amp; Eizel Foundation
            </p>
          </div>
        </div>

        {/* Photo side */}
        <div className="relative w-64 h-80 sm:w-80 sm:h-96 md:w-72 md:h-96 lg:w-120 lg:h-140 shrink-0 mx-auto md:ml-auto md:self-end md:translate-y-16 lg:translate-y-20" style={{ WebkitMaskImage: "linear-gradient(to right, transparent 0%, black 2%, black 97%, transparent 100%)", maskImage: "linear-gradient(to right, transparent 0%, black 2%, black 97%, transparent 100%)" }}>
          <Image
            src="/CY_Headshot2.png"
            alt="Chris Yap - Founder and President of Chris & Eizel Foundation"
            fill
            sizes="(max-width: 768px) 100vw, 480px"
            loading="eager"
            className="object-cover object-top"
          />
        </div>
      </div>
    </section>
  );
}
