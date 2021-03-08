import React from 'react'
import './Contact.css'
import { SiInstagram } from 'react-icons/si';
import { GrFacebook } from 'react-icons/gr';
import { AiOutlineFacebook } from 'react-icons/ai';

export default function Contact() {
    return (
        <div>
            <p className='ro-cuo'>Reach Out & Check Us Out</p>
            <p className='ro-cuo-div'>Ask about our current packages, pricing and more. Our friendly, knowledgeable staff can answer all of your auto reconditioning questions.</p>
            <div class="contact-container">
                <div className='phone'>
                    <p>Phone</p>
                    <p>512-588-2677</p>
                </div>
                <div className='email'>
                    <p>Email</p>
                    <p>quotes@audio2goatx.com</p>
                </div>
                <div className='social'>
                    <p>Socail Media</p>
                    <div className='icons'>
                        <a href="https://www.facebook.com/Audio2GoATX/" target='_blank'>
                            <AiOutlineFacebook className='facebook' />
                        </a>
                        <a href="https://www.instagram.com/audio2goatx/" target='_blank'>
                            <SiInstagram className='instagram' />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}
