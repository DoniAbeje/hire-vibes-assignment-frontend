import { NotificationManager } from "react-notifications";
import * as request from "./request";

const BASE_URL = "http://localhost:3000";

export async function fetchFilmBySlug(slug) {
  return await request.get(`${BASE_URL}/film/${slug}`, [404]);
}

export async function fetchFilms() {
  return await request.get(`${BASE_URL}/film`);
}

export async function register(user) {
  return await request.post(`${BASE_URL}/user/register`, user);
}

export async function login(user) {
  const response = await request.post(`${BASE_URL}/user/authenticate`, user, [
    401,
  ]);
  if (response) {
    if (response.status == 401) {
      NotificationManager.warning("Invalid username or password");
      return null;
    }
    const json = await response.json();
    localStorage.setItem("token", json.token);
  }

  return await response;
}

export function isAuthenticated() {
  return localStorage.getItem("token");
}

export function logout() {
  localStorage.removeItem("token");
  window.location = "/films";
}
