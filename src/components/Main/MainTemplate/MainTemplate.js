import BizBotIntroduce from 'components/Main/ServiceIntroduce/BizBotIntroduce/BizBotIntroduce';
import MainIntroduce from 'components/Main/ServiceIntroduce/MainIntroduce/MainIntroduce';
import SearchCategory from 'components/Main/SearchCategory/SearchCategory';
import React from 'react';
import MockUpBG from 'components/Main/MockUpBG/MockUpBG';
import CountingUser from 'components/Main/CountingUser/CountingUser';
import InMedia from 'components/Main/InMedia/InMedia';
import NewsSubscription from 'components/Main/NewsSubscription/NewsSubscription';
import SendMail from 'components/Main/SendMail/SendMail';
import Vedio from 'components/Main/Video/Video';
import CustomerVoice from 'components/Main/CustomerVoice/CustomerVoice';
import Direction from 'components/Main/Direction/Direction';
import Investor from '../Investors/Investor';

import 'styles/AllStyle.scss';
import './MainTemplate.scss';

const MainTemplate = () => {
    return(
        <div>
            <MainIntroduce/>
            <CountingUser/>
            <Vedio/>
            {/* <BizBotIntroduce/> */}
            <SearchCategory/>
            <MockUpBG/>
            <Investor/>
            <InMedia/>
            <NewsSubscription/>
            <SendMail/>
            <CustomerVoice/>
            <div className="MainTemplate__Direction">
                <div className="MainTemplate__Direction-title">오시는 길</div>
            <Direction/>
            <div className="MainTemplate__Direction-adress">대구 동구 동대구로 461 대구경북디자인센터 10층 1004호</div>
            </div>
        </div>
    )
}

export default MainTemplate;