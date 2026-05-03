import Image from "next/image";
import { getNextCourseData } from "@/data/getData";

const NewReleaseCourse = async () => {
  const courses = await getNextCourseData();

  return (
    <section className="max-w-7xl mx-auto px-4">
      {/* Header */}
      <div className="text-center pb-10 max-w-lg mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">Next Release</h2>
          <p className="text-lg text-gray-600">Stay tuned for upcoming courses designed to take your learning to the next level.</p>
        </div>

      {/* Grid */}
      <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-4">
        {courses?.map((course) => (
          <div
            key={course.id}
            className="group bg-white dark:bg-neutral-900 rounded-xl shadow-md overflow-hidden hover:shadow-xl transition duration-300"
          >
            {/* Image */}
            <div className="relative h-40 w-full overflow-hidden">
              <Image
                src={course.image}
                alt={course.title}
                fill
                className="object-cover group-hover:scale-110 transition duration-300"
              />

              {/* NEW Badge */}
              <span className="absolute top-2 left-2 bg-indigo-600 text-white text-xs px-2 py-1 rounded-md shadow">
                NEW
              </span>
            </div>

            {/* Content */}
            <div className="p-4 space-y-2">
              <h3 className="font-semibold text-lg line-clamp-2">
                {course.title}
              </h3>

              <p className="text-sm text-gray-500">
                {course.instructor}
              </p>

              <div className="flex items-center justify-between text-sm">
                <span className="text-indigo-400 font-medium">
                  {course.rating}
                </span>

                <span className="text-gray-400">
                  {course.duration}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default NewReleaseCourse;