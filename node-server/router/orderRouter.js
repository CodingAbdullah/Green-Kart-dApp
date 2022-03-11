const express = require("express");
const orderController = require("../controller/OrderController");
const router = express.Router();
const middleware = require('../middleware/auth');

router.get("/orderHistory", middleware.auth, orderController.getOrderHistory);
router.post("/orderCheckout", middleware.auth, orderController.orderCheckout);

module.exports = router;