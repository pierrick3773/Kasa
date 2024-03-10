import { useParams } from "react-router-dom";
import annoncesData from "../data/logement.json";
import { Slide } from "../components/Slide";
import { Tags } from "../components/Tags";

export function FicheLogement() {
  const { id } = useParams();
  const annonce = annoncesData.find((annonce) => annonce.id === id);

  if (!annonce) {
    return <div>Aucune annonce trouvée pour cet identifiant.</div>;
  }

  const titre = annonce.title;
  const location = annonce.location;
  const nameHost = annonce.host.name;
  const pictureHost = annonce.host.picture;
  const tags = annonce.tags;

  return (
    <div className="fiche-logement">
      <Slide pictures={annonce.pictures} />
      <section className="top">
        <div className="title">
          <h2>{titre}</h2>
          <p>{location}</p>
        </div>
        <div className="host">
          <p>{nameHost}</p>
          <img src={pictureHost} alt="photo du proprietaire" />
        </div>
      </section>
      <Tags tags={tags} />
    </div>
  );
}
