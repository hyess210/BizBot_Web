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
      <div className='CountingUser__Conting'>
          <div className='CountingUser__Conting-img'><img src={IMG_01} alt={IMG_01}/></div>
          <div className='CountingUser__Conting-img'><img src={IMG_02} alt={IMG_02}/></div>
          <div className='CountingUser__Conting-img'><img src={IMG_03} alt={IMG_03}/></div>
      </div>
      <div className='CountingUser__Btn'>
          <button>비즈봇 바로가기</button>
      </div>
    </div>
  );
};

export default CountingUser;
