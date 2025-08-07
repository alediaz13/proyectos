export async function getServicios() {
  const res = await fetch(import.meta.env.VITE_API_URL + "/servicios");
  return await res.json();
}
