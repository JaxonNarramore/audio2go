import React from 'react'
import Nav from './Nav'
import Header from './Header'
import Values from './Values'
import Contact from './Contact'
import Brands from './Brands'

export default function Home() {
    return (
        <div>
            <Nav />
            <Header />
            <Values />
            <Brands />
            <Contact />
        </div>
    )
}
