/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faSquareTwitter,
  faFacebook,
} from "@fortawesome/free-brands-svg-icons";

export default function Header() {
  useEffect(() => {
    let prevScrollpos = window.pageYOffset;
    let isScrolledToTop = true; // Menyimpan status apakah sudah scroll ke atas atau belum

    window.onscroll = function () {
      const currentScrollPos = window.pageYOffset;
      const navbar = document.getElementById("navbar");

      // Memeriksa apakah scroll ke atas atau ke bawah
      if (prevScrollpos > currentScrollPos) {
        navbar.style.top = "0";
        navbar.style.opacity = "1";
        if (isScrolledToTop) {
          navbar.style.background = "rgba(0, 0, 0, 0.9)";
          navbar.style.height = "75px"; // Mengatur tinggi transparan hitam menjadi 75px
        }
      } else {
        navbar.style.top = "-80px";
        navbar.style.opacity = "0";
        navbar.style.background = "rgba(0, 0, 0, 0.9)"; // Ubah kembali menjadi transparan hitam
        isScrolledToTop = false;
      }

      // Memeriksa apakah sudah scroll ke atas sampai ujung
      if (currentScrollPos === 0) {
        isScrolledToTop = true;
        navbar.style.background = "rgba(0, 0, 0, 0)"; // Ubah menjadi transparan hijau saat di atas
        navbar.style.height = "75px"; // Mengatur tinggi transparan hitam menjadi 75px
      }

      prevScrollpos = currentScrollPos;
    };
  }, []);

  return (
    <nav
      id="navbar"
      className="navbar navbar-expand-lg bg-color sticky-top"
      style={{
        transition: "top 0.3s, opacity 0.3s, background 0.3s",
        zIndex: 1000,
        position: "fixed",
        width: "100%",
        height: "75px", // Menentukan tinggi transparan hitam secara default
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
              href="#Definition"
              style={{
                color: "rgba(255, 255, 255, 0.84)",
                fontFamily: "Inter, sans-serif",
                fontWeight: "normal",
                fontSize: "16px",
                lineHeight: "75px",
              }}
            >
              About
            </a>
            <a
              className="nav-link mx-auto px-3"
              href="#"
              style={{
                color: "rgba(255, 255, 255, 0.84)",
                fontFamily: "Inter, sans-serif",
                fontWeight: "normal",
                fontSize: "16px",
                lineHeight: "75px",
              }}
            >
              Gallery
            </a>
            <a
              className="nav-link mx-auto px-3"
              href="#"
              style={{
                color: "rgba(255, 255, 255, 0.84)",
                fontFamily: "Inter, sans-serif",
                fontWeight: "normal",
                fontSize: "16px",
                lineHeight: "75px",
              }}
            >
              Products
            </a>
            <a
              className="navbar-brand mx-auto px-4"
              href="#"
              style={{
                color: "rgba(255, 255, 255, 0.84)",
                fontFamily: "Inter, sans-serif",
                fontWeight: "normal",
                fontSize: "16px",
                lineHeight: "75px",
              }}
            >
              Web Export
            </a>
            <a
              className="nav-link mx-auto px-3"
              href="#"
              style={{
                color: "rgba(255, 255, 255, 0.84)",
                fontFamily: "Inter, sans-serif",
                fontWeight: "normal",
                fontSize: "16px",
                lineHeight: "75px",
              }}
            >
              Team
            </a>
            <a
              className="nav-link disabled mx-auto"
              aria-disabled="true"
              style={{
                color: "rgba(255, 255, 255, 0.84)",
                fontFamily: "Inter, sans-serif",
                fontWeight: "normal",
                fontSize: "16px",
                lineHeight: "75px",
              }}
            >
              Blog
            </a>
            <a
              className="nav-link mx-auto px-1"
              href="https://template94.webekspor.com/"
              style={{
                color: "rgba(255, 255, 255, 0.84)",
                fontFamily: "Inter, sans-serif",
                fontWeight: "normal",
                fontSize: "16px",
                lineHeight: "75px",
              }}
            >
              <FontAwesomeIcon icon={faInstagram} />
            </a>
            <a
              className="nav-link mx-auto px-1"
              href="https://template94.webekspor.com/"
              style={{
                color: "rgba(255, 255, 255, 0.84)",
                fontFamily: "Inter, sans-serif",
                fontWeight: "normal",
                fontSize: "16px",
                lineHeight: "75px",
              }}
            >
              <FontAwesomeIcon icon={faFacebook} />
            </a>
            <a
              className="nav-link mx-auto px-1"
              href="https://template94.webekspor.com/"
              style={{
                color: "rgba(255, 255, 255, 0.84)",
                fontFamily: "Inter, sans-serif",
                fontWeight: "normal",
                fontSize: "16px",
                lineHeight: "75px",
              }}
            >
              <FontAwesomeIcon icon={faSquareTwitter} />
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
