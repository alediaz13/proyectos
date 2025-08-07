import { useEffect, useState } from "react";
import { getJuventudes } from "../../services/juventudesAPI";
import Card from "../../assets/components/Card";

export default function JuventudesPage() {
  const [juventudes, setJuventudes] = useState([]);

  useEffect(() => {
    getJuventudes().then(setJuventudes);
  }, []);

  return (
    <div>
      <h2>Programas de Juventudes</h2>
      {juventudes.map((j) => (
        <Card key={j._id} data={j} />
      ))}
    </div>
  );
}
