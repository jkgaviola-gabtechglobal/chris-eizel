import { PiGraduationCap } from "react-icons/pi";
import { RiGroupLine } from "react-icons/ri";
import { BsBriefcase } from "react-icons/bs";

const programs = [
  {
    icon: <PiGraduationCap className="w-20 h-20 text-blue-500" />,
    color: "text-blue-500",
    title: "Education Support",
    description:
      "We provide funding for university and online training scholarships, supplies, and tuition fee assistance.",
  },
  {
    icon: <RiGroupLine className="w-20 h-20 text-green-500" />,
    color: "text-green-500",
    title: "Mentorship & Life Skills",
    description:
      "We provide mentorship and online training for necessary life skills, such as financial literacy, selling skills, and various self-mastery programs.",
  },
  {
    icon: <BsBriefcase className="w-20 h-20 text-orange-400" />,
    color: "text-orange-400",
    title: "Career Pathways / Job Readiness",
    description:
      "We provide career counseling and job matching services in partnership with various staffing companies, such as Gabtech Global, 360X Staffing, and RKPE.",
  },
];

export default function WhatWeDo() {
  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-7xl mx-auto text-center">
        <p className="text-blue-500 font-bold tracking-widest uppercase text-sm mb-3">
          What We Do
        </p>
        <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-4">
          Empowering Youth. Building Futures.
        </h2>
        <p className="text-gray-400 text-lg max-w-3xl mx-auto mb-16">
          We provide the support, skills, and opportunities young people need to succeed.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {programs.map((program) => (
            <div
              key={program.title}
              className="border border-gray-200 rounded-3xl p-10 flex flex-col items-center text-center hover:shadow-lg transition-shadow duration-300"
            >
              <div className="mb-6">{program.icon}</div>
              <h3 className={`text-lg font-bold mb-3 ${program.color}`}>
                {program.title}
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                {program.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
