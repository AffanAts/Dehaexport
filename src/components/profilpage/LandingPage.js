import homeBackground from "../../assets/img/home.jpg";

export default function LandingPage() {
  return (
    <div
      style={{
        backgroundImage: `url(${homeBackground})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        width: "100%",
        height: "100vh",
        padding: 0,
        margin: 0,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        overflowX: "hidden",
      }}
    >
      <h1
        style={{
          fontSize: "calc(14px + 2vw)",
          color: "white",
          textAlign: "center",
          maxWidth: 900,
          fontSize: "68px",
          fontFamily: "Dancing Script",
          fontWeight: 800,
          lineHeight: "52px",
          paddingTop: 100,
          width: "90%", // Adjusted to 90%
        }}
      >
        The World Class Spices from Indonesia
      </h1>
      <p
        style={{
          color: "white",
          textAlign: "center",
          maxWidth: 900,
          padding: "0 20px",
          fontSize: "15px",
          fontFamily: "Inter",
          fontWeight: 300,
          lineHeight: "22px",
          paddingTop: "20px",
          width: "90%", // Adjusted to 90%
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
