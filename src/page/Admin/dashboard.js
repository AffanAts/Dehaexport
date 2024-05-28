import { useEffect, useState } from "react";
import Swal from "sweetalert2";
import { fetchTotalProducts } from "../../components/api/productApi";
import useAuth from "../../components/api/authApi";

const Dashboard = () => {
  useAuth();
  const [username, setUsername] = useState("");
  const [totalProducts, setTotalProducts] = useState(0);

  const handleLogout = () => {
    localStorage.removeItem("token");
    window.location.href = "/login";
  };

  useEffect(() => {
    const fetchTotal = async () => {
      const total = await fetchTotalProducts();
      setTotalProducts(total);
    };

    fetchTotal();

    const showWelcomeToast = localStorage.getItem("showWelcomeToast");
    if (showWelcomeToast) {
      Swal.fire({
        toast: true,
        position: "top-end",
        icon: "success",
        title: "Signed in successfully",
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
        didOpen: (toast) => {
          toast.addEventListener("mouseenter", Swal.stopTimer);
          toast.addEventListener("mouseleave", Swal.resumeTimer);
        }
      });
      localStorage.removeItem("showWelcomeToast"); // Remove the flag after displaying
    }
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
            </div>
          </div>

          <div className="row align-items-md-stretch">
            <div className="col-md-6">
              <center>
                <div className="h-100 p-5 text-bg-dark rounded-3">
                  <h2>Total Product</h2>
                  <p>
                    {totalProducts}
                  </p>
                  <a href="/listProduct">
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
