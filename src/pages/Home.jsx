import { Card } from "../components/Card";
import annoncesData from "../json/logement.json";

export function Home() {
  return (
    <div>
      <Card annoncesData={annoncesData} />
    </div>
  );
}
