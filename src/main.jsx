import React from "react";
import ReactDOM from "react-dom/client";
// import App from "./App.jsx";
import "./index.css";
import { Header } from "./header.jsx";
import { BrowserRouter } from "react-router-dom";
import { Card } from "./Card.jsx";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Header />
    <main>
      <section className="card-container">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </section>
    </main>

    {/* <App /> */}
  </BrowserRouter>
);
