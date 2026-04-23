import Image from "next/image";

export default function Footer() {
  return (
    <footer className="border-t border-gray-200 bg-white px-4 sm:px-6 xl:px-16 py-3">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center md:items-center gap-3 md:gap-0">
        {/* Logo - left */}
        <div className="shrink-0">
          <Image
            src="/Final-Logo-Cropped.png"
            alt="Chris & Eizel Foundation"
            width={520}
            height={320}
            priority
            className="w-56 sm:w-72 md:w-96 h-auto"
            style={{ height: "auto" }}
          />
        </div>

        {/* Description - center */}
        <p className="flex-1 text-sm text-gray-500 text-center md:text-left px-4 max-w-lg mx-auto">
          Chris and Eizel Foundation is a registered domestic nonprofit corporation in
          the state of Arizona, with EIN 39-417-6965.
        </p>

        {/* Privacy Policy - right */}
        <div className="shrink-0 text-sm">
          <a href="/privacy-policy" className="text-gray-600 hover:text-[#2AACE2] transition-colors">
            Privacy Policy
          </a>
        </div>
      </div>
    </footer>
  );
}
