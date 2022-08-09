import React from "react";

export default function Menu({menu}) {

    const data = menu?.map((d, index) => {
        return (
            <li className="category" key={index}>
                <h3 className="menu-title">{d.title}</h3>
                {d.items?.map((i, index) => {
                    return <div className="menu-card" key={index}>
                        <div className="name-container">
                            <h4 className="item-name">{i.name}</h4>
                            <p className="item-price">{i.price}</p>
                        </div>
                        <p className="item-description">{i.description.toLowerCase()}</p>
                        <hr />
                    </div>
                })}
            </li>
        )
    })

    return (

        <div className="section-menu">
            <h1 className="food-title">420 ROAD <span className="food-title-seperator">|</span>FOOD MENU</h1>
            <ul className="menu-content">
                {data}
            </ul>
        </div>

    )
}