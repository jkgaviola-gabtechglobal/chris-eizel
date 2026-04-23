"use client";

import Image from "next/image";
import { FaQuoteLeft } from "react-icons/fa";
import { motion } from "framer-motion";
import type { Variants } from "framer-motion";

const EASE = [0.22, 1, 0.36, 1] as const;

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.14, duration: 0.7, ease: EASE },
  }),
};

export default function FounderQuote() {
  return (
    <section className="bg-slate-100 py-20 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-8 md:gap-10 lg:gap-12">

        {/* Text side */}
        <div className="w-full md:max-w-xl lg:max-w-2xl shrink-0">
          {/* Quote icon draws in */}
          <motion.div
            initial={{ opacity: 0, scale: 0.4, rotate: -15 }}
            whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, ease: EASE }}
          >
            <FaQuoteLeft
              className="w-10 h-10 md:w-12 md:h-12 lg:w-16 lg:h-16 mb-4 md:mb-5 lg:mb-6"
              style={{ color: "#39aecd" }}
            />
          </motion.div>

          {/* Quote body — words fan in */}
          <motion.p
            className="text-gray-700 text-lg sm:text-xl md:text-lg lg:text-2xl leading-relaxed mb-4 md:mb-5 lg:mb-6"
            custom={0}
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-60px" }}
          >
            My parents&apos; business went bankrupt when I was in my first year of
            college. I had to sell whatever I could just to afford transportation
            and food to get to my university back in the Philippines. Thankfully,
            my Lolo (grandfather in Filipino), Fidel, paid for my college tuition.
            If not for my Lolo Fidel, I wouldn&apos;t have been able to establish a
            career and, later on, my own staffing business.
          </motion.p>

          {/* Highlighted line with left-border reveal */}
          <motion.div
            className="relative pl-5 mb-6 md:mb-6 lg:mb-8"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            {/* Animated left border */}
            <motion.span
              className="absolute left-0 top-0 bottom-0 w-1 rounded-full"
              style={{ background: "#39aecd" }}
              initial={{ scaleY: 0, originY: 0 }}
              whileInView={{ scaleY: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.55, ease: EASE }}
            />
            <motion.p
              className="font-bold text-base sm:text-lg md:text-base lg:text-xl leading-relaxed"
              style={{ color: "#39aecd" }}
              custom={1}
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
            >
              I want to be my Lolo Fidel to the youth of today on a global scale,
              starting in the US and in the Philippines.
            </motion.p>
          </motion.div>

          {/* Attribution */}
          <motion.div
            custom={2}
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            <p className="font-bold text-gray-900 text-lg">Chris Yap</p>
            <p className="text-gray-500 text-sm">
              Founder and President of Chris &amp; Eizel Foundation
            </p>
          </motion.div>
        </div>

        {/* Photo side — slides up from below */}
        <motion.div
          className="relative w-64 h-80 sm:w-80 sm:h-96 md:w-72 md:h-96 lg:w-120 lg:h-140 shrink-0 mx-auto md:ml-auto md:self-end md:translate-y-16 lg:translate-y-20"
          style={{
            WebkitMaskImage:
              "linear-gradient(to right, transparent 0%, black 2%, black 97%, transparent 100%)",
            maskImage:
              "linear-gradient(to right, transparent 0%, black 2%, black 97%, transparent 100%)",
          }}
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.85, ease: EASE, delay: 0.2 }}
        >
          <Image
            src="/CY_Headshot2.png"
            alt="Chris Yap - Founder and President of Chris & Eizel Foundation"
            fill
            sizes="(max-width: 768px) 100vw, 480px"
            loading="eager"
            className="object-cover object-top"
          />
        </motion.div>

      </div>
    </section>
  );
}
