import CourseDetailsClient from "@/components/courses/CourseDetailsClient";
import { getAllCourseData, getNextCourseData } from "@/data/getData";

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
