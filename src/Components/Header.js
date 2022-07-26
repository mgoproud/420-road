import React from "react";

import Navbar from "./Child/Navbar";

import logo from '../img/title-logo.png'

export default function Header({ navLinks, onclick }) {



    return (
        <header className="section-header">
            <div className='header-cont'>
                {/* <h1><span className="heading-divider heading-divider-1">420</span> <span className="heading-divider heading-divider-2">ROAD</span></h1> */}
                <img className="logo-main" src={logo} alt='420-road-logo' />
            </div>
            {/* <div className="header-cont">
                <ul className="nav-links">
                    {
                        links

                    }
                </ul>
            </div> */}


            <Navbar
                navLinks={['Home', 'Menu', 'Our Story', 'Events', 'Contact']}
                onclick={onclick}
            />
        </header>
    )
}