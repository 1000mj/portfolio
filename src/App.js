import './App.css';
import React from 'react';
import ClickScroll from './ClickScroll';


function App() {
  return (
    <>
    <div id='container'>
      <div id="content" className="Background-image" >
        <ul className="top-menu">
            <div className='name-box'><li className="menu top-name">Cheon Myeong Jin</li></div>
          </ul>
        <div>
          <div className='menu-box'><li className="side-menu"><i class="fa-solid fa-house"></i></li></div>
          <div className='menu-box'><li className="side-menu"><i class="fa-solid fa-user"></i></li></div>
          <div className='menu-box '><li className="side-menu"><i class="fa-solid fa-book"></i></li></div>
          <div className='menu-box '><li className="side-menu"><i class="fa-solid fa-folder-open"></i></li></div>
        </div>
        <div className='title'>
          <h1 className="title-text-0">@@@@
          <div className='underline blinking'></div></h1>
          <h1 className="title-text-1">개발자를 꿈꾸는</h1>
          <h1 className="title-text-2">@@@ 포트폴리오 입니다.</h1>
          <h1 className="title-text-3 blinking-1">ㅣ</h1>
        </div>
      </div>
      <div id="content" className='Profile'>
        <div className='Prologo'><i class="fa-solid fa-user fa-5x"></i></div>
      </div>
      <div id="content" className='Skills '>
        <div className='Slogo'><i class="fa-solid fa-book fa-5x"></i></div>
      </div>
      <div id="content" className='Pj '>
        <div className='Plogo'><i class="fa-solid fa-folder-open fa-5x"></i></div>

      </div>
    </div>
    </>
  );
}

export default App;
