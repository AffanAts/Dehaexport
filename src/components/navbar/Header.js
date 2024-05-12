/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faFacebook,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleOverlayClick = () => {
    setIsMenuOpen(false);
  };

  const handleScroll = () => {
    let prevScrollpos = window.pageYOffset;
    let isScrolledToTop = true;

    window.onscroll = function () {
      const currentScrollPos = window.pageYOffset;
      const navbar = document.getElementById("navbar");

      if (!isMenuOpen) {
        if (prevScrollpos > currentScrollPos) {
          navbar.style.top = "0";
          navbar.style.opacity = "1";
          if (isScrolledToTop) {
            navbar.style.background = "rgba(0, 0, 0, 1)";
            navbar.style.height = "75px";
          }
        } else {
          navbar.style.top = "-80px";
          navbar.style.opacity = "0";
          navbar.style.background = "rgba(0, 0, 0, 1)";
          isScrolledToTop = false;
        }

        if (currentScrollPos === 0) {
          isScrolledToTop = true;
          navbar.style.background = "rgba(0, 0, 0, 0)";
          navbar.style.height = "75px";
        }
      }

      prevScrollpos = currentScrollPos;
    };
  };

  useEffect(() => {
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      {isMenuOpen && (
        <div
          className="overlay"
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            background: "rgba(0, 0, 0, 1)",
            zIndex: 999,
          }}
          onClick={handleOverlayClick}
        />
      )}

      <nav
        id="navbar"
        className="navbar navbar-expand-lg  sticky-top"
        style={{
          transition: "top 0.3s, opacity 0.3s, background 0.3s",
          zIndex: 1000,
          position: "fixed",
          width: "100%",
          height: "75px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "0 20px",
        }}
      >
        <div className="container text-center">
          <button
            className="navbar-toggler ms-auto"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
            onClick={handleMenuToggle}
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className={`collapse navbar-collapse justify-content-center ${
              isMenuOpen ? "show" : ""
            }`}
            id="navbarNavAltMarkup"
          >
            <div className="navbar-nav mx-auto">
              <a
                className="nav-link active"
                aria-current="page"
                href="#Definition"
                style={{
                  color: "white",
                  fontFamily: "Inter, sans-serif",
                  fontWeight: "normal",
                  fontSize: "16px",
                }}
              >
                About
              </a>
              <a
                className="nav-link mx-auto px-4"
                href="#"
                style={{
                  color: "white",
                  fontFamily: "Inter, sans-serif",
                  fontWeight: "normal",
                  fontSize: "16px",
                }}
              >
                Gallery
              </a>
              <a
                className="nav-link mx-auto pe-4"
                href="#"
                style={{
                  color: "white",
                  fontFamily: "Inter, sans-serif",
                  fontWeight: "normal",
                  fontSize: "16px",
                }}
              >
                Products
              </a>
              <a
                className="navbar-brand mx-auto pe-4"
                href="#"
                style={{
                  color: "white",
                  fontFamily: "Inter, sans-serif",
                  fontWeight: "normal",
                  fontSize: "16px",
                  paddingTop: "8px",
                }}
              >
                Web Export
              </a>
              <a
                className="nav-link mx-auto pe-2"
                href="https://www.instagram.com/dehaexport?igsh=MTlhYXUyMWZmcmZuMg=="
                style={{
                  color: "white",
                  fontFamily: "Inter, sans-serif",
                  fontWeight: "normal",
                  fontSize: "16px",
                }}
              >
                <FontAwesomeIcon icon={faInstagram} />
              </a>
              <a
                className="nav-link mx-auto pe-2"
                href="https://www.linkedin.com/in/deha-corp-529108301?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"
                style={{
                  color: "white",
                  fontFamily: "Inter, sans-serif",
                  fontWeight: "normal",
                  fontSize: "16px",
                }}
              >
                <FontAwesomeIcon icon={faLinkedin} />
              </a>
              <a
                className="nav-link mx-auto pe-2"
                href="https://www.facebook.com/profile.php?id=61558964555945"
                style={{
                  color: "white",
                  fontFamily: "Inter, sans-serif",
                  fontWeight: "normal",
                  fontSize: "16px",
                }}
              >
                <FontAwesomeIcon icon={faFacebook} />
              </a>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
