import { Link, animateScroll as scroll } from "react-scroll";
import React, { useState, useEffect } from 'react'
import './Nav.css'

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
                    <div class="logologo">
                        <Link to='header' activeClass="active" spy={true} smooth={true} offset={-60} duration={100} className='navbar-logo' onClick={closeMobileMenu}>
                            <img className='logo' src="Images/logo.png" alt="" />
                        </Link>
                        <a className='logo-tel' href="tel:5125882677">512-588-2677</a>
                    </div>
                    <div class="menu-icon" onClick={handleClick}>
                        <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
                    </div>
                    <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                        <li className='nav-item'>
                            <Link to='values' activeClass="active" spy={true} smooth={true} offset={10} duration={100} className='nav-links' onClick={closeMobileMenu}>
                                Values
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link to='services' activeClass="active" spy={true} smooth={true} offset={-115} duration={100} className='nav-links' onClick={closeMobileMenu}>
                                Servcies
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link to='installs' activeClass="active" spy={true} smooth={true} offset={-80} duration={100} className='nav-links' onClick={closeMobileMenu}>
                                Installs
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link to='brands' activeClass="active" spy={true} smooth={true} offset={-80} duration={100} className='nav-links' onClick={closeMobileMenu}>
                                Brands
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link to='quotes' activeClass="active" spy={true} smooth={true} offset={-100} duration={100} className='nav-links' onClick={closeMobileMenu}>
                                Quote
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link to='contact' activeClass="active" spy={true} smooth={true} offset={200} duration={100} className='nav-links' onClick={closeMobileMenu}>
                                Contact
                            </Link>
                        </li>
                        <li className='nav-num nav-item'>
                            <a className='nav-links' href="tel:5125882677">512-588-2677</a>
                        </li>
                    </ul>
                    {/* {button && <QuoteButton className='getaquote'>Resume</QuoteButton>} */}
                </div>
            </nav>
        </div>
    );
}

export default Nav;
