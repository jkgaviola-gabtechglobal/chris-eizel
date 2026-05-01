"use client";

import Image from "next/image";
import { useState, useEffect, useRef } from "react";
import dynamic from "next/dynamic";

const PayPalDonateButton = dynamic(() => import("./PayPalDonateButton"), { ssr: false });
import { PiGraduationCap } from "react-icons/pi";
import { HiOutlineUserGroup } from "react-icons/hi";
import { LuUtensils } from "react-icons/lu";
import { HiMenu, HiX } from "react-icons/hi";
import {
  motion,
  useInView,
  useMotionValue,
  useSpring,
  AnimatePresence,
  type Variants,
} from "framer-motion";

// Animated count-up number
function CountUp({ target, prefix = "", suffix = "" }: { target: number; prefix?: string; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const raw = useMotionValue(0);
  const spring = useSpring(raw, { stiffness: 60, damping: 20 });

  useEffect(() => {
    if (inView) raw.set(target);
  }, [inView, target, raw]);

  useEffect(() => {
    return spring.on("change", (v) => {
      if (ref.current) {
        const formatted = v >= 1000
          ? Math.round(v).toLocaleString()
          : Math.round(v).toString();
        ref.current.textContent = `${prefix}${formatted}${suffix}`;
      }
    });
  }, [spring, prefix, suffix]);

  return <span ref={ref}>{prefix}0{suffix}</span>;
}

const EASE = [0.22, 1, 0.36, 1] as const;

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 32 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.65, ease: EASE },
  }),
};

const slideInRight: Variants = {
  hidden: { opacity: 0, x: 60 },
  show: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.8, ease: EASE, delay: 0.3 },
  },
};

const cardVariant: Variants = {
  hidden: { opacity: 0, y: 40 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.18, duration: 0.6, ease: EASE },
  }),
};

const stats = [
  {
    icon: PiGraduationCap,
    bg: "bg-[#E8F4FB]",
    color: "text-[#2AACE2]",
    label: "of scholarships funded",
    value: 100000,
    prefix: "$",
    suffix: "",
  },
  {
    icon: HiOutlineUserGroup,
    bg: "bg-[#E8F8F2]",
    color: "text-[#2ABE82]",
    label: "online students served",
    value: 900,
    prefix: "",
    suffix: "",
  },
  {
    icon: LuUtensils,
    bg: "bg-[#FEF3EC]",
    color: "text-[#F5924E]",
    label: "meals provided",
    value: 3000,
    prefix: "",
    suffix: "",
  },
];

const navLinks = ["Home", "About", "Get Involved"];

