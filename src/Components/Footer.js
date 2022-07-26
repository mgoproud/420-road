import React from "react";
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faPhoneVolume } from "@fortawesome/free-solid-svg-icons";
import { fab } from '@fortawesome/free-brands-svg-icons'
import footerLogo from '../img/footer/one1code-logo.png'

library.add(fab)

export default function Footer() {
    return (
        <div className="section-footer">
            <p className="reserved-text">&copy; Copyright 2021</p>
            <p className="text-seperator">|</p>
            <p className="dev-text">Developed By <span className="footer-1code">One1Code</span></p>
            <p className="text-seperator">|</p>

            <div className="social-box">
                <FontAwesomeIcon className="social-icon" icon={["fab", "fa-instagram"]} ></FontAwesomeIcon>
                <FontAwesomeIcon className="social-icon" icon={faEnvelope} ></FontAwesomeIcon>
                <FontAwesomeIcon className="social-icon" icon={faPhoneVolume}></FontAwesomeIcon>
            </div>
        </div>
    )
}