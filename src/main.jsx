import React from "react";
import ReactDOM from "react-dom/client";

import "./style/index.scss";
import "./style/header.scss";
import "./style/footer.scss";
import "./style/home.scss";
import "./style/card.scss";
import "./style/fiche-logement.scss";
import "./style/tags.scss";
import "./style/banner.scss";
import { Header } from "./components/Header.jsx";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Footer } from "./components/Footer.jsx";
import { Home } from "./pages/Home.jsx";
import annoncesData from "./data/logement.json";
import { FicheLogement } from "./pages/Fiche-Logement.jsx";
import { Apropos } from "./pages/A-Propos.jsx";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  // a priori obligé de faire cette manimp parceque le projet est sur reactrouter17
  // et moi je suis sur le 18 ! mais la div root fou le bordel pour la mise en page du footer (bordel réglé mais je suis toujours pas sur que mon rooter soit bon)
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
    {/* <App /> */}
  </BrowserRouter>
);
