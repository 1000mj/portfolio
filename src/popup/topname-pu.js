import React, { useState } from "react";
import * as ReactDOM from "react-dom";

function Topname() {
  const border = "10px solid red";
  const [popupVisible, setPopupVisible] = useState(false);

  return (
    <>
      <button onClick={() => setPopupVisible(!popupVisible)}>
        <div className="menu top-name">Cheon Myeong Jin</div>
      </button>
      {`popupVisible : ${popupVisible}`}
      {popupVisible && (
        <div
          className="popup1"
          style={{
            marginRight: 100,
            overflow: "hidden",
            width: 100,
            height: 100,
            opacity: 0,
            border
          }}
        ></div>
      )}
    </>
  );
}

ReactDOM.render(<Topname />, document.getElementById("root"));
export default Topname;
