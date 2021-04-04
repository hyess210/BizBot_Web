import React from "react";
import "./CountingUser.scss";

import CountUp from "react-countup";

const CountingUser = () => {
  return (
    <div className='CountingUser'>
      <div className='CountingUser__Counting'>
        <div className='CountingUser__Counting-text'>
          지원사업 수(년)
          <br />
          <CountUp end={12000} className='CountingUser__Counting-number' />개
        </div>

        <div className='CountingUser__Counting-text'>
          누적 회원 수<br />{" "}
          <CountUp end={213335} className='CountingUser__Counting-number' />
          명
        </div>

        <div className='CountingUser__Counting-img-text'>
          누적 검색 건 수<br />
          <CountUp end={217396} className='CountingUser__Counting-number' />
          명
        </div>
      </div>
    </div>
  );
};

export default CountingUser;
