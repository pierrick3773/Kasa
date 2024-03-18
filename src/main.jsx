import React from "react";
import ReactDOM from "react-dom/client";
import "./style/_index.scss";
import "./style/_header.scss";
import "./style/_footer.scss";
import "./style/_home.scss";
import "./style/_card.scss";
import "./style/_fiche-logement.scss";
import "./style/_tags.scss";
import "./style/_banner.scss";
import "./style/_collapse.scss";
import "./style/_slide.scss";
import "./style/_a-propos.scss";
import "./style/_ratings.scss";
import { Header } from "./components/Header.jsx";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Footer } from "./components/Footer.jsx";
import { Home } from "./pages/Home.jsx";
import annoncesData from "./data/logement.json";
import { FicheLogement } from "./pages/Fiche-Logement.jsx";
import { Apropos } from "./pages/A-Propos.jsx";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Header />
    <main>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/logement/:id" element={<FicheLogement />} />
        <Route path="/apropos" element={<Apropos />} />
      </Routes>
    </main>
    <Footer />
  </BrowserRouter>
);
