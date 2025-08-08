const API_URL = import.meta.env.VITE_API_URL;

export const getServicios = async () => {
  const res = await fetch(`${API_URL}/servicios`);
  const data = await res.json();
  return data;
};

export const crearServicio = async (nuevo) => {
  const res = await fetch(`${API_URL}/servicios`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(nuevo),
  });
  return await res.json();
};

export const eliminarServicio = async (id) => {
  await fetch(`${API_URL}/servicios/${id}`, {
    method: "DELETE",
  });
};
