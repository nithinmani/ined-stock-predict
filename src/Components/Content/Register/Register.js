import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../../../App";
import { useContext } from "react";

function Register() {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState(""); // new state variable
  const { isLoggedIn } = useContext(AppContext);

  async function registerUser(event) {
    event.preventDefault();

    if (name === "") {
      setErrorMessage("Please enter your name");
      return;
    }

    if (email === "") {
      setErrorMessage("Please enter your email");
      return;
    }

    if (!/^\S+@\S+\.\S+$/.test(email)) {
      setErrorMessage("Please enter a valid email");
      return;
    }

    if (password.length < 6) {
      setErrorMessage("Password must be at least 6 characters long");
      return;
    }

    if (!/[A-Z]/.test(password)) {
      setErrorMessage("Password must contain at least one capital letter");
      return;
    }

    if (!/[\W_]/.test(password)) {
      setErrorMessage("Password must contain at least one symbol");
      return;
    }

    if (confirmPassword === "") {
      setErrorMessage("Please confirm your password");
      return;
    }

    if (password !== confirmPassword) {
      setErrorMessage("Passwords do not match");
      return;
    }

    const response = await fetch("http://localhost:1337/api/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        email,
        password,
      }),
    });

    const data = await response.json();
    console.log(data);

    if (data.status === "ok") {
      navigate("/login");
    } else if (data.error === "Duplicate email") {
      // check for duplicate email error
      setErrorMessage("An account with this email already exists");
    } else {
      setErrorMessage("Registration failed, please try again later");
    }
  }

  return (
    <div>
      <section className="vh-100 p-3" style={{ backgroundColor: "#eee" }}>
        <div>
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-lg-12 col-xl-11">
              <div className="card text-black" style={{ borderRadius: 25 }}>
                <div className="card-body p-md-5">
                  <div className="row justify-content-center">
                    <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">
                      <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">
                        Sign up
                      </p>
                      {errorMessage && ( // render error message if it exists
                        <div className="alert alert-danger">{errorMessage}</div>
                      )}
                      <form className="mx-1 mx-md-4" onSubmit={registerUser}>
                        <div className="d-flex flex-row align-items-center mb-4">
                          <i className="fas fa-user fa-lg me-3 fa-fw" />
                          <div className="form-outline flex-fill mb-0">
                            <input
                              type="text"
                              id="form3Example1c"
                              className="form-control"
                              name="name"
                              value={name}
                              onChange={(e) => setName(e.target.value)}
                            />
                            <label
                              className="form-label"
                              htmlFor="form3Example1c"
                            >
                              Your Name
                            </label>
                          </div>
                        </div>
                        <div className="d-flex flex-row align-items-center mb-4">
                          <i className="fas fa-envelope fa-lg me-3 fa-fw" />
                          <div className="form-outline flex-fill mb-0">
                            <input
                              type="email"
                              id="form3Example3c"
                              className="form-control"
                              name="email"
                              value={email}
                              onChange={(e) => setEmail(e.target.value)}
                            />
                            <label
                              className="form-label"
                              htmlFor="form3Example3c"
                            >
                              Your Email
                            </label>
                          </div>
                        </div>
                        <div className="d-flex flex-row align-items-center mb-4">
                          <i className="fas fa-lock fa-lg me-3 fa-fw" />
                          <div className="form-outline flex-fill mb-0">
                            <input
                              type="password"
                              id="form3Example4c"
                              className="form-control"
                              name="password"
                              value={password}
                              onChange={(e) => setPassword(e.target.value)}
                            />
                            <label
                              className="form-label"
                              htmlFor="form3Example4c"
                            >
                              Password
                            </label>
                          </div>
                        </div>
                        <div className="d-flex flex-row align-items-center mb-4">
                          <i className="fas fa-key fa-lg me-3 fa-fw" />
                          <div className="form-outline flex-fill mb-0">
                            <input
                              type="password"
                              id="form3Example4cd"
                              className="form-control"
                              name="repeatPassword"
                              value={confirmPassword}
                              onChange={(e) =>
                                setConfirmPassword(e.target.value)
                              }
                            />
                            <label
                              className="form-label"
                              htmlFor="form3Example4cd"
                            >
                              Confirm your Password
                            </label>
                          </div>
                        </div>

                        <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                          <button
                            type="submit"
                            className="btn btn-primary btn-lg"
                          >
                            Register
                          </button>
                        </div>
                        <p
                          className="mb-5 pb-lg-2"
                          style={{ color: "#393f81" }}
                        >
                          Already have an account?
                          <a href="/login" style={{ color: "#393f81" }}>
                            Login here
                          </a>
                        </p>
                      </form>
                    </div>
                    <div className="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2">
                      <img
                        src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/draw1.webp"
                        className="img-fluid"
                        alt="Sample image"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Register;
