import React from "react";

function Project() {
  return (
    <>
      <div id="Pj" className="section ">
        Project
      </div>
      <div className="Pj">
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
              <h2>
                개인 웹 React포트폴리오로, 모바일과 PC에서 불편함 없이 볼 수
                있게 반응형을 고려하여작업했습니다 flexbox와 Media Query를
                사용하여 반응형으로 만들었습니다 flexbox와 JavaScript의 이해를
                높이는데 많은도움이됐습니다
              </h2>
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
              <h2>
                프론트엔드 과정으로 학원을 다니며 했던 React 단체프로젝트로,
                Tailwindcss/MUI등을 통한 라이브러리 활용과 from데이터전송의
                이해범위를 넓히는데 도움을 줬습니다.
              </h2>
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
              <h2>
                프론트엔드 과정으로 학원을 다니며 했던 모작프로젝트 입니다
                JavaScript의 이해를높이고, 이미지삽입, 캐러셀등을
                해보고,만들어보며 이해범위를 넓혀줬습니다
              </h2>
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
