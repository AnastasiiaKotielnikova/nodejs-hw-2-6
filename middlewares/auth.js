const jwt = require("jsonwebtoken");
const { User } = require("../models/user");
const { SECRET_JWT } = process.env;

const authorization = async (req, res, next) => {
  const { authorization = "" } = req.headers;
  const [bearer, token] = authorization.split(" ");
  try {
    if (bearer !== "Bearer" || !token) {
      res.status(401).json({ message: "Not authorized" });
    }
    const { id } = jwt.verify(token, SECRET_JWT);
    const user = await User.findById(id);
    if (!user || !user.token) {
      res.status(401).json({ message: "Not authorized" });
    }
    req.user = user;
    next();
  } catch (error) {
    next(error);
  }
};

module.exports = authorization;
