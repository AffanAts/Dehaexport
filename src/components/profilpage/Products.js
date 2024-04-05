import React from "react";
import profilePict from "../../assets/img/home.jpg";
import pictHome from "../../assets/img/home2.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload } from "@fortawesome/free-solid-svg-icons";

export default function Product() {
  return (
    <>
      <center>
        <div
          className="py-2 px-5"
          style={{
            backgroundColor: "whitesmoke",
            width: "100%",
          }}
        >
          <h1
            style={{
              fontFamily: "Bad Script, sans-serif",
              fontWeight: 600,
              fontSize: "38px",
              lineHeight: "49px",
            }}
            className="pt-5"
          >
            Products
          </h1>
          <p
            style={{
              fontFamily: "Inter, sans-serif",
              fontWeight: 400,
              fontSize: "14px",
              lineHeight: "20px",
              maxWidth: 500,
              minWidth: 200,
            }}
            className="pb-3"
          >
            Learn more about our product. You can see our product here, click to
            see more detail about our product.
          </p>
          <div id="carouselExampleIndicators" className="carousel slide">
            <div className="carousel-inner" style={{ margin: "0 -15px" }}>
              <div className="carousel-item active">
                <div className="d-flex justify-content-around">
                  <img
                    src={profilePict}
                    className="img-fluid rounded"
                    alt="..."
                    style={{
                      maxHeight: "300px", // Mengatur tinggi maksimum gambar
                      maxWidth: "30%", // Mengatur lebar maksimum gambar
                      objectFit: "cover", // Memastikan gambar tetap proporsional
                      margin: "0 5px", // Menambahkan jarak antara gambar
                    }}
                  />
                  <img
                    src={pictHome}
                    className="img-fluid rounded"
                    alt="..."
                    style={{
                      maxHeight: "300px", // Mengatur tinggi maksimum gambar
                      maxWidth: "30%", // Mengatur lebar maksimum gambar
                      objectFit: "cover", // Memastikan gambar tetap proporsional
                      margin: "0 5px", // Menambahkan jarak antara gambar
                    }}
                  />
                  <img
                    src={profilePict}
                    className="img-fluid rounded"
                    alt="..."
                    style={{
                      maxHeight: "300px", // Mengatur tinggi maksimum gambar
                      maxWidth: "30%", // Mengatur lebar maksimum gambar
                      objectFit: "cover", // Memastikan gambar tetap proporsional
                      margin: "0 5px", // Menambahkan jarak antara gambar
                    }}
                  />
                </div>
              </div>
              <div className="carousel-item">
                <div className="d-flex justify-content-around">
                  <img
                    src={pictHome}
                    className="img-fluid rounded"
                    alt="..."
                    style={{
                      maxHeight: "300px", // Mengatur tinggi maksimum gambar
                      maxWidth: "30%", // Mengatur lebar maksimum gambar
                      objectFit: "cover", // Memastikan gambar tetap proporsional
                      margin: "0 5px", // Menambahkan jarak antara gambar
                    }}
                  />
                  <img
                    src={profilePict}
                    className="img-fluid rounded"
                    alt="..."
                    style={{
                      maxHeight: "300px", // Mengatur tinggi maksimum gambar
                      maxWidth: "30%", // Mengatur lebar maksimum gambar
                      objectFit: "cover", // Memastikan gambar tetap proporsional
                      margin: "0 5px", // Menambahkan jarak antara gambar
                    }}
                  />
                  <img
                    src={pictHome}
                    className="img-fluid rounded"
                    alt="..."
                    style={{
                      maxHeight: "300px", // Mengatur tinggi maksimum gambar
                      maxWidth: "30%", // Mengatur lebar maksimum gambar
                      objectFit: "cover", // Memastikan gambar tetap proporsional
                      margin: "0 5px", // Menambahkan jarak antara gambar
                    }}
                  />
                </div>
              </div>
            </div>

            <button
              className="carousel-control-prev"
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide="prev"
            >
              <span className="carousel-control-prev-icon" aria-hidden="true" />
              <span className="visually-hidden">Previous</span>
            </button>
            <button
              className="carousel-control-next"
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide="next"
            >
              <span className="carousel-control-next-icon" aria-hidden="true" />
              <span className="visually-hidden">Next</span>
            </button>
          </div>
          <button type="button" className="btn btn-secondary my-5">
            <center>
              <FontAwesomeIcon icon={faDownload} className="px-2" />
              Download Catalogue
            </center>
          </button>
        </div>
      </center>
    </>
  );
}
