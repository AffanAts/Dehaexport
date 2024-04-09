import React, { useEffect } from "react";
import profilePict from "../../assets/img/home.jpg";
import pictHome from "../../assets/img/home2.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload } from "@fortawesome/free-solid-svg-icons";
import { Row, Col } from "react-bootstrap";
import Slider from "react-slick";
import AOS from "aos";
import "aos/dist/aos";

export default function Product() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };
  function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{
          ...style,
          backgroundColor: "grey",
          borderRadius: "10px",
          width: "19px",
          height: "18px",
          paddingRight: "9px",
        }}
        onClick={onClick}
      />
    );
  }
  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{
          ...style,
          backgroundColor: "grey",
          borderRadius: "10px",
          width: "19px",
          height: "18px",
          paddingRight: "9px",
        }}
        onClick={onClick}
      />
    );
  }

  useEffect(() => {
    AOS.init({ duration: 1500 });
  }, []);
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
            data-aos="fade-up"
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
            data-aos="fade-up"
          >
            Learn more about our product. You can see our product here, click to
            see more detail about our product.
          </p>
          <div
            className="slider-container"
            style={{ width: "78%" }}
            data-aos="fade-up"
          >
            <Slider {...settings}>
              <div>
                <Row>
                  <Col xs="12" sm="6">
                    <img
                      src={profilePict}
                      alt="Profile Picture"
                      style={{
                        width: "100%",
                        height: "auto",
                        maxHeight: "400px",
                        minHeight: "300px",
                      }}
                    />
                  </Col>
                  <Col xs="12" sm="6">
                    <img
                      src={pictHome}
                      alt="Home Picture"
                      style={{
                        width: "100%",
                        height: "auto",
                        maxHeight: "400px",
                        minHeight: "200px",
                      }}
                    />
                  </Col>
                </Row>
              </div>
              <div>
                <Row>
                  <Col xs="12" sm="6">
                    <img
                      src={pictHome}
                      alt="Profile Picture"
                      style={{
                        width: "100%",
                        height: "auto",
                        maxHeight: "400px",
                        minHeight: "200px",
                      }}
                    />
                  </Col>
                  <Col xs="12" sm="6">
                    <img
                      src={profilePict}
                      alt="Home Picture"
                      style={{
                        width: "100%",
                        height: "auto",
                        maxHeight: "400px",
                        minHeight: "300px",
                      }}
                    />
                  </Col>
                </Row>
              </div>
            </Slider>
          </div>

          <button
            type="button"
            className="btn btn-secondary my-5"
            data-aos="zoom-in"
          >
            <center>
              <FontAwesomeIcon icon={faDownload} className="px-2" />
              <a
                style={{
                  fontFamily: "Inter, sans-serif",
                  fontWeight: 400,
                  fontSize: "14px",
                  lineHeight: "14px",
                }}
              >
                Download Catalog
              </a>
            </center>
          </button>
        </div>
      </center>
    </>
  );
}
