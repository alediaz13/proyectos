import { useEffect, useState } from "react";
import { getServicios } from "../../services/serviciosAPI";
import Card from "../../components/Card";


export default function ServiciosPage() {
  const [servicios, setServicios] = useState([]);

  useEffect(() => {
    getServicios().then(setServicios);
  }, []);

  return (
    <div>
      <h2>Servicios Públicos</h2>
      {servicios.map((servicio) => (
        <Card key={servicio._id} data={servicio} />
      ))}
    </div>
  );
}
