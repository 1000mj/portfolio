import React from "react";

function Skills() {
  return (
    <>
      <div id="Skills" className="section section-s">
        Skills
      </div>
      <div className="Skills">
        <h1 className="s1">사용중</h1>
        {/*사용중인것,공부하고있는것*/}
        <span className="skills-img si-1">
          <div className="skills-ico s-html">
            <img src="https://i.ibb.co/NKkTMyk/html.png" alt="" border="0" />
          </div>
          <div className="skills-ico s-css">
            <img src="https://i.ibb.co/wBHGJvq/css.png" alt="" border="0" />
          </div>
          <div className="skills-ico s-js">
            <img
              src="https://i.ibb.co/3CZGGQw/javascript.png"
              alt="javascript"
              border="0"
            />
          </div>
          <div className="skills-ico s-react">
            <img
              src="https://i.ibb.co/b2hV55B/react.png"
              alt="react"
              border="0"
            />
          </div>
        </span>
        <h1 className="s1">공부,시도중</h1>
        <span className="skills-img">
          <div className="skills-ico s-ts">
            <img
              src="https://i.ibb.co/TkpPdfQ/typescript.png"
              alt="typescript"
              border="0"
            />
          </div>
          <div className="skills-ico s-py">
            <img
              src="https://i.ibb.co/QMXmgj5/python.png"
              alt="python"
              border="0"
            />
          </div>
          <div className="skills-ico s-java">
            <img
              src="https://i.ibb.co/j4Pdz8K/java.png"
              alt="java"
              border="0"
            />
          </div>
        </span>
        </div>
    </>
  );
}

export default Skills;
