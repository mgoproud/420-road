import React from "react";
import { default as UUID } from "node-uuid"


export default function Menu(props) {

    const randomId = UUID.v4()
    const data = props.data?.map((d, index) => {

        return (
            <li className="category" key={index}>
                <h3 className="menu-title">{d.title}</h3>
                {d.items?.map(i => {
                    return <div className="menu-card">
                        <div className="name-container">
                            <h4 className="item-name">{i.name}</h4>
                            <p className="item-price">{i.price}</p>
                        </div>
                        <p className="item-description">{i.description.toLowerCase()}</p>
                        <hr />
                    </div>
                })}
            </li >
        )
    })

    return (
        <div className="section-menu">
            <h2 className="food-title">420 ROAD <span className="food-title-seperator">|</span>FOOD MENU</h2>
            <ul className="menu-content">
                {data}
            </ul>

        </div>
    )

}