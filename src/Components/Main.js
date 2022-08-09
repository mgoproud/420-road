// import { default as UUID } from "node-uuid"
//HOOKS
import React, { useState, useEffect } from "react";
//COMPONENTS
import Home from "./Child/Home";
import Menu from "./Child/Menu";
import Story from './Child/Story'
import Events from './Child/Events'
import Contact from "./Child/Contact";
//DATA
import storyData from '../ourStory'
import menuData from '../menuData'


export default function Main({ activePage }) {

    const [foodMenu, setFoodMenu] = useState(menuData)
    const [ourStory, setOurStory] = useState(storyData)

// console.log(storyData)
    useEffect(() => {
        setOurStory(storyData)
        setFoodMenu(menuData)
    }, [])
// console.log(ourStory)
    return (

        <div className="section-main">

            {activePage === 'Home' && <Home />}
            {activePage === 'Menu' && <Menu menu={foodMenu} />}
            {activePage === 'Our Story' && <Story ourStory={ourStory} />}
            {activePage === 'Events' && <Events />}
            {activePage === 'Contact' && <Contact />}
            
        </div>
        
    )
}