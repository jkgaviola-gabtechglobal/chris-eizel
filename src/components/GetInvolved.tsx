import { FaBullseye, FaHandHoldingHeart, FaHandsHelping, FaHandshake } from "react-icons/fa";

export default function GetInvolved() {
  const cards = [
    {
      icon: <FaHandHoldingHeart className="w-16 h-16" style={{ color: "#2AACE2" }} />,
      bgColor: "bg-blue-100",
      titleColor: "text-gray-900",
      title: "Donate",
      description: "Help fund scholarships, training and meals for the youth in need.",
    },
    {
      icon: <FaHandsHelping className="w-16 h-16" style={{ color: "#2AACE2" }} />,
      bgColor: "bg-teal-100",
      titleColor: "text-[#2AACE2]",
      title: "Volunteer",
      description: "Share your time, skills, and encourage the next generation.",
    },
    {
      icon: <FaHandshake className="w-16 h-16" style={{ color: "#E8A87C" }} />,
      bgColor: "bg-orange-100",
      titleColor: "text-orange-400",
      title: "Corporate Partnerships",
      description: "Partner with us to expand opportunity and create impact.",
    },
  ];

  return (
    <section id="get-involved" className="bg-white py-20 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Our Mission banner */}
        <div className="bg-[#f0f6fb] rounded-2xl flex flex-col md:flex-row items-center gap-6 px-8 py-8 mb-16">
          <div className="shrink-0">
            <div className="w-24 h-24 rounded-full flex items-center justify-center">
              <FaBullseye className="w-20 h-20" style={{ color: "#2AACE2" }} />
            </div>
          </div>
          <div>
            <h3 className="text-[#2AACE2] font-black text-xl uppercase tracking-wide mb-2">OUR MISSION</h3>
            <p className="text-gray-700 text-base md:text-lg leading-relaxed">
              To expand access to education and career training for the youth and young adults,
              empowering them to build stable, self-sufficient, and purpose-driven lives.
            </p>
          </div>
        </div>

        {/* Get Involved heading */}
        <div className="text-center mb-12">
          <p className="text-[#2AACE2] font-bold tracking-widest uppercase text-sm mb-3">GET INVOLVED</p>
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-4">Your Support Creates Possibility</h2>
          <p className="text-gray-500 text-base md:text-lg">Join us in investing in young people and building brighter futures</p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {cards.map((card) => (
            <div key={card.title} className="flex flex-row items-center gap-4">
              <div className={`w-32 h-32 rounded-full ${card.bgColor} flex items-center justify-center shrink-0`}>
                {card.icon}
              </div>
              <div>
                <h3 className={`font-black text-xl mb-2 ${card.titleColor}`}>{card.title}</h3>
                <p className="text-gray-600 text-base leading-relaxed">{card.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
