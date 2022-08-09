import {useState, useRef} from 'react'
import emailjs from '@emailjs/browser'

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ContactForm = () => {


const [name, setName] = useState('')
const [phone, setPhone] = useState('')
const [email, setEmail] = useState('')
const [location, setLocation] = useState('')
const [occupation, setOccupation] = useState('')
const [hearAboutUs, setHearAboutUs] = useState('')
const [message, setMessage] = useState('')
const [loading, setLoading] = useState(false)

const form = useRef()

const sendEmail = (e) => {
    e.preventDefault()

    emailjs.sendForm('service_lujgo5h', 'template_8oyu3lg', form.current, 'LRuO7mVxJiSFCqzB1')
    .then((res) => {
        console.log(res.text)
        toast.success('Thank You For Contacting Us, We\'ll Get In Touch With You Shortly',
           {position: toast.POSITION.BOTTOM_RIGHT})
    }
    // , (err) => {
    //     // toast('Error In Sending Inquiry, Please Try Again Later...',
    //     //    {position: toast.POSITION.BOTTOM_RIGHT})
    //     console.log(err.text)
    //     console.log('message NOT sent')
    // }
    )
    .catch((err) => {
        toast.error('Something Went Wrong, Please Try Again Later... Thank You')
        console.log(err)
    })
    resetForm()
}

const resetForm = () => {
    setName('')
    setPhone('')
    setEmail('')
    setLocation('')
    setOccupation('')
    setHearAboutUs('')
    setMessage('')
}

// FOR BACKEND NODE

// to add this line in package.json just under name:
// "proxy": "http://localhost:4000/", 

// const handleSubmit = async (e) => {
//     e.preventDefault()
//     console.log('Submitted')
//     if (!name) {
//         return toast.error('Please Fill All The Required Fields')
//     }
//     try {
//         setLoading(true)
//         const {data} = await axios.post(`/api/email`, {
//             name,
//             phone,
//             email,
//             message
//         })
//         setLoading(false)
//         toast.success(data.message)
//     } catch (err) {
//         setLoading(false)
//         toast.error(
//             err.response && err.response.data.message
//             ? err.response.data.message
//             : err.message
//         )
//     }
// }

  return (
            <form className='contact-form' ref={form} onSubmit={sendEmail}>

            <div className='form-wrapper'>
                <div className='form-group groupped'>
                    <label htmlFor='name'>Full Name</label>  
                    <input 
                        type='text' 
                        id='name' 
                        name='user_name' 
                        value={name}
                        placeholder="Your Full Name"
                        onChange={(e) => setName(e.target.value)}
                        />             
                </div>
                <div className='form-group groupped'>
                    <label htmlFor='phone'>Phone</label>    
                    <input 
                        type='phone' 
                        id='phone' 
                        name='user_phone' 
                        value={phone}
                        placeholder='Your Phone Number'
                        onChange={(e) => setPhone(e.target.value)}
                        />           
                </div>
                <div className='form-group groupped'>
                    <label htmlFor='email'>Email</label> 
                    <input 
                        type='email' 
                        id='email' 
                        name='user_email' 
                        value={email}
                        placeholder='Your Email'
                        onChange={(e) => setEmail(e.target.value)}
                        />              
                </div>
                <div className='form-group groupped'>
                    <label htmlFor='location'>Location</label>   
                    <input 
                        type='text' 
                        id='location' 
                        name='user_location' 
                        value={location}
                        placeholder="Country, City"
                        onChange={(e) => setLocation(e.target.value)}
                        />            
                </div>
                <div className='form-group groupped'>
                    <label htmlFor='occupation'>Occupation</label>  
                    <input 
                        type='text' 
                        id='occupation' 
                        name='user_occupation' 
                        value={occupation}
                        placeholder="Your Occupation"
                        onChange={(e) => setOccupation(e.target.value)}
                        />             
                </div>
                <div className='form-group groupped'>
                    <label htmlFor='hearAboutUs'>How Did You Hear About Us</label>  
                    <input 
                        type='text' 
                        id='hearAboutUs' 
                        name='user_hearAboutUs' 
                        value={hearAboutUs}
                        placeholder="Tell Us How Did You Hear About Us"
                        onChange={(e) => setHearAboutUs(e.target.value)}
                        />             
                </div>

                </div>

                <div className='form-wrapper'>
                    <textarea 
                        rows='10'
                        cols='38'
                        id='message' 
                        name='message'
                        value={message}
                        placeholder="Write Your Inquiry Here ...."
                        onChange={(e) => setMessage(e.target.value)}
                    >
                    </textarea> 
                    <button 
                            className='form-btn' 
                            type='submit'
                            >
                            Send Message
                            
                    </button> 
                </div>

<ToastContainer />
                
            </form>

    
  )
}

export default ContactForm