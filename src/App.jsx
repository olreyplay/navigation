import React, { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import Loader from "./Loader/Loader";

const HomePage = lazy(() => import("./HomePage/HomePage"));
const AboutPage = lazy(() => import("./AboutPage/AboutPage"));
const ProductsPage = lazy(() => import("./ProductsPage/ProductsPage"));

const App = () => {
  return (
    <>
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/products" element={<ProductsPage />} />
        </Routes>
      </Suspense>
    </>
  );
};

export default App;
