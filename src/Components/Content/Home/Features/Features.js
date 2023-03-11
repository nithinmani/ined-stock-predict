import React from 'react';
import "./Features.css";

function Features() {
  return (
    <div>
         <div className="row Featuresrow p-3">
        <h1 className='text-white'>Features</h1>
            <div className="col-lg-7">
            <div class="row p-3">
  <div className="col-sm-6">
    <div className="card mt-2">
      <div className="card-body">
        <h5 className="card-title">Real-time stock prices</h5>
        <p className="card-text">Provide real time value and change of stocks. Keeps you up-to-date with current market condition</p>
        <a href="#" className="btn btn-primary">Get live stock</a>
      </div>
    </div>
  </div>
  <div className="col-sm-6">
    <div className="card mt-2">
      <div className="card-body">
        <h5 className="card-title">Technical analysis tools</h5>
        <p className="card-text">Provide detailed analysis of the stock based on the the various technical factors affecting the market</p>
        <a href="#" className="btn btn-primary">search company</a>
      </div>
    </div>
  </div>
</div>


<div className="row p-3">
  <div className="col-sm-6">
    <div className="card mt-2">
      <div className="card-body">
        <h5 className="card-title">News and analysis</h5>
        <p className="card-text">Keeps you up-to-date with live new feed which would affect the stock market</p>
        <a href="#" className="btn btn-primary">Get live news</a>
      </div>
    </div>
  </div>
  <div className="col-sm-6">
    <div className="card mt-2">
      <div className="card-body">
        <h5 className="card-title">Education resources</h5>
        <p className="card-text">Helps you to learn from the basics of stock market. It would helps you to make your own smart decisions</p>
        <a href="#" className="btn btn-primary">Go to Tutorial</a>
      </div>
    </div>
  </div>
</div>



            </div>
            <div className="col">
                <img className=' ml-5' src="https://portal.tradebrains.in/static/media/globe-theme.a1d4c46fffda951648a4.png" alt="earth" />
            </div>
        </div>
    </div>
  )
}

export default Features