import React, { useState } from 'react';
import Topname from './popup/Topname-pu';

import './App.css';

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
          <div className='menu-box'><li className="side-menu"><a href="#Home" className="fa-solid fa-house"></a></li></div>
          <div className='menu-box'><li className="side-menu"><a href="#Profile" className="fa-solid fa-user"></a></li></div>
          <div className='menu-box '><li className="side-menu"><a href="#Skills" className="fa-solid fa-book"></a></li></div>
          <div className='menu-box '><li className="side-menu"><a href="#Pj" className="fa-solid fa-folder-open"></a></li></div>
        </div>
        <div className='title'>
          <h1 className="title-text-0">@@@@
          <div className='underline blinking'></div></h1>
          <h1 className="title-text-1">개발자를 꿈꾸는</h1>
          <h1 className="title-text-2">@@@ 포트폴리오 입니다.</h1>
          <h1 className="title-text-3 blinking-1">ㅣ</h1>
        </div>
      </div>
      <div className='section'>
        Profile
      </div>
      <div id='Profile' className='Profile'>
        <div className='Prologo'><i className="fa-solid fa-user fa-5x"></i></div>
      </div>
      <div className='section'>
        Skills
      </div>
      <div id='Skills' className='Skills '>
        <div className='Slogo'><i className="fa-solid fa-book fa-5x"></i></div>
      </div>
      <div className='section'>
        Project
      </div>
      <div id='Pj' className='Pj '>
        <div className='Plogo'><i className="fa-solid fa-folder-open fa-5x"></i></div>

      </div>
    </div>
    </>
  );
}

export default App;