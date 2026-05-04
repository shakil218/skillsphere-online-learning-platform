export const getAllCourseData = async () => {
  const res = await fetch(
    `${process.env.BETTER_AUTH_URL}/courseData.json`,
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
    `${process.env.BETTER_AUTH_URL}/newCourseData.json`,
    {
      cache: "no-store",
    },
  );

  if (!res.ok) {
    throw new Error("Failed to fetch courses");
  }

  return res.json();
};
