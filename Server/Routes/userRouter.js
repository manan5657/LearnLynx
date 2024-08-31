const express = require("express");
const router = express.Router();
const userController = require("../Controller/userController.js");
const { greetMail } = require("../mail.js");

router.post("/signup", userController.signUp, greetMail);

router.post("/login", userController.loginIn);
router.get("/logout", userController.logOut);
router.get("/verifyUser", userController.verifyUser);

module.exports = router;
