import React from "react";
import ReactDOM from "react-dom/client";
// import App from "./App.jsx";
import "./index.css";
import { Header } from "./header.jsx";
import { BrowserRouter } from "react-router-dom";
import { Card } from "./Card.jsx";
import { Footer } from "./Footer.jsx";
import annoncesData from "../logement.json";
console.log(annoncesData);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  // a priori obligé de faire cette manimp parceque le projet est sur reactrouter17
  // et moi je suis sur le 18 ! mais la div root fou le bordel pour la mise en page du footer (bordel réglé mais je suis toujours pas sur que mon rooter soit bon)
  <BrowserRouter>
    <Header />
    <main>
      <section className="card-container">
        {annoncesData.map((annonce, index) => (
          <Card key={index} src={annonce.cover} />
        ))}
      </section>
    </main>
    <Footer />
    {/* <App /> */}
  </BrowserRouter>
);
