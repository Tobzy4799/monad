import React from "react";

const Div3 = () => {
  return (
    <div className="div3-div1">
      <p className="div3-p1">TASKS</p>
      <div className="div3-div2">
        <div className="div3-div3">
          <ul className="div3-ul1">
            <li className="div3-li">
              Follow X{" "}
              <button
                style={{
                  fontSize: "16px",
                  border: "none",
                  borderRadius: "15px",
                   width:'90px',
                  height:'40px',
                  marginLeft:'250px',
                  marginBottom:'10px'
            
                }}
              >
                claim
              </button>
            </li>
            <li className="div3-li">Follow founder X <button
                style={{
                  fontSize: "16px",
                  border: "none",
                  borderRadius: "15px",
                   width:'90px',
                  height:'40px',
                   marginLeft:'130px',
                  marginBottom:'10px'
                }}
              >
                claim
              </button></li>
            <li className="div3-li">Like and Retweet <button
                style={{
                  fontSize: "16px",
                  border: "none",
                  borderRadius: "15px",
                   width:'90px',
                  height:'40px',
                   marginLeft:'130px',
                  marginBottom:'10px'
                }}
              >
                claim
              </button></li>
            <li className="div3-li">Comment <button
                style={{
                  fontSize: "16px",
                  border: "none",
                  borderRadius: "15px",
                  width:'90px',
                  height:'40px',
                   marginLeft:'230px',
                  marginBottom:'10px'
                }}
              >
                claim
              </button></li>
          </ul>
        </div>
        <div className="div3-div4">
            <div className="div3-div5"></div>
            <div className="div3-div6">
                <h3>TO BOOST PUFFY POINTS</h3>
                <p style={{width:'330px', fontSize:'20px'}}>-Tweet about Puffy @puffy_xyz daily.
                    -Engage with all tweets related to $PUFFY</p>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Div3;
