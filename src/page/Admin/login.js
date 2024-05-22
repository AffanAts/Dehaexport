import { useAuth0 } from '@auth0/auth0-react';
import { useMutation } from '@apollo/client';
import imageL from "../../assets/img/Login.svg";
import { useEffect, useRef, useState } from 'react';
import { loginUser } from "../../config/typeDef";

const FormLogin = () => {
  const [loginFailed, setLoginFailed] = useState("");
  const [loginUserMutation, { data, error }] = useMutation(loginUser);
  const { loginWithRedirect } = useAuth0(); // Mendapatkan fungsi loginWithRedirect dari hook useAuth0

  const handleLogin = async (event) => {
    event.preventDefault();
    const username = event.target.username.value;
    const password = event.target.password.value;

    try {
      await loginUserMutation({
        variables: { username, password }
      });

      // Jika login berhasil, pengalihkan ke dashboard
      window.location.href ="/dashboard";
    } catch (error) {
      // Jika login gagal, tangani pesan kesalahan
      setLoginFailed("Gagal login: " + error.message);
      console.error("Gagal login:", error);
    }
  };

  const handleAuth0Login = () => {
    // Redirect ke halaman login Auth0
    loginWithRedirect();
  };

  const usernameRef = useRef(null);

  useEffect(() => {
    usernameRef.current.focus();
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
                    {loginFailed && <p className="text-danger">{loginFailed}</p>}
                    <input type="submit" className="btn btn-primary btn-lg w-25" />
                    <p>
                      Belum punya akun? <a href="/#">Sign up now</a>.
                    </p>
                    <button className="btn btn-primary btn-lg w-100" onClick={handleAuth0Login}>
                      Login with Auth0
                    </button>
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
