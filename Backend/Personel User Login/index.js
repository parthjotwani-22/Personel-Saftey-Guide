const Express = require("express");
const app = Express();
const PORT = 3000;
const bodyParser = require("body-parser");
const { mongoUrl } = require("./keys");
const mongoose = require("mongoose");
const twilio = require("twilio");
require("./model/User");

const requireToken = require("./middleware/requireToken");
const authRoute = require("./router/authRoute");

app.use(bodyParser.json());
app.use(authRoute);

mongoose.connect(mongoUrl, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

mongoose.connection.on("connected", () => {
  console.log("Connected to mongo");
});

mongoose.connection.on("error", (err) => {
  console.log("Some error Ocurred", err);
});

app.get("/", requireToken, (req, res) => {
  //changed / to login
  res.send("Your name is" + req.user);
});

app.listen(PORT, () => {
  console.log("Server Running" + PORT);
});
