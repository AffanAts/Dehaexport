import profilePict from "../../assets/img/home.jpg";

export default function Blog() {
  return (
    <div className="py-5 px-5">
      <center>
        <h1>Our Blog</h1>
        <p>
          You can see our blog here, click to see blog detail. You can see our
          daily activity or news about exported, product process and many more.
        </p>
        <div
          id="carouselExample"
          className="carousel slide py-3"
          data-bs-ride="carousel"
        >
          <div className="carousel-inner">
            <div className="carousel-item active">
              <div className="row row-cols-1 row-cols-md-3 g-4">
                <div className="col">
                  <div className="card">
                    <img src={profilePict} className="card-img-top" alt="..." />
                    <div className="card-body">
                      <h5 className="card-title">Card title 1</h5>
                      <p className="card-text">
                        This is a longer card with supporting text below as a
                        natural lead-in to additional content. This content is a
                        little bit longer.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col">
                  <div className="card">
                    <img src={profilePict} className="card-img-top" alt="..." />
                    <div className="card-body">
                      <h5 className="card-title">Card title 2</h5>
                      <p className="card-text">
                        This is a longer card with supporting text below as a
                        natural lead-in to additional content. This content is a
                        little bit longer.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col">
                  <div className="card">
                    <img src={profilePict} className="card-img-top" alt="..." />
                    <div className="card-body">
                      <h5 className="card-title">Card title 3</h5>
                      <p className="card-text">
                        This is a longer card with supporting text below as a
                        natural lead-in to additional content.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="carousel-item">
              <div className="row row-cols-1 row-cols-md-3 g-4">
                <div className="col">
                  <div className="card">
                    <img src={profilePict} className="card-img-top" alt="..." />
                    <div className="card-body">
                      <h5 className="card-title">Card title 4</h5>
                      <p className="card-text">
                        This is a longer card with supporting text below as a
                        natural lead-in to additional content. This content is a
                        little bit longer.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col">
                  <div className="card">
                    <img src={profilePict} className="card-img-top" alt="..." />
                    <div className="card-body">
                      <h5 className="card-title">Card title 5</h5>
                      <p className="card-text">
                        This is a longer card with supporting text below as a
                        natural lead-in to additional content. This content is a
                        little bit longer.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col">
                  <div className="card">
                    <img src={profilePict} className="card-img-top" alt="..." />
                    <div className="card-body">
                      <h5 className="card-title">Card title 6</h5>
                      <p className="card-text">
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
