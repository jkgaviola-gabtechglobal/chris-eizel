import Image from "next/image";

export default function About() {
  return (
    <section id="about" className="bg-[#f0f6fb] pt-20 pb-0 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header — left aligned */}
        <div className="mb-10">
          <p className="text-[#2AACE2] font-bold tracking-widest uppercase text-sm mb-3 text-center">
            About Chris &amp; Eizel Foundation
          </p>
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6 text-center">
            Building Pathways. Changing Lives.
          </h2>
          <p className="text-gray-700 font-semibold text-base md:text-lg text-left">
            The Chris &amp; Eizel Foundation was established with a simple but powerful belief: education changes the trajectory of a life.
          </p>
          <p className="text-gray-700 text-base md:text-lg leading-relaxed mt-4 text-left">
            We exist to provide youth—especially those facing adversity—with access to education, training, and career pathways that open doors to a better future. Many young people have the potential to succeed but lack the financial resources, mentorship, or support systems needed to move forward. Our foundation was created to help bridge that gap.
          </p>
        </div>

        {/* Two-column layout */}
        <div className="flex flex-col md:flex-row gap-6 md:gap-0 items-start">
          {/* Left: Image */}
          <div className="w-full md:w-3/5 shrink-0 -ml-6 md:-ml-28">
            <div className="relative w-full h-96 sm:h-120 md:h-150 rounded-3xl overflow-hidden">
              <Image
                src="/Image2.png"
                alt="Chris and Eizel - Founders of Chris & Eizel Foundation"
                fill
                sizes="(max-width: 768px) 100vw, 40vw"
                className="object-cover object-top"
                style={{ objectPosition: "20% 30%" }}
              />
            </div>
          </div>

          {/* Right: Text */}
          <div className="w-full md:w-3/5 flex flex-col gap-5 text-gray-700 text-base md:text-lg leading-relaxed md:-ml-16">

            <div>
              <p className="font-semibold text-gray-900 mb-3">
                Through strategic fundraising and community partnerships, we provide scholarships and financial assistance to at-risk youth pursuing:
              </p>
              <ul className="space-y-2">
                {[
                  "High school diplomas",
                  "University or college degrees",
                  "Accredited online programs",
                  "Career-focused training and certifications",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3">
                    <span className="w-2 h-2 rounded-full bg-[#2AACE2] shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <p>
              Our focus is not just on funding education, but on empowering transformation. We believe that when a young person gains access to opportunity, they gain confidence, dignity, and hope. And when one life changes, families and communities change with it.
            </p>

            <p>
              Chris and Eizel founded this organization with deep conviction that no young person&apos;s future should be limited by circumstance. Education is more than academics—it is stability, direction, and possibility.
            </p>

            <p className="font-semibold text-[#2AACE2]">
              We are committed to building pathways where there were once barriers. We are committed to investing in potential. We are committed to hope in action.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
