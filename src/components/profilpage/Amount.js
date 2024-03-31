import React from "react";
import imageAmount from "../../assets/img/home.jpg";

export default function Amount() {
  return (
    <>
      <div
        style={{
          backgroundImage: `url(${imageAmount})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          alignItems: "center",
          padding: "5rem 0",
          color: "white",
        }}
      >
        <div
          style={{
            flex: "1",
            textAlign: "center",
            padding: "0 1rem",
          }}
        >
          <h1>125+</h1>
          <p>Project Client</p>
        </div>
        <div
          style={{
            flex: "1",
            textAlign: "center",
            padding: "0 1rem",
          }}
        >
          <h1>125+</h1>
          <p>Project Client</p>
        </div>
        <div
          style={{
            flex: "1",
            textAlign: "center",
            padding: "0 1rem",
          }}
        >
          <h1>125+</h1>
          <p>Project Client</p>
        </div>
        <div
          style={{
            flex: "1",
            textAlign: "center",
            padding: "0 1rem",
          }}
        >
          <h1>125+</h1>
          <p>Project Client</p>
        </div>
      </div>
    </>
  );
}
