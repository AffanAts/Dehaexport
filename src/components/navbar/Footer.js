import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";
import {
  faInstagram,
  faTiktok,
  faYoutube,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";

const footerTitle = {
  fontFamily: "Bad Script, sans-serif",
  fontWeight: 700,
  fontSize: "24px",
  lineHeight: "34px",
};

const footerText = {
  fontFamily: "Inter, sans-serif",
  fontWeight: 300,
  fontSize: "14px",
  lineHeight: "22px",
};

export default function Footer() {
  const isWorkingHours = () => {
    const currentDate = new Date();
    const dayOfWeek = currentDate.getDay();
    const hour = currentDate.getHours();
    return dayOfWeek >= 1 && dayOfWeek <= 5 && hour >= 9 && hour < 17;
  };

  return (
    <footer
      style={{ backgroundColor: "#f0f0f0", padding: "20px" }}
      className="py-5 px-1"
    >
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <h3>WebEkspor</h3>
            <p style={footerText} className="w-100">
              Our Company is made up of a group of highly skilled and
              professionals who pay a lot of attention to small details. We’re
              working to build a future of shared success.
            </p>
          </div>
          <div className="col-md-3">
            <h5 style={footerTitle}>Address</h5>
            <p style={footerText}>
              Jl. Indonesia Raya, Sudirman, Jakarta Selatan, DKI Jakarta,
              Indonesia, 10150
            </p>
            <a
              href="mailto:mail@example.com"
              style={{
                color: "black",
                textDecoration: "none",
                fontFamily: "Inter, sans-serif",
                fontWeight: 400,
                fontSize: "14px",
                lineHeight: "20px",
              }}
            >
              <FontAwesomeIcon icon={faEnvelope} className="me-2" />
              mail@example.com
            </a>
            <br />
            <a
              href="tel:+9910123456789"
              style={{
                color: "black",
                textDecoration: "none",
                fontFamily: "Inter, sans-serif",
                fontWeight: 400,
                fontSize: "14px",
                lineHeight: "20px",
              }}
            >
              <FontAwesomeIcon icon={faPhone} className="me-2" />
              +991-0123456789
            </a>
          </div>
          <div className="col-md-3 d-flex justify-content-between flex-column flex-md-row">
            <div>
              <h5 style={footerTitle}>Working Hours</h5>
              <div>
                <h6
                  style={{
                    fontFamily: "Inter, sans-serif",
                    fontWeight: 600,
                    fontSize: "14px",
                    lineHeight: "21px",
                  }}
                >
                  Mon-Fri
                </h6>
                <p
                  style={{
                    fontFamily: "Inter, sans-serif",
                    fontWeight: 400,
                    fontSize: "14px",
                    lineHeight: "20px",
                  }}
                >
                  9 am - 5pm
                </p>
              </div>
              <div>
                <h6
                  style={{
                    fontFamily: "Inter, sans-serif",
                    fontWeight: 600,
                    fontSize: "14px",
                    lineHeight: "21px",
                  }}
                >
                  Sat & Sun
                </h6>
                <p
                  style={{
                    fontFamily: "Inter, sans-serif",
                    fontWeight: 400,
                    fontSize: "14px",
                    lineHeight: "20px",
                  }}
                >
                  We Are Closed!
                </p>
              </div>
            </div>
            <div className="social-media">
              <h5 style={footerTitle}>Social Media</h5>
              <div style={{ display: isWorkingHours() ? "flex" : "block" }}>
                <FontAwesomeIcon icon={faYoutube} className="me-2" />
                <FontAwesomeIcon icon={faInstagram} className="me-2" />
                <FontAwesomeIcon icon={faTiktok} className="me-2" />
                <FontAwesomeIcon icon={faLinkedin} className="me-2" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
