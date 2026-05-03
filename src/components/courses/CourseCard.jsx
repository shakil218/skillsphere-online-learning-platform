import { Star } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const CourseCard = ({ course }) => {
  return (
    <Link
      href={`/course/${course.id}`}
      className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition hover:scale-105 flex flex-col h-full"
    >
      <div className="p-3 flex flex-col h-full">
        {/* Image */}
        <div className="w-full h-40 overflow-hidden rounded-lg">
          <Image
            src={course.image}
            alt={course.title}
            width={400}
            height={250}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Content */}
        <div className="flex flex-col grow mt-3">
          <h3 className="text-lg font-semibold text-gray-900 line-clamp-2">
            {course.title}
          </h3>

          <p className="text-sm text-gray-500 mt-1">{course.instructor}</p>

          {/* Rating */}
          <div className="mt-auto pt-4">
            <div className="flex justify-between items-center text-sm text-gray-600">
              <div className="flex items-center gap-2">
                <Star size={16} fill="#EAB308" color="#EAB308" />
                <span className="text-gray-700">{course.rating}</span>
              </div>
              <span>{course.duration}</span>
            </div>

            <span className="inline-block mt-3 text-xs bg-purple-100 text-purple-600 px-2 py-1 rounded">
              {course.level}
            </span>
          </div>
        </div>

        {/* Button */}
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="relative mt-4 w-full bg-[linear-gradient(135deg,#4b5964,#2f3a42,#0f1113)] text-white rounded-lg px-4 py-2 font-bold shadow-xl"
          suppressHydrationWarning
        >
          <div className="absolute inset-0 w-[200%] h-[200%] bg-linear-to-br from-white/60 via-white/30 to-transparent -translate-x-full -translate-y-full animate-glow transition-all"></div>
          <span className="relative z-10">View Details</span>
        </motion.button>
      </div>
    </Link>
  );
};

export default CourseCard;
