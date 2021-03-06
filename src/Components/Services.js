import React, { useState } from "react";
import './Services.css'

const data = [
    {
        id: "1",
        key: "1",
        title: "MARINE",
        text: "Marine Audio Troubleshooting",
        text2: "Marine Audio Installation",
        text3: "Marine LED Lighting",
        text4: "Appointment Fish Finder/ GPS installation",
        img: "https://static.wixstatic.com/media/e2cf28_c3d79131cb0949268f392b9022dcac21~mv2.jpg/v1/fill/w_478,h_340,al_c,lg_1,q_80/61Jv5KMxF5L__AC_SX425_.webp",
        img2: "https://static.wixstatic.com/media/e2cf28_1af6e7a2ec86495fa23b8d522be1ff39~mv2.png/v1/fill/w_478,h_340,al_c,q_85,usm_0.66_1.00_0.01/PCAM-Skeeter-Header.webp",
        img3: "https://static.wixstatic.com/media/e2cf28_565313368fc74eb2935cba6681dd02bc~mv2.jpg/v1/fill/w_478,h_340,al_c,lg_1,q_80/LedMarine.webp",
        img4: "https://static.wixstatic.com/media/e2cf28_e1497ed7b1e543e39698f2124a8a1bef~mv2.jpg/v1/fill/w_394,h_280,al_c,lg_1,q_80/How-to-Install-a-Garmin-Fish-finder-Tran.webp"
    },
    {
        id: "2",
        key: "2",
        title2: "AUTOMOTIVE",
        text: "Radio/Headunit Install",
        text2: "Subwoofer & Amp Install",
        text3: "4/5 Channel Amp Install",
        text4: "Alarm / Remote Start Installation",
        img: "https://static.wixstatic.com/media/e2cf28_16d8cc2ae1d1424f8abe469cb44b8406~mv2.jpg/v1/fill/w_480,h_340,al_c,q_80,usm_0.66_1.00_0.01/kenwood%20deck.webp",
        img2: "https://static.wixstatic.com/media/e2cf28_da1b69800c7942c495206ad2685bc01b~mv2.gif",
        img3: "https://static.wixstatic.com/media/e2cf28_ac6bad3bc121429583bba5b0c1d1979d~mv2.jpg/v1/fill/w_480,h_340,al_c,q_80,usm_0.66_1.00_0.01/amps.webp",
        img4: "https://static.wixstatic.com/media/e2cf28_d94096e3cd364f8eb4ff8d6ec0b2cb2b~mv2.jpg/v1/fill/w_480,h_340,al_c,q_80,usm_0.66_1.00_0.01/remote%20start.webp"
    },
    {
        id: "3",
        key: "3",
        title3: "HOME/COMMERICAL",
        text: "TV Mounting",
        text2: "Audio Installation",
        text3: "Security Camera Installation",
        text4: "WIFI Management",
        img: "https://static.wixstatic.com/media/e2cf28_3eeba5f0205740d38af7ea4214942963~mv2.jpg/v1/fill/w_480,h_340,al_c,q_80,usm_0.66_1.00_0.01/IMG-0642_JPG.webp",
        img2: "https://static.wixstatic.com/media/e2cf28_5a78159648204f1f8385eed62933c693~mv2.jpg/v1/fill/w_480,h_340,al_c,q_80,usm_0.66_1.00_0.01/in%20ceiling%20speakers.webp",
        img3: "https://static.wixstatic.com/media/e2cf28_840a7aa62b6b4da0863c21f2161c7234~mv2.jpg/v1/fill/w_480,h_340,al_c,q_80,usm_0.66_1.00_0.01/security%2520camera_edited.webp",
        img4: "Images/home.jpg"
    }
];

export default function Services() {
    const [toggle, setToggle] = useState('3')
    return (
        <div id='services' className='services-container'>
            <p className='os'>Our Services</p>
            {data.map(({ title, img, title2, img2, title3, img3, text, text2, text3, text4, img4, key }) => {
                return (
                    <div className="main">
                        <div className='links-cont'>
                            <div className='marine'>
                                <h2 className='h2-marine' onClick={() => setToggle(key)}>{title} </h2>
                            </div>
                            <div className='auto'>
                                <h2 className='h2-auto' onClick={() => setToggle(key)}>{title2} </h2>
                            </div>
                            <div className='home'>
                                <h2 className='h2-home' onClick={() => setToggle(key)}>{title3} </h2>
                            </div>
                        </div>
                        {toggle === key ? (
                            <div className='images'>
                                <div>
                                    <img src={img} key={key} className="photo" alt="TV Mounting" />
                                    <p className='text'>{text}</p>
                                </div>
                                <div>
                                    <img src={img2} key={key} className="photo" alt="Radio Install" />
                                    <p className='text'>{text2}</p>
                                </div>
                                <div>
                                    <img src={img3} key={key} className="photo" alt="Marine Audio" />
                                    <p className='text'>{text3}</p>
                                </div>
                                <div>
                                    <img src={img4} key={key} className="photo" alt="Security Camera Installation" />
                                    <p className='text'>{text4}</p>
                                </div>
                            </div>
                        ) : null}
                    </div>
                );
            })}
        </div>
    )
}
