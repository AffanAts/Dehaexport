import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faSquareTwitter,
  faFacebook,
} from "@fortawesome/free-brands-svg-icons";

export default function Header() {
  return (
    <nav className="navbar navbar-expand-lg bg-color container-fluid">
      <div className="container text-center">
        {" "}
        {/* Added text-center class */}
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
          <div className="navbar-nav" style={{ fontSize: 20 }}>
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
            <div className="ms-auto py-2 mx-auto" style={{}}>
              <a
                href="https://template94.webekspor.com/"
                style={{
                  color: "red",
                }}
              >
                <FontAwesomeIcon
                  icon={faInstagram}
                  size="lg"
                  className="mx-auto"
                />
              </a>
              <FontAwesomeIcon
                icon={faFacebook}
                size="lg"
                className="mx-auto px-3"
              />
              <FontAwesomeIcon
                icon={faSquareTwitter}
                size="lg"
                className="mx-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
