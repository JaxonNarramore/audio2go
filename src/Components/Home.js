import React from 'react'
import Nav from './Nav'
import Header from './Header'
import Values from './Values'
import Contact from './Contact'
import Brands from './Brands'
import Services from './Services'

export default function Home() {
    return (
        <div>
            <Nav />
            <Header />
            <Values />
            <Services />
            <Brands />
            <Contact />
        </div>
    )
}
