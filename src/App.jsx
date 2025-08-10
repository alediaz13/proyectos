import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import ServiciosPage from './pages/servicios/ServiciosPage';
import JuventudesPage from './pages/juventudes/JuventudesPage';

function App() {
  return (
    <Router>
      <nav style={{ padding: '1rem', background: '#f0f0f0' }}>
        <Link to="/" style={{ marginRight: '1rem' }}>🏠 Home</Link>
        <Link to="/servicios" style={{ marginRight: '1rem' }}>🛠 Servicios</Link>
        <Link to="/juventudes">🧑‍🎓 Juventudes</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/servicios" element={<ServiciosPage />} />
        <Route path="/juventudes" element={<JuventudesPage />} />
      </Routes>
    </Router>
  );
}

export default App;
