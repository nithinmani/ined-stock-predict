import React, { useState ,useEffect} from 'react'
import './Screener.css'
import loadingGif from './loading.gif';

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
      <div className="screenerPage container-fluid ">
        {loading ? (
          <div className="loading-container d-flex justify-content-center align-items-center">
            <img src={loadingGif} alt="Loading..." />
          </div>
        ) : (
          <>
      <div className="ft row m-3">
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

<div className="ft row m-3">
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

<div className="ft row m-3">
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
</>
        )}
</div>
  )
}

export default Screener