import React from 'react';
import './Investor.scss';

import INVESTOR_IMG from 'assets/images/Investor.png';

const Investor =()=> {
    return (
        <div className='Investor'>
            <div className='Investor__content'>
                <div className='Investor__content-title'>많은 기관/기업들이</div>
                <div className='Investor__content-title'>페르소나와 함께하고 있습니다.</div>
            </div>
            <div className='Investor__img'>
                <img src={INVESTOR_IMG} alt={INVESTOR_IMG} />
            </div>
        </div>
    )
}

export default Investor;