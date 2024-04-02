import React from "react";
import profilePict from "../../assets/img/home.jpg";
import pictHome from "../../assets/img/home2.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload } from "@fortawesome/free-solid-svg-icons";

export default function Product() {
  return (
    <>
      <center>
        <div className="py-2">
          <h1>Products</h1>
          <p>
            Learn more about our product. You can see our product here, click to
            see more detail about our product.
          </p>
        </div>
        <div id="carouselExampleIndicators" className="carousel slide px-5">
          <div className="carousel-indicators">
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to={0}
              className="active"
              aria-current="true"
              aria-label="Slide 1"
            />
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to={1}
              aria-label="Slide 2"
            />
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to={2}
              aria-label="Slide 3"
            />
          </div>
          <div className="carousel-inner">
            <div
              className="carousel-item active px-5"
              style={{ display: "flex", flexDirection: "row" }}
            >
              <img
                src={profilePict}
                className="d-block w-75 mx-auto py-5"
                alt="..."
                style={{
                  height: "500px",
                }}
              />
              <img
                src={pictHome}
                className="d-block w-75 mx-auto py-5"
                alt="..."
                style={{
                  height: "500px",
                }}
              />
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
        <button type="button" class="btn btn-secondary my-5">
          <center>
            <FontAwesomeIcon icon={faDownload} className="px-2" />
            Download Catalogue
          </center>
        </button>
      </center>
    </>
  );
}
