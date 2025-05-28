import React from "react";
import bear from "../assets/bear.png";

const Div1 = () => {
  return (
    <div>
      <div className="div1-div1">
        <div className="div1-div2">
          <div className="div1-div3">
            <span className="div1-spn1">$Puffy on Monad</span>            
            <div className="div1-spn2">Join the quest, do all task , boost your puffy points. Maybe we
              can have a reservation for you.
              </div>           
          </div>
          <div>
            <img src={bear} alt="" width={300} height={200} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Div1;
