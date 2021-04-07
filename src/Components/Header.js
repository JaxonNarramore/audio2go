import React from 'react'
import './Header.css'
import emailjs from 'emailjs-com';
import './Quote.css'
import Quote from './Quote'
import { Link, animateScroll as scroll } from "react-scroll";

export default function Header() {
    function sendEmail(e) {
        e.preventDefault();

        emailjs.sendForm('service_jehhnpf', 'template_cfojvtk', e.target, 'user_JjjokygneXUjqq7WuOENs')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
        e.target.reset()
    }

    return (
        <div id='header' className='header-container'>
            <div className='a2g-container'>
                <p className='leading'>The Leading Mobile Electronics Installation Specialists</p>
                {/* <div className='button-group'>
                    <div className='button-div'>
                        <Link id='buttonid' to='services' activeClass="active" spy={true} smooth={true} offset={-100} duration={100}>
                            <button type="button" class="btn btn-outline-light">Our Services</button>
                        </Link>
                    </div>
                    <div className='button-div'>
                        <Link id='buttonid' to='quotes' activeClass="active" spy={true} smooth={true} offset={-100} duration={100}>
                            <button type="button" class="btn btn-outline-light">Get A Quote</button>
                        </Link>
                    </div>
                </div> */}
                <Quote />
            </div>
        </div>
    )
}
