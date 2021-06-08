import React from 'react';
import './SendMail.scss';
import BG_IMG from 'assets/images/sendMail_bg.png';

const SendMail = () => {
    return (
        <div className='SendMail' style={{backgroundImage:`url(${BG_IMG})`}}>
            <div className='SendMail__content'>
                <div className='SendMail__content-title'>정책/지원사업 홍보 메세지 발송</div>
                <div className='SendMail__content-des'>- 180여건 사업/정책 홍보, 392만 건 메세지 발송 -</div>
                <div className='SendMail__content-year'>(2021년 2월 기준)</div>
            </div>
            <div className='SendMail__button'>
                <a href='mailTo:bizbot.help@gmail.com' target='_blank'>
                <button>발송 문의하기</button>
                </a>
            </div>
        </div>
    )
}

export default SendMail;