import { Compass, Clock, Code } from "lucide-react";

const HowItWorks = () => {
  return (
    <section className="bg-gray-50">
      <div className="max-w-5xl mx-auto px-4">
        {/* Title */}
        <h2 className="text-center text-2xl md:text-3xl font-semibold text-gray-800 mb-12">
          How this works in practice
        </h2>

        <div className="flex flex-col gap-6">
          {/* Card 1 */}
          <div className="w-full md:w-[65%] bg-white rounded-2xl p-5 shadow-sm flex gap-4 items-start hover:shadow-xl">
            <div className="bg-orange-100 text-orange-500 p-2 rounded-lg">
              <Compass size={18} />
            </div>
            <div>
              <h3 className="text-sm font-medium text-gray-800">
                Explore structured courses
              </h3>
              <p className="text-xs text-gray-500 mt-1 leading-relaxed">
                Browse courses with clear levels, durations, and expert
                instructors— so you always know what you’re learning.
              </p>
            </div>
          </div>

          {/* Card 2 */}
          <div className="w-full md:w-[75%] md:ml-auto bg-white rounded-2xl p-5 shadow-sm flex gap-4 items-start hover:shadow-xl">
            <div className="bg-orange-100 text-orange-500 p-2 rounded-lg">
              <Clock size={18} />
            </div>
            <div>
              <h3 className="text-sm font-medium text-gray-800">
                Learn at your own pace
              </h3>
              <p className="text-xs text-gray-500 mt-1 leading-relaxed">
                Study anytime with flexible durations. Track your progress and
                stay consistent without pressure.
              </p>
            </div>
          </div>

          {/* Card 3 */}
          <div className="w-full md:w-[65%] md:ml-auto bg-white rounded-2xl p-5 shadow-sm flex gap-4 items-start hover:shadow-xl">
            <div className="bg-orange-100 text-orange-500 p-2 rounded-lg">
              <Code size={18} />
            </div>
            <div>
              <h3 className="text-sm font-medium text-gray-800">
                Build real-world skills
              </h3>
              <p className="text-xs text-gray-500 mt-1 leading-relaxed">
                Apply your knowledge through practical projects and become
                job-ready with real development experience.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
