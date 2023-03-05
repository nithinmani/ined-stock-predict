import React, { useState, useEffect } from "react";

export default function News() {
  const [token, setToken] = useState("");
  const [news, setNews] = useState("");

  useEffect(() => {
    async function getUser() {
      const token = localStorage.getItem("token");
      setToken(token);
      try {
        const options = {
          method: 'GET',
          headers: {
            'X-RapidAPI-Key': '2be1de11d0msh58feda7445d3b54p1b9fdbjsne738a62ed5e4',
		'X-RapidAPI-Host': 'cnbc.p.rapidapi.com'
          }
        };
        
       let response = await fetch('https://cnbc.p.rapidapi.com/news/v2/list-trending?tag=Articles&count=30', options)
        const data = await response.json();
        setNews(data);
        console.log(news);
        
      } catch (err) {
        console.error(err);
      }
    }
    getUser();
  }, []);

  return (
    <div className="p-5">
      <h1>NEWS</h1>

      <div className="conatiner mt-3 p-3" style={{backgroundColor:"lightcyan",borderRadius:"10px"}}>
  {news?.data?.mostPopularEntries?.assets && (
    <div className="row">
      <h3>{news.data.mostPopularEntries.assets[18].headline}</h3>
      <div className="col-lg-7">
        <p>{news.data.mostPopularEntries.assets[18].authorFormatted}</p>
        <p>{news.data.mostPopularEntries.assets[18].dateLastPublished}</p>
        <p>{news.data.mostPopularEntries.assets[18].description}</p>
      </div>
      <div className="col-lg-5 p-2">
        <img src={news.data.mostPopularEntries.assets[18].promoImage.url} alt="" style={{width:"30vh",borderRadius:"10px"}}/>
      </div>
    </div>
  )}
</div>
{/* In this code, we're using the && operator to only render the <div> element if news?.data?.mostPopularEntries?.assets is truthy. This expression will be truthy only if all the properties leading up to the assets property are defined. Additionally, we're using the optional chaining operator ?. to safely access the properties without causing an error if any of them are undefined.

You can apply the same modification to the other two blocks of code that render news items. */}







      <div className="conatiner mt-3 p-3" style={{backgroundColor:"lightgoldenrodyellow",borderRadius:"10px"}}>
      {news?.data?.mostPopularEntries?.assets && (
      <div className="row">
      <h3>{news.data.mostPopularEntries.assets[7].headline}</h3>
        <div className="col-lg-7">
          <p>{news.data.mostPopularEntries.assets[7].authorFormatted
}</p>
<p>{news.data.mostPopularEntries.assets[7].dateLastPublished
}</p>
        <p>{news.data.mostPopularEntries.assets[7].description}</p>
        </div>
        <div className="col-lg-5 p-2">
        <img src={news.data.mostPopularEntries.assets[7].promoImage.url} alt="" style={{width:"30vh",borderRadius:"10px"}}/>
        </div>
      </div>)}
      </div>


      <div className="conatiner mt-3 p-3" style={{backgroundColor:"aliceblue",borderRadius:"10px",}}>
      {news?.data?.mostPopularEntries?.assets && (
      <div className="row">
      <h3>{news.data.mostPopularEntries.assets[2].headline}</h3>
        <div className="col-lg-7" >
        <p>{news.data.mostPopularEntries.assets[2].authorFormatted
}</p>
<p>{news.data.mostPopularEntries.assets[2].dateLastPublished
}</p>
        <p>{news.data.mostPopularEntries.assets[2].description}</p>
        </div>
        <div className="col-lg-5  p-2">
        <img  src={news.data.mostPopularEntries.assets[2].promoImage.url} alt="" style={{width:"30vh", borderRadius:"20px"}}/>
        </div>
      </div>)}
      </div>
    </div>
  );
}

