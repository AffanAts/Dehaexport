import React from "react";
import imageAmount from "../../assets/img/home.jpg";

export default function Amount() {
  return (
    <>
      <div
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          zIndex: -1, // Ensure the background is behind other content
          backgroundImage: `url(${imageAmount})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      <div style={{ paddingTop: "100vh" }}>
        {/* Content goes here */}
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            alignItems: "center",
            padding: "5rem 0",
            color: "white",
          }}
        >
          <div style={{ flex: "1", textAlign: "center", padding: "0 1rem" }}>
            <h1>125+</h1>
            <p>Project Client</p>
          </div>
          <div style={{ flex: "1", textAlign: "center", padding: "0 1rem" }}>
            <h1>125+</h1>
            <p>Project Client</p>
          </div>
          <div style={{ flex: "1", textAlign: "center", padding: "0 1rem" }}>
            <h1>125+</h1>
            <p>Project Client</p>
          </div>
          <div style={{ flex: "1", textAlign: "center", padding: "0 1rem" }}>
            <h1>125+</h1>
            <p>Project Client</p>
          </div>
        </div>
      </div>
    </>
  );
}
