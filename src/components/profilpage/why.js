import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

// Import SVG icons
import lightbulbIcon from "../../assets/logo/lightbulb.svg";
import handshakeIcon from "../../assets/logo/handshake.svg";
import deliveryIcon from "../../assets/logo/delivery.svg";
import distributionIcon from "../../assets/logo/box.svg";
import competitivePriceIcon from "../../assets/logo/money.svg";
import people from "../../assets/logo/people.svg";

function App() {
  const data = [
    {
      title: "Innovation",
      text: "We strive to continuously create innovative applications and new quality products to meet market demands.",
      imageUrl: lightbulbIcon,
    },
    {
      title: "Commitment",
      text: "Maintaining and ensuring the consistency of our products in terms of quantity, quality, and flavor to achieve consumer satisfaction, as consumer satisfaction is our main commitment.",
      imageUrl: handshakeIcon,
    },
    {
      title: "Delivery",
      text: "Ensuring safe, fast, and accurate product delivery to the consumer's hands.",
      imageUrl: deliveryIcon,
    },
    {
      title: "Distribution",
      text: "We have a reliable national and international distribution network.",
      imageUrl: distributionIcon,
    },
    {
      title: "Competitive Pricing",
      text: "Providing high-quality premium products at competitive prices.",
      imageUrl: competitivePriceIcon,
    },
    {
      title: "Partnerships",
      text: "Building strong partnerships with local spice farmers to ensure a sustainable supply of raw materials.",
      imageUrl: people,
    },
  ];

  const titleStyle = {
    fontFamily: "'Bad Script', sans-serif",
    fontWeight: 600,
    fontSize: "44px",
    lineHeight: "57px",
    color: "#000000",
  };

  const textStyle = {
    fontFamily: "Inter, sans-serif",
    fontWeight: 300,
    fontSize: "14px",
    lineHeight: "24px",
    color: "#000000",
  };

  return (
    <div data-aos="fade-up">
      <center className="mb-5">
        <h2 style={{ ...titleStyle }} id="why">
          Why Choose Us?
        </h2>
      </center>
      <div className="container text-center">
        <div className="row row-cols-1 row-cols-md-3 g-4">
          {data.map((item, index) => (
            <div className="col" key={index}>
              <div className="card h-100 border-0">
                <img
                  src={item.imageUrl}
                  className="card-img-top mx-auto scale-up"
                  alt={item.title}
                  style={{ width: "80px", height: "80px", transition: "transform 0.2s" }}
                  onMouseOver={(e) => { e.currentTarget.style.transform = 'scale(1.3)' }}
                  onMouseOut={(e) => { e.currentTarget.style.transform = 'scale(1)' }}
                />
                <div className="card-body">
                  <h5 className="card-title">{item.title}</h5>
                  <p className="card-text">{item.text}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
