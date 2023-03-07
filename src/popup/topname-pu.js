import React, { useState } from "react";
import * as ReactDOM from "react-dom";

function Topname() {
  const border = "10px solid white";
  const [popupVisible, setPopupVisible] = useState(true);

  return (
    <>
      <button onClick={() => setPopupVisible(!popupVisible)}>
        <div></div>
      </button>
      {`popupVisible : ${popupVisible}`}
      {popupVisible && (
        <div
          className="popup1"
          style={{
            border
          }}
        ></div>
      )}
    </>
  );
}

ReactDOM.render(<Topname />, document.getElementById("root"));
export default Topname;
