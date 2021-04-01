import React from "react";
import "./NewsSubscription.scss";

import AOS from 'aos';
import 'aos/dist/aos.css';

import BUBBLE from "assets/images/bubble.png";

const NewsSubscription = () => {
    AOS.init();

  return (
    <div className='NewsSubscription'>
      <div data-aos='zoom-in'>
        <img src={BUBBLE} className='NewsSubscription__bg' />
      </div>
    </div>
  );
};

export default NewsSubscription;
