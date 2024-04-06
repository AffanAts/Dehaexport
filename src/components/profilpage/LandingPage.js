import homeBackground from "../../assets/img/home.jpg";

export default function LandingPage() {
  return (
    <div
      style={{
        backgroundImage: `url(${homeBackground})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat:"no-repeat",
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
          fontSize: 50,
          color: "white", // Text color
          textAlign: "center",
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
