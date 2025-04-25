import React, { useEffect, useRef, useState } from 'react'
import './About.css'
import Title from '../Title/Title'
import '../media-query.css'

import aboutImage from '../../assets/images/about.png'
import playIcon from '../../assets/images/play-icon.png'
import { FaCirclePause, FaCirclePlay } from "react-icons/fa6";
import aboutClip from '../../assets/images/about-clip.mp4'

const About = () => {
    const aboutParagraphs = [
        {
            id: 1,
            text: "Embark on a transformative educational journey with our university's comprehensive education programs. Our cutting-edge curriculum is designed to empower students with the knowledge, skills, and experiences needed to excel in the dynamic field of education."
        },

        {
            id: 2,
            text: "With a focus on innovation, hands-on learning, and personalized mentorship, our programs prepare aspiring educators to make a meaningful impact in classrooms, schools, and communities."
        },

        {
            id: 3,
            text: "Whether you aspire to become a teacher, administrator, counselor, or educational leader, our diverse range of programs offers the perfect pathway to achieve your goals and unlock your full potential in shaping the future of education."
        }
    ];

    const [isPlaying, setIsPlaying] = useState(false);
    const clip = useRef(null);

    const playClip = () => {
        setIsPlaying((prev) => !prev);
    };

    useEffect(() => {
        if (!clip.current) return;

        isPlaying ? clip.current.play() : clip.current.pause();
    }, [isPlaying]);

    return (
        <section className="section about" aria-label='about' id='about'>
            <div className="container">
                <div className="about-content">
                    <Title subtitle="About University" title="Nurturing Tomorrow's Leaders Today" />

                    {aboutParagraphs.map(({ id, text }) => (
                        <p key={id} className='about-text'>{text}</p>
                    ))}
                </div>

                <figure className='about-image'>
                    <img className='about-img' src={aboutImage} alt='About image'></img>

                    <div className={`about-video ${isPlaying ? 'play' : ''}`}>
                        <video ref={clip} src={aboutClip} className='about-clip' muted loop></video>
                    </div>

                    {isPlaying ? <FaCirclePause className='pause-icon' onClick={playClip} /> : <FaCirclePlay className='play-icon' onClick={playClip} />}
                </figure>
            </div>
        </section>
    )
}

export default About