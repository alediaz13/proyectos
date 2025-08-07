export async function getJuventudes() {
  const res = await fetch(import.meta.env.VITE_API_URL + "/juventudes");
  return await res.json();
}
