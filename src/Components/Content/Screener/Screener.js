import React, { useState ,useEffect} from 'react'
import './Screener.css'
import loadingGif from './loading.gif';
import Fade from 'react-reveal/Fade';


function Screener() {

  const [liveData, setLiveData] = useState();
  const [underValue, setUnderValue] = useState();
  const [smallCap, setSmallCap] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      try {
        const liveDataResponse = await fetch(`http://127.0.0.1:5000/api/screener`);
        const liveDataJson = await liveDataResponse.json();
        setLiveData(liveDataJson);
        const UnderValueRes = await fetch(`http://127.0.0.1:5000/api/undervalue`);
        const undervalueJson= await UnderValueRes.json();
        setUnderValue(undervalueJson);
        const SmallCapRes= await fetch(`http://127.0.0.1:5000/api/aggressive_small_cap`);
        const SmallCapJson = await SmallCapRes.json();
        setSmallCap(SmallCapJson);
        setLoading(false);
      } catch (error) {
        console.error(error);
      }
    }

    fetchData();

    const intervalId = setInterval(() => {
      fetchData();
    }, 1000015000); // Update every 15 seconds

    return () => {
      clearInterval(intervalId); // Clean up the interval on component unmount
    }
  }, []);

    return (
      <div className="screenerPage ">
        {loading ? (
          <div className="loading-container d-flex justify-content-center align-items-center ">
            <img style={{margin: "13%"}} width={30} height={30}  src={loadingGif} alt="Loading..." />
          </div>
        ) : (
          <div className="container-fluid">
          <div className="row shadow justify-content-center align-items-center mb-4">
          
          <div className="col-lg-6">
        <img style={{width:"35%", height:"100%"}}  src="https://img.freepik.com/free-vector/manager-working-with-target-audience-cartoon-character-marketing-process-client-conversion-website-visitors-lead-generation-customer-attraction_335657-2341.jpg?w=740&t=st=1683860460~exp=1683861060~hmac=27e0afd17ed53c96e06fc0838bc4bb33eb0118ae4ca8608e13d3c3a2d616970c" alt="" />
        </div>
        <div className="col-lg-6">
          <h1 style={{fontSize:"6rem"}}>SCREENER</h1>
        </div>
        </div>
        
        <Fade bottom duration={2000}>
          
      <div className="shadow ft row ">
        <h3>{liveData?.description}</h3>
        <table className="table">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Name</th>
      <th scope="col">Symbol</th>
      <th scope="col">Exchange</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>{liveData?.quotes[0]?.longName}</td>
      <td>{liveData?.quotes[0]?.symbol}</td>
      <td>{liveData?.quotes[0]?.fullExchangeName}</td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>{liveData?.quotes[1]?.longName}</td>
      <td>{liveData?.quotes[1]?.symbol}</td>
      <td>{liveData?.quotes[1]?.fullExchangeName}</td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td>{liveData?.quotes[2]?.longName}</td>
      <td>{liveData?.quotes[2]?.symbol}</td>
      <td>{liveData?.quotes[2]?.fullExchangeName}</td>
    </tr>
    <tr>
      <th scope="row">4</th>
      <td>{liveData?.quotes[3]?.longName}</td>
      <td>{liveData?.quotes[3]?.symbol}</td>
      <td>{liveData?.quotes[3]?.fullExchangeName}</td>
    </tr>
    <tr>
      <th scope="row">5</th>
      <td>{liveData?.quotes[4]?.longName}</td>
      <td>{liveData?.quotes[4]?.symbol}</td>
      <td>{liveData?.quotes[4]?.fullExchangeName}</td>
    </tr>
  </tbody>
</table>
</div>
</Fade>

<Fade bottom duration={2000} delay={200}>
<div className="shadow ft row m-3">
<h3>{underValue?.description}</h3>
        <table className="table">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Name</th>
      <th scope="col">Symbol</th>
      <th scope="col">Exchange</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>{underValue?.quotes[0]?.longName}</td>
      <td>{underValue?.quotes[0]?.symbol}</td>
      <td>{underValue?.quotes[0]?.fullExchangeName}</td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>{underValue?.quotes[1]?.longName}</td>
      <td>{underValue?.quotes[1]?.symbol}</td>
      <td>{underValue?.quotes[1]?.fullExchangeName}</td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td>{underValue?.quotes[2]?.longName}</td>
      <td>{underValue?.quotes[2]?.symbol}</td>
      <td>{underValue?.quotes[2]?.fullExchangeName}</td>
    </tr>
    <tr>
      <th scope="row">4</th>
      <td>{underValue?.quotes[3]?.longName}</td>
      <td>{underValue?.quotes[3]?.symbol}</td>
      <td>{underValue?.quotes[3]?.fullExchangeName}</td>
    </tr>
    <tr>
      <th scope="row">5</th>
      <td>{underValue?.quotes[4]?.longName}</td>
      <td>{underValue?.quotes[4]?.symbol}</td>
      <td>{underValue?.quotes[4]?.fullExchangeName}</td>
    </tr>
  </tbody>
</table>
</div>
</Fade>

<Fade bottom duration={2000} >
<div className="ft shadow row m-3">
<h3>{smallCap?.description}</h3>
        <table className="table">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Name</th>
      <th scope="col">Symbol</th>
      <th scope="col">Exchange</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>{smallCap?.quotes[0]?.longName}</td>
      <td>{smallCap?.quotes[0]?.symbol}</td>
      <td>{smallCap?.quotes[0]?.fullExchangeName}</td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>{smallCap?.quotes[1]?.longName}</td>
      <td>{smallCap?.quotes[1]?.symbol}</td>
      <td>{smallCap?.quotes[1]?.fullExchangeName}</td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td>{smallCap?.quotes[2]?.longName}</td>
      <td>{smallCap?.quotes[2]?.symbol}</td>
      <td>{smallCap?.quotes[2]?.fullExchangeName}</td>
    </tr>
    <tr>
      <th scope="row">4</th>
      <td>{smallCap?.quotes[3]?.longName}</td>
      <td>{smallCap?.quotes[3]?.symbol}</td>
      <td>{smallCap?.quotes[3]?.fullExchangeName}</td>
    </tr>
    <tr>
      <th scope="row">5</th>
      <td>{smallCap?.quotes[4]?.longName}</td>
      <td>{smallCap?.quotes[4]?.symbol}</td>
      <td>{smallCap?.quotes[4]?.fullExchangeName}</td>
    </tr>
  </tbody>
</table>
</div>
</Fade>
</div>

        )}
</div>
  )
}

export default Screener