import React from 'react'
import './Title.css'
import '../media-query.css'

const Title = ({ subtitle, title }) => {
    return (
        <div className="section-heading">
            <p className='section-subtitle'>{subtitle}</p>
            <h2 className='section-title'>{title}</h2>
        </div>
    )
}

export default Title