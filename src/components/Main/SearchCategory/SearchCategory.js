import React from "react";
import "./SearchCategory.scss";

import "aos/dist/aos.css";

import CATEGORY_IMG from "assets/images/illustrator_img.png";

const SearchCategory = () => {
  return (
    <div className='SearchCategory'>
      <div data-aos='flip-up'>
      <div className='SearchCategory__content'>
        <h1 className='SearchCategory__content-title'>
          전국 약 500여개 중앙부처, 지자체, 공공기관의
          <br />
          최신 정부지원사업을 카카오톡으로 검색할 수 있는 서비스입니다.
        </h1>
        <div className='SearchCategory__content-des'>
            가장 빠르고 쉬운 비즈봇 서비스에 이미 22만 중소기업이 함께하고 있습니다.
        </div>
      </div>
      </div>
      <div data-aos='flip-up'>
      <div className='SearchCategory__img'>
        <img src={CATEGORY_IMG} alt={CATEGORY_IMG} />
      </div>
      </div>
    </div>
  );
};

export default SearchCategory;
