import { SearchX } from "lucide-react";
import React from "react";

const EmptyCard = () => {
  return (
    <div className="w-full flex flex-col items-center justify-center text-center bg-purple-100 rounded-xl">
      <SearchX className="w-12 h-12 text-purple-600 mb-4" />

      <h3 className="text-xl font-bold">No courses found</h3>

      <p className="text-gray-500 max-w-sm mt-2">
        Try a different keyword or browse all courses.
      </p>
    </div>
  );
};

export default EmptyCard;
