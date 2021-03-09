import React, { Component } from 'react'
import { Link } from "react-router-dom";
import './Nav.css'

export default class Nav extends Component {
    render() {
        return (
            <nav className='nav'>
                <div className='nav-container'>
                    {/* <img className='logo' src="https://static.wixstatic.com/media/fec686_ddaa89691bea4dbe837e1dcbe2f3b6af~mv2.png/v1/fill/w_228,h_222,al_c,q_85,usm_0.66_1.00_0.01/sound.webp" alt="" /> */}
                    <div className='container'>
                        <h1 className='title'>Audio 2 Go LLC</h1>
                        <p>Austin's mobile electronics specialists</p>
                    </div>
                    <div className='naq-container'>
                        <p className='naq'>Need an installation quote?</p>
                        <div className="needquote">
                            <a className='link' href="tel:+5128502204">
                                <p className='call'>
                                    Call 512-588-2677
                                </p>
                            </a>
                            <p className='or'>OR</p>
                            <Link className='quotelink' to='/estimate'><p className='quote'>Build An Estimate</p></Link>
                        </div>
                    </div>
                </div>
            </nav>
        )
    }
}
