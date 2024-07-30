// src/MyCarousel.jsx
// import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // Import carousel styles\
import './My_carousel.css'

const MyCarousel = () => {
    return (
        <Carousel
            showArrows={true}
            infiniteLoop={true}
            showThumbs={false}
            showStatus={false}
            autoPlay={true}
            interval={3000}
        >
            <div>
                <img src="./public/slider1.webp" height="487" width="100"  alt="Slide 1" />
                <p className="legend">Slide 1</p>
            </div>
            <div>
                <img src="./public/slider2.webp" height="487"  width="100" alt="Slide 2" />
                <p className="legend">Slide 2</p>
            </div>
            <div>
                <img src="./public/slider3.jpg" height="487"  width="100" alt="Slide 3" />
                <p className="legend">Slide 3</p>
            </div>
        </Carousel>
    );
};

export default MyCarousel;
