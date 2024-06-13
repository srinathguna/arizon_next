"use client";
import React, { useState } from "react";
import { ProductList } from "../public/src/products";

const Products = ({ productsPerPage, currentPage }) => {
  // console.log(productsPerPage, onSelectPage);

  // Calculate the products to display on the current page
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = ProductList.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {currentProducts.map((item) => (
          <div key={item.id} className="bg-white overflow-hidden">
            <a href="#">
              <img
                className="w-full h-48 object-cover object-center p-4"
                src={item.src}
                alt="product"
              />
            </a>
            <div className="p-4">
              <a
                href="#"
                className="text-lg font-medium text-gray-900 underline"
              >
                {item.name}
              </a>
              <p className="text-sm font-semibold text-gray-700">
                {item.brand}
              </p>
              <div className="justify-between mt-4">
                <span className="text-base font-medium text-gray-900">
                  {item.price}
                </span>
                <div className="flex justify-center items-center mt-6">
                  <input
                    id={`compare-${item.id}`}
                    type="checkbox"
                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 focus:ring-2"
                  />
                  <label
                    htmlFor={`compare-${item.id}`}
                    className="ml-2 text-sm font-medium text-gray-900"
                  >
                    <a href="#" className="text-black">
                      SAVE/COMPARE
                    </a>
                  </label>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
