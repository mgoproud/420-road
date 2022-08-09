import React from "react";
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone, faAt } from "@fortawesome/free-solid-svg-icons";
import { fab } from '@fortawesome/free-brands-svg-icons'


library.add(fab)

export default function Footer() {
    return (
        <div className="section-footer">
            <p className="reserved-text">&copy; Copyright 2021</p>
            <p className="text-seperator">|</p>
            <p className="dev-text">Developed By <span className="dev-name">One<span className="footer-1code">1</span>Code</span></p>
            <p className="text-seperator">|</p>

            <div className="social-box">
                <FontAwesomeIcon className="social-icon" icon={faPhone} />
                <FontAwesomeIcon className="social-icon" icon={faAt} />
                {/* <FontAwesomeIcon className="social-icon" icon={["fab", "fa-instagram"]} />                */}
                <FontAwesomeIcon className="social-icon" icon={["fab", "fa-github"]} />
            </div>
        </div>
    )
}