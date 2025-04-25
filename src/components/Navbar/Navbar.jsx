import React, { useEffect, useRef } from 'react'
import './Navbar.css'
import Button from '../Button/Button';

const Navbar = ({ active, isMenuOpen, setIsMenuOpen }) => {
    const navLinks = [
        { id: 1, label: 'Home', href: 'hero' },
        { id: 2, label: 'Programs', href: 'programs' },
        { id: 3, label: 'About us', href: 'about' },
        { id: 4, label: 'Gallery', href: 'gallery' },
        { id: 5, label: 'Testimonials', href: 'testimonials' },
        { id: 6, label: 'Contact Us', href: 'contact', isButton: true }
    ];

    const navbar = useRef(null);


    // Evento che gestisce il click dell'utente fuori dalla Navbar.
    const clickOutside = (event) => {
        // Controlla il valore corrente della Navbar e se il click dell'utente si verifica al di fuori di essa.
        if (navbar.current && !navbar.current.contains(event.target)) {
            setIsMenuOpen(false);
        }
    };

    useEffect(() => {
        isMenuOpen ? document.addEventListener('mousedown', clickOutside) : document.removeEventListener('mousedown', clickOutside)

        return () => {
            document.removeEventListener('mousedown', clickOutside);
        };
    }, [isMenuOpen]);

    return (
        <nav ref={navbar} className={`navbar ${isMenuOpen ? 'active' : ''}`}>
            <ul className="nav-links">
                {navLinks.map(({ id, label, href, isButton }) => (
                    <li key={id}>
                        {isButton ? (
                            <a href={`#${href}`}><Button text="Contact Us" variant="primary" /></a>
                        ) : (
                            <a href={`#${href}`} className={`nav-link ${active === href ? 'active' : ''}`}>{label}</a>
                        )}
                    </li>
                ))}
            </ul>
        </nav>
    )
}

export default Navbar