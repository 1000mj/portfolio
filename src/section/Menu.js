import React from "react";

function Menu() {
  return (
    <>
      <div>
        <div className="menu-box">
          <a href="#Home" className="side-menu side1">
            <div className="side-logo fa-solid fa-house"></div>
          </a>
        </div>
        <div className="menu-box">
          <a href="#Profile" className="side-menu side2">
            <div className="side-logo fa-solid fa-user"></div>
          </a>
        </div>
        <div className="menu-box ">
          <a href="#Skills" className="side-menu side3">
            <div className="side-logo fa-solid fa-book"></div>
          </a>
        </div>
        <div className="menu-box ">
          <a href="#Pj" className="side-menu side4">
            <div className="side-logo fa-solid fa-folder-open"></div>
          </a>
        </div>
      </div>
    </>
  );
}

export default Menu;
