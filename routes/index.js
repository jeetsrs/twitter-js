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


// could use one line instead: const router = require('express').Router();
const express = require('express');
const router = express.Router();

const tweetBank = require('../tweetBank');
//use this to handle all static routes (in addition to the handlers below)
const bodyParser = require('body-parser');

// create application/json parser
var jsonParser = bodyParser.json();
// create application/x-www-form-urlencoded parser
var urlencodedParser = bodyParser.urlencoded({
  extended: false
})
// parse application/x-www-form-urlencoded
router.use(bodyParser.urlencoded({
  extended: false
}))


router.get('/users/:name', function (req, res) {
  //console.log(tweetBank.find({'name': req.params.name}));
  let tweets = tweetBank.find({
    'name': req.params.name
  });
  res.render('index', {
    tweets: tweets,
    showForm: true,
    showName: true,
    name: req.params.name
  });

});

router.get('/tweets/:id', function (req, res) {
  //console.log(tweetBank.find({'name': req.params.name}));
  let tweets = tweetBank.find({
    'id': Number(req.params.id)
  });
  console.log(tweets);
  res.render('index', {
    tweets: tweets,
    showForm: true,
    showName: true
  });
});


router.post('/tweets', function (req, res) {
  var name = req.body.name;
  var text = req.body.text;
  tweetBank.add(name, text);
  res.redirect('/');
});

router.get('/news', function (req, res) {
  res.send('Welcome to the news feed!');
});

router.use('/', express.static('public'));

router.get('/', function (req, res) {
  let tweets = tweetBank.list();
  res.render('index', {
    tweets: tweets,
    showForm: true
  });
});

router.get('/*', function (req, res) {
  res.send('<br><br><br><center>You mis-typed - this server expects perfection <br><br><br><br> <H1>404!</H1><br><br><br> Please go learn to type :)</center>');
});


module.exports = router;
