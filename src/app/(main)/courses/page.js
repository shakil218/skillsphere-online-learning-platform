import Courses from '@/components/courses/Courses';

export const metadata = {
  title: "Courses | SkillSphere",
  description:
    "Explore all courses on SkillSphere and upgrade your skills in web development, design, and more.",
};

const CoursePage = () => {
  return (
    <div className='min-h-[calc(100vh-301.4px)]'>
      <Courses />
    </div>
  );
};

export default CoursePage;