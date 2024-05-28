import React, { useState, useEffect, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload } from "@fortawesome/free-solid-svg-icons";
import Slider from "react-slick";
import AOS from "aos";
import "aos/dist/aos.css";
import { getAllProducts } from "../../config/typeDef";
import { useQuery } from "@apollo/client";
import { Modal, Button } from "react-bootstrap";
import ProductModal from "./ProductModal"; // Import tambahan untuk modal
import Loader from "../navbar/Loader"

export default function Product() {
  const { data, loading, error } = useQuery(getAllProducts);
  const [products, setProducts] = useState([]);
  const [expandedDescriptionId, setExpandedDescriptionId] = useState(null);
  const [imageError, setImageError] = useState({});
  const [showModal, setShowModal] = useState(false);
  const [selectedProductId, setSelectedProductId] = useState(null); // State untuk menyimpan ID produk yang dipilih
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
    if (data && data.products) {
      setProducts(data.products);
    }
    if (error) {
      console.error("Error fetching products:", error);
    }
  }, [data, error]);

  const toggleDescription = (itemId) => {
    if (expandedDescriptionId === itemId) {
      setExpandedDescriptionId(null);
    } else {
      setExpandedDescriptionId(itemId);
    }
  };

  const handleImageError = (id) => {
    setImageError((prev) => ({ ...prev, [id]: true }));
  };

  const handleShowModal = (productId) => {
    setSelectedProductId(productId);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setSelectedProductId(null);
  };

  if (loading) {
    return <p><Loader/></p>;
  }

  return (
    <center>
      <div
        className="py-2"
        style={{
          backgroundColor: "white",
          width: "100%",
        }}
        id="Products"
        data-aos="fade-up"
      >
        <h1
          style={{
            ...titleStyle,
          }}
          className="pt-5"
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
        >
          Learn more about our product. You can see our product here, click to
          see more detail about our product.
        </p>
        <div className="slider-container" style={{ width: "75%" }}>
          {products.length > 0 ? (
            <Slider ref={sliderRef} {...settings}>
              {products.map((item) => (
                <div key={item.id}>
                  <div
                    className="card mb-3"
                    style={{
                      maxWidth: "340px",
                      border: "none",
                      boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.25)",
                    }}
                    data-aos="zoom-in"
                  >
                    <center>
                      {item.image && !imageError[item.id] ? (
                        <img
                          src={item.image}
                          className="card-img-top"
                          alt={item.name}
                          data-aos="zoom-in"
                          style={{
                            objectFit: "cover",
                            width: "100%",
                            height: "200px",
                            maxHeight: "200px",
                          }}
                          onError={() => handleImageError(item.id)}
                        />
                      ) : (
                        <div
                          style={{
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            width: "100%",
                            height: "200px",
                            backgroundColor: "#f0f0f0",
                            color: "#000",
                            fontSize: "14px",
                            fontFamily: "Inter, sans-serif",
                          }}
                        >
                          Gambar tidak tersedia
                        </div>
                      )}
                    </center>

                    <div className="card-body">
                      <h5 className="card-title" style={{ ...titleStyle }}>
                        {item.name}
                      </h5>
                      <p
                        className="card-text"
                        style={{
                          ...textStyle,
                          textAlign: "justify",
                        }}
                      >
                        <Button
                          className="text-white my-3"
                          style={{
                            textDecoration: "none",
                            padding: "5px 10px", // Atur padding sesuai keinginan
                            fontSize: "12px", // Atur ukuran font sesuai keinginan
                            height: "27px", // Atur tinggi button sesuai keinginan
                            width: "auto", // Atur lebar button sesuai keinginan
                          }}
                          onClick={() => handleShowModal(item.id)} // Menggunakan ID produk untuk modal
                        >
                         Grade
                        </Button>

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
          ) : (
            <p style={textStyle}>Produk belum tersedia</p>
          )}
        </div>

        <button
          type="button"
          className="btn btn-primary mt-3 mb-5"
          style={{
            fontFamily: "Inter, sans-serif",
            fontWeight: 500,
            fontSize: "16px",
            lineHeight: "20px",
          }}
        >
          <FontAwesomeIcon icon={faDownload} className="px-2" />
          <a
            href="https://drive.google.com/uc?export=download&id=1koiwa0JN42W-hhf4THC_Ep3bW_civluG"
            className="text-white"
            style={{ textDecoration: "none" }}
          >
            Download Catalog
          </a>
        </button>
      </div>

      {selectedProductId && (
        <ProductModal
          productId={selectedProductId}
          show={showModal}
          closeModal={handleCloseModal}
        />
      )}
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
