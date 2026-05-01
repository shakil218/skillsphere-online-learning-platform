"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const instructors = [
  {
    name: "Sarah Johnson",
    role: "UI/UX Design Expert",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
    students: "12K+ Students",
    rating: "4.9",
  },
  {
    name: "David Kim",
    role: "Full Stack Developer",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    students: "18K+ Students",
    rating: "4.8",
  },
  {
    name: "Emily Carter",
    role: "Digital Marketing Specialist",
    image: "https://randomuser.me/api/portraits/women/68.jpg",
    students: "10K+ Students",
    rating: "4.7",
  },
  {
    name: "James Wilson",
    role: "Business Strategist",
    image: "https://randomuser.me/api/portraits/men/75.jpg",
    students: "15K+ Students",
    rating: "4.9",
  },
];

export default function TopInstructors() {
  return (
    <section className="px-6 bg-gray-50">
      {/* TITLE */}
      <div className="text-center mb-12">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
          Learn from Top Instructors
        </h2>
        <p className="text-gray-500 mt-2">
          Meet the experts behind SkillSphere’s most popular courses
        </p>
      </div>

      {/* CARDS */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        {instructors.map((inst, i) => (
          <motion.div
            key={i}
            whileHover={{ y: -8 }}
            className="bg-white rounded-2xl shadow-md p-6 text-center transition"
          >
            {/* Image */}
            <div className="relative w-24 h-24 mx-auto mb-4">
              <Image
                src={inst.image}
                alt={inst.name}
                fill
                className="rounded-full object-cover"
              />
            </div>

            {/* Name */}
            <h3 className="text-lg font-semibold text-gray-900">{inst.name}</h3>

            {/* Role */}
            <p className="text-sm text-gray-500 mb-3">{inst.role}</p>

            {/* Stats */}
            <div className="flex justify-center gap-4 text-sm text-gray-600">
              <span>⭐ {inst.rating}</span>
              <span>{inst.students}</span>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
