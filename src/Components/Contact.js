import React from 'react'
import './Contact.css'
import { SiInstagram } from 'react-icons/si';
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
                        <p className='fill-out-form'><Link className='fotf' to='quotes' activeClass="active" spy={true} smooth={true} offset={-75} duration={100} >Fill out the form</Link> above or <a className='number-link' href="tel:+5125882677">give us a call</a> for a free same day quote!</p>
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
                        <a className='email-link' href="mailto: quotes@audio2goatx.com">
                            <p>quotes@audio2goatx.com</p>
                        </a>
                        <a className='number-link' href="tel:+5125882677">
                            <p>512-588-2677</p>
                        </a>
                    </div>
                    <div id='contact' class="explore">
                        <p className='contact-head'>Explore</p>
                        <Link to='header' activeClass="active" spy={true} smooth={true} offset={-100} duration={100} className='contact-links'>
                            Home
                        </Link>
                        <Link to='values' activeClass="active" spy={true} smooth={true} offset={1} duration={100} className='contact-links'>
                            Our Values
                        </Link>
                        <Link to='services' activeClass="active" spy={true} smooth={true} offset={-100} duration={100} className='contact-links'>
                            Our Services
                        </Link>
                        <Link to='installs' activeClass="active" spy={true} smooth={true} offset={-80} duration={100} className='contact-links'>
                            Recent Installs
                        </Link>
                        <Link to='brands' activeClass="active" spy={true} smooth={true} offset={-100} duration={100} className='contact-links'>
                            Our Brands
                        </Link>
                        <Link to='quotes' activeClass="active" spy={true} smooth={true} offset={-80} duration={100} className='contact-links'>
                            Get A Quote
                        </Link>
                    </div>
                </div>
            </div>
        </div >
    )
}
