import React, { useEffect } from "react";
import Slider from "react-slick";
import listBlog from "../dummy/ListBlog";
import AOS from "aos";
import "aos/dist/aos";

export default function SimpleSlider() {
  var settings = {
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{
          ...style,
          backgroundColor: "grey",
          borderRadius: "10px",
          width: "19px",
          height: "18px",
        }}
        onClick={onClick}
      />
    );
  }
  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{
          ...style,
          backgroundColor: "grey",
          borderRadius: "10px",
          width: "19px",
          height: "18px",
        }}
        onClick={onClick}
      />
    );
  }

  useEffect(() => {
    AOS.init({ duration: 500 });
  }, []);
  return (
    <div style={{ backgroundColor: "white" }}>
      <div
        className="mx-auto text-center"
        style={{ width: "78%", paddingTop: 50, paddingBottom: 150 }}
      >
        <h4
          style={{
            fontFamily: "Bad Script, sans-serif",
            fontWeight: 600,
            fontSize: "38px",
            lineHeight: "49px",
          }}
        >
          Our Blog
        </h4>
        <p
          style={{
            fontFamily: "Inter, sans-serif",
            fontWeight: 400,
            fontSize: "14px",
            lineHeight: "21px",
            margin: "auto",
            paddingBottom: "20px",
            maxWidth: 600,
            minWidth: 200,
          }}
        >
          You can see our blog here, click to see blog detail. You can see our
          daily activity or news about exported, product process and many more.
        </p>
        <Slider {...settings}>
          {listBlog.map((blog) => (
            <div key={blog.id}>
              <div
                class="card"
                style={{ maxWidth: "370px", minWidth: "200px" }}
                data-aos="zoom-in"
              >
                <img
                  src={blog.image}
                  className="card-img-top"
                  alt={blog.title}
                  style={{ height: 300 }}
                  data-aos="zoom-in"
                />
                <div class="card-body">
                  <p
                    class="card-text"
                    style={{
                      fontFamily: "Inter",
                      fontWeight: 400,
                      fontSize: "16px",
                      lineHeight: "22px",
                    }}
                  >
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}
