import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div style={{ padding: "2rem" }}>
      <h1>Panel de Gestión Pública</h1>
      <Link to="/servicios">
        <button>Servicios Públicos</button>
      </Link>
      <Link to="/juventudes">
        <button>Juventudes</button>
      </Link>
    </div>
  );
}
