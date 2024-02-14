import React from "react";
import * as ReactDOM from "react-dom";

function Topname(props) {
  const { onClose } = props;

  return (
    <>
      <div className="popup-box">
        <div className="popup1">
          <div className="com">Communication</div>
          <div className="tn-popup">
            {/* 벨로그 */}
            <a
              className="tn-vel"
              href="https://velog.io/@1000mj"
              target="_blank"
            >
              <img
                className="com-hover"
                src="https://i.ibb.co/0jPNTcs/velog.png"
                alt="velog"
                border="0"
              />
            </a>
            {/* 깃허브 */}
            <a
              className="tn-git"
              href="https://github.com/1000mj"
              target="_blank"
            >
              <img
                className="com-hover"
                src="https://i.ibb.co/Rj2dmrL/github.png"
                alt="github"
                border="0"
              />
            </a>
            {/* 카카오톡 */}
            <a
              className="tn-kakao"
              href="https://open.kakao.com/o/sHqqvY8e"
              target="_blank"
            >
              <img
                className="com-hover"
                src="https://i.ibb.co/gzwXqtk/kakaotalk.png"
                border="0"
              />
            </a>
          </div>

          <button onClick={onClose}>
            <div className="close">x</div>
          </button>
        </div>
      </div>
    </>
  );
}

ReactDOM.render(<Topname />, document.getElementById("root"));
export default Topname;
