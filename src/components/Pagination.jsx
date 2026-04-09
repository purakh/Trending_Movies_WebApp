import "font-awesome/css/font-awesome.min.css";
import React from "react";

function Pagination({ handlePrev, handleNext, page }) {
  return (
    <div className="flex justify-center items-center gap-6 mt-6">
      
      <button
        onClick={handlePrev}
        className="flex items-center justify-center w-10 h-10 
        rounded-full bg-gray-200 hover:bg-gray-300 
        transition duration-300 shadow-sm"
      >
        <i className="fa fa-chevron-left"></i>
      </button>

      {/* Page Number */}
      <div className="px-5 py-2 rounded-lg bg-gray-900/90 backdrop-blur text-white font-semibold shadow-lg">
        {page}
      </div>

      {/* Next Button */}
      <button
        onClick={handleNext}
        className="flex items-center justify-center w-10 h-10 
        rounded-full bg-gray-200 hover:bg-gray-300 
        transition duration-300 shadow-sm"
      >
        <i className="fa fa-chevron-right"></i>
      </button>

    </div>
  );
}

export default Pagination;