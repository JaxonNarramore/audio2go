import React from 'react'
import './Values.css'

export default function Values() {
    return (
        <div id='values' className='value-container'>
            <div class="allvalues">
                <div class="everyvalue">
                    <div className='value1-container'>
                        <p className='our-values'>Our Values</p>
                        <div className='vs-container'>
                            <p id='first-value-head' className='value-statement'>
                                Audio 2 Go’s Core values are the foundation we are built on.
                            </p>
                            <p className='value-statement'>
                                These values ensure that we maintain our outstanding status <span className='ati'>among the industry.</span>
                            </p>
                        </div>
                    </div>
                    <div class="cs-container">
                        <p className='cs'>Customer satisfaction</p>
                        <div className='customer-satisfaction'>
                            <img className='cs-image' src="https://static.wixstatic.com/media/fec686_f72d96df23124304a9255ec48511afcc~mv2.png/v1/fill/w_200,h_152,al_c,q_85,usm_0.66_1.00_0.01/satisfaction-customer.webp" alt="" />
                            <p className='cs-div'>
                                The install is not complete until the customer is happy with the install. We will do anything to ensure that we provide the highest quality of work.
                            </p>
                        </div>
                    </div>
                    <div class="i-container">
                        <p className='i'>Integrity</p>
                        <div className='integrety'>
                            <img className='i-image' src="https://static.wixstatic.com/media/fec686_b5d5b0cb25ba4bf399952b718ae1e23b~mv2.png/v1/fill/w_200,h_188,al_c,q_85,usm_0.66_1.00_0.01/passion.webp" alt="" />
                            <p className='i-div'>
                                We will maintain integrity. No matter the circumstance, from overselling a system to taking shortcuts on the install. We treat every install like it’s our own and treat every customer like family.
                            </p>
                        </div>
                    </div>
                    <div class="pfe-container">
                        <p className='pfe'>Plan for Execution</p>
                        <div className='plan-for-execution'>
                            <img className='pfe-image' src="https://static.wixstatic.com/media/fec686_c736adb6c3c7485a84d383a4f3471e8a~mv2.png/v1/fill/w_184,h_200,al_c,q_85,usm_0.66_1.00_0.01/creativity.webp" alt="" />
                            <p className='pfe-div'>
                                We take the time to asses and optimize each and every system. We can find a solution for any issue.
                            </p>
                        </div>
                    </div>
                    <div className='e-container'>
                        <p className='e'>Excellence</p>
                        <div className='excellence'>
                            <img className='e-image' src="https://static.wixstatic.com/media/fec686_b47b61dd7f1549c0ad5f0f432b30eac9~mv2.png/v1/fill/w_140,h_200,al_c,q_85,usm_0.66_1.00_0.01/quality-removebg-preview.webp" alt="" />
                            <p className='e-div'>
                                We take pride in producing the highest quality installs, using only the best materials and products.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}
