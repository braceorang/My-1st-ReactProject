import React from "react";
function Left(){
  return(
    <div className="left">
    <div className="heading">
      <h1>
        Get <span style={{ color: "hsl(277, 64%, 61%)" }}>insights</span>{" "}that help 
        your business grow.
      </h1>
    </div>

    <div className="main-content">
      <p>
        Discover the benefits of data analytics and make better decisions
        regarding revenue, customer experience, and overall efficiency.
      </p>
    </div>

    <div className="left-item">
      <div className="item">
        <h1>10k+</h1>
        <p>companies</p>
      </div>

      <div className="item">
        <h1>314</h1>
        <p>templates</p>
      </div>

      <div className="item">
        <h1>12M+</h1>
        <p>queries</p>
      </div>
    </div>
  </div>
  )
   
}


export default Left;