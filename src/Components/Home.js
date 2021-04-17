import React from 'react'
import Nav from './Nav'
import Header from './Header'
import Values from './Values'
import Contact from './Contact'
import Brands from './Brands'
import Services from './Services'
import RecentInstalls from './RecentInstalls'
import Pricing from './Pricing'
export default function Home() {
    return (
        <div>
            <Nav />
            <Header />
            <Values />
            <Services />
            <RecentInstalls />
            {/* <Pricing /> */}
            <Brands />
            <Contact />
        </div>
    )
}
