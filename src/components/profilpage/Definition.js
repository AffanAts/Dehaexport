/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import profilePict from "../../assets/img/home.jpg";
import AOS from "aos";
import "aos/dist/aos";

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
    AOS.init({ duration: 1500 });
  }, []);
  return (
    <Container fluid className="py-5 px-5" style={{ backgroundColor: "white" }}>
      <Row
        className="justify-content-between align-items-center py-5"
        data-aos="fade-right"
      >
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
          <h2 style={titleStyle}>
            Spices is Indonesia’s fourth largest export commodity
          </h2>
          <p style={textStyle}>
            The largest exporter of spice and spice items. Spices is Indonesia’s
            fourth largest export commodity, after shrimp, fish and coffee. As
            one of the world’s spice producers, Indonesia has a great
            opportunity as a supplier of the world’s spices to contribute to the
            Indonesian economy. Spices is a plant species that has a strong
            taste and aroma and also serves as a flavor and food flavor
            enhancer.
          </p>
        </Col>
        <Col xs={12} md={6} className="order-md-2">
          <Row className="justify-content-center" data-aos="fade-left">
            <Col xs={6} md={5} className="mb-3 d-flex justify-content-center">
              <img
                src={profilePict}
                alt="Your Image"
                className="img-fluid"
                style={{
                  objectFit: "cover",
                  width: "300px",
                  height: "350px",
                  marginRight: "-11px",
                }}
              />
            </Col>
            <Col xs={6} md={5} className="mb-3 d-flex justify-content-center">
              <img
                src={profilePict}
                alt="Your Image"
                className="img-fluid"
                style={{
                  objectFit: "cover",
                  width: "300px",
                  height: "350px",
                  marginRight: "-11px",
                }}
              />
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
}
