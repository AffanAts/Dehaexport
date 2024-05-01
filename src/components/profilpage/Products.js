import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload } from "@fortawesome/free-solid-svg-icons";
import Slider from "react-slick";
import AOS from "aos";
import "aos/dist/aos";
import { getProducts } from "../api/productApi";
import AnimatedShowMore from "react-animated-show-more";
import Xproduct from "../dummy/Product";

export default function Product() {
  const [products, setProducts] = useState([]);
  // const token = localStorage.getItem("token");
  // const [username, setUsername] =useState("");

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
          paddingRight: "9px",
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
          paddingRight: "9px",
        }}
        onClick={onClick}
      />
    );
  }

  useEffect(() => {
    AOS.init({ duration: 500 });
  }, []);

  useEffect(() => {
    getProducts((data) => {
      setProducts(data);
    });
  }, []);

  //  useEffect (() =>{
  //     setUsername(getUsername(token));
  //  }, []);
  return (
    <>
      <center>
        <div
          className="py-2 px-5"
          style={{
            backgroundColor: "white",
            width: "100%",
          }}
        >
          <h1
            style={{
              fontFamily: "Bad Script, sans-serif",
              fontWeight: 600,
              fontSize: "38px",
              lineHeight: "49px",
            }}
            className="pt-5"
            data-aos="fade-up"
          >
            Products
          </h1>
          <p
            style={{
              fontFamily: "Inter, sans-serif",
              fontWeight: 400,
              fontSize: "14px",
              lineHeight: "20px",
              maxWidth: 500,
              minWidth: 200,
            }}
            className="pb-3"
            data-aos="fade-up"
          >
            Learn more about our product. You can see our product here, click to
            see more detail about our product.
          </p>
          <div
            className="slider-container"
            style={{ width: "78%" }}
            data-aos="fade-up"
          >
            <Slider {...settings}>
              {Xproduct.length > 0 &&
                Xproduct.map((item) => (
                  <div key={item.id}>
                    <div
                      class="card h-100"
                      style={{ maxWidth: "310px" }}
                      data-aos="zoom-in"
                    >
                      <center>
                        <img
                          src={item.image}
                          className="card-img-top"
                          alt={item.title}
                          data-aos="zoom-in"
                          style={{ objectFit: "cover", maxHeight: "200px" }}
                        />
                      </center>

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
                          <AnimatedShowMore
                            height={100}
                            toggle={({ isOpen }) =>
                              isOpen ? "Close!" : "Open!"
                            }
                            speed={300}
                            shadowColor="#FFFFFF"
                          >
                            {" "}
                            {item.description}
                          </AnimatedShowMore>
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
            </Slider>
          </div>

          <button
            type="button"
            className="btn btn-secondary my-5"
            data-aos="zoom-in"
          >
            <center>
              <FontAwesomeIcon icon={faDownload} className="px-2" />
              <a
                href="/#"
                style={{
                  fontFamily: "Inter, sans-serif",
                  fontWeight: 400,
                  fontSize: "14px",
                  lineHeight: "14px",
                }}
              >
                Download Catalog
              </a>
            </center>
          </button>
        </div>
      </center>
    </>
  );
}
