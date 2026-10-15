// URL de l'API : définir VITE_API_URL (fichier frontend/.env) pour la production.
export const API_URL = (import.meta.env.VITE_API_URL || 'http://localhost:5000').replace(/\/$/, '');

export async function fetchCauses({ signal } = {}) {
  const res = await fetch(`${API_URL}/api/causes`, { signal });
  if (!res.ok) throw new Error(`Chargement des collectes impossible (${res.status})`);
  const data = await res.json();
  return data.filter((cause) => cause.status === 'active' || cause.status === 'completed');
}

export async function sendContactMessage({ name, email, message }) {
  const res = await fetch(`${API_URL}/api/contact`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ name, email, message }),
  });
  const data = await res.json().catch(() => ({}));
  if (!res.ok || data.success === false) {
    throw new Error(data.message || 'Le message n’a pas pu être envoyé.');
  }
  return data;
}
