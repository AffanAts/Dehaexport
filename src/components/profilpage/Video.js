import React, { useState } from "react";
import homeBackground from "../../assets/img/home.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCirclePlay } from "@fortawesome/free-solid-svg-icons";

export default function Video() {
  // State to manage whether the modal is open or not
  const [modalOpen, setModalOpen] = useState(false);

  // Function to open the modal
  const openModal = () => {
    setModalOpen(true);
  };

  // Function to close the modal
  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <div>
      {/* Thumbnail */}
      <div
        style={{
          position: "relative",
          width: "100%", // Changed width to 100%
          height: "100vh",
          backgroundImage: `url(${homeBackground})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          cursor: "pointer",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
        onClick={openModal}
      >
        <h1
          style={{
            color: "white",
            fontSize: "calc(8px + 2vw)", // Adjusted font size to be responsive
            textAlign: "center", // Centered text horizontally
            maxWidth: "90%", // Added maxWidth to prevent text overflow
            marginBottom: "20px", // Added margin bottom to create space between text and button
          }}
        >
          The World Class Spices from Indonesia
        </h1>
        <FontAwesomeIcon
          icon={faCirclePlay}
          size="2x"
          style={{
            color: "white",
            cursor: "pointer",
          }}
        />
      </div>

      {/* Modal */}
      {modalOpen && (
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            background: "rgba(0, 0, 0, 0.7)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            zIndex: 1000, // Menempatkan modal di atas konten lain
          }}
          onClick={closeModal}
        >
          <div
            style={{
              position: "relative",
              width: "70%", // Changed width to 70%
              paddingBottom: "40%", // Aspect ratio 16:9
              height: 0,
              zIndex: 1001, // Menempatkan video di atas modal
            }}
          >
            <iframe
              title="video"
              src="https://www.youtube.com/embed/V0Enmg432fA"
              frameBorder="0"
              allow="autoplay; encrypted-media"
              allowFullScreen
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "95%",
                height: "90%",
              }}
            ></iframe>
          </div>
        </div>
      )}
    </div>
  );
}
