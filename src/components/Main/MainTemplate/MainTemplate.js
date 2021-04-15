import BizBotIntroduce from 'components/Main/ServiceIntroduce/BizBotIntroduce/BizBotIntroduce';
import MainIntroduce from 'components/Main/ServiceIntroduce/MainIntroduce/MainIntroduce';
import SearchCategory from 'components/Main/SearchCategory/SearchCategory';
import React from 'react';
import MockUpBG from 'components/Main/MockUpBG/MockUpBG';
import CountingUser from 'components/Main/CountingUser/CountingUser';
import InMedia from 'components/Main/InMedia/InMedia';
import NewsSubscription from 'components/Main/NewsSubscription/NewsSubscription';
import 'styles/AllStyle.scss';
import Vedio from 'components/Main/Video/Video';
import CustomerVoice from 'components/Main/CustomerVoice/CustomerVoice';
import Direction from 'components/Main/Direction/Direction';
import Investor from '../Investors/Investor';

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
            <CustomerVoice/>
            <Direction/>
        </div>
    )
}

export default MainTemplate;