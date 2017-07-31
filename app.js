const express = require( 'express' );
const app = express(); // creates an instance of an express application
const volleyball = require("volleyball");


app.listen(3000, function () {
  console.log('server listening');
})

//custom logging
app.use("/special/", function (req, res, next) {
  console.log('You have reached the special area');
  //next allows this to move to the next set of commands below
  next();
})

//fancy logging
app.use(volleyball);

app.get("/news", function (req, res) {
  res.send('Welcome to the news feed!');
})

app.get("/", function (req, res) {
  res.send('Welcome!');
})
