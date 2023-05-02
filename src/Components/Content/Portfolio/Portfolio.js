import React, { useEffect } from "react";
import { useContext, useState } from "react";
import { json, useNavigate } from "react-router-dom";
import { AppContext } from "../../../App";
import "./Portfolio.css";
import ADD from './ADD.png';
import profile from './profile.png';

function Portfolio() {
  const navigate = useNavigate();
  const { setIsLoggedIn } = useContext(AppContext);
  const { isLoggedIn } = useContext(AppContext);
  const [token, setToken] = useState("");
  const [user, setUser] = useState("");
  const [stocks, setStocks] = useState(null);
  const [errorMessage, setErrorMessage] = useState(null);
  const [stockValues, setStockValues] = useState([]);
  const [totalHoldings, setTotalHoldings] = useState(0);
  const [totalCost, setTotalCost] = useState(0);
  const [totalProfit, setTotalProfit] = useState(0);

  //GET USER DATA
  async function getUser() {
    const token = localStorage.getItem("token");
    setToken(token);
    try {
      const response = await fetch("https://inedserver.up.railway.app/api/get-user", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "x-access-token": token,
        },
      });
      const data = await response.json();
      setUser(data);
      
      const stockValues = await Promise.all(
        data.stocks?.map(async (stock) => {
          try {
            const response = await fetch(
              `https://realstonks.p.rapidapi.com/${stock.company}`,
              {
                headers: {
                  "X-RapidAPI-Key":
                    "2be1de11d0msh58feda7445d3b54p1b9fdbjsne738a62ed5e4",
                  "X-RapidAPI-Host": "realstonks.p.rapidapi.com",
                },
              }
            );
            const data = await response.json();
            return data.price;
          } catch (error) {
            console.error(error);
            return null; // or set a default value, like 0
          }
        })
      );
      setStockValues(stockValues);

      // Calculate the total holdings, total cost, and total profit
      let totalHoldings = 0;
      let totalCost = 0;
      data.stocks.forEach((stock, index) => {
        totalHoldings += stock.stockVolume * stockValues[index];
        totalCost += stock.VOP;
      });
      setTotalHoldings(totalHoldings);
      setTotalCost(totalCost);
      setTotalProfit(totalHoldings - totalCost);
    } catch (err) {
      console.error(err);
    }
  }

  useEffect(() => {
    getUser();
  }, []);

  //Handle logout
  function handleLogout() {
    setIsLoggedIn(false);
    localStorage.clear();
    navigate("/register");
  }

  return (
    <div className="mainpage justify-content-center">
      {user && (
        <div className="p-3 mx-3">
          <div className="row  " >
            <div className="col-lg-4 p-3 personalinfo" style={{ borderRadius: "20px" }}>
              <div className="row">
              <div className="col-lg-4">
                <img src={profile} alt="" style={{width:"100%"}}/>
              </div>
                <div className="col-lg-8 text-center portfolioNameBox">
              <h2 className="YourName">{user.user?.name}</h2>
              <p>{user?.user.email}</p>
              </div>
             
              </div>
            </div>
            <div className="col">
              <button
                className="logout-button btn btn-outline-light bg-danger"
                onClick={handleLogout}
              >
                Log Out
              </button> 
              </div>
            
          </div>
          <div className="row">
  <div className="col">
    <div className="row valuestack p-3 px-5 my-4">
      <div className="col-4">
        <h5 className="value-label">&#8377;{totalHoldings.toFixed(3)}</h5>
        <p>Total Stock Holdings</p>
      </div>
      <div className="col-4">
        <h5 className="value-label">&#8377;{totalCost}</h5>
        <p>Total Cost</p>
      </div>
      <div className="col-4">
        <h5 className="value-label">&#8377;{totalProfit.toFixed(3)}</h5>
        <p>Total Profit</p>
      </div>
    </div>
  </div>
  <div className="col-lg-2 d-flex align-items-center justify-content-center ">
    <div className="row ">
        <a className="addStockLink" href="/Addstock">
          <img src={ADD} alt="Add stock" style={{width:"50px",display: "inline-block"}}/> 
          <p className="text-black PortaddStock mx-3 my-2" style={{display: "inline-block"}}> ADD STOCK</p>
        </a>
      </div>
  </div>
</div>


          <div className="row stocks ">
            <div className="col-lg-4 my-2">
              <img style={{"width":"100%"}} src="https://img.freepik.com/free-vector/personal-site-concept-illustration_114360-2577.jpg?w=740&t=st=1678614469~exp=1678615069~hmac=4e0ac608c442e54921ce925c9502c0ae94a104d8b72bc69286ea4a827edfb21b" alt="" />
            </div>
            <div className="col  my-2">
              <h2 className="mt-4 mb-3 " style={{ fontWeight: "bold" }}>
                STOCK HOLDINGS
              </h2>
              <div className="table-responsive border " style={{borderRadius:"20px"}}>
                <table className="table portTable text-white">
                  <thead className="thead-light " style={{ fontSize: "1rem" }}>
                    <tr className="portfolioTableTitles">
                      <th scope="col">Company</th>
                      <th scope="col">Stock Volume</th>
                      <th scope="col">Purchase Date</th>
                      <th scope="col">Cost</th>
                      <th scope="col">Current Price</th>
                      <th scope="col">Holdings</th>
                      <th></th>
                    </tr>
                  </thead>
                  <tbody style={{ fontSize: "0.8rem" }}>
                    {user?.stocks?.map((stock, index) => (
                      <tr key={index}>
                        <td>{stock.company}</td>
                        <td>{stock.stockVolume}</td>
                        <td>{stock.DOP}</td>
                        <td>&#8377;{stock.VOP}</td>
                        <td>
                          &#8377;
                          {stockValues[index] ? (
                            stockValues[index].toFixed(3)
                          ) : (
                            <p>Loading.....</p>
                          )}
                        </td>
                        <td>
                          &#8377;
                          {stockValues[index] ? (
                            (stock.stockVolume * stockValues[index]).toFixed(3)
                          ) : (
                            <p>Loading-------</p>
                          )}
                        </td>

                        {/*DELETE BUTTON BEGIN ................................................................... */}
                        <td>
                          <button
                            className="m-3 px-3 bg-danger"
                            style={{ borderRadius: "5px" }}
                            onClick={async () => {
                              console.log(stock.stockId);
                              const response = await fetch(
                                "https://inedserver.up.railway.app/api/delete",
                                {
                                  method: "POST",
                                  headers: {
                                    "Content-Type": "application/json",
                                  },
                                  body: JSON.stringify({
                                    id: stock.stockId,
                                  }),
                                }
                              );
                              const data = await response.json();
                              console.log(data);
                              getUser();
                            }}
                          >
                            X
                          </button>
                        </td>
                        {/*DELETE BUTTON END ................................................................... */}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              {/*Table of the user stock holdings  END...............................................*/}
            </div>
            
          </div>
            
          </div>
        
      )}
    </div>
  );
}

export default Portfolio;
