import profilePict from "../../assets/img/home.jpg";
import card from "../profilpage/mockCard";
import Slider from "react-slick";

const cardTitle = {
  fontFamily: "Inter, sans-serif",
  fontWeight: 400,
  fontSize: "16px",
  lineHeight: "22px",
  color: "black",
};

const cardText = {
  fontFamily: "Inter, sans-serif",
  fontWeight: 400,
  fontSize: "13px",
  lineHeight: "16px",
  color: "gray",
};

export default function Blog() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div className="py-5 px-5" style={{ backgroundColor: "white" }}>
      <center>
        <h1
          style={{
            fontFamily: "Bad Script, sans-serif",
            fontWeight: 600,
            fontSize: "38px",
            lineHeight: "49px",
            color: "black",
          }}
        >
          Our Blog
        </h1>
        <p
          style={{
            fontFamily: "Inter, sans-serif",
            fontWeight: 400,
            fontSize: "14px",
            lineHeight: "21px",
            color: "gray",
            maxWidth: 600,
            minWidth: 200,
          }}
        >
          You can see our blog here, click to see blog detail. You can see our
          daily activity or news about exported, product process and many more.
        </p>
        <div>
          <Slider {...settings}>
            <div>
              <h3>1</h3>
            </div>
            <div>
              <h3>2</h3>
            </div>
            <div>
              <h3>3</h3>
            </div>
            <div>
              <h3>4</h3>
            </div>
            <div>
              <h3>5</h3>
            </div>
            <div>
              <h3>6</h3>
            </div>
          </Slider>
        </div>
      </center>
    </div>
  );
}
