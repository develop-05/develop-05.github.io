import React from 'react';
import {NavLink} from 'react-router-dom';
import {RiDashboardFill} from "react-icons/ri";
import {FaFolderOpen, FaPlaneDeparture} from "react-icons/fa"
import {GiRollingSuitcase} from "react-icons/gi";

import './Navigation.css';

export const Navigation = () => {

    return (
        <div className="navigation">
            <div className="menu__list">

                <div className="menu__list_item">
                  <NavLink to="/dashboard"  className="link__item">
                  <div className="icon">
                    <RiDashboardFill className="nav__icon" />
                  </div>
                    <div><span>Dashboard</span></div>
                  </NavLink>
                </div>

                <div className="menu__list_item">
                  <NavLink to="/" className="link__item">
                  <div className="icon">
                    <FaPlaneDeparture className="nav__icon" />
                </div>
                    <div><span>Trips</span></div>
                  </NavLink>
                </div>

                <div className="menu__list_item">
                  <NavLink to="/offer-crew" className="link__item">
                  <div className="icon">
                    <FaFolderOpen className="nav__icon"/>
                  </div>
                    <div><span>Expenses</span></div>
                  </NavLink>
                </div>

                <div className="menu__list_item">
                  <div className="icon">
                    <img src="/images/user.png" alt="user icon" />
                  </div>
                  
                    <div><span></span></div>
                </div>
            </div>
        </div>
    );
}

