import React from 'react'
import './RecentInstalls'
import AliceCarousel from 'react-alice-carousel';
import "react-alice-carousel/lib/alice-carousel.css";
import './RecentInstalls.css'

const handleDragStart = (e) => e.preventDefault();

const items = [
    <img src='Images/1.jpg' className="sliderimg" onDragStart={handleDragStart} alt="Electrical wiring for amp" />,
    <img src='Images/2.jpg' className="sliderimg" onDragStart={handleDragStart} alt="Subwoofers" />,
    <img src='Images/3.jpg' className="sliderimg" onDragStart={handleDragStart} alt="Amp" />,
    <img src='Images/5.jpg' className="sliderimg" onDragStart={handleDragStart} alt="Subwoofer" />,
    <img src='Images/6.jpg' className="sliderimg" onDragStart={handleDragStart} alt="Electrical for conversion van" />
]

export default function RecentInstalls() {
    const responsive = {
        0: {
            items: 1
        },
        600: {
            items: 2
        },
        1024: {
            items: 3
        }
    };
    return (
        <div id='installs' className='carousel-container'>
            <p className='ri'>Recent Installs</p>
            <div className='carousel'>
                <AliceCarousel
                    duration={400}
                    autoPlay={true}
                    startIndex={1}
                    fadeOutAnimation={true}
                    mouseDragEnabled={true}
                    playButtonEnabled={true}
                    responsive={responsive}
                    autoPlayInterval={2000}
                    autoPlayDirection="rtl"
                    autoPlayActionDisabled={true}
                    mouseTracking
                    infinite
                    autoPlay
                    items={items}
                    paddingLeft={93}
                    paddingRight={30}>
                </AliceCarousel>
            </div>
        </div>
    )
}
