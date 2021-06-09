import React from "react";
import "./InMedia.scss";

import MEDIA01 from "assets/images/media1.png";
import MEDIA02 from 'assets/images/media2.jpg';
import MEDIA03 from 'assets/images/media3.jpg';
import { RiArrowDropRightFill, RiArrowDropLeftFill } from "react-icons/ri";

const InMedia = () => {
  const InMediaItems = ({ title, content, url, imageSrc }) => {
    return (
      <li className='InMedia__List-Items'>
        <a href={url} target='_blank' className='InMedia__List-Items-box'>
          <img src={imageSrc} alt={imageSrc} />
          <div className='InMedia__List-Items-content'>{content}</div>
        </a>
      </li>
    );
  };
  return (
    <div className='InMedia'>
      <div className='InMedia__Header'>
        <div>언론 속의 비즈봇</div>
      </div>
      <ul className='InMedia__List'>
        <InMediaItems
          title='언론사'
          content='대구시-스타트업 페르소나 기업 지원 위한 업무협약 체결'
          url='http://www.w-startup.com/news/articleView.html?idxno=11277'
          imageSrc={MEDIA02}
        />
        <InMediaItems
          title='언론사'
          content='중소기업연구원, 페르소나와 ‘정책정보 제공서비스 업무협약'
          url='https://www.shinailbo.co.kr/news/articleView.html?idxno=1345898'
          imageSrc={MEDIA01}
        />
        <InMediaItems
          title='언론사'
          content='페르소나, 대구市 공공데이터 활용 창업경진대회 최우수상 수상'
          url='https://m.wowtv.co.kr/NewsCenter/News/Read?articleId=A202008210326#_enliple'
          imageSrc={MEDIA03}
        />
      </ul>
    </div>
  );
};

export default InMedia;
