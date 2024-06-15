import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faFacebook, faLinkedin } from "@fortawesome/free-brands-svg-icons";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = (isOpen) => {
    setIsMenuOpen(isOpen);
    document.body.style.overflow = isOpen ? "hidden" : "auto"; // Toggle scroll lock
  };

  const handleMenuToggle = () => {
    toggleMenu(!isMenuOpen);
  };

  const handleLinkClick = () => {
    if (isMenuOpen) {
      toggleMenu(false);
    }
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
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isMenuOpen]);

  const menuStyle = {
    fontFamily: "'Playfair Display', sans-serif",
    fontWeight: 300,
    color: "#000000",
  };

  const brandStyle = {
    fontFamily: "'Lato', sans-serif",
    color: "#000000",
  };

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
          onClick={handleMenuToggle}
        />
      )}

      <nav
        id="navbar"
        className="navbar navbar-expand-lg sticky-top"
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
          <div className={`collapse navbar-collapse justify-content-center ${isMenuOpen ? "show" : ""}`} id="navbarNavAltMarkup">
            <div className="navbar-nav mx-auto">
              <a className="nav-link active ms-4" aria-current="page" href="/#AboutUs" onClick={handleLinkClick} style={{ ...menuStyle, color: "white" }}>
                About
              </a>
              <a className="nav-link ms-4" href="/#Faq" onClick={handleLinkClick} style={{ ...menuStyle, color: "white" }}>
                FAQ
              </a>

              <h4 style={{ ...brandStyle, color: "white" }} className="ms-4 mt-1">
                <span style={{ fontWeight: 400 }}>Deha</span>
                <span style={{ fontWeight: 900 }}>Export</span>
              </h4>

              <a className="nav-link ms-4" href="#Products" onClick={handleLinkClick} style={{ ...menuStyle, color: "white" }}>
                Products
              </a>

              <a className="nav-link ms-4" href="#blog" onClick={handleLinkClick} style={{ ...menuStyle, color: "white" }}>
                Blog
              </a>
            </div>
            <div className="navbar-nav ml-auto">
              <a className="nav-link" href="https://www.instagram.com/dehaexport?igsh=MTlhYXUyMWZmcmZuMg==" onClick={handleLinkClick}>
                <FontAwesomeIcon icon={faInstagram} style={{ color: "white" }} />
              </a>
              <a className="nav-link" href="https://www.linkedin.com/in/deha-corp-529108301?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app" onClick={handleLinkClick}>
                <FontAwesomeIcon icon={faLinkedin} style={{ color: "white" }} />
              </a>
              <a className="nav-link" href="https://www.facebook.com/profile.php?id=61558964555945" onClick={handleLinkClick}>
                <FontAwesomeIcon icon={faFacebook} style={{ color: "white" }} />
              </a>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
