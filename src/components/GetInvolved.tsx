"use client";

import { FaBullseye, FaHandHoldingHeart, FaHandsHelping, FaHandshake } from "react-icons/fa";
import { motion } from "framer-motion";
import type { Variants } from "framer-motion";

const EASE = [0.22, 1, 0.36, 1] as const;

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 28 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.13, duration: 0.65, ease: EASE },
  }),
};

const cardVariants: Variants = {
  hidden: { opacity: 0, x: -30 },
  show: (i: number) => ({
    opacity: 1,
    x: 0,
    transition: { delay: i * 0.15, duration: 0.6, ease: EASE },
  }),
};

const cards = [
  {
    Icon: FaHandHoldingHeart,
    iconColor: "#2AACE2",
    bgColor: "bg-blue-100",
    ringColor: "rgba(42,172,226,0.35)",
    titleColor: "text-gray-900",
    title: "Donate",
    description: "Help fund scholarships, training and meals for the youth in need.",
  },
  {
    Icon: FaHandsHelping,
    iconColor: "#2AACE2",
    bgColor: "bg-teal-100",
    ringColor: "rgba(42,172,226,0.35)",
    titleColor: "text-[#2AACE2]",
    title: "Volunteer",
    description: "Share your time, skills, and encourage the next generation.",
  },
  {
    Icon: FaHandshake,
    iconColor: "#E8A87C",
    bgColor: "bg-orange-100",
    ringColor: "rgba(232,168,124,0.4)",
    titleColor: "text-orange-400",
    title: "Corporate Partnerships",
    description: "Partner with us to expand opportunity and create impact.",
  },
];

export default function GetInvolved() {
  return (
    <section id="get-involved" className="bg-white py-20 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto">

        {/* Mission banner */}
        <motion.div
          className="bg-[#f0f6fb] rounded-2xl flex flex-col md:flex-row items-center gap-6 px-8 py-8 mb-16"
          initial={{ opacity: 0, y: 36 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.7, ease: EASE }}
        >
          {/* Bullseye icon */}
          <div className="shrink-0 flex items-center justify-center w-24 h-24">
            <motion.div
              initial={{ scale: 0, rotate: -30 }}
              whileInView={{ scale: 1, rotate: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: EASE }}
            >
              <FaBullseye className="w-20 h-20" style={{ color: "#2AACE2" }} />
            </motion.div>
          </div>

          <div>
            <motion.h3
              className="text-[#2AACE2] font-black text-xl uppercase tracking-wide mb-2"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.55, ease: EASE }}
            >
              OUR MISSION
            </motion.h3>
            <motion.p
              className="text-gray-700 text-base md:text-lg leading-relaxed"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.32, duration: 0.55, ease: EASE }}
            >
              To expand access to education and career training for the youth and young adults,
              empowering them to build stable, self-sufficient, and purpose-driven lives.
            </motion.p>
          </div>
        </motion.div>

        {/* Get Involved heading */}
        <div className="text-center mb-12">
          <motion.p
            className="text-[#2AACE2] font-bold tracking-widest uppercase text-sm mb-3"
            custom={0}
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-60px" }}
          >
            GET INVOLVED
          </motion.p>
          <motion.h2
            className="text-4xl md:text-5xl font-black text-gray-900 mb-4"
            custom={1}
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-60px" }}
          >
            Your Support Creates Possibility
          </motion.h2>
          <motion.p
            className="text-gray-500 text-base md:text-lg"
            custom={2}
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-60px" }}
          >
            Join us in investing in young people and building brighter futures
          </motion.p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {cards.map(({ Icon, iconColor, bgColor, ringColor, titleColor, title, description }, i) => (
            <motion.div
              key={title}
              className="flex flex-row items-center gap-4"
              custom={i}
              variants={cardVariants}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-50px" }}
            >
              {/* Icon circle with ripple on hover */}
              <motion.div
                className={`relative w-32 h-32 rounded-full ${bgColor} flex items-center justify-center shrink-0`}
                whileHover={{ scale: 1.08, boxShadow: `0 0 0 8px ${ringColor}` }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                <motion.div
                  initial={{ scale: 0, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + i * 0.15, duration: 0.5, ease: EASE }}
                >
                  <Icon className="w-16 h-16" style={{ color: iconColor }} />
                </motion.div>
              </motion.div>

              <div>
                <motion.h3
                  className={`font-black text-xl mb-2 ${titleColor}`}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + i * 0.15, duration: 0.45 }}
                >
                  {title}
                </motion.h3>
                <motion.p
                  className="text-gray-600 text-base leading-relaxed"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 + i * 0.15, duration: 0.45 }}
                >
                  {description}
                </motion.p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
