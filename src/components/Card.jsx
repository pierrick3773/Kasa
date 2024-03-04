import { AnnounceCard } from "./AnnonceCard.jsx";

export function Card({ annoncesData }) {
  return (
    <section className="card-container">
      {annoncesData.map((annonce, index) => (
        <AnnounceCard key={index} cover={annonce.cover} titre={annonce.title} />
      ))}
    </section>
  );
}
