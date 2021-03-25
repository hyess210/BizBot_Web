import React from "react";
import "./MockUpBG.scss";

import MOCKUP_IMG from "assets/images/mockup.png";

const MockUpBG = () => {
  return (
    <div className='MockUpBG'>
      {/* <img src={MOCKUP_IMG} alt={MOCKUP_IMG} /> */}
      <div className='MockUpBG__content' style={{backgroundImage: `url(${MOCKUP_IMG})`}}>
        <div className='MockUpBG__content-title'>
          <div>창업</div>
          <div>벤처</div>
          <div>소상공인</div>
        </div>
        <div className='MockUpBG__content-subTitle'>지원사업 검색</div>
        <div className='MockUpBG__content-des'>
          예비 창업자, 창업 초기 기업, 벤처 기업,
          <br />
          소상공인 등 업종별 지원사업 검색을
          <br />
          간편하게 할 수 있습니다.
        </div>
      </div>
    </div>
  );
};

export default MockUpBG;
