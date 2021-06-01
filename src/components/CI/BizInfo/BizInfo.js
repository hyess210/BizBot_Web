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
        <b>민관공 각각의 ‘페르소나’를 존중한 고민과 소통을 시작</b>합니다. <br />
        시대의 흐름에 맞는 <b>디지털 혁신(빅데이터, AI 등)을 기반한 포용</b>으로써,<br />
        <b>민관공의 관계를 존중하고 연결하는 국내 최대 플랫폼</b>을 만들어 갑니다.
      </ContentTemplate>
      <ContentTemplate title='BRAND'>
        <div className='BizInfo__content-children-brand'>
          <b>Vision</b><br/>
          국내 최대 플랫폼 제작
        </div><div className='BizInfo__content-children-brand'>
          <b>Mission</b><br/>
          디지털 혁신 기반 민관공 연결
        </div><div className='BizInfo__content-children-brand'>
          <b>Positioning</b><br/>
          디지털 혁신을 통한 민관공을 쉽고<br/>
          간편하게 연결하는 플랫폼 제작사
        </div><div className='BizInfo__content-children-brand'>
          <b>Personality</b><br/>
          존중, 소통, 포용
        </div><div className='BizInfo__content-children-brand'>
          <b>Core Value</b><br/>
          시대의 흐름에 맞는 디지털 혁신
        </div>
      </ContentTemplate>
    </div>
  );
};

export default BizInfo;
