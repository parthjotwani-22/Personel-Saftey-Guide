const jwt = require("jsonwebtoken");
const mongoose = require("mongoose");
const User = mongoose.model("User");
const { jwtkey } = require("../keys");

module.exports = (req, res, next) => {
  const { authorization } = req.headers;
  if (!authorization) {
    return res.status(401).send("User not found");
  }
  const token = authorization.replace("Bearer ", "");
  jwt.verify(token, jwtkey, async (err, payload) => {
    if (err) {
      return res.status(401).send("incorrect Token");
    }
    const { userId } = payload;
    const user = await User.findById(payload.userId);
    console.log(payload);
    req.user = user;
    next();
  });
};
