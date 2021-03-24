import React from "react";
import "./MainIntroduce.scss";
import MAIN_IMG from "assets/images/First_img.png";

const MainIntroduce = () => {
  return (
    <div className='MainIntroduce'>
      hello
      <div className='MainIntroduce__Image'>
        <img src={MAIN_IMG} alt={MAIN_IMG} />
        <div className='MainIntroduce__Image-content'>
          <h1>몰라서 못받는 돈,</h1>
          <h1>카카오톡 하나면 끝.</h1>
          <div>약 270만개의 인공지능 매칭 알고리즘으로</div>
          <div>​​원하는 요일, 원하는 시간에 우리회사의 추천</div>
          <div>지원사업을 카카오톡으로 받아보실 수 있습니다.</div>
          <button className='MainIntroduce__Image-content-btn'>Bizbot 바로가기</button>
        </div>
      </div>
    </div>
  );
};

export default MainIntroduce;
