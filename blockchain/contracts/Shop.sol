// SPDX-License-Identifier: MIT

pragma solidity > 0.5.0;
pragma experimental ABIEncoderV2;


contract Shop {
    address shopOwner;

    struct Item {
        string name;
        uint totalCostOfItem;
        uint quantity;
    }
    
    Item[] cart;
    mapping(address => Item[]) orderHistory;

    constructor() public {
        shopOwner = msg.sender;
    }   

    function setCart(Item memory item) public payable {
        cart.push(item);
    }

    function getCart() public view returns(Item[] memory) {
        return cart;
    }

    function setOrderHistory(Item[] memory items) public payable {
        for (uint i = 0; i < items.length; i++){
            orderHistory[msg.sender].push(items[i]);
        }
    }

    function getOrderHistory() public view returns(Item[] memory) {
        return orderHistory[msg.sender];
    }
}