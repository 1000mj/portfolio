import './App.css';
import React from 'react';
import { useRef } from 'react';
import useMoveScrool from './ClickScroll'



function App() {
  
  const goodsTabs = {
    0: useMoveScrool('Main'),
    1: useMoveScrool('Profile'),
    2: useMoveScrool('Skills'),
    3: useMoveScrool('Pj')
  };

  return (
    <>
    {Array.from(goodsTabs).map((tab, index) => {
      <div onClick={tab.onMoveToElement}>{tab.name}</div>
    })}

    <div >
      <div ref={goodsTabs[0].element} className="Background-image main" >
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
      <div ref={goodsTabs[1].element} className='Profile'>
        <div className='Prologo'><i class="fa-solid fa-user fa-5x"></i></div>
      </div>
      <div ref={goodsTabs[2].element} className='Skills '>
        <div className='Slogo'><i class="fa-solid fa-book fa-5x"></i></div>
      </div>
      <div ref={goodsTabs[3].element} className='Pj '>
        <div className='Plogo'><i class="fa-solid fa-folder-open fa-5x"></i></div>

      </div>
    </div>
    </>
  );
}

export default App;
