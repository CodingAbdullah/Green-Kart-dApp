import React from 'react';
import Jumbotron from '../Jumbotron/jumbotron';
import About from '../About/about';
import Contact from '../Contact/contact';
import Steps from '../Steps/steps';

const Homepage = () => {

    return (
        <div className="homepage">
            <Jumbotron />
            <About />
            <Steps />
            <Contact />
        </div>
    );
}

export default Homepage;