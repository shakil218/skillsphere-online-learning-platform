/* eslint-disable @next/next/no-img-element */
"use client";

import { motion } from "framer-motion";

const logos = [
  { name: "Coursera", url: "https://cdn.simpleicons.org/coursera" },
  { name: "Udemy", url: "https://cdn.simpleicons.org/udemy" },
  { name: "edX", url: "https://cdn.simpleicons.org/edx" },
  { name: "Khan Academy", url: "https://cdn.simpleicons.org/khanacademy" },
  { name: "Udacity", url: "https://cdn.simpleicons.org/udacity" },
  { name: "Pluralsight", url: "https://cdn.simpleicons.org/pluralsight" },
];

export default function TrustedCompanies() {
  return (
    <div className="overflow-hidden">
      <div className="max-w-2xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-semibold text-center mb-12 text-gray-800">
          Trusted by over 16,000 companies and millions of learners around the
          world
        </h2>
      </div>
      <div className="relative max-w-7xl mx-auto px-6 bg-black/30 overflow-hidden shadow-lg">
        <div className="pointer-events-none absolute inset-y-0 left-0 w-28 bg-linear-to-r from-white to-transparent z-10" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-28 bg-linear-to-l from-white to-transparent z-10" />

        {/* motion animation */}
        <motion.div
          className="flex w-max items-center gap-10"
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            ease: "linear",
            duration: 18,
            repeat: Infinity,
          }}
        >
          {[...logos, ...logos].map((logo, i) => (
            <div key={i} className="flex items-center justify-center w-32 h-16">
              <img
                src={logo.url}
                alt={logo.name}
                className="
                  h-10 w-auto
                  grayscale opacity-60
                  hover:grayscale-0 hover:opacity-100
                  transition duration-300
                "
              />
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
