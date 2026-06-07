// src/components/common/Loader.jsx
const Loader = () => {
  return (
    <div className="fixed inset-0 bg-white bg-opacity-90 flex items-center justify-center z-50">
      <div className="text-center">
        <div className="w-16 h-16 border-4 border-[#1E2A5A] border-t-[#FF9B50] rounded-full animate-spin mx-auto"></div>
        <p className="mt-4 text-[#1E2A5A] font-semibold">Loading...</p>
      </div>
    </div>
  );
};

export default Loader;