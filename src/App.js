import React, { useState } from 'react';
import Topname from './popup/Topname-pu';
import Profile from './section/Profile';

import './App.css';
import Skills from './section/Skills';
import Project from './section/Project';
import './scrollgauge-bar';
import './copy';

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
    <div >
    <div id='gauge-bar'></div>
      <div id='Home' className="Background-image main" >
        <div className='title'>
          <div className="title-text-2">천명진 포트폴리오 입니다.</div>
        </div>
        <ul className="top-menu">
            <div  className='name-box'>
              <div id='root' className="menu top-name" onClick={openPopup}>Cheon Myeong Jin</div>
            </div>
          </ul>
          {isShowPopup && <Topname onClose={closePopup} />}
        <div>
          <div className='menu-box'><li className="side-menu side1"><a href="#Home" className="side-logo fa-solid fa-house"></a></li></div>
          <div className='menu-box'><li className="side-menu side2"><a href="#Profile" className="side-logo fa-solid fa-user"></a></li></div>
          <div className='menu-box '><li className="side-menu side3"><a href="#Skills" className="side-logo fa-solid fa-book"></a></li></div>
          <div className='menu-box '><li className="side-menu side4"><a href="#Pj" className="side-logo fa-solid fa-folder-open"></a></li></div>
        </div>
        
      </div>
      <Profile/>
      <Skills/>
      <Project/>
      <div className='contact'>
        <div className='con-text'>Contact</div>
        <br/>
        <br/>
        <div className='con-phone con'>Phone │ 010-4688-7738 / E-mail │ <button className='con-add'>cjsaudwls12@naver.com</button>  /  <button id='copyTarget' className='con-add' onClick='copyText()' >cjsaudwls12@naver.com</button></div>
      </div>
    </div>
    </>
  );
}

export default App;