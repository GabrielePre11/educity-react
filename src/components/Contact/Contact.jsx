import React from 'react'
import './Contact.css'
import Title from '../Title/Title'
import { FaArrowRight } from "react-icons/fa6";
import '../media-query.css'

import msgIcon from '../../assets/images/msg-icon.png'
import mailIcon from '../../assets/images/mail-icon.png'
import phoneIcon from '../../assets/images/phone-icon.png'
import locationIcon from '../../assets/images/location-icon.png'
import Button from '../Button/Button'

const Contact = () => {
    const contactLinks = [
        { id: 1, icon: mailIcon, label: "contact@email.com" },
        { id: 2, icon: phoneIcon, label: "+39 123 456 7890" },
        { id: 3, icon: locationIcon, label: "Via XYZ, Palermo, Sicily", location: "9014X, Italy" }
    ]

    return (
        <section className="section contact" aria-label='contact' id='contact'>
            <Title subtitle="Contact Us" title="Get In Touch" />

            <div className="container">
                <div className="contact-content">
                    <h3 className="contact-title">
                        Send us a message
                        <img src={msgIcon} alt="Mail Icon" className='msg-icon' />
                    </h3>

                    <p className="contact-desc">
                        Feel free to reach out through contact form or find our contact information below. Your feedback, questions, and suggestions are important to us as we strive to provide exceptional service to our university community.
                    </p>

                    <ul className="grid-list">
                        {contactLinks.map(({ id, icon, label, location }) => (
                            <li key={id} className='contact-link'>
                                <img src={icon} alt={label} className='contact-icon'></img>
                                {label} <br></br> {location}
                            </li>
                        ))}
                    </ul>
                </div>

                <div className="contact-form">
                    <form action="post" className="form">
                        <div className="input-wrapper">
                            <label className="contact-label">Your name</label>
                            <input type="text" className="contact-input" placeholder='Enter your name' required />
                        </div>

                        <div className="input-wrapper">
                            <label className="contact-label">Phone Number</label>
                            <input type="text" className="contact-input" placeholder='Enter your phone number' required />
                        </div>

                        <div className="input-wrapper">
                            <label className="contact-label">Your email</label>
                            <input type="text" className="contact-input" placeholder='Enter your email' required />
                        </div>

                        <div className="input-wrapper">
                            <label className="contact-label">Your message</label>
                            <textarea name="message" className="contact-input" placeholder='Enter your message' rows="6" required></textarea>
                        </div>

                        <Button
                            text="Submit now"
                            variant="secondary"
                            icon={<FaArrowRight className='icon' />} />
                    </form>
                </div>
            </div>
        </section>
    )
}

export default Contact