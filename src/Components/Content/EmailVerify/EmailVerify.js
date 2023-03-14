import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";
import success from "./success.png";
import "./EmailVerify.css";

const EmailVerify = () => {
  const [validUrl, setValidUrl] = useState(false);
  const param = useParams();

  useEffect(() => {
    const verifyEmailUrl = async () => {
      try {
        const url = `http://localhost:1337/verify/${param.id}/${param.token}`;
        const { data } = await axios.get(url);
        console.log(data);
        setValidUrl(true);
      } catch (error) {
        console.log(error);
        setValidUrl(false);
      }
    };
    verifyEmailUrl();
  }, [param]);

  return (
    <>
      {validUrl ? (
        <div className="Verifycontainer">
          <img src={success} alt="successimg" className="" />
          <h1>Email verified successfully</h1>
          <Link to="/login">
            <button className="Verifygreen_btn">Login</button>
          </Link>
        </div>
      ) : (
        <h1>hello dear</h1>
      )}
    </>
  );
};

export default EmailVerify;
