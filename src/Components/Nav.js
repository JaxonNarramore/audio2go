import { Link, animateScroll as scroll } from "react-scroll";
import React, { useState, useEffect } from 'react'
import './Nav.css'
import QuoteButton from './QuoteButton'

function Nav() {
    const [click, setClick] = useState(false)
    const [button, setButton] = useState(true)

    const handleClick = () => setClick(!click)
    const closeMobileMenu = () => setClick(false)

    const showButton = () => {
        if (window.innerWidth <= 960) {
            setButton(false)
        } else {
            setButton(true)
        }
    }

    useEffect(() => {
        showButton()
    }, [])

    window.addEventListener('resize', showButton)
    return (
        <div>
            <nav class="navbar">
                <div class="navbar-container">
                    <Link to='header' activeClass="active" spy={true} smooth={true} offset={-60} duration={100} className='navbar-logo' onClick={closeMobileMenu}>
                        <img className='logo' src="Images/logo.png" alt="" />
                    </Link>
                    <div class="menu-icon" onClick={handleClick}>
                        <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
                    </div>
                    <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                        <li className='nav-item'>
                            <Link to='values' activeClass="active" spy={true} smooth={true} offset={-90} duration={100} className='nav-links' onClick={closeMobileMenu}>
                                Values
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link to='services' activeClass="active" spy={true} smooth={true} offset={-155} duration={100} className='nav-links' onClick={closeMobileMenu}>
                                Servcies
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link to='installs' activeClass="active" spy={true} smooth={true} offset={-70} duration={100} className='nav-links' onClick={closeMobileMenu}>
                                Installs
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link to='brands' activeClass="active" spy={true} smooth={true} offset={-100} duration={100} className='nav-links' onClick={closeMobileMenu}>
                                Brands
                            </Link>
                        </li>
                    </ul>
                    {/* {button && <QuoteButton>Resume</QuoteButton>} */}
                </div>
            </nav>
        </div>
    );
}

export default Nav;
