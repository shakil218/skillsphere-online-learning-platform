export const getAllCourseData = async () => {
  const res = await fetch("http://localhost:3000/data/courseData.json", {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed to fetch courses");
  }

  return res.json();
};

export const getNextCourseData = async () => {
  const res = await fetch("http://localhost:3000/data/newCourseData.json", {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed to fetch courses");
  }

  return res.json();
};
