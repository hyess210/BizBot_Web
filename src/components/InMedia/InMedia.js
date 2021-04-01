import React from "react";
import "./InMedia.scss";

import MEDIA01 from "assets/images/media1.png";
import { FiChevronsRight } from "react-icons/fi";

const InMedia = () => {
  const InMediaItems = ({ title, content, url, imageSrc }) => {
    return (
      <li className='InMedia__List-Items'>
        <a href={url} target='_blank' className='InMedia__List-Items-box'>
          <img src={imageSrc} alt={imageSrc} />
          <div className='InMedia__List-Items-title'>
            {title}
            <FiChevronsRight className='InMedia__List-Items-icon' />
          </div>
          <div className='InMedia__List-Items-content'>{content}</div>
        </a>
      </li>
    );
  };
  return (
    <div className='InMedia'>
      <div className='InMedia__Header'>
        <div>언론 속의 비즈봇</div>
        <div className='InMedia__Header-des'>언론 속에 비친 비즈봇입니다.</div>
      </div>
      <ul className='InMedia__List'>
        <InMediaItems
          title='언론사'
          content='기사 제목 기사 제목 기사 제목 기사 제목 기사 제목 기사 제목 기사 제목 기사 제목'
          url='#'
          imageSrc={MEDIA01}
        />
        <InMediaItems
          title='언론사'
          content='기사 제목 기사 제목 기사 제목 기사 제목 기사 제목 기사 제목 기사 제목 기사 제목'
          url='#'
          imageSrc={MEDIA01}
        />
        <InMediaItems
          title='언론사'
          content='기사 제목 기사 제목 기사 제목 기사 제목 기사 제목 기사 제목 기사 제목 기사 제목'
          url='#'
          imageSrc={MEDIA01}
        />
      </ul>
    </div>
  );
};

export default InMedia;
