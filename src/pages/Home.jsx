import { Banner } from "../components/Banner";
import { Card } from "../components/Card";
import annoncesData from "../json/logement.json";

export function Home() {
  return (
    <div>
      <Banner />
      <Card annoncesData={annoncesData} />
    </div>
  );
}
