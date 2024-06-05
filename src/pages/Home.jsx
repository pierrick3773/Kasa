import { Banner } from "../components/Banner";
import { Card } from "../components/Card";
import annoncesData from "../data/logement.json";
import image from "../../../public/Image-source-1.svg"; 

let title = "Chez vous,<wbr/> partout&nbsp;et&nbsp;ailleurs";

export function Home() {
  return (
    <div>
      <Banner title={title} image={image} /> 
      <Card annoncesData={annoncesData} />
    </div>
  );
}
