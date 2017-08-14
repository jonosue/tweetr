require('dotenv').config();
"use strict";

// Basic express and MongoDB setup:

// For use with Heroku:
// const PORT          = process.env.PORT || 8080;
const PORT          = 8080;
const express       = require("express");
const bodyParser    = require("body-parser");
const app           = express();
const MongoClient   = require("mongodb").MongoClient;
// For use with Heroku:
// const MONGODB_URI   = process.env.MONGODB_URI;
const MONGODB_URI   = "mongodb://localhost:27017/tweeter";

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

// I have wrapped all the various "requires" and express() methods inside the MongoClient function:

MongoClient.connect(MONGODB_URI, (err, db) => {
  if (err) {
    console.error(`Failed to connect: ${MONGODB_URI}`);
    throw err;
  }
  const DataHelpers = require("./lib/data-helpers.js")(db);
  const tweetsRoutes = require("./routes/tweets")(DataHelpers);
  app.use("/tweets", tweetsRoutes);
  app.listen(PORT, () => {
    console.log("Example app listening on port " + PORT);
  });
});
