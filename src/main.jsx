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
