import { NotificationManager } from "react-notifications";
import * as request from "./request";

const BASE_URL = "http://localhost:3000";

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

export function isAuthenticated(){
    return localStorage.getItem('token');
}