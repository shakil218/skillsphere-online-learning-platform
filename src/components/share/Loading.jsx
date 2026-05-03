const Loading = () => {
  return (
    <div className="min-h-[calc(100vh-301.4px)] flex flex-col justify-center items-center gap-4">
      <div className="flex w-1/3 flex-col gap-4">
        <div className="skeleton h-32 w-full"></div>
        <div className="skeleton h-4 w-28"></div>
        <div className="skeleton h-4 w-full"></div>
        <div className="skeleton h-4 w-full"></div>
      </div>
      <p className="text-gray-500 text-sm md:text-base">
        Loading, please wait...
      </p>
    </div>
  );
};

export default Loading;
