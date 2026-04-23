"use client";

import { PiGraduationCap } from "react-icons/pi";
import { RiGroupLine } from "react-icons/ri";
import { BsBriefcase } from "react-icons/bs";
import { motion } from "framer-motion";
import type { Variants } from "framer-motion";

const EASE = [0.22, 1, 0.36, 1] as const;

const programs = [
  {
    icon: PiGraduationCap,
    color: "text-blue-500",
    bg: "bg-blue-50",
    title: "Education Support",
    description:
      "We provide funding for university and online training scholarships, supplies, and tuition fee assistance.",
  },
  {
    icon: RiGroupLine,
    color: "text-green-500",
    bg: "bg-green-50",
    title: "Mentorship & Life Skills",
    description:
      "We provide mentorship and online training for necessary life skills, such as financial literacy, selling skills, and various self-mastery programs.",
  },
  {
    icon: BsBriefcase,
    color: "text-orange-400",
    bg: "bg-orange-50",
    title: "Career Pathways / Job Readiness",
    description:
      "We provide career counseling and job matching services in partnership with various staffing companies, such as Gabtech Global, 360X Staffing, and RKPE.",
  },
];

const headingVariants: Variants = {
  hidden: { opacity: 0, y: 28 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.12, duration: 0.65, ease: EASE },
  }),
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 48 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.65, ease: EASE },
  }),
};

export default function WhatWeDo() {
  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-7xl mx-auto text-center">
        <motion.p
          className="text-blue-500 font-bold tracking-widest uppercase text-sm mb-3"
          custom={0}
          variants={headingVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-60px" }}
        >
          What We Do
        </motion.p>

        <motion.h2
          className="text-4xl md:text-5xl font-black text-gray-900 mb-4"
          custom={1}
          variants={headingVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-60px" }}
        >
          Empowering Youth. Building Futures.
        </motion.h2>

        <motion.p
          className="text-gray-400 text-lg max-w-3xl mx-auto mb-16"
          custom={2}
          variants={headingVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-60px" }}
        >
          We provide the support, skills, and opportunities young people need to succeed.
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {programs.map(({ icon: Icon, color, bg, title, description }, i) => (
            <motion.div
              key={title}
              className="border border-gray-200 rounded-3xl p-10 flex flex-col items-center text-center"
              custom={i}
              variants={cardVariants}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-50px" }}
              whileHover={{ y: -6, boxShadow: "0 16px 40px rgba(0,0,0,0.09)" }}
              transition={{ type: "spring", stiffness: 280, damping: 22 }}
            >
              {/* Icon circle with draw-in ring */}
              <div className="relative mb-6">
                <motion.div
                  className={`w-24 h-24 rounded-full ${bg} flex items-center justify-center`}
                  initial={{ scale: 0, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + i * 0.15, duration: 0.55, ease: EASE }}
                >
                  <Icon className={`w-12 h-12 ${color}`} />
                </motion.div>
                {/* Animated ring that expands and fades */}
                <motion.span
                  className={`absolute inset-0 rounded-full border-2 ${color.replace("text-", "border-")}`}
                  initial={{ scale: 0.6, opacity: 0 }}
                  whileInView={{ scale: 1.5, opacity: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.35 + i * 0.15, duration: 0.8, ease: "easeOut" }}
                />
              </div>

              <motion.h3
                className={`text-lg font-bold mb-3 ${color}`}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 + i * 0.15, duration: 0.5 }}
              >
                {title}
              </motion.h3>

              <motion.p
                className="text-gray-500 text-sm leading-relaxed"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 + i * 0.15, duration: 0.5 }}
              >
                {description}
              </motion.p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
