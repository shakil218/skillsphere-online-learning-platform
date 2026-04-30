import Image from "next/image";
import multimodalLearning from "@/assets/Multimodal-Learning.png";
import virtualConnection from "@/assets/Virtual-Connection.png";
import watchTutorial from "@/assets/watch-tutorial.png";

const WhatYouGetSection = () => {
  return (
    <section className="bg-gray-100 pt-16">
      <div className="max-w-5xl mx-auto px-4 space-y-10">
        {/* Header */}
        <div className="text-center max-w-xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-semibold text-gray-800">
            What you get right now
          </h2>
          <p className="text-gray-500 text-sm mt-3">
            SkillSphere – Online Learning Platform gives you full access to
            structured courses, expert guidance, and continuously growing
            learning resources.
          </p>
        </div>

        {/* Top Images */}
        <div className="grid md:grid-cols-2 gap-5">
          <div className="relative h-44 rounded-2xl overflow-hidden">
            <Image
              src={multimodalLearning}
              alt="Multimodal learning"
              fill
              className="object-cover"
            />
          </div>

          <div className="relative h-44 rounded-2xl overflow-hidden">
            <Image
              src={virtualConnection}
              alt="Virtual learning"
              fill
              className="object-cover"
            />
          </div>
        </div>

        {/* Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <div className="bg-white rounded-2xl p-6 text-center shadow-sm">
            <h3 className="text-2xl font-semibold text-gray-800">20+ Hours</h3>
            <p className="text-sm font-medium text-gray-700 mt-1">
              Structured Courses
            </p>
            <p className="text-xs text-gray-400 mt-1">
              Learn full-stack development step by step
            </p>
          </div>

          <div className="bg-white rounded-2xl p-6 text-center shadow-sm">
            <h3 className="text-2xl font-semibold text-gray-800">4.8+</h3>
            <p className="text-sm font-medium text-gray-700 mt-1">
              Student Satisfaction
            </p>
            <p className="text-xs text-gray-400 mt-1">
              Trusted by learners worldwide
            </p>
          </div>

          <div className="bg-white rounded-2xl p-6 text-center shadow-sm">
            <h3 className="text-2xl font-semibold text-gray-800">
              Beginner Friendly
            </h3>
            <p className="text-sm font-medium text-gray-700 mt-1">
              Skill Levels
            </p>
            <p className="text-xs text-gray-400 mt-1">
              Start from zero and grow confidently
            </p>
          </div>

          <div className="bg-white rounded-2xl p-6 text-center shadow-sm">
            <h3 className="text-2xl font-semibold text-gray-800">
              Development
            </h3>
            <p className="text-sm font-medium text-gray-700 mt-1">
              In-demand Category
            </p>
            <p className="text-xs text-gray-400 mt-1">
              Learn real-world tech skills
            </p>
          </div>
        </div>

        {/* Full Width Card */}
        <div className="bg-white rounded-2xl p-6 text-center shadow-sm">
          <h3 className="text-lg font-semibold text-gray-800">
            Complete Web Development Bootcamp
          </h3>
          <p className="text-sm text-gray-500 mt-2">
            Learn full-stack web development from scratch with real-world
            projects, expert instructors, and structured lessons designed to
            make you job-ready.
          </p>
          <p className="text-xs text-gray-400 mt-1">Instructor: John Doe</p>
        </div>

        {/* Bottom Image */}
        <div className="relative h-44 rounded-2xl overflow-hidden">
          <Image
            src={watchTutorial}
            alt="Learning experience"
            fill
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default WhatYouGetSection;
