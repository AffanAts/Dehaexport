import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import profilePict from "../../assets/img/home.jpg";

export default function Definition() {
  return (
    <Container
      fluid
      className="py-5 px-5"
      style={{ backgroundColor: "white" }}
    >
      <Row className="justify-content-between align-items-center">
        <Col xs={12} md={6} className="d-flex justify-content-center">
          <Row className="justify-content-center">
            <Col xs={6} md={4} className="mb-3">
              <img
                src={profilePict}
                alt="Your Image"
                className="img-fluid"
                style={{ width: "100%", height: "auto" }}
              />
            </Col>
            <Col xs={6} md={4} className="mb-3">
              <img
                src={profilePict}
                alt="Your Image"
                className="img-fluid"
                style={{ width: "100%", height: "auto" }}
              />
            </Col>
          </Row>
        </Col>
        <Col xs={12} md={6} style={{ maxWidth: "600px", padding: "0 10px" }}>
          <h2>Spices is Indonesia’s fourth largest export commodity</h2>
          <p>
            The largest exporter of spice and spice items. Spices is Indonesia’s
            fourth largest export commodity, after shrimp, fish and coffee. As one
            of the world’s spice producers, Indonesia has a great opportunity as a
            supplier of the world’s spices to contribute to the Indonesian
            economy. Spices is a plant species that has a strong taste and aroma
            and also serves as a flavor and food flavor enhancer.
          </p>
        </Col>
      </Row>
    </Container>
  );
}
