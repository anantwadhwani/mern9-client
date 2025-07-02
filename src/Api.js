const API_URL = process.env.REACT_APP_API_URL;

export async function register(email, password) {
  const res = await fetch(`${API_URL}/auth/register`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    credentials: 'include',
    body: JSON.stringify({ email, password }),
  });
  return res.json();
}

export async function login(email, password) {
  const res = await fetch(`${API_URL}/auth/login`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    credentials: 'include',
    body: JSON.stringify({ email, password }),
  });
  return res.json();
}

export async function logout() {
  const res = await fetch(`${API_URL}/auth/logout`, {
    method: 'POST',
    credentials: 'include'
  });
  return res.json();
}

export async function getSecrets() {
  const res = await fetch(`${API_URL}/auth/secrets`, {
    credentials: 'include'
  });
  return res.json();
}

export async function addSecret(secret) {
  const res = await fetch(`${API_URL}/auth/secrets`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    credentials: 'include',
    body: JSON.stringify({ secret }),
  });
  return res.json();
}