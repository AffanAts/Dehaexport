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

export default function Definition() {
  useEffect(() => {
    AOS.init({});
  }, []);

  return (
    <Container
      fluid
      className="py-5 px-5"
      style={{ backgroundColor: "white", overflowX: "hidden" }}
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
            <h2 style={titleStyle} id="Definition">
              Indonesia, known as a paradise of spice diversity
            </h2>
            <div style={{ ...textStyle, textAlign: "justify" }}>
              <p>
                has long been recognized as a central hub of essential culinary
                spices worldwide. From ginger and turmeric to cardamom,
                Indonesian spices play a crucial role in shaping the flavors of
                international cuisine. These spices are not only appreciated for
                their ability to enrich flavors but are also renowned for their
                significant health benefits, making them highly valued
                commodities in the international market.
              </p>
              <p>
                As an archipelagic country with fertile land, Indonesia offers
                ideal conditions for growing a variety of high-quality spices.
                This opens significant opportunities for the country to develop
                its agricultural sector and boost the national economy through
                spice exports. The global recognition of Indonesian spices as
                both flavor enhancers and vital components in the pharmaceutical
                and cosmetics industries underscores Indonesia's position as a
                key player in the global spice market.
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
