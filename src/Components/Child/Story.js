import React from "react";
import foundersImg from '../../img/main/events/420-done.jpeg'
import img2 from '../../img/main/events/img-6.jpg'

export default function Story(props) {

    const story = props.ourStory?.map((s, i) => {
        return <li className="story-link" key={i}>
        {s}
        {/* <hr className="hr-styled" /> */}
        </li>
    })


    return (
        <div className="story-section">

            <h2 className="food-title">Get to know us and see our vision</h2>
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



    // return (
    //     <div className="story-section">
    //         <h2 className="">Get to know us and see our vision</h2>

    //         <ul className="link-container">
    //             {story}
    //             <hr className="story-hr" />
    //         </ul>


    //     </div>
    // )
}