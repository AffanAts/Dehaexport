import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import background from "../dummy/Background";

export default function LandingPage() {
  useEffect(() => {
    AOS.init({ duration: 500 });
  }, []);

  return (
    <div
      data-aos="fade-zoom-in"
      data-aos-easing="ease-in-back"
      data-aos-delay="300"
      data-aos-offset="0"
      style={{
        position: "relative", // Position div for overlay
        width: "100%", // Set width to viewport width
        height: "100vh", // Set height to viewport height
        display: "flex", // Use flexbox for centering
        justifyContent: "center", // Center horizontally
        alignItems: "center", // Center vertically
      }}
    >
      {/* Background image */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundImage: `url(${background[4].image})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      />

      {/* Dark overlay */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundColor: "rgba(0, 0, 0, 0.3)", // Black with 50% opacity
        }}
      />

      {/* Text content */}
      <div
        style={{
          zIndex: 1, // Ensure text is above overlay
          textAlign: "center",
          color: "white", // Text color
          padding: "0 20px", // Adding padding for better readability
          // Limiting width of text
        }}
      >
        <center>
        <h1
          style={{
            fontFamily: "Dancing Script",
            fontSize: "68px",
            lineHeight: "75px",
            marginBottom: "20px", // Add margin bottom for spacing
            maxWidth: "800px",
          }}
          className="fw-bold"
        >
          The World Class Spices From Indonesia
        </h1>
        <p
          style={{
            fontFamily: "Inter",
            fontSize: "18px",
            lineHeight: "26px",
            maxWidth: "650px",
          }}
          className="fw-medium"
        >
          Welcome to DEHA EXPORT, Specialized Spices from indonesia. Your solution for finding Spices Product with High quality
        </p></center>
      </div>
    </div>
  );
}
