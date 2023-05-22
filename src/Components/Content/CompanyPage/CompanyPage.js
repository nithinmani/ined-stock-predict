import { useParams } from "react-router-dom";
import React, { useState, useEffect } from "react";
import LiveGraph from "./LiveGraph/LiveGraph";
import "./CompanyPage.css";
import Stockrec from "./stockrec";
import StockChart from "./StockChart/StockChart";
import loadingGif from "./StockChart/loading.gif";
import NewsSent from "./NewsSent/NewsSent";
import SentimentGraph from "./NewsSent/SentimentGraph";


export default function CompanyPage() {
  const [liveData, setLiveData] = useState([]);
  const [news, setNews] = useState([]);
  const [dailyData, setDailyData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const { name } = useParams();
  
  useEffect(() => {
    async function fetchData() {
      try {
        setIsLoading(true);
        const [liveDataResponse, newsres, dailyDataResponse] = await Promise.all([
          fetch(`http://127.0.0.1:5000/get_yahoo_finance_data/${name}`).then(res => res.json()),
          fetch(`http://127.0.0.1:5000/api/news/${name}`).then(res => res.json()),
          fetch(`http://127.0.0.1:5000/getDailydata/${name}`).then(res => res.json())
        ]);

        setLiveData(liveDataResponse);
        console.log(newsres)
        setNews(newsres);
        setDailyData(dailyDataResponse);
        console.log(news)
        console.log(dailyData)

      } catch (error) {
        console.error(error);
      }
      finally {
        setIsLoading(false);
      }
    }
  
    fetchData();
  
    const intervalId = setInterval(fetchData, 1110015000); // Update every 15 seconds
  
    return () => {
      clearInterval(intervalId); // Clean up the interval on component unmount
    }
  }, [name]);
  
  // Render your components using liveData, news, and dailyData
  

  return (
    <div className="companyPage container-fluid  d-flex justify-content-center align-items-center">
       {isLoading ? (
        <img style={{margin: "15%"}} width={30} height={30} src={loadingGif} alt="Loading..." />
      ) : (
        <div className="container-fluid p-5">
     
        
        <div className="row">
          <h1 className="">{name}</h1>
        </div>
        
        <div className="shadow row bg-white my-3  pt-3 rounded" >
          <p>{liveData?.assetProfile?.longBusinessSummary}</p>
          <p></p>
        </div>
        
        <div className="row mb-3" >

        <div className="col-lg-7" >
         
            <div className="row">
              <div className="col">

                <div
                  className="card shadow text-black border-0 mb-3" 
                  style={{ maxWidth: "18rem", backgroundColor:"aliceblue" }}
                >
                  
                  <div className="card-body">
                    <h5 className="card-title">Today High</h5>
                    <p className="card-text">{liveData?.financialData?.financialCurrency+" "+dailyData?.price?.regularMarketDayHigh?.raw}</p>
                    
                  </div>
                </div>
              </div>
              <div className="col">
                <div
                  className="shadow card text-black border-0 mb-3"
                  style={{ maxWidth: "18rem", backgroundColor:"aliceblue" }}
                >
                  
                  <div className="card-body">
                    <h5 className="card-title">Today Low</h5>
                    <p className="card-text">{liveData?.financialData?.financialCurrency+" "+dailyData?.price?.regularMarketDayLow?.raw}</p>
                  </div>
                </div>
              </div>
              <div className="col">
                <div
                  className="shadow card text-black border-0 mb-3"
                  style={{ maxWidth: "18rem" , backgroundColor:"aliceblue" }}
                >
                  
                  <div className="card-body">
                    <h5 className="card-title">Value</h5>
                    <p className="card-text">{liveData?.financialData?.financialCurrency+" "+liveData?.financialData?.currentPrice.fmt
}</p>
                  </div>
                </div>
              </div>
            </div>


{/*LiveGraph..................................................................................................... */}
            <div className="shadow row bg-white  p-3 rounded " style={{ width:"100%" }}>
              <LiveGraph name={name}/>
              
            </div>
{/* LiveGraph end..................................................................................................... */}


          
          </div>
 
{/* top high low value end..................................................................................................................... */}
<div className=" col-lg-5 bg-white px-5 rounded" >
  <h3 className="py-2 mt-2">Detailed Analysis</h3>
  <div className="row py-3">
          <div className="col mx-2 " >
            <div className="row">
              <div
                className="card text-black mb-3 border-0 shadow"
                style={{ maxWidth: "13rem" , backgroundColor:"aliceblue" }}
              >
                
                <div className="card-body">
                  <h5 className="card-title">currentRatio</h5>
                <p className="card-text">{liveData?.financialData?.currentRatio.fmt}</p>
                </div>
              </div>
            </div>
            <div className="row">
              <div
                className="card text-black mb-3 border-0 shadow"
                style={{ maxWidth: "13rem" , backgroundColor:"aliceblue" }}
              >
                
                <div className="card-body">
                  <h5 className="card-title">debtToEquity</h5>
                  <p className="card-text">{liveData?.financialData?.debtToEquity.fmt}</p>
                </div>
              </div>
            </div>
            <div className="row">
              <div
                className="card text-black mb-3 border-0 shadow"
                style={{ maxWidth: "13rem" , backgroundColor:"aliceblue" }}
              >
                
                <div className="card-body">
                  <h5 className="card-title">earningsGrowth</h5>
                  <p className="card-text">{liveData?.financialData?.earningsGrowth.fmt}</p>
                </div>
              </div>
            </div>
            <div className="row">
              <div
                className="card text-black  border-0 shadow"
                style={{ maxWidth: "13rem" , backgroundColor:"aliceblue" }}
              >
             
                <div className="card-body">
                  <h5 className="card-title">grossMargins</h5>
                  <p className="card-text">{liveData?.financialData?.grossMargins.fmt}</p>
                </div>
              </div>
            </div>
          </div>
          <div className="col mx-2">
            <div className="row">
              <div
                className="card text-black mb-3 border-0 shadow"
                style={{ maxWidth: "13rem" , backgroundColor:"aliceblue" }}
              >
               
                <div className="card-body">
                  <h5 className="card-title">grossProfits</h5>
                  <p className="card-text">{liveData?.financialData?.financialCurrency+" "+liveData?.financialData?.grossProfits.fmt}</p>
                </div>
              </div>
            </div>
            <div className="row">
              <div
                className="card text-black mb-3 border-0 shadow"
                style={{ maxWidth: "13rem" , backgroundColor:"aliceblue" }}
              >
                
                <div className="card-body">
                  <h5 className="card-title">profitMargins</h5>
                  <p className="card-text">{liveData?.financialData?.profitMargins.fmt}</p>
                </div>
              </div>
            </div>
            <div className="row">
              <div
                className="card text-black mb-3 border-0 shadow"
                style={{ maxWidth: "13rem" , backgroundColor:"aliceblue" }}
              >
             
                <div className="card-body">
                  <h5 className="card-title">returnOnAssets</h5>
                  <p className="card-text">{liveData?.financialData?.returnOnAssets.fmt}</p>
                </div>
              </div>
            </div>
            <div className="row">
              <div
                className="card text-black border-0 shadow"
                style={{ maxWidth: "13rem" , backgroundColor:"aliceblue" }}
              >
                
                <div className="card-body">
                  <h5 className="card-title">returnOnEquity</h5>
                  <p className="card-text">{liveData?.financialData?.returnOnEquity.fmt}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        </div>
        </div>
  
      
      <div className="row  ">
        <div className="col-lg-3">
        <div className="shadow row bg-white rounded" style={{ width:"100%", height:"265px"}}>
          <h5>Recommendation</h5>
        <Stockrec name={name}/>
            </div>
            <div className="shadow row bg-white my-3 rounded" style={{ width:"100%", height:"280px",paddingTop:"20px"}}>
              <h5>Important values to note</h5>
              <p><b>Previous Close:</b> {liveData?.financialData?.financialCurrency+" "+dailyData?.summaryDetail?.previousClose?.raw} <br /><br />
              <b>FiftyTwoWeek High:</b> {liveData?.financialData?.financialCurrency+" "+dailyData?.summaryDetail?.fiftyTwoWeekHigh?.raw} <br /><br />
              <b>FiftyTwoWeek Low:</b> {liveData?.financialData?.financialCurrency+" "+dailyData?.summaryDetail?.fiftyTwoWeekLow?.raw}  <br /><br />
              <b>RegularMarket Open:</b> {liveData?.financialData?.financialCurrency+" "+dailyData?.summaryDetail?.regularMarketOpen?.raw} <br /><br />
              </p>
        </div>
        </div>
        <div className="shadow rounded col-lg-9 p-3 bg-white" style={{ height: "560px",paddingTop:"20px", overflowY:"auto",paddingLeft:"10px" }}>
        
       <StockChart name={name}/>
        </div>
       

          
        </div>
        <div className="row ">
        
          <div className="col shadow rounded bg-white my-3 " style={{width: "100%", height: "100%"}}>
        <NewsSent name={name}/>
        </div>
        <div className="col shadow rounded bg-white my-3 mx-3" style={{width: "100%", height: "100%"}}>
        <SentimentGraph name={name}/>
        </div>
        </div>
        </div>
        )}
      </div>
     
  );
}
