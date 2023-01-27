const express = require("express");
const router = express.Router();
const userCtrl = require("../../controllers/users");
const authorization = require("../../middlewares/auth");

router.post("/signup", userCtrl.register);
router.post("/login", userCtrl.login);
router.get("/logout", authorization, userCtrl.logout);
router.get("/current", authorization, userCtrl.current);

module.exports = router;