export default function Hero() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <section className="relative bg-white px-4 sm:px-6 xl:px-16">
      {/* Header / Nav */}
      <header className="flex items-center justify-between py-2 md:py-6">
        <motion.div
          className="xl:absolute xl:top-12 xl:left-16 shrink-0"
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <Image
            src="/Final-Logo-Cropped.png"
            alt="Chris & Eizel Foundation"
            width={520}
            height={320}
            priority
            className="w-36 sm:w-44 md:w-56 xl:w-130 h-auto"
            style={{ height: "auto" }}
          />
        </motion.div>

        {/* Desktop Nav */}
        <nav className="ml-auto xl:mt-18 xl:mr-60 hidden md:flex items-center gap-8 xl:gap-20 text-sm lg:text-base xl:text-xl">
          {navLinks.map((link, i) => (
            <motion.a
              key={link}
              href={`#${link.toLowerCase().replace(" ", "-")}`}
              className={`font-medium hover:text-[#2AACE2] transition-colors ${link === "Home" ? "text-[#2AACE2] underline underline-offset-4" : "text-gray-600"}`}
              initial={{ opacity: 0, y: -12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 + i * 0.1, duration: 0.5, type: "tween" }}
              whileHover={{ y: -2, transition: { duration: 0.15, ease: "easeOut", type: "tween" } }}
            >
              {link}
            </motion.a>
          ))}
        </nav>

        {/* Hamburger */}
        <button
          type="button"
          className="ml-auto md:hidden text-gray-600 hover:text-[#2AACE2] transition-colors"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <HiX className="w-7 h-7" /> : <HiMenu className="w-7 h-7" />}
        </button>
      </header>

      {/* Mobile Nav Drawer */}
      <AnimatePresence>
        {menuOpen && (
          <motion.nav
            className="md:hidden flex flex-col gap-4 pb-6 text-base font-medium overflow-hidden"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: "easeInOut" }}
          >
            {navLinks.map((link) => (
              <a
                key={link}
                href={`#${link.toLowerCase().replace(/\s+/g, "-")}`}
                onClick={(e) => {
                  e.preventDefault();
                  setMenuOpen(false);
                  const id = link.toLowerCase().replace(/\s+/g, "-");
                  setTimeout(() => {
                    if (link === "Home") {
                      window.scrollTo({ top: 0, behavior: "smooth" });
                    } else {
                      const el = document.getElementById(id);
                      if (el) el.scrollIntoView({ behavior: "smooth" });
                    }
                  }, 370);
                }}
                className={`hover:text-[#2AACE2] transition-colors ${link === "Home" ? "text-[#2AACE2] underline underline-offset-4" : "text-gray-600"}`}
              >
                {link}
              </a>
            ))}
          </motion.nav>
        )}
      </AnimatePresence>

      {/* Hero Content */}
      <div className="max-w-7xl mx-auto flex flex-col-reverse xl:flex-row items-center gap-4 md:gap-8 xl:gap-10 pt-0 pb-6 md:pb-10">
        {/* Left: Text */}
        <div className="w-full xl:flex-1 flex flex-col gap-4 md:gap-6 mt-0 xl:mt-20 ml-0 xl:ml-10 text-center xl:text-left items-center xl:items-start">
          <motion.h1
            className="text-2xl sm:text-3xl xl:text-4xl font-bold leading-tight text-gray-900"
            custom={0}
            variants={fadeUp}
            initial="hidden"
            animate="show"
          >
            Education is the catapult
            <br />
            <motion.span
              className="text-[#2AACE2] inline-block"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            >
              to elevate our quality of life.
            </motion.span>
          </motion.h1>

          <motion.p
            className="text-gray-500 text-sm sm:text-base xl:text-lg max-w-lg"
            custom={1}
            variants={fadeUp}
            initial="hidden"
            animate="show"
          >
            The Chris &amp; Eizel Foundation supports youth through online education,
            training, mentoring, and practical pathways to a better future.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto"
            custom={2}
            variants={fadeUp}
            initial="hidden"
            animate="show"
          >
            <PayPalDonateButton />
            <motion.a
              href="#get-involved"
              className="inline-flex items-center justify-center px-8 py-3 rounded-full border-2 border-[#2AACE2] text-[#2AACE2] font-semibold text-base hover:bg-[#2AACE2]/10 transition-colors"
              whileHover={{ scale: 1.05, boxShadow: "0 8px 24px rgba(42,172,226,0.25)" }}
              whileTap={{ scale: 0.97 }}
            >
              Partner with us
            </motion.a>
          </motion.div>
        </div>

        {/* Right: Image */}
        <motion.div
          className="w-full xl:flex-1 flex justify-center xl:justify-end xl:mr-20"
          variants={slideInRight}
          initial="hidden"
          animate="show"
        >
          <motion.div
            className="relative w-full max-w-sm sm:max-w-lg xl:max-w-2xl h-64 sm:h-80 xl:h-96 overflow-hidden"
            style={{
              maskImage:
                "linear-gradient(to bottom, transparent 0%, black 15%, black 100%), linear-gradient(to right, transparent 0%, black 15%, black 85%, transparent 100%)",
              maskComposite: "intersect",
            }}
          >
            <Image
              src="/Image.png"
              alt="Chris and Eizel Foundation"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
              priority
            />
          </motion.div>
        </motion.div>
      </div>

      {/* Stats Row */}
      <div className="max-w-6xl mx-auto pb-12 grid grid-cols-1 sm:grid-cols-3 gap-4">
        {stats.map(({ icon: Icon, bg, color, label, value, prefix, suffix }, i) => (
          <motion.div
            key={label}
            className="flex items-center gap-4 border border-gray-400 rounded-3xl px-6 py-5"
            custom={i}
            variants={cardVariant}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-50px" }}
            whileHover={{ y: -4, boxShadow: "0 12px 32px rgba(0,0,0,0.08)" }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
          >
            <div
              className={`shrink-0 w-16 h-16 sm:w-20 sm:h-20 xl:w-24 xl:h-24 rounded-full ${bg} flex items-center justify-center`}
            >
              <Icon className={`w-10 h-10 sm:w-12 sm:h-12 xl:w-16 xl:h-16 ${color}`} />
            </div>
            <div>
              <p className="text-sm text-gray-500">Over</p>
              <p className={`text-2xl font-bold ${color}`}>
                <CountUp target={value} prefix={prefix} suffix={suffix} />
              </p>
              <p className="text-sm text-gray-600">{label}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
