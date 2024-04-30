import "aos/dist/aos.css";
import background from "../dummy/Background";

// const amountStyle = {
//   fontFamily: "Inter, sans-serif",
//   fontWeight: 400,
//   fontSize: "69px",
//   lineHeight: "69px",
//   color: "#000000",
//   "@media (max-width: 768px)": {
//     fontSize: "50px",
//   },
// };

// const amountTitleStyle = {
//   fontFamily: "Inter, sans-serif",
//   fontWeight: 500,
//   fontSize: "15px",
//   lineHeight: "38px",
//   color: "#000000",
// };

export default function Amount() {
  // useEffect(() => {
  //   AOS.init({});
  // }, []);
  return (
    <>
      <div
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          zIndex: -1,
          backgroundImage: `url(${background[1].image})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      <div className="container-fluid py-5 my-5" style={{ paddingTop: "100px" }}>
        {/* <div className="row justify-content-center text-black">
          <div
            className="col-6 col-sm-3 col-md-3 col-lg-3 col-xl-3 text-center mb-5"
            data-aos="fade-up"
            data-aos-duration="2000"
            data-aos-delay="0"
          >
            <h1 className="display-4" style={amountStyle}>
              <CountUp start={0} end={125} duration={13} delay={3} />+
            </h1>
            <p style={amountTitleStyle}>Project Client</p>
          </div>
          <div
            className="col-6 col-sm-3 col-md-3 col-lg-3 col-xl-3 text-center mb-5"
            data-aos="fade-up"
            data-aos-duration="2000"
            data-aos-delay="1000"
          >
            <h1 className="display-4" style={amountStyle}>
              <CountUp start={0} end={135} duration={15} delay={3} />
            </h1>
            <p style={amountTitleStyle}>Project Client</p>
          </div>
          <div
            className="col-6 col-sm-3 col-md-3 col-lg-3 col-xl-3 text-center mb-5"
            data-aos="fade-up"
            data-aos-duration="2000"
            data-aos-delay="2000"
          >
            <h1 className="display-4" style={amountStyle}>
              <CountUp start={0} end={145} duration={17} delay={3} />
            </h1>
            <p style={amountTitleStyle}>Project Client</p>
          </div>
          <div
            className="col-6 col-sm-3 col-md-3 col-lg-3 col-xl-3 text-center mb-5"
            data-aos="fade-up"
            data-aos-duration="2000"
            data-aos-delay="3000"
          >
            <h1 className="display-4" style={amountStyle}>
              <CountUp start={0} end={125} duration={19} delay={3} />
            </h1>
            <p style={amountTitleStyle}>Project Client</p>
          </div>
        </div> */}
      </div>
    </>
  );
}
