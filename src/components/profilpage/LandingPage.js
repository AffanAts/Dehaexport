import homeBackground from "../../assets/img/home.jpg";

export default function LandingPage() {
  return (
    <div
      style={{
        backgroundImage: `url(${homeBackground})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        width: "100%", // Change to 100% for responsiveness
        height: "100vh",
        padding: 0,
        margin: 0,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        overflowX: "hidden", // Hide horizontal overflow
      }}
    >
      <h1
        style={{
          fontSize: "calc(14px + 2vw)", // Responsive font size
          color: "white",
          textAlign: "center",
          maxWidth: "90%", // Responsive width
        }}
      >
        The World Class Spices from Indonesia
      </h1>
      <p
        style={{
          color: "white",
          textAlign: "center",
          maxWidth: "90%", // Responsive width
          padding: "0 20px",
          fontSize: "calc(10px + 1vw)", // Responsive font size
        }}
      >
        Spices are Indonesia’s fourth largest export commodity, after shrimp,
        fish, and coffee. As one of the world’s spice producers, Indonesia has a
        great opportunity as a supplier of the world’s spices to contribute to
        the Indonesian economy.
      </p>
    </div>
  );
}
