const express = require( 'express' );
const app = express(); // creates an instance of an express application
const volleyball = require("volleyball");
const nunjucks = require('nunjucks');

const locals = {
  title: 'An Example',
  people: [
    {name: 'Gandalf'},
    {name: 'Frodo'},
    {name: 'Hermione'}
  ]
}

const people = [{name: 'Doris'}, {name: 'Ranjeet'}, {name: 'JS Code CRUSHERS!!'}];

app.set('view engine', 'html'); // have res.render work with html files
app.engine('html', nunjucks.render); // when giving html files to res.render, tell it to use nunjucks
nunjucks.configure('views'); // point nunjucks to the proper directory for templates


nunjucks.configure('views', {noCache: true});
nunjucks.render('index.html', locals, function (err, output) {
    console.log(output);
});

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


//"index" is the file path that res.renders looks for (either an abs path or a path relative to the views folder)
app.get("/", function (req, res) {
  // res.send('Welcome!');
  res.render( 'index', {title: 'Hall of Fame', people: people} );
})
