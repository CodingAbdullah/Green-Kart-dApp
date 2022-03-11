import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserPlus } from '@fortawesome/free-solid-svg-icons';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { faBoxOpen } from '@fortawesome/free-solid-svg-icons'
import './steps.css'
import HorizontalRule from '../HorizontalRule/horizontal_rule.jsx';

const Steps = () => {

    return (
        <div className="stepbox">
            <div className="container">
                <div className="row">
                    <div className="col-sm">
                        <div className="card bg-success">
                            <div className="card-body">
                                <FontAwesomeIcon className="user-sign-up-icon" width="100px" height="100px" icon={faUserPlus}  size='5x' />
                                <h5 className="card-title">Sign Up</h5>
                                <p className="card-text">New? Don't worry we got you covered. Sign up is quick and easy. We ask of no charge for membership. It's free!</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm">
                        <div className="card bg-success">
                            <div className="card-body">
                                <FontAwesomeIcon className="shop-icon" width="100px" height="100px" icon={ faShoppingCart }  size='5x' />
                                <h5 className="card-title">Shop</h5>
                                <p className="card-text">Surf our product pricing catalog and pick as many greenies as you'd like! Simple, quick and easy!</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm">
                        <div className="card bg-success">
                            <div className="card-body">
                                <FontAwesomeIcon className="delivery-icon" width="100px" height="100px" icon={ faBoxOpen } size='5x' />
                                <h5 className="card-title">Delivery</h5>
                                <p className="card-text">We offer delivery of your goods, so no need to come in-house. Delivery is also free for groceries past $100!</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <HorizontalRule />
        </div>
    )
}

export default Steps;