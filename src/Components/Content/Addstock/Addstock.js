import React, { useEffect, useState } from "react";
import "./Addstock.css";
import { useForm } from 'react-hook-form';
import { useNavigate } from "react-router-dom";

function Addstock() {
  const [token, setToken] = useState("");
  const navigate = useNavigate();
  const [user, setUser] = useState("");
  const [errorMessage, setErrorMessage] = useState(null);

  useEffect(() => {
    async function getUser() {
      const token = localStorage.getItem("token");
      setToken(token);
      try {
        const response = await fetch("http://localhost:1337/api/get-user", {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            "x-access-token": token,
          },
        });
        if (response.ok) {
          const data = await response.json();
          setUser(data);
        } else {
          throw new Error('Failed to fetch user data');
        }
      } catch (err) {
        console.error(err);
        setErrorMessage('Failed to fetch user data');
      }
    }
    getUser();
  }, []);
 
  useEffect(() => {
    const token = localStorage.getItem("token");
    setToken(token);
    console.log(token);
  }, []);

  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = async (data) => {
    console.log(data) 
    const DOP = data.DOP;
    const VOP = data.VOP;
    const stockVolume = data.stockVolume;
    const company = data.company

    try {
      const response = await fetch("http://localhost:1337/api/add-stock", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          'x-access-token': token,
        },
        body: JSON.stringify({
          DOP,
          VOP,
          stockVolume,
          company
        }),
      });
      if (response.ok) {
        const data1 = await response.json();
        console.log(data1);
        navigate('/profile');
      } else {
        throw new Error('Failed to add stock');
      }
    } catch (err) {
      console.error(err);
      setErrorMessage('Failed to add stock');
    }
  }

  return (
    <div className="row addStockPage"
      style={{
        width: "100%",
        height: "100%",
        padding: "20px",
      }}
    >
      <div className="AddStockPage col-lg-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex flex-column justify-content-center">
        <div className="row">
          <div className="col-md-8">
            <div className="card mb-4">
              <div className="card-body userCard">
                <p className="text-uppercase fw-bold mb-3 text-font ">Name: {user.user?.name}</p>
                <div className="row">
                  <div className="col-md-4">
                    <p className="">{user.user?.name}</p>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-4">
                    <p className="text-uppercase fw-bold mb-3 text-font ">
                      EMAIL: 
                    </p>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-4">
                    <p className="">{user.user?.email}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-8">
            <div className="card mb-4">
              <div className="card-body companyCard">
                <p className="text-uppercase h4 text-font">Company:</p>
                <div className="row">
                  <select className="select p-3" {...register("company")}>
                    <option value={"TCS"}>TCS</option>
                    <option value={"ADANIPORTS"}>ADANI PORTS</option>
                    <option value={"TATASTEEL"}>TATA STEEL</option>
                    <option value={"HDFCBANK"}>HDFC BANK</option>
                    <option value={"TATAMOTORS"}>TATA MOTORS</option>
                    <option value={"ICICIBANK"}>ICICI BANK</option>
                    <option value={"BAJAJAFINSV"}>BAJAJ FINSERV</option>
                    <option value={"RELIANCE"}>RELIANCE</option>
                    <option value={"JSWSTEEL"}>JSW STEEL</option>
                    <option value={"ITC"}>ITC</option>
                    <option value={"CIPLA"}>CIPLA</option>
                    <option value={"INFY"}>INFOSYS</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-8 mb-4">
            <div className="card mb-4 stockCard">
              <div className="card-header py-3">
                <h5 className="mb-0 text-font text-uppercase">Stock Details</h5>
              </div>
              <div className="card-body">
                <form onSubmit={handleSubmit(onSubmit)}>
                  <div className="row mb-4">
                    <div className="col">
                      <div className="form-outline">
                        <label className="form-label" htmlFor="form11Example1">
                          Date of Purchase
                        </label>
                        <input
                          type="date"
                          id="form11Example1"
                          className="form-control"
                          {...register("DOP")}
                        />
                      </div>
                    </div>
                  </div>
                  {/* Text input */}
                  <div className="form-outline mb-4">
                    <label className="form-label" htmlFor="form11Example3">
                      Total stock value on the date of purchase
                    </label>
                    <input
                      id="form11Example3"
                      className="form-control"
                      {...register("VOP")}
                    />
                  </div>
                  {/* Text input */}
                  <div className="form-outline mb-4">
                    <label className="form-label" htmlFor="form11Example4">
                      Volume of stock purchased
                    </label>
                    <input
                      type="input"
                      id="form11Example4"
                      className="form-control"
                      {...register("stockVolume")}
                    />
                  </div>
                  <div className="text-center">
                 
                     <button
                      type="submit"
                      className="btn button-order col-md-10 bg-success text-white"
                    > Add stock
                        </button>
                    
                  </div>
                </form>
              </div>
            </div>
          </div>
          
        </div>
        
      </div>
     <div className="col-6 rightpart">
      
     </div>
    </div>
  );
    }

export default Addstock;
