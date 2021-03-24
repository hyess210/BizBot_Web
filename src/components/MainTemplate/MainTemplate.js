import BizBotIntroduce from 'components/ServiceIntroduce/BizBotIntroduce/BizBotIntroduce';
import MainIntroduce from 'components/ServiceIntroduce/MainIntroduce/MainIntroduce';
import React from 'react';

const MainTemplate = () => {
    return(
        <div>
            <MainIntroduce/>
            <BizBotIntroduce/>
        </div>
    )
}

export default MainTemplate;