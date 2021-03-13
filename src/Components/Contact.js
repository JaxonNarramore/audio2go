import React from 'react'
import './Contact.css'
import { SiInstagram } from 'react-icons/si';
import { GrFacebook } from 'react-icons/gr';
import { AiOutlineFacebook } from 'react-icons/ai';
import { Link, animateScroll as scroll } from "react-scroll";

export default function Contact() {
    return (
        <div>
            <div class="whole-contact">
                {/* <p className='ro-cuo'>Reach Out & Check Us Out</p>
                <p className='ro-cuo-div'>Ask about our current packages, pricing and more. Our friendly, knowledgeable staff can answer all of your auto reconditioning questions.</p> */}
                <div class="contact-container">
                    <div className='footer-logo'>
                        <Link to='header' activeClass="active" spy={true} smooth={true} offset={-60} duration={100} className='navbar-logo'>
                            <img className='logo' src="Images/logo.png" alt="" />
                        </Link>
                        <p>Fill out the form above or give us a call for a free same day quote!</p>
                        <div className='icons'>
                            <a href="https://www.facebook.com/Audio2GoATX/" target='_blank'>
                                <AiOutlineFacebook className='facebook' />
                            </a>
                            <a href="https://www.instagram.com/audio2goatx/" target='_blank'>
                                <SiInstagram className='instagram' />
                            </a>
                        </div>
                    </div>
                    <div>
                        <p>About </p>
                        <p>We are a mobile audio installation service that specializes in anything with a 12-volt system. </p>
                    </div>
                    <div className='contact'>
                        <p>Contact</p>
                        <p>quotes@audio2goatx.com</p>
                        <p>512-588-2677</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
