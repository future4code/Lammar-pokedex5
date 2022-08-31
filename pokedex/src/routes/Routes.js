import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import DetailsPage from "../pages/detailsPage/DetailsPage";
import HomePage from "../pages/homePage/HomePage";
import Pokedex from "../pages/pokedex/Pokedex";

const Rotas = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/pokedex" element={<Pokedex />} />
        <Route path="/details-page" element={<DetailsPage />} />
      </Routes>
    </BrowserRouter>
  );
};
export default Rotas;
