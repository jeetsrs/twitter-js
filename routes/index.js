// app.use("/special/", function (req, res, next) {
//   console.log('You have reached the special area');
//   //next allows this to move to the next set of commands below
//   next();
// })

// app.get("/news", function (req, res) {
//   res.send('Welcome to the news feed!');
// })

// app.get("/", function (req, res) {
//   //res.send('Welcome!');
//   //res.render( 'index', {title: 'Hall of Fame', people: people} );
//   res.render( 'index', {title: locals.title, people: locals.people} );
// })

const express = require('express');
const router = express.Router();
// could use one line instead: const router = require('express').Router();
const tweetBank = require('../tweetBank');

//use this to handle all static routes (in addition to the handlers below)
router.use('/', express.static('public'));

router.get('/', function (req, res) {
  let tweets = tweetBank.list();
  res.render( 'index', { tweets: tweets } );
});

router.get('/users/:name', function (req, res) {
  //console.log(tweetBank.find({'name': req.params.name}));
  let tweets = tweetBank.find({'name': req.params.name});
  res.render( 'index', { tweets: tweets} );
});

router.get('/tweets/:id', function (req, res) {
  //console.log(tweetBank.find({'name': req.params.name}));
  let tweets = tweetBank.find({'id': Number(req.params.id)});
  console.log(tweets);
  res.render( 'index', { tweets: tweets} );
});

router.get('/news', function (req, res) {
  res.send('Welcome to the news feed!');
});

module.exports = router;
