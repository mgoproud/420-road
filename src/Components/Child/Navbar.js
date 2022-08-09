import React from "react";

export default function Navbar({ navLinks, onclick }) {

    const links = navLinks?.map((link, index) => {
        return <li key={index} href="#" className="nav-links" onClick={() => onclick(link)}>{link}</li>
    })


    return (

        <div className="navbar">
            {links}          
        </div>
        
    )
}
