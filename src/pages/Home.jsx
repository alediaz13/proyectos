import { Link } from 'react-router-dom';
import { useServicios } from '../hooks/useServicios';
import { useJuventudes } from '../hooks/useJuventudes';

export default function Home() {
  const { servicios } = useServicios();
  const { juventudes } = useJuventudes();

  return (
    <div style={{ padding: '2rem' }}>
      <h1>Panel de Gestión Pública</h1>
      <p>Servicios registrados: {servicios.length}</p>
      <p>Juventudes registradas: {juventudes.length}</p>

      <div style={{ marginTop: '1rem' }}>
        <Link to="/servicios">
          <button style={{ marginRight: '1rem' }}>Servicios Públicos</button>
        </Link>
        <Link to="/juventudes">
          <button>Juventudes</button>
        </Link>
      </div>
    </div>
  );
}
