const API_URL = import.meta.env.VITE_API_URL;

export const getJuventudes = async () => {
  const res = await fetch(`${API_URL}/juventudes`);
  const data = await res.json();
  return data;
};
