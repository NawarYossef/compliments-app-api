require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const passport = require("passport");
const morgan = require("morgan");
const cors = require("cors");

mongoose.Promise = global.Promise;

const { PORT, DATABASE_URL, CLIENT_ORIGIN } = require("./config");
const app = express();

app.get("/", (req, res) => {
  res.json({status: "ok"})
})

// LOGGING
app.use(morgan("common"));

// CORS
app.use(
  cors({
    origin: CLIENT_ORIGIN
  })
);

app.listen(PORT, () => {
  console.log(`Your app is listening on port ${PORT}`)
})

