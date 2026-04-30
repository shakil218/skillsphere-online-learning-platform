import Image from "next/image";
import mainImg from "@/assets/Virtual Workspace.png";
import bookImg from "@/assets/Learning & Legacy.png";

const LearnSection = () => {
  return (
    <section className="bg-gray-50">
      <div className="max-w-5xl mx-auto px-4">
        {/* Title */}
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-semibold text-center mb-12 text-gray-800">
            SkillSphere – Build Real Skills, One Course at a Time
          </h2>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="relative w-full h-64 md:h-full rounded-2xl overflow-hidden md:col-span-2 md:row-span-2">
            <Image src={mainImg} alt="learning" fill className="object-cover" />
          </div>
          <div className="bg-white rounded-2xl p-6 shadow-sm md:col-span-2 md:row-span-1">
            <p className="text-sm text-gray-400 mb-3">The concept</p>
            <p className="text-gray-600 text-sm leading-relaxed">
              SkillSphere is a skill-focused learning platform where you can
              master in-demand fields like web development through structured,
              easy-to-follow courses. Each course is designed with clear levels,
              durations, and expert guidance to help you go from beginner to
              confident.
            </p>
          </div>
          <div className="relative w-full h-48 md:h-full rounded-xl overflow-hidden md:col-span-1 md:row-span-1">
            <Image src={bookImg} alt="book" fill className="object-cover" />
          </div>
          <div className="bg-white rounded-2xl p-4 shadow-sm flex gap-4 items-center md:col-span-1 md:row-span-1">
            <div>
              <p className="text-sm text-gray-400 mb-2">Your pace</p>
              <p className="text-gray-600 text-sm leading-relaxed">
                Start with beginner-friendly courses, track your progress, and
                learn at your own speed. With flexible durations and highly
                rated instructors, you can build real-world skills without
                pressure or rigid schedules.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LearnSection;
