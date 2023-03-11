import { useState } from "react";
import axios from "axios";
import "./ForgotPassword.css";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [msg, setMsg] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const url = `http://localhost:1337/api/password-reset`;
      const { data } = await axios.post(url, { email });
      setMsg(data.message);
      setError("");
    } catch (error) {
      if (
        error.response &&
        error.response.status >= 400 &&
        error.response.status <= 500
      ) {
        setError(error.response.data.message);
        setMsg("");
      }
    }
  };

  return (
    <div className="Forgotcontainer">
      <div className="row">
        {/* <div className="col">
          <img src="https://img.freepik.com/free-photo/computer-security-with-login-password-padlock_107791-16191.jpg?w=900&t=st=1678531671~exp=1678532271~hmac=e1a83d08ce3c15efb90cf6e7948d5a86dcff693ac091950e06eb174783656a1c" alt="" />
        </div> */}
        <div className="col">
      <form className="Forgotform_container" onSubmit={handleSubmit}>
        <h1>Forgot Password</h1>
        <input
          type="email"
          placeholder="Email"
          name="email"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
          required
          className="Forgotinput"
        />
        {error && <div className="Forgoterror_msg">{error}</div>}
        {msg && <div className="Forgotsuccess_msg">{msg}</div>}
        <button type="submit" className="Forgotgreen_btn">
          Submit
        </button>
      </form>
      </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
