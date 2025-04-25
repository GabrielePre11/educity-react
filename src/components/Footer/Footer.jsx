import React from 'react'
import './Footer.css'
import '../media-query.css'

const Footer = () => {
    const footerTerms = [
        { id: 1, label: 'Terms of Services' },
        { id: 2, label: 'Privacy Policy' }
    ]

    return (
        <footer className="footer">
            <div className="container">
                <p className='copyright'>© 2025 Edusity. All rights reserved.</p>

                <ul className="grid-list">
                    {footerTerms.map(({ id, label }) => (
                        <li key={id} className='footer-link'>{label}</li>
                    ))}
                </ul>
            </div>
        </footer>
    )
}

export default Footer