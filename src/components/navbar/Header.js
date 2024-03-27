import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Header() {
  return (
    <nav className="navbar navbar-expand-lg bg-color container-fluid">
      <div className="container">
        <button
          className="navbar-toggler ms-auto"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="collapse navbar-collapse justify-content-center"
          id="navbarNavAltMarkup"
        >
          <div className="navbar-nav">
            <a
              className="nav-link active mx-auto px-3"
              aria-current="page"
              href="#"
            >
              About
            </a>
            <a className="nav-link mx-auto px-3" href="#">
              Gallery
            </a>
            <a className="nav-link mx-auto px-3" href="#">
              Products
            </a>
            <a className="navbar-brand mx-auto px-4" href="#">
              Web Export
            </a>
            <a className="nav-link mx-auto px-3" href="#">
              Team
            </a>
            <a className="nav-link disabled mx-auto" aria-disabled="true">
              Blog
            </a>
            <a className="nav-link mx-auto px-3" href="#">
              Team
            </a>
            <FontAwesomeIcon icon={faInstagram} />
          </div>
        </div>
      </div>
    </nav>
  );
}
