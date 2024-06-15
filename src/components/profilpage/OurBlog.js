import React, { useState, useEffect, useRef } from "react";
import Slider from "react-slick";
import AOS from "aos";
import "aos/dist/aos.css";
import { useLazyQuery } from "@apollo/client";
import { getAllBlogs } from "../../config/typeDef";
import { Link } from "react-router-dom";

export default function Blog() {
  const [blogs, setBlogs] = useState([]);
  const [imageError, setImageError] = useState({});
  const sliderRef = useRef(null);

  const [getBlogs, { data, error }] = useLazyQuery(getAllBlogs);

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
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
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
          slidesToShow: 2,
          slidesToScroll: 2,
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

  useEffect(() => {
    AOS.init({ duration: 500 });
  }, []);

  useEffect(() => {
    getBlogs();
  }, [getBlogs]);

  useEffect(() => {
    if (data && data.blogs) {
      setBlogs(data.blogs);
    }
    if (error) {
      console.error("Error fetching blogs:", error);
    }
  }, [data, error]);

  const handleImageError = (id) => {
    setImageError((prev) => ({ ...prev, [id]: true }));
  };

  const extractParagraphs = (html) => {
    const div = document.createElement("div");
    div.innerHTML = html;
    const paragraphs = div.getElementsByTagName("p");
    let content = "";
    for (let i = 0; i < paragraphs.length; i++) {
      content += paragraphs[i].outerHTML;
    }
    return content;
  };

  const truncateDescription = (description) => {
    const words = description.split(" ");
    if (words.length > 30) {
      return words.slice(0, 30).join(" ") + "...";
    }
    return description;
  };

  return (
    <center>
      <div
        className="py-2"
        style={{
          backgroundColor: "white",
          width: "100%",
        }}
        id="blog"
      >
        <h1
          style={{
            ...titleStyle,
          }}
          className="pt-5"
          data-aos="fade-up"
        >
          Our Blog
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
          You can see our blog here, click to see blog detail. You can see our daily activity or news about exported, product process and many more.
        </p>
        <div className="slider-container" style={{ width: "75%" }} data-aos="fade-up">
          <Slider ref={sliderRef} {...settings}>
            {blogs.length > 0 &&
              blogs.map((item) => (
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
                        <Link to={`/blog/${item.id}`}>
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
                            onError={() => handleImageError(item.id)}
                          />
                        </Link>
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

                    <div className="card-body ">
                      <Link to={`/blog/${item.id}`} className="text-decoration-none">
                        <h5 className="card-title" style={{ ...titleStyle }}>
                          {truncateDescription(item.title)}
                        </h5>
                      </Link>
                      <p
                        className="card-text"
                        style={{
                          ...textStyle,
                          textAlign: "justify",
                        }}
                      >
    
                    <p className="mb-0" style={{fontWeight: "bold", fontFamily: "Inter, sans-serif", }}>Created At: {new Date(item.created_at).toLocaleString()}</p>
                        <a href={item.link}>
                          {" "}
                          <b>Article</b>
                        </a>{" "}
                        <br />
                        <div dangerouslySetInnerHTML={{ __html: truncateDescription(item.description) }} />
                        <Link to={`/blog/${item.id}`} style={{textDecoration: "none", color: "black"}}>
                          Read More
                        </Link>
                      </p>
                    </div>
                  </div>
                </div>
              ))}
          </Slider>
        </div>
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
