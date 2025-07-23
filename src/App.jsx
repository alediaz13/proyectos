import { useState, useEffect } from "react";

function App() {
  const [tareas, setTareas] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/tareas")
      .then(res => res.json())
      .then(data => setTareas(data));
  }, []);

  return (
    <div>
      <h1>Mis Tareas</h1>
      <ul>
        {tareas.map((t, i) => (
          <li key={i}>{t.titulo}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
