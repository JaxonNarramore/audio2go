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
        <div>
            <h3>Request A Same Day Quote</h3>
            <form className="quote-form" onSubmit={sendEmail}>
                <label>First Name</label>
                <input type="text" name="firstName" />
                <label>Last Name</label>
                <input type="text" name="lastName" />
                <label>Email</label>
                <input type="email" name="email" />
                <label>Vehicle</label>
                <input type="text" name="vehicle" />
                <label>Location</label>
                <input type="text" name="location" />
                <label>Phone Number</label>
                <input type="number" name="phone" />
                <label>Description Of Work</label>
                <textarea name="description" />
                <input type="submit" value="Send" />
            </form>
        </div>
    )
}
