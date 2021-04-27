import React from 'react';
import './SearchCategory.scss';

const SearchCategory = () => {
    return (
        <div className='SearchCategory'>
            <div className='SearchCategory__content'>
                <h1 className='SearchCategory__content-title'>지역별, 분야별 지원사업 검색</h1>
                <div className='SearchCategory__content-des'>중앙부처 및 전국 18개 지자체 지역별,<br/>
금융, 기술, 인력 등 9개 분야별 지원사업 검색이 가능합니다.</div>
            </div>
            <div className='SearchCategory__category'>
            </div>
        </div>
    )
}

export default SearchCategory;