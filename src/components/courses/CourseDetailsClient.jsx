"use client";

import Image from "next/image";
import { Check, Star } from "lucide-react";
import { motion } from "framer-motion";
import instructor from "@/assets/profile.png";
import { useEffect, useState } from "react";
import Loading from "@/app/loading";
import Link from "next/link";

const CourseDetailsClient = ({ course }) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (course) {
      setLoading(false);
    }
  }, [course]);

  if (!course) {
    return (
      <div className="h-screen flex items-center justify-center">
        <p className="text-gray-500 text-lg">Course not found</p>
      </div>
    );
  }

  if (loading) {
    return <Loading />;
  }

  return (
    <section className="max-w-6xl mx-auto px-4 md:px-6 py-10 space-y-10">
      {/* Hero */}
      <div className="grid md:grid-cols-2 gap-8 items-center">
        <div className="w-full h-75 md:h-100 relative rounded-2xl overflow-hidden">
          <Image
            src={course.image}
            alt={course.title}
            fill
            className="object-cover"
          />
        </div>

        <div className="space-y-4">
          <h1 className="text-2xl md:text-4xl font-bold text-gray-900 dark:text-white">
            {course.title}
          </h1>

          <p className="text-gray-500 dark:text-gray-400">
            {course.description}
          </p>

          {/* Instructor */}
          <div className="flex items-center gap-3 mt-4">
            <Image
              src={course.instructor_img || instructor}
              alt={course.instructor}
              width={40}
              height={40}
              className="rounded-full"
            />
            <span className="text-sm text-gray-700 dark:text-gray-300">
              {course.instructor}
            </span>
          </div>

          {/* Stats */}
          <div className="flex items-center gap-6 text-sm text-gray-600 dark:text-gray-400 mt-4">
            <div className="flex items-center gap-1">
              <Star size={16} fill="#EAB308" color="#EAB308" />
              {course.rating}
            </div>

            <span>{course.duration}</span>

            <span className="bg-purple-100 text-purple-600 px-2 py-1 rounded text-xs">
              {course.level}
            </span>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">
              What you'll learn
            </h2>

            <ul className="space-y-2 text-gray-600 dark:text-gray-400">
              {course.outcomes?.map((item, index) => (
                <li className="flex items-center gap-2" key={index}>
                  <Check size={12} className="border rounded-full text-green-500" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full sm:w-auto h-12 px-6 sm:px-10
                flex items-center justify-center
                bg-[linear-gradient(135deg,#4b5964,#2f3a42,#0f1113)]
              text-white rounded-lg font-bold relative overflow-hidden shadow-xl cursor-pointer"
            >
              <div className="absolute inset-0 w-[200%] h-[200%] bg-linear-to-br from-white/60 via-white/30 to-transparent -translate-x-full -translate-y-full animate-glow"></div>
              <span className="relative z-10">Enroll Now</span>
            </motion.button>

            <Link href="/courses" className="sm:w-auto">
              <button
                className="w-full sm:w-auto h-12 px-6 sm:px-10
                flex items-center justify-center
                border border-gray-400 text-gray-800
                rounded-lg font-bold bg-transparent cursor-pointer"
              >
                Explore Courses
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CourseDetailsClient;
