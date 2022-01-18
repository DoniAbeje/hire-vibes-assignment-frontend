export async function post(url, data, exclude = []) {
  let response;
  try {
    response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
  } catch (e) {
    NotificationManager.warning("Network Error!");
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