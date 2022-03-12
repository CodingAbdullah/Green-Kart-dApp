import React from 'react';
import logo from '../../../src/assets/images/logo.png';
import './footer.css';

const Footer = () => {

    return (
        <div className="footerSection">
            <div className="footer">
                <img src={logo} width="90" height="150" />
                <p className="footer-paragraph"><b>© Copyright { new Date().getFullYear() }. All Rights Reserved</b></p>
            </div>
        </div>
    )
}

export default Footer;