import homeBackground from "../../assets/img/home.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCirclePlay } from "@fortawesome/free-solid-svg-icons";

export default function Video() {
  return (
    <div>
      <a href="https://template94.webekspor.com/">
        <div
          style={{
            backgroundImage: `url(${homeBackground})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            width: "100vw", // Set width to viewport width
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
              textDecoration: "none",
            }}
          >
            The World Class Spices from Indonesia
          </h1>
          <center>
            <FontAwesomeIcon icon={faCirclePlay} size="2xl" className="py-3" />
          </center>
        </div>
      </a>
    </div>
  );
}
