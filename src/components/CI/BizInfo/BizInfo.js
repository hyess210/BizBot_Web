import React from "react";
import "./BizInfo.scss";

// import BIZ_IMG from "assets/images/persona_biz.png";
import BIZ_INFO from 'assets/images/biz_info.svg';

const BizInfo = () => {
  return (
    <div className='BizInfo'>
      <div data-aos='zoom-out-down'>
        <img src={BIZ_INFO} alt={BIZ_INFO} />
      </div>
    </div>
  );
};

export default BizInfo;
