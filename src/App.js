import './App.css';
import React from 'react';
import { useRef } from 'react';



function App() {
  return (
    <>
    <div >
      <div id='Home' className="Background-image main" >
        <ul className="top-menu">
            <div className='name-box'><li className="menu top-name">Cheon Myeong Jin</li></div>
          </ul>
        <div>
          <div className='menu-box'><li className="side-menu"><a href="#Home" class="fa-solid fa-house"></a></li></div>
          <div className='menu-box'><li className="side-menu"><a href="#Profile" class="fa-solid fa-user"></a></li></div>
          <div className='menu-box '><li className="side-menu"><a href="#Skills" class="fa-solid fa-book"></a></li></div>
          <div className='menu-box '><li className="side-menu"><a href="#Pj" class="fa-solid fa-folder-open"></a></li></div>
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
        <div className='Prologo'><i class="fa-solid fa-user fa-5x"></i></div>
      </div>
      <div className='section'>
        Skills
      </div>
      <div id='Skills' className='Skills '>
        <div className='Slogo'><i class="fa-solid fa-book fa-5x"></i></div>
      </div>
      <div className='section'>
        Project
      </div>
      <div id='Pj' className='Pj '>
        <div className='Plogo'><i class="fa-solid fa-folder-open fa-5x"></i></div>

      </div>
    </div>
    </>
  );
}

export default App;
