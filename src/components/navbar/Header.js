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
    window.onscroll = function() {
      const currentScrollPos = window.pageYOffset;
      const navbar = document.getElementById("navbar");
      if (prevScrollpos > currentScrollPos) {
        navbar.style.top = "0";
        navbar.style.opacity = "1"; // Menampilkan header saat scrolling ke atas
        navbar.style.background = "rgba(0, 0, 0, 0.9)"; // Latar belakang transparan hitam saat muncul
      } else {
        navbar.style.top = "-80px"; // Menyembunyikan header saat scrolling ke bawah
        navbar.style.opacity = "0"; // Menghilangkan header saat scrolling ke bawah
        navbar.style.background = "transparent"; // Hapus latar belakang transparan hitam saat menyembunyikan header
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
        zIndex: 1000, // Menetapkan z-index agar header berada di depan halaman lainnya
        position: "fixed", // Menetapkan posisi header
        width: "100%" // Menetapkan lebar header
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
              style={{ color: "rgba(255, 255, 255, 0.84)", fontFamily: "Inter, sans-serif", fontWeight: "normal", fontSize: "16px", lineHeight: "75px" }}
            >
              About
            </a>
            <a className="nav-link mx-auto px-3" href="#" style={{ color: "rgba(255, 255, 255, 0.84)", fontFamily: "Inter, sans-serif", fontWeight: "normal", fontSize: "16px", lineHeight: "75px" }}>
              Gallery
            </a>
            <a className="nav-link mx-auto px-3" href="#" style={{ color: "rgba(255, 255, 255, 0.84)", fontFamily: "Inter, sans-serif", fontWeight: "normal", fontSize: "16px", lineHeight: "75px" }}>
              Products
            </a>
            <a className="navbar-brand mx-auto px-4" href="#" style={{ color: "rgba(255, 255, 255, 0.84)", fontFamily: "Inter, sans-serif", fontWeight: "normal", fontSize: "16px", lineHeight: "75px" }}>
              Web Export
            </a>
            <a className="nav-link mx-auto px-3" href="#" style={{ color: "rgba(255, 255, 255, 0.84)", fontFamily: "Inter, sans-serif", fontWeight: "normal", fontSize: "16px", lineHeight: "75px" }}>
              Team
            </a>
            <a className="nav-link disabled mx-auto" aria-disabled="true" style={{ color: "rgba(255, 255, 255, 0.84)", fontFamily: "Inter, sans-serif", fontWeight: "normal", fontSize: "16px", lineHeight: "75px" }}>
              Blog
            </a>
            <a className="nav-link mx-auto px-3" href="#" style={{ color: "rgba(255, 255, 255, 0.84)", fontFamily: "Inter, sans-serif", fontWeight: "normal", fontSize: "16px", lineHeight: "75px" }}>
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
