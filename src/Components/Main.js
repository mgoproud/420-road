import { default as UUID } from "node-uuid"
import React, { useState, useEffect } from "react";
import Home from "./Child/Home";
import Menu from "./Child/Menu";
import Story from './Child/Story'
import Events from './Child/Events'
import Contact from "./Child/Contact";
// import mainImg from '../img/main/burger-420.jpg'
import storyData from '../ourStory'


export default function Main({ data, activePage }) {

    const [ourStory, setOurStory] = useState([])

    const showStory = () => {
        setOurStory(storyData)
    }

    useEffect(() => {
        showStory()
    }, [])

    return (
        <div className="section-main">

            {activePage === 'Home' && <Home />}
            {/* img={mainImg} */}
            {activePage === 'Menu' && <Menu data={data} />}
            {activePage === 'Our Story' && <Story ourStory={ourStory} />}
            {activePage === 'Events' && <Events />}
            {activePage === 'Contact' && <Contact />}

        </div>
    )
}