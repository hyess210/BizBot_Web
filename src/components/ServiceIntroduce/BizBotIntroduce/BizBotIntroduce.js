import React from 'react';
import './BizBotIntroduce.scss';
import PUSH_IMG from 'assets/images/bizbot__push.png';

const BizBotIntroduce = () => {
    const ImageItems = ({url, title}) => {
        return (
            <div className='BizBotIntroduce__Left-box'>
                <div className='BizBotIntroduce__Left-box-img'>
                    <img src={url} alt={url}/>
                </div>
                <div className='BizBotIntroduce__Left-box-title'>{title}</div>
            </div>
        )
    }
    return (
        <div className='BizBotIntroduce'>
            <div className='BizBotIntroduce__Left'>
                <ImageItems url={PUSH_IMG} title='추천 지원사업 푸쉬알림'/>
                <ImageItems url={PUSH_IMG} title='추천 지원사업 푸쉬알림'/>
                <ImageItems url={PUSH_IMG} title='추천 지원사업 푸쉬알림'/>
                <ImageItems url={PUSH_IMG} title='추천 지원사업 푸쉬알림'/>
                <div className='BizBotIntroduce__Right'>
                    <div>비즈봇이란?</div>
                </div>
            </div>
            <div className='BizBotIntroduce__Right'></div>
        </div>
    )
}

export default BizBotIntroduce;