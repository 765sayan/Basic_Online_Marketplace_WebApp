const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const mongoose = require("mongoose");

require("dotenv").config();

const app = express();
app.use(cors());
app.use(express.json());

app.use(helmet());

const logRequests = async (req, res, next) => {
  console.log(`${req.method}`);
  next();
}  

app.use(logRequests());

app.use("/api", require("./routes/api"));

mongoose
  .connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("MongoDB Connected");
  })
  .catch((err) => {
    console.log(err);
  });

app.listen(process.env.PORT, () => {
  console.log("Server Listening");
  console.log(process.env.PORT);
});
