import React from 'react';
import './CIMain.scss';

import CIMAIN_IMG from 'assets/images/bizinfo_main.svg';

const CIMain = () => {
    return (
        <>
        <div className='CIMain'>
            <div>㈜페르소나가 만들어가는 세상</div>
            <div>공공정보의 비대칭성 해소를 통해,<b>공공-중소기업을 연결</b>하고</div>
            <div>기업이 사업을 포기하지 않는 세상을 만들고자 합니다.</div>
        <div className='CIMain__img'>
            <img src={CIMAIN_IMG} alt={CIMAIN_IMG} />
        </div>
        </div>
        </>
    )
}

export default CIMain;