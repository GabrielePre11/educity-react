import './Programs.css'
import React from 'react'
import Title from '../Title/Title'
import '../media-query.css'

import Program1 from '../../assets/images/program-1.png'
import Program2 from '../../assets/images/program-2.png'
import Program3 from '../../assets/images/program-3.png'

import Icon1 from '../../assets/images/program-icon-1.png'
import Icon2 from '../../assets/images/program-icon-2.png'
import Icon3 from '../../assets/images/program-icon-3.png'

const Programs = () => {
    const ProgramsCards = [
        {
            id: 1,
            programImage: Program1,
            text: 'Graduation Degree',
            icon: Icon1
        },

        {
            id: 2,
            programImage: Program2,
            text: 'Masters Degree',
            icon: Icon2
        },

        {
            id: 3,
            programImage: Program3,
            text: 'Post Graduation',
            icon: Icon3
        }
    ];

    return (
        <section className="section programs" aria-label='programs' id='programs'>
            <Title subtitle="Our Program" title="What We Offer" />

            <div className="container">
                <ul className="grid-list">
                    {ProgramsCards.map(({ id, programImage, text, icon }) => (
                        <article key={id} className='program-card'>
                            <img src={programImage} alt={text} className='program-image'></img>

                            <div className="caption">
                                <img src={icon} className='program-icon'></img>
                                <p className="program-text">{text}</p>
                            </div>
                        </article>
                    ))}
                </ul>
            </div>
        </section>
    )
}

export default Programs