import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router';
import './orderhistory.css';

const OrderHistory = () =>  {

    const navigate = useNavigate();
    const [orders, updateOrderHistory] = useState({
        orderHistory: []
    });

    useEffect(() => {
        const options = {
            method: 'get',
            mode: 'cors',
            'content-type' : 'application/json',
            headers : {
                'Authorization': 'Bearer ' + localStorage.getItem('token')
            }
        };

        fetch("http://localhost:5050/orderHistory", options)
        .then(response => response.json())
        .then(res => {
            updateOrderHistory(prevState => {
                return {
                    ...prevState,
                    orderHistory: res.orders
                }
            });
        })
        .catch(err => console.log(err));
    }, []);

    const homeHandler = () => {
        navigate("/");
    }

    return (
        <div>
            <table class="table large-table">
                <thead>
                    <tr>
                        <th>Date</th>
                        <th>Order Description</th>
                        <th>Total Cost</th>
                    </tr>
                </thead>
                { orders.orderHistory[0] && orders.orderHistory.map(item => {
                    let day = item.date.split("T")[0];
                    let time = item.date.split("T")[1].split(":")

                    return (
                        <tr>
                            <td>{ day + " " + time[0] + ":" + time[1] + "-UTC" }</td>
                            <table class="table inner-table">
                                <thead>
                                    <tr>
                                        <th>Name</th>
                                        <th>Quantity</th>
                                        <th>Price/Item</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        Object.keys(item.order_description).map(food => {
                                            let price = "$" + item.order_description[food].price
                                            return (
                                                <tr>
                                                    <td>{item.order_description[food].name}</td>
                                                    <td>{item.order_description[food].quantity}</td>
                                                    <td>{price}</td>
                                                </tr>
                                            )
                                        })
                                    }
                                </tbody>
                            </table>
                            <td>{"$" + item.total_cost}</td>
                        </tr>
                    )}
                )}
            </table>
            <button class="btn btn-success" onClick={homeHandler}>Go Home</button>
        </div>
    )
}

export default OrderHistory;