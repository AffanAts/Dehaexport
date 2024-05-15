import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";
import {
  faInstagram,
  faFacebook,
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
      style={{ backgroundColor: "#f0f0f0", padding: "20px", textAlign: "justify" }}
      className="px-1"
    >
      <div className="container">
        <div className="row align-items-start">
          <div className="col-md-6">
            <h3>PT DEHA Corp International</h3>
            <p style={footerText} className="w-100">
              Our Company is made up of a group of highly skilled and
              professionals who pays a lot of attention to small details. We’re
              working to build a future of shared success.
            </p>
            <div className="social-media mb-4">
              <h5 style={footerTitle}>Social Media</h5>
              <div
              >
                <a href="https://www.instagram.com/dehaexport?igsh=MTlhYXUyMWZmcmZuMg==">
                  <FontAwesomeIcon icon={faInstagram} className="me-2" />
                </a>{" "}
                <a href="https://www.linkedin.com/in/deha-corp-529108301?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app">
                  <FontAwesomeIcon icon={faLinkedin} className="me-2" />
                </a>{" "}
                <a href="https://www.facebook.com/profile.php?id=61558964555945">
                  <FontAwesomeIcon icon={faFacebook} className="me-2" />
                </a>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <h5 style={footerTitle}>Address</h5>
            <p style={footerText}>
              Batan Indah E 74b, South Tangerang, Banten, Indonesia 15314
            </p>
            <div className="mb-4">
              <a
                href="dehacorpin@gmail.com"
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
                dehacorpin@gmail.com
              </a>
              <br />
              <a
                href="tel:+905056832054"
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
                +90-5382236354
              </a>
            </div>
          </div>
          <div className="col-md-3 d-flex justify-content-end">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d247.84205449874347!2d106.66998147056974!3d-6.332731008120616!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sid!2sid!4v1715757712659!5m2!1sid!2sid"
              width="100%"
              height="200"
              style={{ border: "0" }}
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </footer>
  );
}
