import React from 'react'


const ContactInfo = ({FontAwesomeIcon, faEnvelope, faPhone, faLocation}) => {


  return (

    <div className='contact-info'>
    {/* <h3 className='contact-h3'>Contact Info</h3> */}
    <h3 className='contact-title'>Contact Info</h3>
        <div className='contact-group groupped'>
            <FontAwesomeIcon className='contact-icon' icon={faPhone} />
            <p className='contact-text'>+971 50 747 2459</p>
            <span> | </span>
            <p className='contact-text'>+961 81 694 472</p>
        </div>
        <div className='contact-group groupped'>
           <FontAwesomeIcon className='contact-icon' icon={faEnvelope} /> 
           <p className='contact-text'>one1code.dev@gmail.com</p>
        </div>
        <div className='contact-group groupped'>
            <FontAwesomeIcon className='contact-icon' icon={faLocation} />
            <p className='contact-text'>Chester St. Glendale </p>
            <p className='contact-text'>California, USA</p>
        </div>
    </div>
  )
}

export default ContactInfo