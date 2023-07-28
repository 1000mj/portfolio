import React, { useState } from "react";

function Menu() {
  return (
    <>
      <div class="hamburger-menu">
        <div class="bar"></div>

        <div class="bar"></div>

        <div class="bar"></div>
      </div>
      <div>
        <div className="menu-box">
          <li className="side-menu side1">
            <a href="#Home" className="side-logo fa-solid fa-house"></a>
          </li>
        </div>
        <div className="menu-box">
          <li className="side-menu side2">
            <a href="#Profile" className="side-logo fa-solid fa-user"></a>
          </li>
        </div>
        <div className="menu-box ">
          <li className="side-menu side3">
            <a href="#Skills" className="side-logo fa-solid fa-book"></a>
          </li>
        </div>
        <div className="menu-box ">
          <li className="side-menu side4">
            <a href="#Pj" className="side-logo fa-solid fa-folder-open"></a>
          </li>
        </div>
      </div>
    </>
  );
}

export default Menu;
