import React from 'react';
import './about.css';
import HorizontalRule from '../HorizontalRule/horizontal_rule.jsx';

// Change the horizontal rule later..

const About = () => {
    return (
       <div className="aboutSection">
            <div className="about bg-success">
                <h1 className='about-title'>About Us</h1>
                <p className='about-paragraph'>Hello there! Hope all is well with you and yours. Wondering how to quickly stock up on veggies? With the coronavirus pandemic at its peak, it's important now than ever before to stock up on nutrition.</p>
                <p className='about-paragraph'>Our veggies are locally homegrown and we provide world class delivery right to your front door! It's as easy as 1-2-3! So what you waitin' for... sign up, get clickin, and get MUNCHIN! :)</p>
                
            </div>
            <HorizontalRule />
        </div>
    );
}

export default About;