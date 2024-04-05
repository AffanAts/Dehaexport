import React from "react";
import imageAmount from "../../assets/img/home.jpg";
import CountUp from "react-countup";

const amountStyle = {
  fontFamily: "Inter, sans-serif",
  fontWeight: 400,
  fontSize: "69px",
  lineHeight: "69px",
  color: "#000000",
  "@media (max-width: 768px)": {
    // aturan media queries
    fontSize: "50px", // Ubah ukuran teks sesuai kebutuhan
  },
};

const amountTitleStyle = {
  fontFamily: "Inter, sans-serif",
  fontWeight: 500,
  fontSize: "15px",
  lineHeight: "38px",
  color: "#000000",
};

export default function Amount() {
  return (
    <>
      <div
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%", // Set a specific height, you can adjust this value as needed
          zIndex: -1,
          backgroundImage: `url(${imageAmount})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      <div className="container-fluid px-5" style={{ paddingTop: "100px" }}>
        <div className="row justify-content-center text-black">
          <div className="col-6 col-sm-3 col-md-3 col-lg-3 col-xl-3 text-center mb-5">
            <h1 className="display-4" style={amountStyle}>
              <CountUp start={0} end={125} duration={2} delay={0} />+
            </h1>
            <p style={amountTitleStyle}>Project Client</p>
          </div>
          <div className="col-6 col-sm-3 col-md-3 col-lg-3 col-xl-3 text-center mb-5">
            <h1 className="display-4" style={amountStyle}>
              <CountUp start={0} end={125} duration={2} delay={0} />
            </h1>
            <p style={amountTitleStyle}>Project Client</p>
          </div>
          <div className="col-6 col-sm-3 col-md-3 col-lg-3 col-xl-3 text-center mb-5">
            <h1 className="display-4" style={amountStyle}>
              <CountUp start={0} end={125} duration={2} delay={0} />
            </h1>
            <p style={amountTitleStyle}>Project Client</p>
          </div>
          <div className="col-6 col-sm-3 col-md-3 col-lg-3 col-xl-3 text-center mb-5">
            <h1 className="display-4" style={amountStyle}>
              <CountUp start={0} end={125} duration={2} delay={0} />
            </h1>
            <p style={amountTitleStyle}>Project Client</p>
          </div>
        </div>
      </div>
    </>
  );
}
