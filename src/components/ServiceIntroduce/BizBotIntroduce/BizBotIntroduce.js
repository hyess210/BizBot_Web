import React from "react";
import "./BizBotIntroduce.scss";
import PUSH_IMG from "assets/images/bizbot__push.png";
import BizBotIntroduceBottom from "./BizBotIntroduceBottom";

const BizBotIntroduce = () => {
  const ImageItems = ({ url, title }) => {
    return (
      <div className='BizBotIntroduce__Left-box'>
        <div className='BizBotIntroduce__Left-box-img'>
          <img src={url} alt={url} />
        </div>
        <div className='BizBotIntroduce__Left-box-title'>{title}</div>
      </div>
    );
  };
  return (
    <>
      <div className='BizBotIntroduce'>
        <div className='BizBotIntroduce__Left'>
          <ImageItems url={PUSH_IMG} title='추천 지원사업 푸쉬알림' />
          <ImageItems url={PUSH_IMG} title='추천 지원사업 푸쉬알림' />
        </div>
        <div className='BizBotIntroduce__Right'>
          <div className='BizBotIntroduce__Right-img'>image</div>
          <div className='BizBotIntroduce__Right-title'>비즈봇이란?</div>
          <div className='BizBotIntroduce__Right-subTitle'>
            지원 사업 알리미 챗봇, 비즈봇
          </div>
          <div className='BizBotIntroduce__Right-des'>
            전국 약 500여개 중앙부처, 지자체, <br />
            공공기관의 최신 정부지원사업을 <br />
            카카오톡으로 검색할 수 있는 서비스 입니다.
          </div>
        </div>
      </div>
      <BizBotIntroduceBottom/>
    </>
  );
};

export default BizBotIntroduce;
