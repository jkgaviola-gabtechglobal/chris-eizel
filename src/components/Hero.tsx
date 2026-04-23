"use client";

import Image from "next/image";
import { useState } from "react";
import { PiGraduationCap } from "react-icons/pi";
import { HiOutlineUserGroup } from "react-icons/hi";
import { LuUtensils } from "react-icons/lu";
import { HiMenu, HiX } from "react-icons/hi";

export default function Hero() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <section className="relative bg-white px-4 sm:px-6 xl:px-16">
      {/* Header / Nav */}
      <header className="flex items-center justify-between py-2 md:py-6">
        {/* Logo: inline on mobile/tablet, absolute on desktop */}
        <div className="xl:absolute xl:-top-32 xl:left-16 shrink-0">
          <Image
            src="/Final-Logo-Landscape.png"
            alt="Chris & Eizel Foundation"
            width={520}
            height={320}
            priority
            className="w-44 sm:w-56 md:w-72 xl:w-130 h-auto" style={{ height: "auto" }}
          />
        </div>

        {/* Desktop Nav — visible from md (768px) where logo + nav fit side by side */}
        <nav className="ml-auto xl:mt-18 xl:mr-60 hidden md:flex items-center gap-8 xl:gap-20 text-sm lg:text-base xl:text-xl">
          <a href="#home" className="text-gray-600 font-medium hover:text-[#2AACE2] transition-colors">Home</a>
          <a href="#about" className="text-gray-600 font-medium hover:text-[#2AACE2] transition-colors">About</a>
          <a href="#get-involved" className="text-gray-600 font-medium hover:text-[#2AACE2] transition-colors whitespace-nowrap">Get Involved</a>
        </nav>

        {/* Hamburger button — only on small screens below md */}
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
      {menuOpen && (
        <nav className="md:hidden flex flex-col gap-4 pb-6 text-base font-medium">
          <a href="#home" onClick={() => setMenuOpen(false)} className="text-gray-600 hover:text-[#2AACE2] transition-colors">Home</a>
          <a href="#about" onClick={() => setMenuOpen(false)} className="text-gray-600 hover:text-[#2AACE2] transition-colors">About</a>
          <a href="#get-involved" onClick={() => setMenuOpen(false)} className="text-gray-600 hover:text-[#2AACE2] transition-colors">Get Involved</a>
        </nav>
      )}

      {/* Hero Content */}
      <div className="max-w-7xl mx-auto flex flex-col-reverse xl:flex-row items-center gap-4 md:gap-8 xl:gap-10 pt-0 pb-6 md:pb-10">
        {/* Left: Text */}
        <div className="w-full xl:flex-1 flex flex-col gap-4 md:gap-6 mt-0 xl:mt-20 ml-0 xl:ml-10 text-center xl:text-left items-center xl:items-start">
          <h1 className="text-2xl sm:text-3xl xl:text-4xl font-bold leading-tight text-gray-900">
            Education is the catapult
            <br />
            <span className="text-[#2AACE2]">to elevate our quality of life.</span>
          </h1>
          <p className="text-gray-500 text-sm sm:text-base xl:text-lg max-w-lg">
            The Chris &amp; Eizel Foundation supports youth through online education,
            training, mentoring, and practical pathways to a better future.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
            <a
              href="#donate"
              className="inline-flex items-center justify-center px-8 py-3 rounded-full bg-[#1B3A6B] text-white font-semibold text-base hover:bg-[#15305a] transition-colors"
            >
              Donate
            </a>
            <a
              href="#partner"
              className="inline-flex items-center justify-center px-8 py-3 rounded-full border-2 border-[#2AACE2] text-[#2AACE2] font-semibold text-base hover:bg-[#2AACE2]/10 transition-colors"
            >
              Partner with us
            </a>
          </div>
        </div>

        {/* Right: Image */}
        <div className="w-full xl:flex-1 flex justify-center xl:justify-end xl:mr-20">
          <div className="relative w-full max-w-sm sm:max-w-lg xl:max-w-2xl h-64 sm:h-80 xl:h-96 overflow-hidden mask-[linear-gradient(to_bottom,transparent_0%,black_15%,black_100%),linear-gradient(to_right,transparent_0%,black_15%,black_85%,transparent_100%)]" style={{maskComposite:'intersect'}}>
            <Image
              src="/Image.png"
              alt="Chris and Eizel Foundation"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
              priority
            />
          </div>
        </div>
      </div>

      {/* Stats Row */}
      <div className="max-w-6xl mx-auto pb-12 grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div className="flex items-center gap-4 border border-gray-400 rounded-3xl px-6 py-5">
          <div className="shrink-0 w-16 h-16 sm:w-20 sm:h-20 xl:w-24 xl:h-24 rounded-full bg-[#E8F4FB] flex items-center justify-center">
            <PiGraduationCap className="w-10 h-10 sm:w-12 sm:h-12 xl:w-16 xl:h-16 text-[#2AACE2]" />
          </div>
          <div>
            <p className="text-sm text-gray-500">Over</p>
            <p className="text-2xl font-bold text-[#2AACE2]">$100,000</p>
            <p className="text-sm text-gray-600">of scholarships funded</p>
          </div>
        </div>

        <div className="flex items-center gap-4 border border-gray-400 rounded-3xl px-6 py-5">
          <div className="shrink-0 w-16 h-16 sm:w-20 sm:h-20 xl:w-24 xl:h-24 rounded-full bg-[#E8F8F2] flex items-center justify-center">
            <HiOutlineUserGroup className="w-10 h-10 sm:w-12 sm:h-12 xl:w-16 xl:h-16 text-[#2ABE82]" />
          </div>
          <div>
            <p className="text-sm text-gray-500">Over</p>
            <p className="text-2xl font-bold text-[#2ABE82]">900</p>
            <p className="text-sm text-gray-600">online students served</p>
          </div>
        </div>

        <div className="flex items-center gap-4 border border-gray-400 rounded-3xl px-6 py-5">
          <div className="shrink-0 w-16 h-16 sm:w-20 sm:h-20 xl:w-24 xl:h-24 rounded-full bg-[#FEF3EC] flex items-center justify-center">
            <LuUtensils className="w-10 h-10 sm:w-12 sm:h-12 xl:w-16 xl:h-16 text-[#F5924E]" />
          </div>
          <div>
            <p className="text-sm text-gray-500">Over</p>
            <p className="text-2xl font-bold text-[#F5924E]">3,000</p>
            <p className="text-sm text-gray-600">meals provided</p>
          </div>
        </div>
      </div>
    </section>
  );
}
