import React from 'react'
import { Link } from 'react-router-dom';

import './Header.css';


export const Header = () => {
  return (
    <header className="header__sino">
          <Link to="/">
            <div className="logo">
                <img src="images/logo.svg" alt="logo icon" />
            </div>
          </Link>
            <Link to="/request" className="req">
                <div className='req__add'><span>+</span></div>
                <span className="req__text"> New Request</span>
         </Link>
    </header>
  )
}
