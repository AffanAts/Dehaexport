import React from "react";
import profilePict from "../../assets/img/home.jpg";

export default function Definition() {
  return (
    <div
      className="mt-5 mb-5 px-5"
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        flexWrap: "wrap",
        backgroundColor: "white",
        height: "60vh", // Allow items to wrap onto multiple lines
      }}
    >
      <div
        style={{
          width: "100%",
          maxWidth: "600px",
          padding: "0 10px",
          order: "2", // Set order to 2 to push it to the right
        }}
      >
        <h2>Spices is Indonesia’s fourth largest export commodity</h2>
        <p>
          The largest exporter of spice and spice items. Spices is Indonesia’s
          fourth largest export commodity, after shrimp, fish and coffee. As one
          of the world’s spice producers, Indonesia has a great opportunity as a
          supplier of the world’s spices to contribute to the Indonesian
          economy. Spices is a plant species that has a strong taste and aroma
          and also serves as a flavor and food flavor enhancer.
        </p>
      </div>
      <div
        style={{
          order: "1", // Set order to 1 to bring it to the left
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
          justifyContent: "center",
        }}
      >
        <img
          src={profilePict}
          alt="Your Image"
          style={{
            width: "100%",
            maxWidth: "300px",
            height: "auto",
            margin: "10px",
          }}
        />
        <img
          src={profilePict}
          alt="Your Image"
          style={{
            width: "100%",
            maxWidth: "300px",
            height: "auto",
            margin: "10px",
          }}
        />
      </div>
    </div>
  );
}
