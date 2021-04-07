import BizBotIntroduce from 'components/ServiceIntroduce/BizBotIntroduce/BizBotIntroduce';
import MainIntroduce from 'components/ServiceIntroduce/MainIntroduce/MainIntroduce';
import SearchCategory from 'components/SearchCategory/SearchCategory';
import React from 'react';
import MockUpBG from 'components/MockUpBG/MockUpBG';
import CountingUser from 'components/CountingUser/CountingUser';
import InMedia from 'components/InMedia/InMedia';
import NewsSubscription from 'components/NewsSubscription/NewsSubscription';
import 'styles/AllStyle.scss';
import Vedio from 'components/Video/Video';
import CustomerVoice from 'components/CustomerVoice/CustomerVoice';
import Direction from 'components/Direction/Direction';

const MainTemplate = () => {
    return(
        <div>
            <MainIntroduce/>
            <CountingUser/>
            <Vedio/>
            {/* <BizBotIntroduce/> */}
            <SearchCategory/>
            <MockUpBG/>
            <InMedia/>
            <NewsSubscription/>
            <CustomerVoice/>
            <Direction/>
        </div>
    )
}

export default MainTemplate;