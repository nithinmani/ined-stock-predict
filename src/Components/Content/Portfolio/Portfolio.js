import React, { useEffect } from "react";
import { useContext, useState } from "react";
import { json, useNavigate } from "react-router-dom";
import { AppContext } from "../../../App";
import "./Portfolio.css";

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
      const response = await fetch("http://localhost:1337/api/get-user", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "x-access-token": token,
        },
      });
      const data = await response.json();
      setUser(data);

      const stockValues = await Promise.all(
        data.stocks.map(async (stock) => {
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
<div className="mainpage">
      {user && (
        <div className="p-5 me-auto"  >
          <div className="row  personalinfo" style={{borderRadius:"20px"}}>
            <div className="col">
              <h2 className="YourName">{user.user.name}</h2>
              <p>{user.user.email}</p>
            </div>
            <div className="col">
              <button className="logout-button " onClick={handleLogout}>Log Out</button>
            </div>
          </div>
          
          <div className="row my-5  stocks">
            <div className="col-8 mainsection">
            <h2 className="mt-4" style={{fontWeight:"bold"}}>STOCK HOLDINGS</h2>
            <div className="table-responsive p-3">
                  <table className="table table-dark">
                  <thead className="thead-light " style={{fontSize:"25px"}}>
                      <tr className="portfolioTableTitles py-5">
                        <th scope="col">Company</th>
                        <th scope="col">Stock Volume</th>
                        <th scope="col">Purchase Date</th>
                        <th scope="col">Cost</th>
                        <th scope="col">Current Price</th>
                        <th scope="col">Holdings</th>
                        <th></th>
                      </tr>
                      </thead>
                      <tbody style={{fontSize:"20px"}}>
                      {user.stocks.map((stock, index) => (
                        <tr key={index}>
                          <td>{stock.company}</td>
                          <td>{stock.stockVolume}</td>
                          <td>{stock.DOP}</td>
                          <td>&#8377;{stock.VOP}</td>
                          <td>
                            &#8377;
                            {stockValues[index] &&
                              stockValues[index].toFixed(3)}
                          </td>
                          <td>
                            &#8377;
                            {stockValues[index] &&
                              (stock.stockVolume * stockValues[index]).toFixed(
                                3
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
                                "http://localhost:1337/api/delete",
                                {
                                  method: "POST",
                                  headers: {
                                    "Content-Type": "application/json",
                                  },
                                  body:JSON.stringify( {
                                    id:stock.stockId,
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
            <div className="col-4">
              <div className="container valuestack">
                <div className="row">
                  <h4 className="" style={{color:"blue"}}>Total Stock Holdings:&#8377;{totalHoldings.toFixed(3)}</h4>
                  <h4 className="" style={{color:"red"}}>Total Cost:{totalCost}</h4>
                  <h2 className="" style={{color:"white", fontWeight:"bolder", textShadow:"3px 0 0 #000, 0 -1px 0 #000, 0 1px 0 #000, -1px 0 0 #000"}}>Total Profit:{totalProfit.toFixed(3)}</h2>
                </div>
                
              </div>
              <div className="row my-5 mx-5">
                <a
                className="text-white"
                style={{ textDecoration: "none" }}
                href="/Addstock"
              >
                <button className="add-new-stock-button text-center " style={{width:"700px"}}>
                  {/* <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS02tDQ_oyhxmlewJOslM5W2xNIsnJCAvn3xAOMrZVHSSOBHmiRs16KhJoypre7g6xdkTA&usqp=CAU" style={{width:"70px",height:"50px"}} alt="" /> */}
                  Add Stock</button>
              </a>
                </div>
            </div>
          </div>
         
        </div>

)}
</div>

  );
}

export default Portfolio;
