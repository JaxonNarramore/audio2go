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
    return (
        <div className='ri-container'>
            <p>Recent Installs</p>
            <div className='carousel'>
                <AliceCarousel autoPlay autoPlayInterval="3000" infinite mouseTracking items={items} />
            </div>
        </div>
    )
}




// export default function RecentInstalls() {
//     return (
//         <div className='ri-container'>
//             <p>Recent Installs</p>
//             <AliceCarousel autoPlay autoPlayInterval="3000">
//                 <img src='Images/1.jpeg' className="sliderimg" />
//                 <img src='Images/2.jpeg' className="sliderimg" />
//                 <img src='Images/3.jpeg' className="sliderimg" />
//                 <img src='Images/4.jpeg' className="sliderimg" />
//                 <img src='Images/5.jpeg' className="sliderimg" />
//             </AliceCarousel>
//         </div>
//     )
// }
