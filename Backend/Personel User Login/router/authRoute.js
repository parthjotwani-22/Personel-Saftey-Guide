const express = require("express");
const mongoose = require("mongoose");
const router = express.Router();
const jwt = require("jsonwebtoken");
const User = mongoose.model("User");
const { jwtkey } = require("../keys");
const twilio = require("twilio");

router.post("/user", async (req, res) => {
  const { id, uname, phone, email, password } = req.body;
  try {
    const user = new User({
      id,
      uname,
      phone,
      email,
      password,
    });
    await user.save();
    const token = jwt.sign({ userId: user._id }, jwtkey);
    res.send({ token: token });
  } catch (e) {
    res.status(422).send(e.message);
  }
});

router.post("/message", async (req, res) => {
  const accountSid = "ACe831e63bc8ac2f83acd179be3d732086";
  const authToken = "efefd86eb0dafa345a8d126614d11387";
  const client = require("twilio")(accountSid, authToken);
  const data = req.body;
  //data.map((x) => {

  data.forEach(async (number) => {
    await client.messages
      .create({
        body: "Help !!!!!!!!!!!!!!!!!!!",
        from: "+13156934098",
        to: `${number.phone}`,
      })
      .then((message) => console.log(message.sid))
      .done();
  });

  //});
});
module.exports = router;
