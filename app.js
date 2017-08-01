const express = require( 'express' );
const app = express(); // creates an instance of an express application
const volleyball = require("volleyball");
const nunjucks = require('nunjucks');
const routes = require('./routes');

app.use(express.static('public'));

const locals = {
  title: 'An Example',
  people: [
    {name: 'Gandalf', location: 'middle earth'},
    {name: 'Frodo', location: 'the shire'},
    {name: 'Hermione', location: 'hogwarts'}
  ],
  // location: [
  //   {name: 'middle earth'},
  //   {name: 'the shire'},
  //   {name: 'hogwarts'}
  // ]
}

//const people = [{name: 'Doris'}, {name: 'Ranjeet'}, {name: 'JS Code CRUSHERS!!'}];

app.set('view engine', 'html'); // have res.render work with html files
app.engine('html', nunjucks.render); // when giving html files to res.render, tell it to use nunjucks
nunjucks.configure('views'); // point nunjucks to the proper directory for templates

//NOTE: set Nunjucks to not cache requests
nunjucks.configure('views', {noCache: true});
nunjucks.render('index.html', locals, function (err, output) {
    console.log(output);
});

//NOTE: Our server listens on this port
app.listen(3000, function () {
  console.log('server listening');
})

//custom logging
// app.use("/special/", function (req, res, next) {
//   console.log('You have reached the special area');
//   //next allows this to move to the next set of commands below
//   next();
// })

//NOTE: Logging (fancy logging) using Volleyball
app.use(volleyball);

//NOTE: Custom getter for the /news folder
// app.get("/news", function (req, res) {
//   res.send('Welcome to the news feed!');
// })


//"index" is the file path that res.renders looks for (either an abs path or a path relative to the views folder)
// app.get("/", function (req, res) {
//   //res.send('Welcome!');
//   //res.render( 'index', {title: 'Hall of Fame', people: people} );
//   res.render( 'index', {title: locals.title, people: locals.people} );
// })

app.use('/', routes);
