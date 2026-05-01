"use client";

import Image from "next/image";
import Link from "next/link";

const sections = [
  {
    title: "1. Introduction",
    content:
      'Chris & Eizel Foundation ("we," "our," or "us") respects your privacy and is committed to protecting the personal information you share with us. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or engage with our services.',
  },
  {
    title: "2. Information We Collect",
    content: "We may collect the following types of information:",
    bullets: [
      "Personal details you voluntarily provide (e.g., name, email address, phone number).",
      "Non-personal information automatically collected (e.g., IP address, browser type, device information, cookies).",
      "Information related to donations, memberships, or participation in our programs.",
    ],
  },
  {
    title: "3. Use of Information",
    content: "We use collected information to:",
    bullets: [
      "Provide and improve our services.",
      "Communicate with you regarding updates, events, and initiatives.",
      "Process donations and issue receipts.",
      "Comply with legal and regulatory obligations.",
    ],
  },
  {
    title: "4. Disclosure of Information",
    content:
      "We do not sell or rent your personal information. We may share data only:",
    bullets: [
      "With trusted service providers who assist in operating our website and services.",
      "When required by law, regulation, or court order.",
      "To protect the rights, property, or safety of the foundation, our users, or the public.",
    ],
  },
  {
    title: "5. Data Security",
    content:
      "We implement appropriate technical and organizational measures to protect your information against unauthorized access, alteration, disclosure, or destruction.",
  },
  {
    title: "6. User Rights",
    content: "You have the right to:",
    bullets: [
      "Access and request a copy of your personal information.",
      "Request correction or deletion of inaccurate data.",
      "Withdraw consent to data processing, subject to legal or contractual restrictions.",
    ],
  },
  {
    title: "7. Cookies and Tracking",
    content:
      "Our website may use cookies and similar technologies to enhance user experience. You may disable cookies in your browser settings, but some features may not function properly.",
  },
  {
    title: "8. Changes to This Policy",
    content:
      'We may update this Privacy Policy from time to time. Any changes will be posted on this page with an updated "Last Revised" date.',
  },
  {
    title: "9. Contact Us",
    content:
      "For questions or concerns about this Privacy Policy, please contact us at:",
    bullets: ["rio@chrisandeizelfoundation.com", "[Foundation Office Address]"],
  },
];

export default function PrivacyPolicy() {
  return (
    <main className="min-h-screen bg-white px-4 sm:px-6 xl:px-16 py-12">
      <div className="max-w-3xl mx-auto">
        {/* Logo */}
        <div className="flex justify-center mb-10">
          <Link href="/">
            <Image
              src="/Final-Logo-Cropped.png"
              alt="Chris & Eizel Foundation"
              width={520}
              height={320}
              priority
              className="w-48 sm:w-64 h-auto"
              style={{ height: "auto", width: "auto" }}
            />
          </Link>
        </div>

        <h1 className="text-3xl font-bold text-gray-900 mb-8">Privacy Policy</h1>

        <div className="space-y-8 text-gray-700 text-sm sm:text-base leading-relaxed">
          {sections.map((section) => (
            <div key={section.title}>
              <h2 className="font-semibold text-gray-900 mb-2">{section.title}</h2>
              <p>{section.content}</p>
              {section.bullets && (
                <ul className="list-disc list-inside mt-2 space-y-1 pl-2">
                  {section.bullets.map((b) => (
                    <li key={b}>{b}</li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>

        <div className="mt-12 border-t border-gray-200 pt-6 text-center">
          <Link href="/" className="text-sm text-gray-500 hover:text-gray-800 transition-colors">
            ← Back to Home
          </Link>
        </div>
      </div>
    </main>
  );
}
