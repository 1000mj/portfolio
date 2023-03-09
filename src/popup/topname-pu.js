import React, { useState } from "react";
import * as ReactDOM from "react-dom";

function Topname(props) {
  const { onClose } = props;

  return (
    <>
      <div className="popup1">
        <button onClick={onClose}>
          <div className="close1"></div>
          <div className="close2"></div>
        </button>
        <div className="tn-popup">
          {/* 벨로그 */}
          <a className="tn-vel" href="https://velog.io/@1000mj" target="_blank">
            <img src="https://ifh.cc/g/J2jxn4.png" border="0" />
          </a>
          {/* 깃허브 */}
          <a
            className="tn-git"
            href="https://github.com/1000mj"
            target="_blank"
          >
            <img src="https://ifh.cc/g/s6Xz0l.png" border="0" />
          </a>
          {/* 카카오톡 */}
          <a
            className="tn-kakao"
            href="https://open.kakao.com/o/sHqqvY8e"
            target="_blank"
          >
            <img src="https://ifh.cc/g/FMfBO3.png" border="0" />
          </a>
        </div>
      </div>
    </>
  );
}

ReactDOM.render(<Topname />, document.getElementById("root"));
export default Topname;
