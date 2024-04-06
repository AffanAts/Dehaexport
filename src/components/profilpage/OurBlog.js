import profilePict from "../../assets/img/home.jpg";

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
        <div
          id="carouselExample"
          className="carousel slide py-3 px-5"
          data-bs-ride="carousel"
        >
          <div className="carousel-inner">
            <div className="carousel-item active">
              <div className="row row-cols-1 row-cols-sm-1 row-cols-md-3 g-4">
                <div className="col">
                  <div
                    className="card"
                    style={{ maxWidth: 400, minWidth: 200 }}
                  >
                    <img
                      src={profilePict}
                      className="card-img-top"
                      alt="..."
                      style={{ height: "350px" }}
                    />
                    <div className="card-body">
                      <h5 className="card-title" style={cardTitle}>
                        Card title 1
                      </h5>
                      <p className="card-text" style={cardText}>
                        This is a longer card with supporting text below as a
                        natural lead-in to additional content. This content is a
                        little bit longer.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col d-none d-md-block">
                  <div
                    className="card"
                    style={{ maxWidth: 400, minWidth: 200 }}
                  >
                    <img
                      src={profilePict}
                      className="card-img-top"
                      alt="..."
                      style={{ height: "350px" }}
                    />
                    <div className="card-body">
                      <h5 className="card-title" style={cardTitle}>
                        Card title 2
                      </h5>
                      <p className="card-text" style={cardText}>
                        This is a longer card with supporting text below as a
                        natural lead-in to additional content. This content is a
                        little bit longer.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col d-none d-md-block">
                  <div
                    className="card"
                    style={{ maxWidth: 400, minWidth: 200 }}
                  >
                    <img
                      src={profilePict}
                      className="card-img-top"
                      alt="..."
                      style={{ height: "350px" }}
                    />
                    <div className="card-body">
                      <h5 className="card-title" style={cardTitle}>
                        Card title 3
                      </h5>
                      <p className="card-text" style={cardText}>
                        This is a longer card with supporting text below as a
                        natural lead-in to additional content.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="carousel-item">
              <div className="row row-cols-1 row-cols-sm-1 row-cols-md-3 g-4">
                <div className="col">
                  <div
                    className="card"
                    style={{ maxWidth: 400, minWidth: 200 }}
                  >
                    <img
                      src={profilePict}
                      className="card-img-top"
                      alt="..."
                      style={{ height: "350px" }}
                    />
                    <div className="card-body">
                      <h5 className="card-title" style={cardTitle}>
                        Card title 4
                      </h5>
                      <p className="card-text" style={cardText}>
                        This is a longer card with supporting text below as a
                        natural lead-in to additional content. This content is a
                        little bit longer.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col d-none d-md-block">
                  <div
                    className="card"
                    style={{ maxWidth: 400, minWidth: 200 }}
                  >
                    <img
                      src={profilePict}
                      className="card-img-top"
                      alt="..."
                      style={{ height: "350px" }}
                    />
                    <div className="card-body">
                      <h5 className="card-title" style={cardTitle}>
                        Card title 5
                      </h5>
                      <p className="card-text" style={cardText}>
                        This is a longer card with supporting text below as a
                        natural lead-in to additional content. This content is a
                        little bit longer.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col d-none d-md-block">
                  <div
                    className="card"
                    style={{ maxWidth: 400, minWidth: 200 }}
                  >
                    <img
                      src={profilePict}
                      className="card-img-top"
                      alt="..."
                      style={{ height: "350px" }}
                    />
                    <div className="card-body">
                      <h5 className="card-title" style={cardTitle}>
                        Card title 6
                      </h5>
                      <p className="card-text" style={cardText}>
                        This is a longer card with supporting text below as a
                        natural lead-in to additional content.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExample"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExample"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </center>
    </div>
  );
}
