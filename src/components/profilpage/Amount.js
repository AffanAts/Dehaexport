import React from "react";
import imageAmount from "../../assets/img/home.jpg";
import CountUp from "react-countup";

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
      <div className="container-fluid pt-5">
        <div className="row justify-content-center text-black">
          <div className="col-6 col-sm-3 col-md-3 col-lg-3 col-xl-3 text-center mb-5">
            <h1 className="display-4">
              <CountUp start={0} end={125} duration={2} delay={0} />+
            </h1>
            <p>Project Client</p>
          </div>
          <div className="col-6 col-sm-3 col-md-3 col-lg-3 col-xl-3 text-center mb-5">
            <h1 className="display-4">
              <CountUp start={0} end={125} duration={2} delay={0} />
            </h1>
            <p>Project Client</p>
          </div>
          <div className="col-6 col-sm-3 col-md-3 col-lg-3 col-xl-3 text-center mb-5">
            <h1 className="display-4">
              <CountUp start={0} end={125} duration={2} delay={0} />
            </h1>
            <p>Project Client</p>
          </div>
          <div className="col-6 col-sm-3 col-md-3 col-lg-3 col-xl-3 text-center mb-5">
            <h1 className="display-4">
              <CountUp start={0} end={125} duration={2} delay={0} />
            </h1>
            <p>Project Client</p>
          </div>
        </div>
      </div>
    </>
  );
}
