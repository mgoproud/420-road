import React from "react";


const Events = () => {

    const titleStyles = {
        fontFamily: 'Karla',
        fontSize: '1.6rem',
        marginTop: '3rem',
        color: '#FF2D2D'
    }

    const h1Styles = {
        fontSize: '2.5rem',
        marginTop: '3rem'
    }

    return (

        <div className="section-events">
            <h1 style={h1Styles} className="food-title">EVENTS PAGE</h1>
            <p style={titleStyles}>COMMING SOON</p>
        </div>
        
    )
}

export default Events