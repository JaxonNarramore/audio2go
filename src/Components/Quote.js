import React from 'react'
import emailjs from 'emailjs-com';
import './Quote.css'

export default function Quote() {

    function sendEmail(e) {
        e.preventDefault();

        emailjs.sendForm('service_jehhnpf', 'template_cfojvtk', e.target, 'user_JjjokygneXUjqq7WuOENs')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
        e.target.reset()
    }

    return (
        <div className='quote-div'>
            <h3 className='rasdq'>Request A Same Day Quote</h3>
            <form className="quote-form" onSubmit={sendEmail}>
                <div class="firstlast">
                    <div className='input-div'>
                        <label>First Name</label>
                        <input className='input' type="text" name="firstName" />
                    </div>
                    <div className='input-div'>
                        <label>Last Name</label>
                        <input className='input' type="text" name="lastName" />
                    </div>
                </div>
                <div className='input-div'>
                    <label>Email</label>
                    <input id='email' className='input' type="email" name="email" />
                </div>
                <div class="vehiclelocation">
                    <div className='input-div'>
                        <label>Vehicle</label>
                        <input className='input' type="text" name="vehicle" />
                    </div>
                    <div className='input-div'>
                        <label>Location</label>
                        <input className='input' type="text" name="location" />
                    </div>
                </div>
                <div className='input-div'>
                    <label>Phone Number</label>
                    <input id='phone' className='input' type="number" name="phone" />
                </div>
                <div className='input-div'>
                    <label>Description Of Work</label>
                    <textarea id='description' className='input' name="description" />
                </div>
                <input className='btn btn-outline-primary' type="submit" value="Send" />
            </form>
        </div>
    )
}
