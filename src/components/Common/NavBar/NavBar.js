import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./NavBar.scss";

import LOGO_IMG from 'assets/images/persona_logo.png';

const NavBar = () => {
  const [prevScroll,setPrevScroll] = useState(window.pageYOffset);
  const [isShowNav,setIsShowNav] = useState(true);

  useEffect(()=>{
    window.addEventListener('scroll',handleScroll);
    return(()=>{
      window.removeEventListener('scroll',handleScroll);
    })
  },[]);

  const handleScroll = () => {
    const currentScroll = window.pageYOffset;
    setIsShowNav(prevScroll > currentScroll);
    setPrevScroll(currentScroll);
  }

  return (
    <div className={isShowNav?'NavBar':'NavBar__hidden'}>
      <div className='NavBar__Wrap'>
        <div className='NavBar__logo'>
          <Link to='/'>
            <img src={LOGO_IMG} alt={LOGO_IMG}/>
          </Link>
        </div>
        <div className='NavBar__menu'>
          <div>
            <Link to='/'>지원사업알리미챗봇</Link>
          </div>
          <div>
            <Link to='/ci'>회사 소개</Link>
          </div>
          {/* <div>
            <Link to='/history'>연혁</Link>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default NavBar;
