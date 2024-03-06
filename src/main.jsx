import React from "react";
import ReactDOM from "react-dom/client";
// import App from "./App.jsx";
import "./style/index.css";
import "./style/header.css";
import "./style/footer.css";
import "./style/home.css";
import "./style/card.css";
import "./style/fiche-logement.css";
import "./style/tags.css";
import { Header } from "./components/Header.jsx";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Footer } from "./components/Footer.jsx";
import { Home } from "./pages/Home.jsx";
import annoncesData from "./json/logement.json";
import { FicheLogement } from "./pages/Fiche-Logement.jsx";

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
      </Routes>
    </main>
    <Footer />
    {/* <App /> */}
  </BrowserRouter>
);
