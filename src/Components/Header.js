import React from "react";

import Navbar from "./Child/Navbar";

import logo from '../img/title-logo.png'

export default function Header({ navLinks, onclick }) {


    return (

        <header className="section-header">
            <div className='header-cont'>              
                <img className="logo-main" src={logo} alt='420-road-logo' />
            </div>
            
            <Navbar
                navLinks={['Home', 'Our Story', 'Menu', 'Events', 'Contact']}
                onclick={onclick}
            />
        </header>
        
    )
}