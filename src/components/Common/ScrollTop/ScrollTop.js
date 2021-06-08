import React, { useState } from 'react';
import {IoIosArrowUp} from 'react-icons/io';
import './ScrollTop.scss';

const ScrollTop = () => {
    const [showScroll,setShowScroll] = useState(false);
    const checkScrollTop = () => {
        if (!showScroll && window.pageYOffset > 300) {
            setShowScroll(true);
        } else if(showScroll && window.pageYOffset <= 300){
            setShowScroll(false);
        }
    };
    window.addEventListener('scroll',checkScrollTop);

    const goTop = () => {
        window.scrollTo({top:0, behavior:'smooth'});
    };

    return (
        <div
        className='ScrollTop'
        onClick={goTop}
        style={{display: showScroll?'flex':'none'}}
        >
            <IoIosArrowUp/>
        </div>
    )
}

export default ScrollTop;