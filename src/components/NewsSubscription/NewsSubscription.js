import React from "react";
import "./NewsSubscription.scss";

import AOS from "aos";
import "aos/dist/aos.css";

import BUBBLE from "assets/images/bubble.png";

const NewsSubscription = () => {
  AOS.init();

  return (
    <div className='NewsSubscription'>
      <div data-aos='zoom-in'>
        <img src={BUBBLE} className='NewsSubscription__bg' />
      </div><div className='NewsSubscription__content'>
          <div className='NewsSubscription__content-title'>
            지원사업 카카오톡 뉴스레터 구독
          </div>
          <div className='NewsSubscription__content-des'>
            인기 정부 지원 사업을 정리해 카카오톡 <br />
            뉴스레터로 보내드립니다.
          </div>
          <hr className='NewsSubscription__content-line'/>
          <div className='NewsSubscription__content-des' style={{fontWeight:'700'}}>
          인기 정부 지원 사업을 정리해 카카오톡 <br/>
뉴스레터로 보내드립니다.
          </div>
        </div>
    </div>
  );
};

export default NewsSubscription;
