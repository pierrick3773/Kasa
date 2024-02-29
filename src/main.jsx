import React from "react";
import ReactDOM from "react-dom/client";
// import App from "./App.jsx";
import "./index.css";
import { Header } from "./header.jsx";
import { BrowserRouter } from "react-router-dom";
import { Card } from "./Card.jsx";
import { Footer } from "./Footer.jsx";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  // a priori obligé de faire cette manimp parceque le projet est sur reactrouter17
  // et moi je suis sur le 18 ! mais la div root fou le bordel pour la mise en page du footer
  <BrowserRouter>
    <Header />
    <main>
      <section className="card-container">
        <Card src="https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-2-1.jpg" />
        <Card src="https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-20-1.jpg" />
        <Card src="https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-1-1.jpg" />
        <Card src="https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-3-1.jpg" />
        <Card src="https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-4-1.jpg" />
        <Card src="https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-5-1.jpg" />
      </section>
    </main>
    <Footer />
    {/* <App /> */}
  </BrowserRouter>
);
