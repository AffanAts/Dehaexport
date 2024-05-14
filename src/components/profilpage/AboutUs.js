/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import AOS from "aos";
import "aos/dist/aos.css";
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

export default function AboutUs() {
  useEffect(() => {
    AOS.init({});
  }, []);

  return (
    <Container
      fluid
      className="py-5 px-5"
      style={{ backgroundColor: "white", overflowX: "hidden" }}
      id="AboutUs"
    >
      <Row className="justify-content-between align-items-center py-5">
        <Col
          xs={12}
          md={6}
          className="order-md-1"
          style={{
            maxWidth: "600px",
            padding: "0 10px",
            marginLeft: "auto",
            marginRight: "auto",
          }}
        >
          <div
            data-aos="fade-right"
            data-aos-anchor="#example-anchor"
            data-aos-offset="800"
            data-aos-easing="ease-in-back"
            data-aos-duration="500"
          >
            <h2 style={titleStyle}>
              About Us
            </h2>
            <div style={{ ...textStyle, textAlign: "justify" }}>
              <p className="fs-6">
                DEHA, as one of the main distributors in the global spice trade,
                has proven to be a reliable partner for small and medium scale
                businesses in the spice industry. They offer a variety of
                solutions covering various qualities, types and origins of
                spices, meeting the needs of local markets as well as large and
                medium scale spice processing industries. Apart from that, DEHA
                also serves the food industry that uses spices as the main
                ingredient, such as large and medium scale spice packaging and
                food catering companies, as well as the pharmaceutical industry
                and other mass consumer segments. With their solid reputation
                and experience in the market, DEHA has become the right choice
                for customers looking for a solid partnership in the spice
                business.
              </p>
            </div>
          </div>
        </Col>
        <Col xs={12} md={6} className="order-md-2">
          <Row
            className="justify-content-center"
            data-aos="fade-left"
            data-aos-anchor="#example-anchor"
            data-aos-offset="800"
            data-aos-easing="ease-in-back"
            data-aos-duration="500"
          >
            <Col xs={6} md={5} className="mb-3 d-flex justify-content-center">
              <img
                src={background[0].image}
                alt="Profile Picture"
                className="img-fluid"
                style={{
                  objectFit: "cover",
                  maxWidth: "100%", // Menambahkan aturan maxWidth
                  height: "350px",
                  marginRight: "-11px",
                  position: "relative",
                  zIndex: "1",
                }}
              />
            </Col>
            <Col xs={6} md={5} className="mb-3 d-flex justify-content-center">
              <img
                src={background[3].image}
                alt="Profile Picture"
                className="img-fluid"
                style={{
                  objectFit: "cover",
                  maxWidth: "100%", // Menambahkan aturan maxWidth
                  height: "350px",
                  marginRight: "-11px",
                  position: "relative",
                  zIndex: "1",
                }}
              />
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
}
