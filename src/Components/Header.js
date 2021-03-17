import React from 'react'
import './Header.css'
import { Link, animateScroll as scroll } from "react-scroll";

export default function Header() {
    return (
        <div id='header' className='header-container'>
            <div className='a2g-container'>
                <p className='leading'>The Leading Mobile Electronics Installation Specialists</p>
                <div className='button-group'>
                    <div className='button-div'>
                        <Link id='buttonid' to='services' activeClass="active" spy={true} smooth={true} offset={-160} duration={100}>
                            <button type="button" class="btn btn-outline-light">Our Services</button>
                        </Link>
                    </div>
                    <div className='button-div'>
                        <Link id='buttonid' to='quotes' activeClass="active" spy={true} smooth={true} offset={-100} duration={100}>
                            <button type="button" class="btn btn-outline-light">Get A Quote</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}
