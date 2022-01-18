import { useState } from "react";
import { NotificationManager } from "react-notifications";
import * as service from "../service";

export default function Register() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  return (
    <div
      style={{ height: "100vh", width: "100%" }}
      className="d-flex justify-content-center align-items-center"
    >
      <form className="bg-light p-5 shadow-sm" onSubmit={register}>
        <div className="mb-3" style={{ width: "30rem" }}>
          <h1 className="mb-5 text-center">
            <span className="text-primary">FILMS</span> | Register
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
        <div className="mb-3">
          <label htmlFor="confirm-password-input" className="form-label">
            Confirm Password
          </label>
          <input type="password" className="form-control" id="confirm-" />
        </div>
        <div className="d-grid gap-2">
          <button type="submit" className="btn btn-primary mt-3 mb-3">
            REGISTER
          </button>
          <button type="button" className="btn btn-dark">
            Aready have an account? Login
          </button>
        </div>
      </form>
    </div>
  );

  async function register(event) {
    event.preventDefault();
    const user = { username, password };
    const newUser = await service.register(user);
    if (newUser) {
      NotificationManager.success("Registered");
      window.location = "/films";
    }
  }
}
