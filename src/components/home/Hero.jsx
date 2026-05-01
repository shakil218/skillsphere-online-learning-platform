"use client";
import Link from "next/link";
import { motion } from "framer-motion";

const Hero = () => {

  return (
    <section className="relative flex items-center justify-center bg-base-100 mt-24 md:mt-32">
      {/* Background glow */}
      <div className="absolute w-72 h-72 bg-primary/20 blur-3xl rounded-full top-10 left-1/2 -translate-x-1/2"></div>

      {/* Content */}
      <div className="text-center z-10 max-w-3xl">
        <h1 className="text-4xl md:text-6xl font-bold leading-tight">
          Learn and master skills <br />
          online with{" "}
          <span className="bg-linear-to-br from-indigo-500 to-purple-400 bg-clip-text text-transparent">
            SkillSphere
          </span>
        </h1>

        <p className="mt-6 text-base md:text-lg text-gray-500">
          A modern online learning platform where you can explore courses,
          improve your skills, and track your progress with structured learning
          paths.
        </p>

        <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Link href="/courses" className="w-full sm:w-auto">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full sm:w-auto h-14 px-6 sm:px-10
                flex items-center justify-center
                bg-[linear-gradient(135deg,#4b5964,#2f3a42,#0f1113)]
              text-white rounded-lg font-bold relative overflow-hidden shadow-xl cursor-pointer"
            >
              <div className="absolute inset-0 w-[200%] h-[200%] bg-linear-to-br from-white/60 via-white/30 to-transparent -translate-x-full -translate-y-full animate-glow"></div>
              <span className="relative z-10">Start Learning</span>
            </motion.button>
          </Link>

          <Link href="/courses" className="w-full sm:w-auto">
            <button
              className="w-full sm:w-auto h-14 px-6 sm:px-10
                flex items-center justify-center
                border border-gray-400 text-gray-800
                rounded-lg font-bold bg-transparent cursor-pointer"
            >
              Explore Courses
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;
