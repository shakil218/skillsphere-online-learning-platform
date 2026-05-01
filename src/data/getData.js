export async function getAllCourseData() {
  const res = await fetch("https://skillsphere-online-learning-web.vercel.app/data/courseData.json", {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed to fetch courses");
  }

  return res.json();
}