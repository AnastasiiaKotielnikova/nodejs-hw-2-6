const express = require("express");
const router = express.Router();
const userCtrl = require("../../controllers/users");
const authorization = require("../../middlewares/auth");
const upload = require("../../middlewares/uploadImg");

router.post("/signup", userCtrl.register);
router.post("/login", userCtrl.login);
router.get("/logout", authorization, userCtrl.logout);
router.get("/current", authorization, userCtrl.current);
router.patch(
  "/avatars",
  authorization,
  upload.single("avatar"),
  userCtrl.avatar
);
router.get("/verify/:verificationToken", userCtrl.verifyEmail);
router.post("/verify", userCtrl.resendEmail);

module.exports = router;
