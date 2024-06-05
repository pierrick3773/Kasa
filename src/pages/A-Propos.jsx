import { Banner } from "../components/Banner.jsx";
import { Collapsible } from "../components/Collapse.jsx";

export function Apropos() {
  return (
    <div className="a-propos">
      <Banner image="../../../public/Image-source-2.svg" title="" />
      <Collapsible
        label="Fiabilité"
        content="Les annonces postées sur Kasa garantissent une fiabilité totale. Les
      photos sont conformes aux logements, et toutes les informations sont
      régulièrement vérifiées par nos équipes."
      />

      <Collapsible
        label="Respect"
        content="La bienveillance fait partie des valeurs fondatrices de Kasa. Tout
      comportement dicriminatoire ou de perturbation deu voisinage entraînera
      une exclusion de notre plateforme."
      />

      <Collapsible
        label="Service"
        content="Nos équipes se tiennent à votre disposition pour vous fournir une
      expérience parfaite. N'hésitez pas à nous contacter si vous avez la
      moindre question."
      />

      <Collapsible
        label="Sécurité"
        content="La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour
      les voyageurs, chaque logement correspond aux critères de sécurité
      établis par nos services. En laissant une note aussi bien à l'hôte qu'au
      locataire, cela permet à nos équipes de vérifier que les standars sont
      bien respectés. Nous organisons également des ateliers sur la sécurité
      domestique pou nos hôtes."
      />
    </div>
  );
}
