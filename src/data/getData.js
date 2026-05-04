export const getAllCourseData = async () => {
  const res = await fetch(
    `https://skillsphere-online-learning-web.vercel.app/courseData.json`,
    {
      cache: "no-store",
    },
  );

  if (!res.ok) {
    throw new Error("Failed to fetch courses");
  }

  return res.json();
};

export const getNextCourseData = async () => {
  const res = await fetch(
    `https://skillsphere-online-learning-web.vercel.app/newCourseData.json`,
    {
      cache: "no-store",
    },
  );

  if (!res.ok) {
    throw new Error("Failed to fetch courses");
  }

  return res.json();
};
