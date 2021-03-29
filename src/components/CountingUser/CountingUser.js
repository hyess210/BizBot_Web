import React from "react";
import "./CountingUser.scss";

import IMG_01 from "assets/images/01.png";
import IMG_02 from "assets/images/02.png";
import IMG_03 from "assets/images/03.png";

const CountingUser = () => {
  return (
    <div className='CountingUser'>
      <div className='CountingUser__Title'>
        21만 중소기업
        <br />
        사용자와 함께합니다.
      </div>
      <div className='CountingUser__Counting'>
        <div className='CountingUser__Counting-img'>
          <div style={{ backgroundImage: `url(${IMG_01})` }}>
          <span className='CountingUser__Counting-img-text'>
            지원사업 수<br />
            12,000개/년</span>
          </div>
        </div>
        <div className='CountingUser__Counting-img'>
          <div style={{ backgroundImage: `url(${IMG_02})` }}>
          <span className='CountingUser__Counting-img-text'>
            지원사업 수<br />
            12,000개/년</span>
          </div>
        </div>
        <div className='CountingUser__Counting-img'>
          <div style={{ backgroundImage: `url(${IMG_03})` }}>
            <span className='CountingUser__Counting-img-text'>
            지원사업 수<br />
            12,000개/년</span>
          </div>
        </div>
      </div>
      <div className='CountingUser__Btn'>
        <button>비즈봇 바로가기</button>
      </div>
    </div>
  );
};

export default CountingUser;
