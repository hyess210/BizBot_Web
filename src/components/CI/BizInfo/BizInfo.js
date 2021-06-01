import React from "react";
import "./BizInfo.scss";

// import BIZ_IMG from "assets/images/persona_biz.png";
import BIZ_INFO from "assets/images/biz_info.svg";

const BizInfo = () => {
  const ContentTemplate = ({ title, children }) => {
    return (
      <div className='BizInfo__content'>
        <div className='BizInfo__content-title'>
          {title}
          <hr />
        </div>
        <div className='BizInfo__content-children'>{children}</div>
      </div>
    );
  };
  return (
    <div className='BizInfo'>
      <ContentTemplate title='SLOGAN'>
        민관공 각각의 ‘페르소나’를 존중한 고민과 소통을 시작합니다. <br />
        시대의 흐름에 맞는 디지털 혁신(빅데이터, AI 등)을 기반한 포용으로써,<br />
        민관공의 관계를 존중하고 연결하는 국내 최대 플랫폼을 만들어 갑니다.
      </ContentTemplate>
    </div>
  );
};

export default BizInfo;
