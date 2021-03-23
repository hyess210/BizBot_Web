import React from "react";
import { Link } from "react-router-dom";
import "./NavBar.scss";

const NavBar = () => {
  return (
    <div className='NavBar'>
      <div className='NavBar__Wrap'>
        <div className='NavBar__logo'>
          <Link to='/'>BizBot</Link>
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
