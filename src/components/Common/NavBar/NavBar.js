import React from "react";
import { Link } from "react-router-dom";
import "./NavBar.scss";

import LOGO_IMG from 'assets/images/persona_logo.png';

const NavBar = () => {
  return (
    <div className='NavBar'>
      <div className='NavBar__Wrap'>
        <div className='NavBar__logo'>
          <Link to='/'>
            <img src={LOGO_IMG} alt={LOGO_IMG}/>
          </Link>
        </div>
        <div className='NavBar__menu'>
          <div>
            <Link to='/'>서비스 소개</Link>
          </div>
          <div>
            <Link to='/ci'>회사 소개</Link>
          </div>
          <div>
            <Link to='/history'>연혁</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
