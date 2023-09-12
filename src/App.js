import React, { useState } from "react";
import Topname from "./popup/Topname-pu";
import Profile from "./section/Profile";

import "./App.css";
import Skills from "./section/Skills";
import Project from "./section/Project";
import Menu from "./section/Menu";
import ScrollGaugeBar from "./scrollgauge-bar";
import "./copy";
import "./showSlide";

function App() {
  const [isShowPopup, setIsShowPopup] = useState(false);

  const openPopup = () => {
    setIsShowPopup(true);
  };

  const closePopup = () => {
    setIsShowPopup(!isShowPopup);
  };

  return (
    <>
      <div>
        <ScrollGaugeBar />
        <div id="Home" className="Background-image">
          {isShowPopup && <Topname onClose={closePopup} />}
          <div className="title">
            <div className="title-text-2">천명진 포트폴리오 입니다.</div>
          </div>
          <div className="top-menu">
            <div className="name-box">
              <div
                id="root"
                className="menu top-name blink"
                onClick={openPopup}
              >
                Cheon Myeong Jin
              </div>
            </div>
          </div>
        </div>
        <Menu />
        <Profile />
        <Skills />
        <Project />
        <div className="contact">
          <div className="con-text">Contact</div>
          <br />
          <br />
          <div className="con-phone con">
            Phone │ 010-4688-7738 / E-mail │{" "}
            <button className="con-add">cjsaudwls12@naver.com</button> /{" "}
            <button id="copyTarget" className="con-add" onClick="copyText()">
              cjsaudwls12@naver.com
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
