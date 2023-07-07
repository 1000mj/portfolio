import React from "react";

function Project() {
  return (
    <>
      <div className="section">Project</div>
      <div className="Pj ">
        <div class="flip-card">
          <div class="flip-card-inner">
            <div class="flip-card-front">
              <img
                src="https://i.postimg.cc/1zskFxzs/1pp.png"
                border="0"
                alt="1pp"
              />
            </div>
            <div class="flip-card-back">
              <h1>포트폴리오</h1>
              <p>.................</p>
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <a href="https://github.com/1000mj/portfolio" target="_blank">
                {" "}
                Git
              </a>
            </div>
          </div>
        </div>
        <div class="flip-card">
          <div class="flip-card-inner">
            <div class="flip-card-front">
              <img
                src="https://i.ibb.co/TgWxB9Y/Todo-List.png"
                alt="Todo-List"
                border="0"
              />
            </div>
            <div class="flip-card-back">
              <h1>Todo-List</h1>
              <p>.................</p>
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <a
                href="https://github.com/1000mj/react-todo-list"
                target="_blank"
              >
                {" "}
                Git
              </a>
            </div>
          </div>
        </div>
        <div class="flip-card">
          <div class="flip-card-inner">
            <div class="flip-card-front">
              <img src="https://i.ibb.co/16Ws6Jh/KB.jpg" alt="KB" border="0" />
            </div>
            <div class="flip-card-back">
              <h1>카카오뱅크 모작</h1>
              <p>.................</p>
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <a href="https://github.com/1000mj/kb_imitation" target="_blank">
                {" "}
                Git
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Project;
