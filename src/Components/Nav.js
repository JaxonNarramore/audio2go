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
                    <Link to='header' activeClass="active" spy={true} smooth={true} offset={-60} duration={100} className='navbar-logo' onClick={closeMobileMenu}>
                        <img className='logo' src="Images/logo.png" alt="" />
                    </Link>
                    <div class="menu-icon" onClick={handleClick}>
                        <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
                    </div>
                    <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                        <li className='nav-item'>
                            <Link to='about' activeClass="active" spy={true} smooth={true} offset={-60} duration={100} className='nav-links' onClick={closeMobileMenu}>
                                About
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link to='skills' activeClass="active" spy={true} smooth={true} offset={-60} duration={100} className='nav-links' onClick={closeMobileMenu}>
                                Skills
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link to='projects' activeClass="active" spy={true} smooth={true} offset={-40} duration={100} className='nav-links' onClick={closeMobileMenu}>
                                Projects
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link to='contact' activeClass="active" spy={true} smooth={true} offset={-70} duration={100} className='nav-links' onClick={closeMobileMenu}>
                                Contact
                            </Link>
                        </li>
                    </ul>
                    {/* {button && <ResumeLink>Resume</ResumeLink>} */}
                </div>
            </nav>
        </div>
    );
}

export default Nav;








// export default class Nav extends Component {
//     render() {
//         return (
//             <nav className='nav'>
//                 <div className='nav-container'>
//                     {/* <img className='logo' src="https://static.wixstatic.com/media/fec686_ddaa89691bea4dbe837e1dcbe2f3b6af~mv2.png/v1/fill/w_228,h_222,al_c,q_85,usm_0.66_1.00_0.01/sound.webp" alt="" /> */}
//                     <div className='container'>
//                         <img className='logo' src="Images/logo1.png" alt="" />
//                     </div>
//                     {/* <div className='naq-container'>
//                         <p className='naq'>Need an installation quote?</p>
//                         <div className="needquote">
//                             <a className='link' href="tel:+5128502204">
//                                 <p className='call'>
//                                     Call 512-588-2677
//                                 </p>
//                             </a>
//                             <p className='or'>OR</p>
//                             <Link className='quotelink' to='/estimate'><p className='quote'>Build An Estimate</p></Link>
//                         </div>
//                     </div> */}
//                 </div>
//             </nav>
//         )
//     }
// }
