const Loading = () => {
  return (
    <div className="min-h-[60vh] flex flex-col items-center justify-center gap-4">
      {/* Spinner */}
      <div className="w-12 h-12 border-4 border-gray-200 border-t-purple-600 rounded-full animate-spin" />

      {/* Text */}
      <p className="text-gray-500 text-sm md:text-base">
        Loading, please wait...
      </p>
    </div>
  );
};

export default Loading;