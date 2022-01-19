import { NotificationManager } from "react-notifications";
import * as service from "./service";

export async function post(url, data, exclude = []) {
  let response;
  const authHeader = getAuthHeader();
  try {
    response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        ...authHeader,
      },
      body: JSON.stringify(data),
    });
  } catch (e) {
    NotificationManager.warning("Network Error!");
    return null
  }

  if (response && (response.ok || exclude.includes(response.status))) {
    return response;
  }

  handleError(response);
  return null;
}

export async function get(url, exclude = []) {
  let response;
  try {
    response = await fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
  } catch (e) {
    NotificationManager.warning("Network Error!");
    return null;
  }

  if (response && (response.ok || exclude.includes(response.status))) {
    return response;
  }

  handleError(response);
  return null;
}

async function handleError(response) {
  const json = await response.json();
  switch (response.status) {
    case 400:
      await handle400(json);
      break;
    case 401:
      window.location = "/login";
      break;
  }
}

async function handle400(json) {
  if (json.message) {
    let message;
    if (typeof json.message == "object") {
      message = json.message[0];
    }
    if (typeof json.message == "string") {
      message = json.message;
    }
    NotificationManager.warning(message);
  }
}

function getAuthHeader() {
  if (service.isAuthenticated()) {
    const token = service.getToken();
    return {
      Authorization: `Bearer ${token}`,
    };
  }
  return {};
}
