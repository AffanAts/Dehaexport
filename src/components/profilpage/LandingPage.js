import React, { useEffect } from "react";
import homeBackground from "../../assets/img/home.jpg";
import AOS from "aos";
import "aos/dist/aos.css";

export default function LandingPage() {
  useEffect(() => {
    AOS.init({ duration: 1500 });
  }, []);
  return (
    <div
      data-aos="fade-zoom-in"
      data-aos-easing="ease-in-back"
      data-aos-delay="300"
      data-aos-offset="0"
    >
      <div
        style={{
          backgroundImage: `url(${homeBackground})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          width: "100%", // Set width to viewport width
          height: "100vh", // Set height to viewport height
          padding: 0,
          margin: 0,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <h1
          style={{
            color: "white", // Text color
            textAlign: "center",
            fontFamily: "Dancing Script",
            fontWeight: 800,
            fontSize: "68px",
            lineHeight: "75px",
            maxWidth: "60%",
            minWidth: "40%",
          }}
        >
          The World Class Spices from Indonesia
        </h1>
        <p
          style={{
            color: "white", // Text color
            textAlign: "center",
            maxWidth: 600, // Limiting width of text
            padding: "0 20px", // Adding padding for better readability
            fontFamily: "Inter",
            fontWeight: 300,
            fontSize: "15px",
            lineHeight: "26px",
          }}
        >
          Spices are Indonesia’s fourth largest export commodity, after shrimp,
          fish, and coffee. As one of the world’s spice producers, Indonesia has
          a great opportunity as a supplier of the world’s spices to contribute
          to the Indonesian economy.
        </p>
      </div>
    </div>
  );
}
