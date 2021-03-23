import React from 'react';
import './NavBar.scss';

const NavBar = () => {
    return (
        <div className='NavBar'>
            <div className='NavBar__Wrap'>
            <div className='NavBar__logo'>BizBot</div>
            <div className='NavBar__menu'>
                <div>서비스 소개</div>
                <div>회사 소개</div>
                <div>연혁</div>
            </div>
            </div>
        </div>
    )
}

export default NavBar;