import React from "react";
import "./Video.scss";

import VIDEO from "assets/media/file.mp4";

const Vedio = () => {
  return (
    <div className='Video'>
      <div className='Video__title'>
          연 12,000여개의 지원사업
          <br />
          매일 직접 찾고 확인하기 불편하셨나요?
      </div>
      <div className='Video__media'>
        <video autoPlay loop muted>
          <source src={VIDEO} type='video/mp4' />
        </video>
      </div>
    </div>
  );
};

export default Vedio;
