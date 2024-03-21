import { Banner } from "../components/Banner";
import { Card } from "../components/Card";
import annoncesData from "../data/logement.json";
let title = "Chez vous,<wbr/> partout&nbsp;et&nbsp;ailleurs";
export function Home() {
  return (
    <div>
      <Banner title={title} image="src/assets/Image-source-1.svg" />
      <Card annoncesData={annoncesData} />
    </div>
  );
}
