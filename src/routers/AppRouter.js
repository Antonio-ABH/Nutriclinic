import React from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "../pages/HomePage";
import AboutPage from "../pages/AboutPage";
import Services from "../pages/Services";

const AppRouter = () => {
  return (
    <Routes>
      <Route exact path="/home" element={<HomePage />} />
      <Route exact path="/nosotros" element={<AboutPage />} />
      <Route exact path="/servicios" element={<Services />} />
    </Routes>
  );
};

export default AppRouter;
