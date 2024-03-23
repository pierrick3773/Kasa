import { useParams, useNavigate } from "react-router-dom";
import annoncesData from "../data/logement.json";
import { Slide } from "../components/Slide.jsx";
import { Tags } from "../components/Tags";
import { Rating } from "../components/Rating.jsx";
import { Collapsible } from "../components/Collapse.jsx";
import { Error } from "../pages/Erreur-404";

export function FicheLogement() {
  const { id } = useParams();
  const annonce = annoncesData.find((annonce) => annonce.id === id);

  if (!annonce) {
    return <Error />;
  }

  const titre = annonce.title;
  const location = annonce.location;
  const nameHost = annonce.host.name;
  const pictureHost = annonce.host.picture;
  const tags = annonce.tags;
  const equipments = annonce.equipments;
  const description = annonce.description;

  return (
    <div className="fiche-logement">
      <Slide pictures={annonce.pictures} />
      <section className="lodging">
        <div className="lodgingInfos">
          <div className="title">
            <h2>{titre}</h2>
            <p>{location}</p>
          </div>
          <Tags tags={tags} />
        </div>
        <div className="lodgingUser">
          <div className="host">
            <p>{nameHost}</p>
            <img src={pictureHost} alt="photo du proprietaire" />
          </div>
          <Rating />
        </div>
      </section>
      <section className="lodgingCollapse">
        <Collapsible label="Description" content={description} />
        <Collapsible
          label="Équipements"
          content={
            <ul>
              {equipments.map((equipment, index) => (
                <li key={index}>{equipment}</li>
              ))}
            </ul>
          }
        />
      </section>
    </div>
  );
}
