import React, { useState } from 'react';
import { Navigate } from 'react-router';
import ProductCard from '../ProductCard/productcard';
import './productgrid.css';
import CostDashboard from '../CostDashboard/costdashboard';

const ProductGrid = () => {
    
        const names = ['Artichoke', 'Asparagus', 'Avocado', 'Bok Choy', 
        'Broccoli', 'Brussel Sprouts', 'Cabbage', 'Califlower', 'Celery', 'Chilli', 'Clover',
        'Collard Green', 'Corn', 'Cucumber', 'Green Beans', 'Green Pepper', 'Kale', 'Leek', 'Lettuce', 
        'Mint', 'Mustard Green', 'Okra', 'Parsley', 'Peas', 'Plantain', 'Spinach', 'Squash', 
        'Swiss Chard', 'Watercress', 'Zucchini'];
        
        var products = [];
        var startingCost = 1.25;

        for (var i = 0; i < names.length; i++){
            products.push({id: i+1, name: names[i], quantity: 0, price: startingCost});
            startingCost += 0.25;
        }

        const [productList, updateProductList] = useState(products);
        const [totalCost, updateTotalCost] = useState(0.0);
        const [totalQuantity, updateTotalQuantity] = useState(0);
        const [uniqueItems, updateUniqueItems] = useState(0);
    
    const updateIncrementValue = (id) => {
        var prod = productList;
        var cost = totalCost;

        var addUniqueItem = prod[id - 1].quantity == 0 ? 1 : 0;
        var newUniqueValue = uniqueItems;

        var quantity = totalQuantity;
        var newQuantity = quantity + 1;

        prod[id - 1].quantity = prod[id - 1].quantity + 1;
        cost += prod[id - 1].price;

        updateProductList(prod);
        updateTotalCost(cost);
        updateUniqueItems(newUniqueValue + addUniqueItem);
        updateTotalQuantity(newQuantity);
    };

    const updateDecrementValue = (id) => {
        var prod = productList;
        var cost = totalCost;

        prod[id - 1].quantity = prod[id - 1].quantity - 1;
        cost -= prod[id - 1].price;

        var uniqueItemCount = prod[id - 1].quantity == 0 ? 1 : 0;
        var uniqueItemCountValue = uniqueItems;

        var quantity = totalQuantity;
        var newQuantity = quantity - 1;

        updateProductList(prod);
        updateTotalCost(cost);
        updateUniqueItems(uniqueItemCountValue - uniqueItemCount);
        updateTotalQuantity(newQuantity);
    };

    const updateResetValue = (id) => {
        var prod = productList;
        var cost = totalCost;

        cost -= prod[id - 1].quantity * prod[id - 1].price;

        var TotalQuantity = totalQuantity;
        var newTotalQuantity =  TotalQuantity - prod[id - 1].quantity;

        var uniqueQuantity = uniqueItems;
        var newUniqueQuantity = prod[id - 1].quantity == 0 ? 0 : 1;

        uniqueQuantity -= newUniqueQuantity;

        prod[id - 1].quantity = 0;

        updateProductList(prod);
        updateTotalCost(cost);
        updateUniqueItems(uniqueQuantity);
        updateTotalQuantity(newTotalQuantity);
    }

    if (!localStorage.getItem('token')){
        return <Navigate to="/" />
    }
    return (
            <div className="product-grid col-centered">
                <div className="container">
                    <h5 className="inventory-title">Inventory (Maximum five per item)</h5>
                    <div className="row mx-auto">
                        {productList.map(item => 
                        <ProductCard key={item.id} product={item}
                        onIncrement={updateIncrementValue} onReset={updateResetValue} onDecrement={updateDecrementValue} />)}
                    </div> 
                        <CostDashboard product={productList} cost={totalCost} quantity={totalQuantity} uniqueItems={uniqueItems} />
                </div>
            </div>
        );
    }

export default ProductGrid;