import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faPhone, faLocationDot } from "@fortawesome/free-solid-svg-icons";
import ContactInfo from './ContactInfo'
import ContactForm from './ContactForm'


const Contact = () => {

    return (
        <div className="section-contact">
            <h1 className="food-title">Contact Us</h1>
            <div className="contact-wrapper">

                    <ContactInfo
                    FontAwesomeIcon={FontAwesomeIcon}
                    faEnvelope={faEnvelope}
                    faPhone={faPhone}
                    faLocation={faLocationDot}
                     />

                    <ContactForm />

            </div>
        </div>
    )
}

export default Contact