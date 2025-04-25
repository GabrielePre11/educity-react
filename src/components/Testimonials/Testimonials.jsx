import React from 'react'
import './Testimonials.css'
import Title from '../Title/Title';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import userImg1 from '../../assets/images/user-1.png'
import userImg2 from '../../assets/images/user-2.png'
import userImg3 from '../../assets/images/user-3.png'
import userImg4 from '../../assets/images/user-4.png'
import { FaArrowLeft } from "react-icons/fa6";
import { FaArrowRight } from "react-icons/fa6";

const Testimonials = () => {
    const students = [
        {
            id: 1,
            profileImage: userImg1,
            fullName: 'Emily Williams',
            location: 'Edusity, USA',
            description: "Choosing to pursue my degree at Edusity was one of the best decisions I've ever made. The supportive community, state-of-the-art facilities, and commitment to academic excellence have truly exceeded my expectations."
        },

        {
            id: 2,
            profileImage: userImg2,
            fullName: 'William Jackson',
            location: 'New York, USA',
            description: "Choosing to pursue my degree at Edusity was one of the best decisions I've ever made. The supportive community, state-of-the-art facilities, and commitment to academic excellence have truly exceeded my expectations."
        },

        {
            id: 3,
            profileImage: userImg3,
            fullName: 'Noemy Williams',
            location: 'Los Angeles, USA',
            description: "Choosing to pursue my degree at Edusity was one of the best decisions I've ever made. The supportive community, state-of-the-art facilities, and commitment to academic excellence have truly exceeded my expectations."
        },

        {
            id: 4,
            profileImage: userImg4,
            fullName: 'Williams Hamilton',
            location: 'Las Vegas, USA',
            description: "Choosing to pursue my degree at Edusity was one of the best decisions I've ever made. The supportive community, state-of-the-art facilities, and commitment to academic excellence have truly exceeded my expectations."
        }
    ]

    return (
        <section className="section testimonials" aria-label='testimonials' id='testimonials'>
            <Title subtitle="Testimonials" title="What Student Says" />

            <Swiper
                modules={[Pagination, Navigation]}
                navigation={{
                    nextEl: '.swiper-next-arrow',
                    prevEl: '.swiper-prev-arrow',
                }}
                spaceBetween={30}
                slidesPerView={1}
                breakpoints={{
                    560: {
                        slidesPerView: 2,
                    }
                }}
            >
                {students.map(({ id, profileImage, fullName, location, description }) => (
                    <SwiperSlide className='swiper-slide'>
                        <article key={id} className='slide'>
                            <div className="user-info">
                                <img src={profileImage} alt={fullName} className='user-image' />

                                <div className="wrapper">
                                    <h3 className="full-name">{fullName}</h3>
                                    <span className="user-location">{location}</span>
                                </div>
                            </div>

                            <p className="user-desc">{description}</p>
                        </article>
                    </SwiperSlide>
                ))}
            </Swiper>

            {/* Pagination */}
            <div className="swiper-prev-arrow">
                <FaArrowLeft className='prev' />
            </div>

            <div className="swiper-next-arrow">
                <FaArrowRight className='next' />
            </div>
        </section >
    )
}

export default Testimonials