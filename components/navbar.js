import Link from "next/link";
import { useEffect, useState } from "react";
import * as service from "../service";

export default function Navbar() {
  const [authenticated, setAuthenticated] = useState(false);

  useEffect(() => {
    setAuthenticated(service.isAuthenticated());
  });
  return (
    <nav className="navbar navbar-expand-md navbar-dark fixed-top bg-primary">
      <div className="container">
        <span className="navbar-brand">
          <Link href="/films">Films</Link>
        </span>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarCollapse"
          aria-controls="navbarCollapse"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarCollapse">
          <ul className="navbar-nav me-auto mb-2 mb-md-0">
            {authenticated && (
              <li className="nav-item">
                <span className="nav-link ">
                  <Link href="/films/create">Add New</Link>
                </span>
              </li>
            )}
            {!authenticated && (
              <li className="nav-item">
                <span className="nav-link ">
                  <Link href="/register">Register</Link>
                </span>
              </li>
            )}
            {!authenticated && (
              <li className="nav-item">
                <span className="nav-link ">
                  <Link href="/login">Login</Link>
                </span>
              </li>
            )}
          </ul>
          <div className="d-flex">
            <ul className="navbar-nav me-auto mb-2 mb-md-0">
              {authenticated && (
                <li className="nav-item">
                  <span
                    role="button"
                    className="nav-link active"
                    onClick={service.logout}
                  >
                    Logout
                  </span>
                </li>
              )}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}
