import React from "react";

export default function Story({ ourStory }) {

    const story = ourStory?.map((s, i) => {
        return <li className="story-link" key={i}>
        {s}
        </li>
    })


    return (

        <div className="story-section">
            <h1 className="food-title">Know About Us</h1>
            <div className="story-box">           
                <figure className="img-fig-1">
                    <div className="story-layer">  
                        {/* <img className="story-img" src={foundersImg} alt="420 road" /> */}
                        <figcaption>420 Road Founders</figcaption>
                    </div>
                </figure>
                    
                    <ul className="link-container">
                        {story}            
                    </ul>

                <figure className="img-fig-2">
                    <div className="story-layer">  
                        {/* <img className="story-img" src={img2} alt="420 road" /> */}
                        <figcaption>420 Road Kiosk</figcaption>
                    </div>
                </figure>               
            </div>
        </div>

    )

}