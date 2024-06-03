import React, { useEffect, useRef, useState } from "react";
import axios from "axios";
import imageL from "../../assets/img/Login.svg";
import Loader from "../../components/navbar/Loader";

const FormLogin = () => {
  const [loginFailed, setLoginFailed] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const usernameRef = useRef(null);

  useEffect(() => {
    // Check if token exists and redirect to dashboard if it does
    const token = localStorage.getItem("token");
    if (token) {
      window.location.href = "/dashboard";
    } else {
      usernameRef.current.focus();
    }
  }, []);

  const handleLogin = async (event) => {
    event.preventDefault();
    const username = event.target.username.value;
    const password = event.target.password.value;

    console.log("Attempting to login with:", { username, password });
    setIsLoading(true); // Set loading state to true

    try {
      const response = await axios.post("http://localhost:3001/login", {
        username,
        password,
      }, { withCredentials: true });
      const { token } = response.data;

      console.log("Login successful, received token:", token);

      localStorage.setItem("token", token);
      localStorage.setItem("showWelcomeToast", "true"); // Set the flag here
      window.location.href = "/dashboard";
    } catch (error) {
      if (error.response) {
        if (error.response.status === 401) {
          setLoginFailed("Username atau password salah.");
        } else {
          setLoginFailed("Server sedang bermasalah, silahkan hubungi Affan wkwk.");
        }
      } else {
        setLoginFailed("Server sedang bermasalah, silahkan hubungi Affan wkwk.");
      }
      console.error("Gagal login:", error);
    } finally {
      setIsLoading(false); // Set loading state to false
    }
  };

  const refreshAccessToken = async () => {
    try {
      const response = await axios.post("http://localhost:3001/refresh-token", {}, { withCredentials: true });
      const { token } = response.data;
      localStorage.setItem("token", token);
      return token;
    } catch (error) {
      console.error("Failed to refresh token:", error);
      return null;
    }
  };

  useEffect(() => {
    const interval = setInterval(async () => {
      const token = localStorage.getItem("token");
      if (token) {
        const payload = JSON.parse(atob(token.split('.')[1]));
        const exp = payload.exp * 1000;
        const now = Date.now();
        if (exp - now < 5 * 60 * 1000) {
          await refreshAccessToken();
        }
      }
    }, 5 * 60 * 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <main>
      <section className="pb-5">
        <div className="container-fluid h-custom">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-md-9 col-lg-6 col-xl-5 mt-5">
              <img
                src={imageL}
                className="img-fluid ms-5"
                alt="Sampleimage"
                style={{ width: "550px" }}
              />
            </div>
            <div
              className="col-md-8 col-lg-6 col-xl-4 offset-xl-1"
              style={{ marginTop: "160px" }}
            >
              <h1 className="mb-5">Login</h1>
              <form onSubmit={handleLogin}>
                <div className="form-outline mb-4">
                  <input
                    label="Username"
                    type="text"
                    name="username"
                    className="form-control form-control-lg"
                    ref={usernameRef}
                  />
                  <label className="form-label" htmlFor="form3Example3">
                    Username
                  </label>
                  <span className="help-block"></span>
                </div>
                <div className="form-outline mb-3">
                  <input
                    type="password"
                    name="password"
                    id="form3Example4"
                    className="form-control form-control-lg"
                    placeholder="Enter password"
                  />
                  <span className="help-block"></span>
                  <label className="form-label" htmlFor="form3Example4">
                    Password
                  </label>
                </div>
                <div className="text-center text-lg-start mt-4 pt-2">
                  <div className="form-group">
                    {loginFailed && (
                      <p className="text-danger">{loginFailed}</p>
                    )}
                    {isLoading ? (
                      <Loader />
                    ) : (
                      <input
                        type="submit"
                        className="btn btn-primary btn-lg w-25"
                        value="Login"
                      />
                    )}
                    <p>
                      Belum punya akun? <a href="/#">Sign up now</a>.
                    </p>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default FormLogin;
