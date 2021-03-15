import React from 'react'
import './Contact.css'
import { SiInstagram } from 'react-icons/si';
import { GrFacebook } from 'react-icons/gr';
import { AiOutlineFacebook } from 'react-icons/ai';
import { Link, animateScroll as scroll } from "react-scroll";

export default function Contact() {
    return (
        <div id='quotes'>
            <div class="whole-contact">
                <div class="contact-container">
                    <div className='footer-logo'>
                        <Link to='header' activeClass="active" spy={true} smooth={true} offset={-60} duration={100} className='contact-logo'>
                            <img className='footLogo' src="Images/logo.png" alt="" />
                        </Link>
                        <p className='fill-out-form'>Fill out the form above or give us a call for a free same day quote!</p>
                        <div className='icons'>
                            <a href="https://www.facebook.com/Audio2GoATX/" target='_blank'>
                                <AiOutlineFacebook className='facebook' />
                            </a>
                            <a href="https://www.instagram.com/audio2goatx/" target='_blank'>
                                <SiInstagram className='instagram' />
                            </a>
                        </div>
                    </div>
                    <div className='about'>
                        <p className='contact-head'>About </p>
                        <p className='abt-div'>We are a mobile audio installation service that specializes in anything with a 12-volt system. </p>
                    </div>
                    <div className='contact'>
                        <p className='contact-head'>Contact</p>
                        <p>quotes@audio2goatx.com</p>
                        <p>512-588-2677</p>
                    </div>
                    <div class="explore">
                        <p className='contact-head'>Explore</p>
                        <Link to='about' activeClass="active" spy={true} smooth={true} offset={-60} duration={100} className='contact-links'>
                            Home
                        </Link>
                        <Link to='about' activeClass="active" spy={true} smooth={true} offset={-60} duration={100} className='contact-links'>
                            Our Values
                        </Link>
                        <Link to='about' activeClass="active" spy={true} smooth={true} offset={-60} duration={100} className='contact-links'>
                            Our Services
                        </Link>
                        <Link to='about' activeClass="active" spy={true} smooth={true} offset={-60} duration={100} className='contact-links'>
                            Recent Installs
                        </Link>
                        <Link to='about' activeClass="active" spy={true} smooth={true} offset={-60} duration={100} className='contact-links'>
                            Our Brands
                        </Link>
                        <Link to='about' activeClass="active" spy={true} smooth={true} offset={-60} duration={100} className='contact-links'>
                            Get A Quote
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}
