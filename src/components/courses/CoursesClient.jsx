"use client";

import { usePathname } from "next/navigation";
import { useState } from "react";
import CourseCard from "./CourseCard";
import EmptyCard from "./EmptyCard";

const CoursesClient = ({ courses = [] }) => {
  const pathname = usePathname();
  const [search, setSearch] = useState("");

  const isHome = pathname === "/";
  const isCoursesPage = pathname.startsWith("/courses");

  // Sort by rating
  const topRatedCourse = [...courses].sort(
    (a, b) => (b.rating || 0) - (a.rating || 0),
  );

  // Home shows only top 4
  const allCourses = isHome ? topRatedCourse.slice(0, 4) : courses;

  // Safe search filter
  const filteredCourses =
  isCoursesPage && search.trim() !== ""
    ? allCourses.filter((course) => {
        const title = course.title?.toLowerCase() || "";
        const instructor = course.instructor?.toLowerCase() || "";
        const category = course.category?.toLowerCase() || "";
        const query = search.toLowerCase();

        return (
          title.includes(query) ||
          instructor.includes(query) ||
          category.includes(query)
        );
      })
    : allCourses;

  return (
    <section className="min-h-screen w-full max-w-7xl mx-auto px-4 md:px-6 lg:px-0 mt-20 mb-20">
      {/* Title */}
      <div className="text-center mb-12">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white">
          {isHome ? "Top Rated Courses" : "All Courses"}
        </h2>

        <p className="text-gray-500 dark:text-gray-400 mt-2">
          {isHome
            ? "Explore the most popular courses on SkillSphere"
            : "Browse all courses and start learning today"}
        </p>

        {/* Search Input */}
        {isCoursesPage && (
          <div className="w-full max-w-xl mx-auto mt-4">
            <input
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search your course here..."
              className="border border-gray-300 px-4 py-2 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-purple-400"
            />
          </div>
        )}
      </div>

      {/* Grid */}
      {filteredCourses.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {filteredCourses.map((course) => (
            <CourseCard key={course.id} course={course} />
          ))}
        </div>
      ) : (
        <EmptyCard />
      )}
    </section>
  );
};

export default CoursesClient;
