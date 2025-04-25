import React from 'react'
import Title from '../Title/Title'
import './Gallery.css'
import Button from '../Button/Button'
import { FaArrowRight } from "react-icons/fa6";
import '../media-query.css'

import Gallery1 from '../../assets/images/gallery-1.png'
import Gallery2 from '../../assets/images/gallery-2.png'
import Gallery3 from '../../assets/images/gallery-3.png'
import Gallery4 from '../../assets/images/gallery-4.png'

const Gallery = () => {
    const galleryPics = [
        { id: 1, src: Gallery1, alt: "First Pic of the Gallery" },
        { id: 2, src: Gallery2, alt: "Second Pic of the Gallery" },
        { id: 3, src: Gallery3, alt: "Third Pic of the Gallery" },
        { id: 4, src: Gallery4, alt: "Fourth Pic of the Gallery" }
    ];

    return (
        <section className="section gallery" aria-label='gallery' id='gallery'>
            <Title subtitle="Gallery" title="Campus Photos" />

            <div className="container">
                <div className="grid-list">
                    {galleryPics.map(({ id, src, alt }) => (
                        <img key={id} src={src} alt={alt} className='gallery-pic'></img>
                    ))}
                </div>

                <Button
                    text="Explore more"
                    variant="secondary"
                    icon={<FaArrowRight className='icon' />} />
            </div>
        </section>
    )
}

export default Gallery