import React, { useState } from "react";
import * as ReactDOM from "react-dom";
import App from "../App";

function topname() {
  const container = "10px solid red";
  const [popupVisible, setPopupVisible] = useState(true);

  return (
    <>
      {popupVisible || <button onClick={() => setPopupVisible(true)}></button>}
      {popupVisible && <button onClick={() => setPopupVisible(false)}></button>}
      <hr />
      {popupVisible && (
        <div style={{ width: 500, height: 500, container }}></div>
      )}
    </>
  );
}

ReactDOM.render(<topname />, document.getElementById("root"));
export default topname;
