/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import profilePict from "../../assets/img/home.jpg";
import AOS from "aos";
import "aos/dist/aos";
import background from "../dummy/Background";

const titleStyle = {
  fontFamily: "'Bad Script', sans-serif",
  fontWeight: 600,
  fontSize: "44px",
  lineHeight: "57px",
  color: "#000000",
};

const textStyle = {
  fontFamily: "Inter, sans-serif",
  fontWeight: 300,
  fontSize: "14px",
  lineHeight: "24px",
  color: "#000000",
};

export default function Definition() {
  useEffect(() => {
    AOS.init({ duration: 500 });
  }, []);
  return (
    <Container
      fluid
      className="pt-5 px-5"
      style={{ backgroundColor: "white", overflowX: "hidden" }}
    >
      <Row className="justify-content-between align-items-center py-5">
        <Col xs={12} md={6} className="order-md-1">
          <Row
            className="justify-content-center"
            data-aos="fade-right"
            data-aos-anchor="#example-anchor"
            data-aos-offset="1000"
            data-aos-easing="ease-in-back"
            data-aos-duration="500"
          >
            <Col xs={6} md={5} className="mb-3 d-flex justify-content-center">
              <img
                src={background[3].image}
                alt="Your Image"
                className="img-fluid"
                style={{
                  objectFit: "cover",
                  width: "300px",
                  height: "350px",
                  marginRight: "-11px",
                  position: "relative",
                  zIndex: "1",
                }}
              />
            </Col>
            <Col xs={6} md={5} className="mb-3 d-flex justify-content-center">
              <img
                src={background[2].image}
                alt="Your Image"
                className="img-fluid"
                style={{
                  objectFit: "cover",
                  width: "300px",
                  height: "350px",
                  marginRight: "-11px",
                  position: "relative",
                  zIndex: "1",
                }}
              />
            </Col>
          </Row>
        </Col>
        <Col
          xs={12}
          md={6}
          className="order-md-2"
          style={{
            maxWidth: "600px",
            padding: "0 10px",
            marginLeft: "auto",
            marginRight: "auto",
          }}
        >
          <div data-aos="fade-left">
            <h2 style={titleStyle}>
              Pioneering Global Spice Exports from Indonesia
            </h2>
            <div style={{ ...textStyle, textAlign: "justify" }}>
              <p>
                For centuries, various parts of the world have been importing
                spices from Indonesia. The main export products from Indonesia
                in the spice sector include nutmeg, cloves, white pepper,
                cinnamon, and cardamom. The primary importing countries are the
                United States, China, India, Vietnam, and the Netherlands.
              </p>
              <p>
                Amidst this dynamic global market, PT DEHA is committed to
                meeting all spice-related needs and is ready to ship to every
                country. At PT DEHA, we are dedicated to providing high-quality
                products that meet international standards, ensuring the
                satisfaction and trust of our customers worldwide.
              </p>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
}
