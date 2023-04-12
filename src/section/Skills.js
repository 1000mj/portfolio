import React from "react";

function Skills() {
  return (
    <>
      <div id="Skills" className="section section-s">
        Skills
      </div>
      <div className="Skills">
        <h1 className="s1">public</h1>
        {/*사용중인것,공부하고있는것*/}
        <div className="skills-img">
          <div className="skills-ico">
            <img src="https://i.ibb.co/NKkTMyk/html.png" alt="" border="0" />
          </div>
          <div className="skills-ico">
            <img src="https://i.ibb.co/wBHGJvq/css.png" alt="" border="0" />
          </div>
          <div className="skills-ico">
            <img
              src="https://i.ibb.co/3CZGGQw/javascript.png"
              alt="javascript"
              border="0"
            />
          </div>
          <div className="skills-ico">
            <img
              src="https://i.ibb.co/b2hV55B/react.png"
              alt="react"
              border="0"
            />
          </div>
        </div>
        <h1 className="s1">tried</h1>
        <div className="skills-img">
          <div className="skills-ico">
            <img
              src="https://i.ibb.co/TkpPdfQ/typescript.png"
              alt="typescript"
              border="0"
            />
          </div>
          <div className="skills-ico">
            <img
              src="https://i.ibb.co/QMXmgj5/python.png"
              alt="python"
              border="0"
            />
          </div>
          <div className="skills-ico">
            <img
              src="https://i.ibb.co/j4Pdz8K/java.png"
              alt="java"
              border="0"
            />
          </div>
        </div>
        </div>
    </>
  );
}

export default Skills;
