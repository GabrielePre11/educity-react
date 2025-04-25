import React, { useEffect, useRef, useState } from 'react'
import './Header.css'
import { IoGridOutline } from "react-icons/io5"
import { IoCloseOutline } from "react-icons/io5"
import Navbar from '../Navbar/Navbar';

const Header = ({ active }) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const header = useRef(null);

    const toggleMenu = () => {
        setIsMenuOpen((prev) => !prev);
    };

    const scrollHeader = () => {
        const scrollY = window.scrollY;

        if (scrollY > 80) {
            header.current.classList.add('active');
        } else {
            header.current.classList.remove('active');
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', scrollHeader);
        return () => window.removeEventListener('scroll', scrollHeader);
    }, []);

    return (
        <header className="header" ref={header}>
            <div className="container">
                <a href="#" className="logo">
                    <img src="/logo.png" alt="logo" />
                </a>

                <Navbar active={active} isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />

                {isMenuOpen ? <IoCloseOutline className='close-menu-icon' aria-label='Close menu' aria-live='polite' onClick={toggleMenu} /> : <IoGridOutline className='menu-icon' aria-label='Open menu' aria-live='polite' onClick={toggleMenu} />}
            </div>
        </header>
    )
}

export default Header