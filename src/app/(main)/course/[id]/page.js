import CourseDetailsClient from "@/components/courses/CourseDetailsClient";
import { getAllCourseData } from "@/data/getData";

export async function generateMetadata({ params }) {
  const { id } = await params;
  const courses = await getAllCourseData(id);
  const course = courses.find((c) => c.id === Number(id));

  if (!course) {
    return {
      title: "Course Not Found | SkillSphere",
      description: "The requested course could not be found.",
    };
  }

  return {
    title: `${course.title} | SkillSphere`,
    description: course.description,
  };
}

const CourseDetailsPage = async ({ params }) => {
  const { id } = await params;
  const allCourse = await getAllCourseData();
  const course = allCourse.find((c) => c.id === Number(id));

  return (
    <div className="min-h-[calc(100vh-301.4px)]">
      <CourseDetailsClient course={course} />;
    </div>
  );
};

export default CourseDetailsPage;
