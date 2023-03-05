import React from "react";
import StockData from "../StockData/StockData";
import "./Home.css";
import News from '../News/News';
import sample from './sample.mp4'
import { AppContext } from "../../../App";
import { useContext,useEffect ,useState} from "react";
import { useNavigate } from "react-router-dom";
import { TypeAnimation } from 'react-type-animation';
import AboutUs from"./AboutUs/AboutUs";
import Select from "react-select";



function Home() {
  var company;

  const [token, setToken] = useState("");
  useEffect(() => {
    const token = localStorage.getItem("token");
    setToken(token);
    console.log(token);
  }, []);

  
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "080d5391a5msh8465fd7b03a93c4p1725e9jsnb512929f94b5",
      "X-RapidAPI-Host": "latest-stock-price.p.rapidapi.com",
    },
  };

  fetch(
    "https://latest-stock-price.p.rapidapi.com/price?Indices=NIFTY%2050",
    options,
  )
    .then((response) => response.json())
    .then((response) => {
      console.log(response["50"]);
      console.log(response);
    })
    .catch((err) => console.error(err));
 
  const [selectedOption, setSelectedOption] = useState();
  const optionList = [
    { value: "TCS", label: "TCS" },
    { value: "TATAMOTORS", label: "TATA MOTORS" },
    { value: "ICICIBANK", label: "ICICI BANK" },
    { value: "ASIANPAINT", label: "ASIAN PAINTS" },
    { value: "AAPL", label: "Apple" }
  ];
  function handleSelect(data) {
    setSelectedOption(data);
  }
  function handleClick(){
    console.log(selectedOption);
  }
  return (
    <div className="HomePage">
      
      <div className="row"  style={{backgroundColor:"black",marginBottom:"20px"}}>
        <div className="col-lg-7 d-flex " >
      <video className='videoTag' autoPlay loop muted style={{ maxWidth: '100%', height: 'auto' }}>
    <source src={sample} type='video/mp4'  />
</video>
</div>
        <div className="col-lg-5 col-sm-12 d-flex flex-column justify-content-center text-white leftHome" >
        
          <h1 className="title">MARKET FORECAST</h1>
          <TypeAnimation
      sequence={[
        'Beware of small expenses', // Types 'One'
        1000, // Waits 1s
        'small holes can sink large ships.', 
        1000,// Deletes 'One' and types 'Two'
        
        () => {
          // console.log('Done typing!'); // Place optional callbacks anywhere in the array
        }
      ]}
      wrapper="div"
      cursor={true}
      repeat={Infinity}
      style={{ fontSize: '2em' }}
    />
          {/* <div className="search">
            <div className="form-group">
               <input  type={"search"} list="options" className="form-control searchBox" placeholder="Search..." 
               value={company}
               />
               <datalist id="options">
               <option value="TCS"/>
               <option value="APPL"/>
               <option value="MSFT"/>
               <option value="ECOMPT"/>
               <option value="CTS"/>
               </datalist>
            </div>
            <button 
            className="button btn-outline-success searchButtonHome" onClick={handleClick}>Search</button>
            
          </div> */}
          <div className="row">
            <div className="col ml-auto my-2">
            <div className="dropdown-container text-black">
        <Select
          options={optionList}
          placeholder="Select company"
          value={selectedOption}
          onChange={handleSelect}
          isSearchable={true}
          
        />
      </div>
            </div>
          <div className="col mr-auto my-2">
          
      <button 
            className="button btn-outline-success searchButtonHome" onClick={handleClick}>Search</button>
            </div>
            </div>
        </div>
        
      </div>
      <div className="row">
        <div className="col">
      <StockData/>
      </div>
      <div className="col">
        <News/>
      </div>
      </div>
     <div className="row about">
     <AboutUs/>
     </div>
    </div>
  );
}

export default Home;
