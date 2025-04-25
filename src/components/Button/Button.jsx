import React from 'react'
import './Button.css';
import '../media-query.css'

const Button = ({ text, variant, icon }) => {
    return (
        <button className={`btn ${variant}`}>
            {text}
            {icon && <span className="icon">{icon}</span>}
        </button>
    )
}

export default Button