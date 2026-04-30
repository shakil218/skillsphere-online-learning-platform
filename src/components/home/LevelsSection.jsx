import Image from "next/image";
import levelImg1 from "@/assets/level-image-1.png";
import levelImg2 from "@/assets/level-image-2.png";
import levelImg3 from "@/assets/level-image-3.png";

const LevelsSection = () => {
  return (
    <section className="py-16 bg-[#f5f5f5]">
      {/* Heading */}
      <h2 className="text-center text-4xl md:text-5xl font-bold text-gray-800 mb-20">
        Built for all levels
      </h2>

      <div className="max-w-5xl mx-auto flex flex-col gap-6">
        {/* Card 1 */}
        <div className="w-full md:w-[65%] bg-white rounded-2xl p-5 shadow-sm flex gap-4 items-center hover:shadow-xl">
          <div className="w-40 h-28 overflow-hidden rounded-xl">
            <Image
              src={levelImg1}
              alt="Advanced"
              width={160}
              height={120}
              className="w-full h-full object-cover"
            />
          </div>
          <div>
            <h3 className="text-md font-semibold text-gray-800">Beginners</h3>
            <p className="text-xs text-gray-500 mt-1 leading-relaxed">
              Start with the Foundations mini-course and build a solid base step
              by step
            </p>
          </div>
        </div>

        {/* Card 2 */}
        <div className="w-full md:w-[70%] md:mx-auto bg-white rounded-2xl p-5 shadow-sm flex gap-4 items-center hover:shadow-xl">
          <div className="w-40 h-28 overflow-hidden rounded-xl">
            <Image
              src={levelImg2}
              alt="Advanced"
              width={160}
              height={120}
              className="w-full h-full object-cover"
            />
          </div>
          <div>
            <h3 className="text-md font-semibold text-gray-800">Intermediate</h3>
            <p className="text-xs text-gray-500 mt-1 leading-relaxed">
              Practice speaking, expand vocabulary, and understand grammar in
              context
            </p>
          </div>
        </div>

        {/* Card 3 */}
        <div className="w-full md:w-[65%] md:ml-auto bg-white rounded-2xl p-5 shadow-sm flex gap-4 items-center hover:shadow-xl">
          <div className="w-40 h-28 overflow-hidden rounded-xl">
            <Image
              src={levelImg3}
              alt="Advanced"
              width={160}
              height={120}
              className="w-full h-full object-cover"
            />
          </div>
          <div>
            <h3 className="text-md font-semibold text-gray-800">Advanced</h3>
            <p className="text-xs text-gray-500 mt-1 leading-relaxed">
              Stay fluent, refine your speech, and think in Russian through
              regular practice
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LevelsSection;
