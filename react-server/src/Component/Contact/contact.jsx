import React from 'react';
import './contact.css';
import HorizontalRule from '../HorizontalRule/horizontal_rule.jsx';

const Contact = () => {

    return (
        <div className="contactSection">
            <div className="contact bg-success">
                <h1 className='contact-title'>Contact</h1>
                <p className='contact-paragraph'>Want to get in touch? Contact us through email at: <b className='paragraph-bold'>greenkart@greenkart.com</b>. 
                To contact by mobile or phone, we can be reached at this number: <b className='paragraph-bold'>111-111-1111</b>. Please note long distance charges apply and we only deliver in North America.</p>
            </div>
            <HorizontalRule />
        </div>
    )
}

export default Contact;