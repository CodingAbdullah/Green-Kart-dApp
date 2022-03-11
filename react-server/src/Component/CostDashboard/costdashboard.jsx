import React from 'react';
import '../CostDashboard/costdashboard.css';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router';
import { shoppingAction } from '../../redux/action/shoppingAction';

const CostDashboard = (props) => {

    const { product, cost, quantity, uniqueItems } = props;
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const costHandler = () => {
        dispatch(shoppingAction(product.filter(product => product.quantity > 0)));
        navigate("/checkout");
    }

    return (
        <div className="cost-dash-board bg-success">
            <div className="container">
                <label className="cost-label">Total Cost: ${cost}</label><br />
                <label className="cost-label">Total Items: {quantity}</label><br />
                <label className="cost-label"> Total Unique Items: {uniqueItems}</label><br />
                <Link to="/checkout">
                    <button className="btn process-order btn-primary" onClick={ costHandler } disabled={ quantity == 0 ? true : false }>Process Order</button>
                </Link>
            </div>
        </div>
    );
}

export default CostDashboard;