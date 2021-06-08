import React from "react";
import "./MainIntroduce.scss";
// import MOCKUP_IOS from "assets/images/mockup_ios.png";
import MAIN from 'assets/images/main.jpg';
import INTRODUCE_FILE from 'assets/files/service_introduce.pptx';

const MainIntroduce = () => {
  return (
    <div className='MainIntroduce'>
      <div className='MainIntroduce__content'>
        <div className='MainIntroduce__content-subTitle'>
          쉽고, 유용하고, 다양한
        </div>
        <div className='MainIntroduce__content-des'>
          우리 회사에 꼭 맞는 지원사업 만나는법
        </div>
        <div className='MainIntroduce__content-title'>
          지원 사업 알리미 챗봇 '비즈봇(Bizbot)'
        </div>
        <div className='MainIntroduce__content-des'>
          <b>기업</b>과 <b>지원 사업</b>을 가장 효율적으로 <b>연결</b>합니다.
        </div>
      <div className='MainIntroduce__content-btn'>
        <a href={INTRODUCE_FILE} download>
        <button className='MainIntroduce__content-btn-default'>
          서비스 소개서
        </button>
        </a>
        <a href='https://pf.kakao.com/_DbxgnC' target='_blank'>
        <button className='MainIntroduce__content-btn-primary'>시작하기</button></a>
      </div>
      </div>

      <div className='MainIntroduce__Image'>
        {/* <img src={MOCKUP_IOS} alt={MOCKUP_IOS} /> */}
        <img src={MAIN} alt={MAIN} />
      </div>
    </div>
  );
};

export default MainIntroduce;
