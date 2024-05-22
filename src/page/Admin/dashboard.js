import { useEffect, useState } from "react";
import { jwtDecode } from "jwt-decode";
import { getUsername } from "../../components/api/authApi";
import { getTotalProducts } from "../../components/api/productApi";

const Dashboard = () => {
  const [username, setUsername] = useState("");
  const [totalProducts, setTotalProducts] = useState(0); // Tambahkan state untuk jumlah total produk

  const handleLogout = () => {
    localStorage.removeItem("token");
    window.location.href = "/login";
  };

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      try {
        const decoded = jwtDecode(token); // Decode token untuk memeriksa validitasnya
        if (decoded) {
          setUsername(getUsername(token));
        } else {
          window.location.href = "/login";
        }
      } catch (error) {
        console.error("Invalid token:", error);
        window.location.href = "/login";
      }
    } else {
      window.location.href = "/login";
    }
  }, []);

  useEffect(() => {
    getTotalProducts((data) => {
      setTotalProducts(data.length); // Set jumlah total produk saat mendapatkan data dari API
    });
  }, []);

  return (
    <body className="d-flex flex-column min-vh-100 bg-secondary">
      <main>
        <div className="container py-4">
          <div className="p-5 mb-4 bg-transparent rounded-3">
            <div className="container-fluid py-5 text-white">
              <h1 className="display-4 fw-bold">
                Hai, <b>{username}</b>
              </h1>
              <p className="col-md-9 fs-4">
                Selamat datang di dashboard website admin. Semoga Anda merasa
                nyaman dan mendapatkan pengalaman yang menyenangkan dalam
                mengelola website ini. Kami siap membantu Anda dalam setiap
                langkah perjalanan Anda di sini.
              </p>
              <button className="ml-5 bg-black" onClick={handleLogout}>
                Logout
              </button>
            </div>
          </div>

          <div className="row align-items-md-stretch">
            <div className="col-md-6">
              <center>
                <div className="h-100 p-5 text-bg-dark rounded-3">
                  <h2>Total Product</h2>
                  <p>
                    {totalProducts} {/* Tampilkan jumlah total produk */}
                  </p>
                  <a href="/#">
                    <button className="btn btn-primary btn-lg" type="button">
                      Product
                    </button>
                  </a>
                </div>
              </center>
            </div>
            <div className="col-md-6">
              <center>
                <div className="h-100 p-5 bg-body-tertiary border rounded-3">
                  <h2>Total Blog</h2>
                  <p>xxx</p>
                  <a href="/#">
                    <button className="btn btn-primary btn-lg" type="button">
                      Blog
                    </button>
                  </a>
                </div>
              </center>
            </div>
          </div>
        </div>
      </main>
    </body>
  );
};

export default Dashboard;
