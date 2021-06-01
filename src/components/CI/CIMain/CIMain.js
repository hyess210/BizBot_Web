import React from "react";
import "./CIMain.scss";

import CIMAIN_IMG from "assets/images/CI_Background.png";

const CIMain = () => {
  return (
    <>
      <div className='CIMain'>
        <div className='CIMain__content'>
          <div className='CIMain__content-title'>PERSONA</div>
          <div className='CIMain__content-des'>
            페르소나는 정보 통신 기술(ICT) 솔루션의 글로벌 선두 기업입니다.
          </div>
          <div className='CIMain__content-btn'>
            <button>Bizbot 서비스 소개</button>
          </div>
        </div>
        <div className='CIMain__img'>
          <img src={CIMAIN_IMG} alt={CIMAIN_IMG} />
        </div>
      </div>
    </>
  );
};

export default CIMain;
