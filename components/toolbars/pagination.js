import React from "react";

const Pagination = ({
  productsPerPage,
  totalProducts,
  paginate,
  currentPage,
  handleProductsPerPageChange,
}) => {
  const totalPages = Math.ceil(totalProducts / productsPerPage);
  const options = [4, 8, 12, 16];
  return (
    <div className="w-full flex justify-between items-center">
      <div className="flex justify-center items-center">
        {Array.from({ length: totalPages }, (_, index) => (
          <button
            key={index + 1}
            onClick={() => paginate(index + 1)}
            className={`mx-1 px-3 py-1 rounded ${
              currentPage === index + 1
                ? "bg-white border text-blue-500"
                : "bg-white text-black"
            }`}
          >
            {index + 1}
          </button>
        ))}
      </div>
      <div className="flex items-center justify-between">
        <label
          htmlFor="productsPerPage"
          className="mr-2 text-sm font-medium text-gray-900"
        >
          Show:
        </label>
        <select
          id="productsPerPage"
          value={productsPerPage}
          onChange={handleProductsPerPageChange}
          className="text-black border border-gray-300 rounded p-1"
        >
          {options.map((item) => (
            <option value={item}>{item}</option>
          ))}
        </select>
        <div className="text-black px-2 w-full">
          Page {currentPage} of {totalPages}
        </div>
      </div>
    </div>
  );
};

export default Pagination;
