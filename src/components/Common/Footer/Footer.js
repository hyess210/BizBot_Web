import React from 'react';
import './Footer.scss';

import LOGO from 'assets/images/persona_logo_white.png';

const Footer = ()=>{
    return(
        <div className='Footer'>
            <div className='Footer__image'>
                <div className='Footer__image-logo'>
                    <img src={LOGO} alt={LOGO}/>
                </div>
            </div>
            <div className='Footer__text'>
            <div className='Footer__text-adress'>
            대구 동구 동대구로 461 대구경북디자인센터 10층 1004호
            </div>
            <div className='Footer__text-mail'>문의: bizbot.help@gmail.com</div>
            <div className='Footer__text-des'>상호명: (주)페르소나 | 대표: 배준철 | 사업자번호: 184-86-01669</div></div>
        </div>
    )
}

export default Footer;