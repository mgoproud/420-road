import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from '@fortawesome/fontawesome-svg-core'
import { faEnvelope, faPhone, faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { fab } from '@fortawesome/free-brands-svg-icons'
import ContactInfo from './ContactInfo'
import ContactForm from './ContactForm'

library.add(fab)
const Contact = () => {

    return (
        <div className="section-contact">
            <h1 className="food-title heading-color">Contact Us</h1>
            <div className="contact-wrapper">

                    <ContactInfo
                    FontAwesomeIcon={FontAwesomeIcon}
                    faEnvelope={faEnvelope}
                    faPhone={faPhone}
                    faLocation={faLocationDot}
                    fab={fab}
                     />

                    <ContactForm />

            </div>
        </div>
    )
}

export default Contact