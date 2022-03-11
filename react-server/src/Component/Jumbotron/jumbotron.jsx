import React from 'react';
import './jumbotron.css';
import homePic from '../../assets/greenies/spinach.jpg';

const Jumbotron = () => {

    return (
        <div className="jumbo">
            <h1 className="cart-title">Welcome to <i className="italicK">G</i>reen <i className="italicK">K</i>art</h1>
            <p className="cart-paragraph">Your One-Stop Shop for all your Greenies!!</p>
            <img className='garden-image' src={homePic} width='200' height='200'/><br />
        </div>
    )
}

export default Jumbotron;