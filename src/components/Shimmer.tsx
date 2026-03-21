const Shimmer = () => {
  return (
    <div className="flex flex-wrap justify-center gap-6 mt-10">
    
      {Array(12).fill("").map((_, index) => (
        <div key={index} className="w-64 h-96 border border-gray-100 rounded-2xl p-4 shadow-sm animate-pulse">
          <div className="w-full h-48 bg-gray-200 rounded-xl mb-4"></div>
          <div className="w-3/4 h-6 bg-gray-200 rounded-md mb-3"></div>
          <div className="w-1/2 h-4 bg-gray-200 rounded-md mb-6"></div>
          <div className="w-full h-10 bg-gray-100 rounded-md"></div>
        </div>
      ))}
    </div>
  );
};

export default Shimmer;