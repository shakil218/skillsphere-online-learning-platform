import { Star } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const CourseCard = ({ course }) => {
  return (
    <Link
    href={'/profile'}
      key={course.id}
      className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition flex flex-col h-full hover:scale-105"
    >
      <div className="px-3">
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
      <div className="p-4 flex flex-col grow">
        <h3 className="text-lg font-semibold text-gray-900 line-clamp-2">
          {course.title}
        </h3>

        <p className="text-sm text-gray-500 mt-1">{course.instructor}</p>

        {/* RATING */}
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
      </div>
    </Link>
  );
};

export default CourseCard;
