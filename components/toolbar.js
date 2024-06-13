"use client";
import React, { useState } from "react";
import Sort from "./toolbars/sort";
import Pagination from "./toolbars/pagination";
import { ProductList } from "../public/src/products";

export default function Toolbar({ onsetProductPerPage, onSelectPage }) {
  const [currentPage, setCurrentPage] = useState(1);
  const [productsPerPage, setProductsPerPage] = useState(4);

  // Change page
  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
    onSelectPage(pageNumber);
  };

  // Change products per page
  const handleProductsPerPageChange = (e) => {
    setProductsPerPage(Number(e.target.value));
    onsetProductPerPage(Number(e.target.value));
    setCurrentPage(1); // Reset to first page when products per page changes
    onSelectPage(1);
  };

  return (
    <>
      <div class="max-w-screen-xl mx-auto">
        <div class="flex flex-wrap my-6">
          <div class="w-full sm:w-12/12 xl:w-6/12">
            <Sort />
          </div>
          <div class="w-full sm:w-12/12 xl:w-6/12">
            <Pagination
              productsPerPage={productsPerPage}
              totalProducts={ProductList.length}
              paginate={paginate}
              currentPage={currentPage}
              handleProductsPerPageChange={handleProductsPerPageChange}
            />
          </div>
        </div>
      </div>
    </>
  );
}
