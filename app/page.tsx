"use client";
import React, { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Fillter from "../components/Fillter";
import Products from "../components/products";
import Toolbar from "../components/toolbar";

export default function Home() {
  const [productsPerPage, setProductPerPage] = useState(4);
  const [currentPage, setCurrentPage] = useState(4);
  return (
    <>
      <Header />
      <Toolbar
        onsetProductPerPage={setProductPerPage}
        onSelectPage={setCurrentPage}
      />
      <div className="max-w-screen-xl mx-auto flex flex-wrap sm:flex-nowrap">
        <Fillter />
        <Products productsPerPage={productsPerPage} currentPage={currentPage} />
      </div>
      <Toolbar
        onsetProductPerPage={setProductPerPage}
        onSelectPage={setCurrentPage}
      />
      <Footer />
    </>
  );
}
