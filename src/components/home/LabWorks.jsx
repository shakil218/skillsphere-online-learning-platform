"use client"
import Image from "next/image";
import labImage1 from "@/assets/lab-img1.png";
import labImage2 from "@/assets/lab-img2.png";
import { motion } from "framer-motion";

const LabWorks = () => {
  return (
    <section className="bg-base-100">
      <div className="max-w-6xl mx-auto px-4 space-y-10">
        {/* Header */}
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-semibold text-gray-800">
            How SkillSphere Lab works
          </h2>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-6">
          {/* Left Card */}
          <div className="bg-white rounded-2xl p-6 flex flex-col justify-between">
            <div>
              <p className="text-sm text-gray-400 mb-4">The idea</p>
              <p className="text-gray-700 text-sm leading-relaxed mb-3">
                SkillSphere is built for consistent, stress-free learning. You
                can explore courses, practice regularly, and build real skills
                over time.
              </p>
              <p className="text-gray-500 text-sm">
                Stay connected, track progress, and grow at your own pace.
              </p>
            </div>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="relative btn bg-[linear-gradient(135deg,#4b5964,#2f3a42,#0f1113)] text-white rounded-lg px-4 font-bold overflow-hidden shadow-xl"
            >
              <div className="absolute inset-0 w-[200%] h-[200%] bg-linear-to-br from-white/60 via-white/30 to-transparent -translate-x-full -translate-y-full animate-glow transition-all"></div>

              <span className="relative z-10">Try SkillSphere</span>
            </motion.button>
          </div>

          {/* Middle Card */}
          <div className="relative h-80 rounded-2xl overflow-hidden">
            <Image
              src={labImage1}
              alt="Join SkillSphere"
              fill
              className="object-cover"
            />

            {/* Badge */}
            <span className="absolute top-3 left-3 bg-white text-xs px-3 py-1 rounded-full shadow">
              1 — Join
            </span>

            {/* Bottom Text */}
            <div className="absolute bottom-3 left-3 right-3 bg-white/90 backdrop-blur p-3 rounded-xl text-sm text-gray-700">
              Start your journey by joining SkillSphere and get access to all
              courses and learning materials.
            </div>
          </div>

          {/* Right Card */}
          <div className="relative h-80 rounded-2xl overflow-hidden">
            <Image
              src={labImage2}
              alt="Learn and practice"
              fill
              className="object-cover"
            />

            {/* Badge */}
            <span className="absolute top-3 left-3 bg-white text-xs px-3 py-1 rounded-full shadow">
              2 — Learn & Practice
            </span>

            {/* Bottom Text */}
            <div className="absolute bottom-3 left-3 right-3 bg-white/90 backdrop-blur p-3 rounded-xl text-sm text-gray-700">
              Explore structured lessons, practice regularly, and build real
              skills at your own pace.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LabWorks;