import React, { useState } from 'react';
import Topname from './popup/Topname-pu';
import Profile from './section/Profile';

import './App.css';
import Skills from './section/Skills';
import Project from './section/Project';

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
      <div id='Home' className="Background-image main" >
        <ul className="top-menu">
            <div  className='name-box'>
              <div id='root' className="menu top-name" onClick={openPopup}>Cheon Myeong Jin</div>
            </div>
          </ul>
          {isShowPopup && <Topname onClose={closePopup} />}
        <div>
          <div className='menu-box'><li className="side-menu"><a href="#Home" className="side-logo fa-solid fa-house"></a></li></div>
          <div className='menu-box'><li className="side-menu"><a href="#Profile" className="side-logo fa-solid fa-user"></a></li></div>
          <div className='menu-box '><li className="side-menu"><a href="#Skills" className="side-logo fa-solid fa-book"></a></li></div>
          <div className='menu-box '><li className="side-menu"><a href="#Pj" className="side-logo fa-solid fa-folder-open"></a></li></div>
        </div>
        <div className='title'>
          <h1 className="title-text-0">@@@@
          <div className='underline'></div></h1>
          <h1 className="title-text-1">개발자를 꿈꾸는</h1>
          <h1 className="title-text-2">@@@ 포트폴리오 입니다.</h1>
          <h1 className="title-text-3">ㅣ</h1>
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