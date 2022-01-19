import { useState } from "react";
import { NotificationManager } from "react-notifications";
import * as service from "../service";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  return (
    <div
      style={{ height: "100vh", width: "100%" }}
      className="d-flex justify-content-center align-items-center"
    >
      <form className="bg-light p-5 shadow-sm" onSubmit={login}>
        <div className="mb-3" style={{ width: "30rem" }}>
          <h1 className="mb-5 text-center">
            <span className="text-primary">FILMS</span> | LOGIN
          </h1>
          <label htmlFor="username-input" className="form-label">
            Username
          </label>
          <input
            className="form-control"
            id="username-input"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="password-input" className="form-label">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            id="password-input"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="d-grid gap-2">
          <button type="submit" className="btn btn-primary mt-3 mb-3">
            LOGIN
          </button>
          <button type="button" className="btn btn-dark btn mt-1">
            Don't have account? Create new
          </button>
        </div>
      </form>
    </div>
  );

  async function login(event) {
    event.preventDefault();
    const user = { username, password };
    const response = await service.login(user);
    if (response) {
      NotificationManager.success("LoggedIn!");
      window.location = "/films";
    }
  }
}
