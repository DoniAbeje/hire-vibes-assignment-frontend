import { NotificationManager } from "react-notifications";
import * as request from "./request";
import { initializeApp } from "firebase/app";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { firebaseConfig } from "./firebase.config";

const BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;

export async function uploadFile(file, name) {
  const app = initializeApp(firebaseConfig);
  const storage = getStorage(app);

  const fileRef = ref(storage, name);
  const snapshot = await uploadBytes(fileRef, file);
  return getDownloadURL(fileRef);
}

export async function createFilm(film) {
  return await request.post(`${BASE_URL}/film`, film);
}

export async function submitComment(comment) {
  return await request.post(`${BASE_URL}/comment`, comment);
}

export async function fetchComments(filmId) {
  return await request.get(`${BASE_URL}/comment/film/${filmId}`);
}

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
  return getToken() != null;
}

export function getToken() {
  return localStorage.getItem("token");
}

export function logout() {
  localStorage.removeItem("token");
  window.location = "/films";
}
