import React from 'react'
import '../ProductCard/productcard.css';

const ProductCard = (props) => {
    const name = props.product.name.toLowerCase().replace(' ', '_');
    
    return (
        <div className="product-card">
            <div className="card-deck">
                <div className="card">
                    <h5 className="card-title">{props.product.name}</h5>
                    <div>
                        <div>
                            <h6 className="price-title">Price: ${props.product.price}/Item</h6>
                        </div>
                        <img className="img-vegetable" src={require(`../../assets/greenies/${name}.jpg`)} width="100" height="100" />
                    </div>
                    <div>
                        <button className= "btn btn-primary btn-sm incrementButton" disabled={props.product.quantity < 5 ? false : true} onClick={() => props.onIncrement(props.product.id)}>+</button>
                        <label className="quantity-label">{props.product.quantity}</label>
                        <button className="btn btn-danger btn-sm decrementButton" disabled={props.product.quantity == 0 ? true : false} onClick={() => props.onDecrement(props.product.id)}>-</button>
                    </div>
                    <div>
                        <button className= "btn btn-warning btn-sm resetButton" onClick={() => props.onReset(props.product.id)}>Reset</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProductCard;