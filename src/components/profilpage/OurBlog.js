import React from "react";
import Slider from "react-slick";
import listBlog from "../dummy/ListBlog";

export default function SimpleSlider() {
  var settings = {
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

  return (
    <div style={{ backgroundColor: "grey" }}>
      <div
        className="mx-auto text-center"
        style={{ width: "78%", paddingTop: 50, paddingBottom: 150 }}
      >
        <h4>Our Blog</h4>
        <p>
          You can see our blog here, click to see blog detail. You can see our
          daily activity or news about exported, product process and many more.
        </p>
        <Slider {...settings}>
          {listBlog.map((blog) => (
            <div key={blog.id}>
              <div
                class="card"
                style={{ maxWidth: "370px", minWidth: "200px" }}
              >
                <img
                  src={blog.image}
                  className="card-img-top"
                  alt={blog.title}
                  style={{ height: 300 }}
                />
                <div class="card-body">
                  <p class="card-text">
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
