import React, { useState } from 'react';
import Topname from './popup/Topname-pu';
import Profile from './section/Profile';

import './App.css';
import Skills from './section/Skills';
import Project from './section/Project';
import './scrollgauge-bar';

function App() {
  const [isShowPopup, setIsShowPopup] = useState(false);

  const openPopup = () => {
    setIsShowPopup(true);
  };

  const closePopup = () => {
    setIsShowPopup(false);
  };
  
  return (
    <>
    <div >
    <div id='gauge-bar'></div>
      <div id='Home' className="Background-image main" >
        <ul className="top-menu">
            <div  className='name-box'>
              <div id='root' className="menu top-name" onClick={openPopup}>Cheon Myeong Jin</div>
            </div>
          </ul>
          {isShowPopup && <Topname onClose={closePopup} />}
        <div>
          <a href="#Home" className='menu-box'><li className="side-menu"><div className="side-logo fa-solid fa-house"></div></li></a>
          <a href="#Profile" className='menu-box'><li className="side-menu"><div className="side-logo fa-solid fa-user"></div></li></a>
          <a href="#Skills" className='menu-box '><li className="side-menu"><div className="side-logo fa-solid fa-book"></div></li></a>
          <a href="#Pj" className='menu-box '><li className="side-menu"><div href="#Pj" className="side-logo fa-solid fa-folder-open"></div></li></a>
        </div>
        <div className='title'>
          <div className="title-text-2">천명진 포트폴리오 입니다.</div>
        </div>
      </div>
      <Profile/>
      <Skills/>
      <Project/>
      <div className='contact'>
        <div className='con-text'>Contact</div>
        <div className='con-phone'>Phone │ 010-4688-7738<br/><br/>E-mail │ cjsaudwls12@naver.com  /  cjsaudwls12@gmail.com</div>
      </div>
    </div>
    </>
  );
}

export default App;