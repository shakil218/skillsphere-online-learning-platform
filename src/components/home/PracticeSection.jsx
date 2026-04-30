import Image from "next/image";
import { Sparkles } from "lucide-react";
import practiceBgImg from "@/assets/practice-bg-img.png"

const PracticeSection = () => {
  return (
    <section className="px-4 lg:px-0 py-20">
      
        {/* Image Container */}
        <div className="relative rounded-2xl overflow-hidden">
          {/* Background Image */}
          <Image
            src={practiceBgImg}
            alt="Practice"
            width={1200}
            height={600}
            className="w-full h-100 md:h-125 object-cover"
          />

          {/* Floating Card */}
          <div className="absolute left-6 md:left-16 lg:left-1/6 top-1/2 -translate-y-1/2">
            <div className="bg-white/80 backdrop-blur-md rounded-2xl p-6 w-64 shadow-md">
              {/* Icon */}
              <div className="mb-3">
                <span className="bg-orange-400 p-2 rounded-lg inline-block">
                  <Sparkles size={16} className="text-white" />
                </span>
              </div>

              {/* Text */}
              <h3 className="text-sm font-semibold text-gray-800">
                Built for practice
              </h3>

              <p className="text-xs text-gray-500 mt-2 leading-relaxed">
                The lab combines a growing library of materials with regular
                live conversation practice
              </p>
            </div>
          </div>
        </div>
      
    </section>
  );
};

export default PracticeSection;
