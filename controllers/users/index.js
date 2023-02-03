const register = require("./register");
const login = require("./login");
const current = require("./current");
const logout = require("./logout");
const avatar = require("./avatar");
const verifyEmail = require("./verifyEmail");
const resendEmail = require("./resendEmail");

module.exports = {
  register,
  current,
  login,
  logout,
  avatar,
  verifyEmail,
  resendEmail,
};
