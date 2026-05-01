import { getAllCourseData } from "@/data/getData";
import CoursesClient from "./CoursesClient";
import Loading from "../share/Loading";

const Courses = async () => {
  const courses = await getAllCourseData();

  return <CoursesClient courses={courses} />;
};

export default Courses;
