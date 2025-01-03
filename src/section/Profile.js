import React from "react";

function Profile() {
  return (
    <>
      <div className="profile-box slide-in-profile">
        <div id="Profile" className="section">
          Profile
        </div>
        <div className="Profile ">
          <div className="Prologo">
            <i className="fa-solid fa-user fa-5x"></i>
          </div>
          <div className="p-section">
            <p className="intro-title">
              ● 하기싫은데 억지로하는사람과, 하고싶어서 하는사람의 차이.
            </p>
            <br />
            <br />
            <p className="intro">
              안녕하세요, 프론트엔드 개발자 지망생 천명진입니다. 비전공자
              출신이지만 열심히만 한다면 못할게 없다는 마음가짐으로 항상 새로운
              기술과 트렌드에 관심을 가지고 배움을 게을리하지 않습니다. 문제
              해결 능력과 소통을 중요시하며, 일하게 될 사람들과 함께 더 나은
              사용자 경험을 제공하기 위해 최선을 다하겠습니다.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Profile;
