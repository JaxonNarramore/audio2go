import React, { useState } from "react";
import { Link } from "react-router-dom";
import './Services.css'

const data = [
    {
        id: "1",
        key: "1",
        title: "MARINE",
        text: "Text1.",
        img: "https://static.wixstatic.com/media/e2cf28_c3d79131cb0949268f392b9022dcac21~mv2.jpg/v1/fill/w_478,h_340,al_c,lg_1,q_80/61Jv5KMxF5L__AC_SX425_.webp",
        img2: "https://static.wixstatic.com/media/e2cf28_1af6e7a2ec86495fa23b8d522be1ff39~mv2.png/v1/fill/w_478,h_340,al_c,q_85,usm_0.66_1.00_0.01/PCAM-Skeeter-Header.webp",
        img3: "https://static.wixstatic.com/media/e2cf28_565313368fc74eb2935cba6681dd02bc~mv2.jpg/v1/fill/w_478,h_340,al_c,lg_1,q_80/LedMarine.webp",
        img4: "https://static.wixstatic.com/media/e2cf28_e1497ed7b1e543e39698f2124a8a1bef~mv2.jpg/v1/fill/w_394,h_280,al_c,lg_1,q_80/How-to-Install-a-Garmin-Fish-finder-Tran.webp"
    },
    {
        id: "2",
        key: "2",
        title: "AUTOMOTIVE",
        text: "Text2.",
        img: "https://static.wixstatic.com/media/e2cf28_16d8cc2ae1d1424f8abe469cb44b8406~mv2.jpg/v1/fill/w_480,h_340,al_c,q_80,usm_0.66_1.00_0.01/kenwood%20deck.webp",
        img2: "https://static.wixstatic.com/media/e2cf28_da1b69800c7942c495206ad2685bc01b~mv2.gif",
        img3: "https://static.wixstatic.com/media/e2cf28_ac6bad3bc121429583bba5b0c1d1979d~mv2.jpg/v1/fill/w_480,h_340,al_c,q_80,usm_0.66_1.00_0.01/amps.webp",
        img4: "https://static.wixstatic.com/media/e2cf28_d94096e3cd364f8eb4ff8d6ec0b2cb2b~mv2.jpg/v1/fill/w_480,h_340,al_c,q_80,usm_0.66_1.00_0.01/remote%20start.webp"
    },
    {
        id: "3",
        key: "3",
        title: "HOME/COMMERICAL",
        text: "Text3.",
        img: "https://static.wixstatic.com/media/e2cf28_3eeba5f0205740d38af7ea4214942963~mv2.jpg/v1/fill/w_480,h_340,al_c,q_80,usm_0.66_1.00_0.01/IMG-0642_JPG.webp",
        img2: "https://static.wixstatic.com/media/e2cf28_5a78159648204f1f8385eed62933c693~mv2.jpg/v1/fill/w_480,h_340,al_c,q_80,usm_0.66_1.00_0.01/in%20ceiling%20speakers.webp",
        img3: "https://static.wixstatic.com/media/e2cf28_840a7aa62b6b4da0863c21f2161c7234~mv2.jpg/v1/fill/w_480,h_340,al_c,q_80,usm_0.66_1.00_0.01/security%2520camera_edited.webp"
    }
];

export default function Services() {
    const [toggle, setToggle] = useState('1')
    return (
        <div>
            {data.map(({ title, text, key, img, img2, img3, img4 }) => {
                return (
                    <>
                        <div className="main">
                            <div className="text">
                                <h1 onClick={() => setToggle(key)}>{title} </h1>
                                {toggle === key ? (
                                    <>
                                        <p>{text}</p>
                                    </>
                                ) : null}
                            </div>

                            <div className="img">
                                {toggle === key ? (
                                    <>
                                        <img src={img} key={key} className="photo" />
                                        <img src={img2} key={key} className="photo" />
                                        <img src={img3} key={key} className="photo" />
                                        <img src={img4} key={key} className="photo" />
                                    </>
                                ) : null}
                            </div>
                        </div>
                    </>
                );
            })}
        </div>
    )
}
