export async function getAllCourseData() {
  const res = await fetch("http://localhost:3000/data/courseData.json", {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed to fetch courses");
  }

  return res.json();
}