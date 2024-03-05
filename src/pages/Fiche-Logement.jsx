import { useParams } from "react-router-dom";
import annoncesData from "../json/logement.json";
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
    <div>
      <Slide pictures={annonce.pictures} />
      <h1>{titre}</h1>
      <p>{location}</p>
      <p>{nameHost}</p>
      <img src={pictureHost} alt="photo du proprietaire" />
      <Tags tags={tags} />
    </div>
  );
}
