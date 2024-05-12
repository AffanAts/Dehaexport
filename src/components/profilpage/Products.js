import React, { useState, useEffect, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload } from "@fortawesome/free-solid-svg-icons";
import Slider from "react-slick";
import AOS from "aos";
import "aos/dist/aos.css";
import { getProducts } from "../api/productApi";
import Xproduct from "../dummy/Product";

export default function Product() {
  const [products, setProducts] = useState([]);
  const [expandedDescriptionId, setExpandedDescriptionId] = useState(null);
  const sliderRef = useRef(null);

  const titleStyle = {
    fontFamily: "'Bad Script', sans-serif",
    fontWeight: 700,
    fontSize: "34px",
    color: "#000000",
  };
  const textStyle = {
    fontFamily: "Inter, sans-serif",
    fontWeight: 300,
    fontSize: "14px",
    lineHeight: "24px",
    color: "#000000",
  };

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
    afterChange: (currentSlide) => {
      setExpandedDescriptionId(null);
    },
  };

  useEffect(() => {
    AOS.init({ duration: 500 });
  }, []);

  useEffect(() => {
    getProducts((data) => {
      setProducts(data);
    });
  }, []);

  const toggleDescription = (itemId) => {
    if (expandedDescriptionId === itemId) {
      setExpandedDescriptionId(null);
    } else {
      setExpandedDescriptionId(itemId);
    }
  };

  return (
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
            ...titleStyle,
          }}
          className="pt-5"
          data-aos="fade-up"
        >
          Products
        </h1>
        <p
          style={{
            ...textStyle,
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
          style={{ width: "75%" }}
          data-aos="fade-up"
        >
          <Slider ref={sliderRef} {...settings}>
            {Xproduct.length > 0 &&
              Xproduct.map((item) => (
                <div key={item.id}>
                  <div
                    className="card"
                    style={{ maxWidth: "320px", Height: "600px" }}
                    data-aos="zoom-in"
                  >
                    <center>
                      <img
                        src={item.image}
                        className="card-img-top"
                        alt={item.title}
                        data-aos="zoom-in"
                        style={{
                          objectFit: "cover",
                          width: "100%",
                          height: "200px",
                          maxHeight: "200px",
                        }}
                      />
                    </center>

                    <div className="card-body">
                      <h5 className="card-title" style={{ ...titleStyle }}>
                        {item.name}
                      </h5>
                      <p
                        className="card-text"
                        style={{
                          ...textStyle,
                          textAlign: "justify", // Rata kanan dan kiri
                        }}
                      >
                        <b>Grade:</b> {item.grade}
                        <br />
                        {item.description.length > 190 ? (
                          <>
                            {item.description.substring(0, 190)}
                            {expandedDescriptionId === item.id
                              ? item.description.substring(190)
                              : "..."}
                            <span
                              style={{ color: "blue", cursor: "pointer" }}
                              onClick={() => toggleDescription(item.id)}
                            >
                              {expandedDescriptionId === item.id
                                ? " Read less"
                                : " Read more"}
                            </span>
                          </>
                        ) : (
                          item.description
                        )}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
          </Slider>
        </div>

        <button
          type="button"
          className="btn btn-primary mb-5 mt-2"
          style={{ textDecoration: "none" }}
        >
          <center>
            <FontAwesomeIcon icon={faDownload} className="px-2" />
            <a
              href="https://drive.google.com/uc?export=download&id=1koiwa0JN42W-hhf4THC_Ep3bW_civluG "
              style={{
                ...textStyle,
                fontWeight: 400,
                fontSize: "14px",
                lineHeight: "14px",
                color:
                  "white" /* Menyesuaikan warna teks dengan latar belakang */,
                textDecoration: "none" /* Menyembunyikan garis bawah */,
              }}
            >
              Download Catalog
            </a>
          </center>
        </button>
      </div>
    </center>
  );
}

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
