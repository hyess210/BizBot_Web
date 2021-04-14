import React from 'react';
import './SearchCategory.scss';

import CATEGORY_IMG from 'assets/images/search_icons.png';
import MORE_IMG from 'assets/images/search_more_btn.png';

const SearchCategory = () => {
    return (
        <div className='SearchCategory'>
            <div className='SearchCategory__content'>
                <h1 className='SearchCategory__content-title'>지역별, 분야별 지원사업 검색</h1>
                <div className='SearchCategory__content-des'>중앙부처 및 전국 18개 지자체 지역별,<br/>
금융, 기술, 인력 등 9개 분야별 지원사업 검색이 가능합니다.</div>
            </div>
            <div className='SearchCategory__category'>
                <img className='SearchCategory__category-category' src={CATEGORY_IMG} alt={CATEGORY_IMG}/>
                <img className='SearchCategory__category-more' src={MORE_IMG} alt={MORE_IMG}/>
            </div>
        </div>
    )
}

export default SearchCategory;