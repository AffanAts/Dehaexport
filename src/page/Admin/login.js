import { useEffect, useRef, useState } from "react";
import imageL from "../../assets/img/Login.svg";
import { login } from "../../components/api/authApi";

const FormLogin = () => {
  const [loginFailed, setLoginFailed] = useState("");

  const handleLogin = (event) => {
    event.preventDefault();
    const data = {
      username: event.target.username.value,
      password: event.target.password.value,
    };
    login(data, (status, res) => {
      if (status) {
        localStorage.setItem("token", res);
        window.location.href ="/dashboard";
      } else {
        setLoginFailed(res.response.data);
        console.log(res.response.data);
      }
    });
  };

  const usernameRef = useRef(null);

  useEffect(() => {
    usernameRef.current.focus();
  }, []);
  return (
    <main>
      <section class="pb-5">
        <div class="container-fluid h-custom">
          <div class="row d-flex justify-content-center align-items-center h-100">
            <div class="col-md-9 col-lg-6 col-xl-5 mt-5">
              <img
                src={imageL}
                class="img-fluid ms-5"
                alt="Sampleimage"
                style={{ width: "550px" }}
              />
            </div>
            <div
              class="col-md-8 col-lg-6 col-xl-4 offset-xl-1"
              style={{ marginTop: "160px" }}
            >
              <h1 class="mb-5">login</h1>
              <form onSubmit={handleLogin}>
              
                <div class="form-outline mb-4">
                  <input
                    label="Username"
                    type="text"
                    name="username"
                    class="form-control form-control-lg"
                    ref={usernameRef}
                  />
                  <label class="form-label" for="form3Example3">
                    Username
                  </label>
                  <span class="help-block"></span>
                </div>
                <div class="form-outline mb-3">
                  <input
                    type="password"
                    name="password"
                    id="form3Example4"
                    class="form-control form-control-lg"
                    placeholder="Enter password"
                  />
                  <span class="help-block"></span>
                  <label class="form-label" for="form3Example4">
                    Password
                  </label>
                </div>
                <div class="text-center text-lg-start mt-4 pt-2">
                  <div class="form-group">
                  {loginFailed && <p className="text-danger">{loginFailed}</p>}
                    <input type="submit" class="btn btn-primary btn-lg w-25" />
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

// export default function Login() {
//   return (
//     <>
//     </>
//   );
// }
export default FormLogin;
