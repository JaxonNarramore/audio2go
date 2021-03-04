import React from 'react'
import './RecentInstalls'
import AliceCarousel from 'react-alice-carousel';
import "react-alice-carousel/lib/alice-carousel.css";
import './RecentInstalls.css'

const handleDragStart = (e) => e.preventDefault();

const items = [
    <img src='Images/1.jpeg' className="sliderimg" onDragStart={handleDragStart} />,
    <img src='Images/2.jpeg' className="sliderimg" onDragStart={handleDragStart} />,
    <img src='Images/3.jpeg' className="sliderimg" onDragStart={handleDragStart} />,
    <img src='Images/4.jpeg' className="sliderimg" onDragStart={handleDragStart} />,
    <img src='Images/5.jpeg' className="sliderimg" onDragStart={handleDragStart} />
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
        </div >
    )
}



// const handleDragStart = (e) => e.preventDefault();

// const items = [
//     <img src='Images/1.jpeg' className="sliderimg" onDragStart={handleDragStart} />,
//     <img src='Images/2.jpeg' className="sliderimg" onDragStart={handleDragStart} />,
//     <img src='Images/3.jpeg' className="sliderimg" onDragStart={handleDragStart} />,
//     <img src='Images/4.jpeg' className="sliderimg" onDragStart={handleDragStart} />,
//     <img src='Images/5.jpeg' className="sliderimg" onDragStart={handleDragStart} />
// ]

// export default function RecentInstalls() {
//     return (
//         <div className='ri-container'>
//             <p>Recent Installs</p>
//             <div className='carousel'>
//                 <AliceCarousel autoPlay autoPlayInterval="3000" infinite mouseTracking items={items} />
//             </div>
//         </div>
//     )
// }