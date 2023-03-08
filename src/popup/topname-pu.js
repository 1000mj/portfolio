import React, { useState } from "react";
import * as ReactDOM from "react-dom";

function Topname(props) {
  const border = "10px solid white";
  const { onClose } = props;

  return (
    <>
      <div
        className="popup1"
        style={{
          border
        }}
      >
        <button onClick={onClose}>
          <div>X</div>
        </button>
      </div>
    </>
  );
}

ReactDOM.render(<Topname />, document.getElementById("root"));
export default Topname;
