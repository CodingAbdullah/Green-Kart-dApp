const express = require("express");
const userController = require("../controller/UserController");
const router = express.Router();
// const auth = require("../middleware/auth");

// router.get("/auth", auth, userController.getAuthorization);
router.post("/loginForm", userController.loginFormValidation);
router.post("/signUpForm", userController.signUpFormValidation);

module.exports = router;