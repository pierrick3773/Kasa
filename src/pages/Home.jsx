import { Banner } from "../components/Banner";
import { Card } from "../components/Card";
import annoncesData from "../data/logement.json";

export function Home() {
  return (
    <div>
      <Banner image="src/assets/Image-source-1.svg" />
      <Card annoncesData={annoncesData} />
    </div>
  );
}
