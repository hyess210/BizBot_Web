import BizBotIntroduce from 'components/ServiceIntroduce/BizBotIntroduce/BizBotIntroduce';
import MainIntroduce from 'components/ServiceIntroduce/MainIntroduce/MainIntroduce';
import SearchCategory from 'components/SearchCategory/SearchCategory';
import React from 'react';
import MockUpBG from 'components/MockUpBG/MockUpBG';
import CountingUser from 'components/CountingUser/CountingUser';

const MainTemplate = () => {
    return(
        <div>
            <MainIntroduce/>
            <BizBotIntroduce/>
            <SearchCategory/>
            <MockUpBG/>
            <CountingUser/>
        </div>
    )
}

export default MainTemplate;