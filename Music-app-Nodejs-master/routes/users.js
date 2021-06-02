var express = require('express');
var router = express.Router();
var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;
var bodyParser = require('body-parser');
var multer = require('multer');
var upload = multer({dest: 'public/uploads' });
var bundle = require('bundle-js');

var User = require('../models/user');
var urlencodedParser = bodyParser.urlencoded({ extended: false })

//get users who want to login/register/playlist for user
router.get('/register', function(req, res){
    res.render('register');
});

router.get('/contact', function(req, res){
    res.render('contact');
});

router.get('/login', function(req, res){
    res.render('login');
});

router.get('/playlist', function(req, res){
    res.render('playlist');
});

router.get('/about', function(req, res){
    res.render('about');
});


// Register User based on his identity
router.post('/register', function(req, res){
	var name = req.body.name;
	var email = req.body.email;
	var username = req.body.username;
	var password = req.body.password;
	var password2 = req.body.password2;

  //validation
  req.checkBody('name','Name is required').notEmpty();
  req.checkBody('email', 'Email is required').notEmpty();
  req.checkBody('email', 'Email is not valid').isEmail();
  req.checkBody('username', 'Username is required').notEmpty();
  req.checkBody('password', 'Password is required').notEmpty();
  req.checkBody('password2', 'Passwords do not match').equals(req.body.password);

  var errors = req.validationErrors();

  if(errors) {
    res.render('register',{
      errors:errors
    });
  } else {
      var newUser = new User({
        name: name,
        email: email,
        username: username,
        password: password
      });

      User.createUser(newUser, function(err, user){
        if(err) throw err;
        console.log(user);
      });

      req.flash('success_msg', 'Thank You ! Login to Continue');

      res.redirect('/users/login');
  }
});


passport.use(new LocalStrategy(
  function(username, password, done) {
    User.getUserByUsername(username,function(err, user){
			if(err) throw err;
			if(!user){
				return done(null, false, {message: 'Unknown User'});
			}
			User.comparePassword(password, user.password, function(err, isMatch){
				if(err) throw err;
				if(isMatch){
					return done(null, user);
				} else {
					return done(null, false, {message: 'Invalid Password'});
				}
			});
		});
  }));


//serialize and deserialize user
passport.serializeUser(function(user, done) {
  done(null, user.id);
});

passport.deserializeUser(function(id, done) {
  User.getUserById(id, function(err, user) {
    done(err, user);
  });
});

router.post('/login', urlencodedParser,
  passport.authenticate('local',{successRedirect:'/users/playlist',failureRedirect:'/users/login',failureFlash: true}),
  function(req, res) {
		 res.redirect('/users/playlist', {data: req.body});
  });

/*playlist*/




/*contact form*/

router.post("/contact", function(req, res){

  var api_key = 'key-c4063df589b4796291d4eaa07c5c7310';
  var domain = 'sandboxebc3a13006c745a1bce7d9caf4340201.mailgun.org';
  var mailgun = require('mailgun-js')({apiKey: api_key, domain: domain});

  var data = {
    from: 'Music App User <postmaster@sandboxebc3a13006c745a1bce7d9caf4340201.mailgun.org>',
    to: 'dutthunk.143@gmail.com',
    subject: req.body.name1,
    text: req.body.message
  };

  mailgun.messages().send(data, function (error, body) {
    console.log(body);

    var errors = req.validationErrors();

    if(errors) {
      res.render('contact',{
        errors:errors
      });
    } else {

      req.flash('success_msg', 'Thank You ! Your message was sent');

      res.redirect('/users/contact');

    }

  });

  });

  /*contact form ends*/

  /*playlist post*/

  router.post('/playlist', (req, res) => {
    var song = req.body.song;

    req.checkBody('song','Artist is required').notEmpty();

      var errors = req.validationErrors();

      if(errors) {
        res.render('playlist',{
          errors:errors
        });
      } else {
        res.send(

        )

      }


  });

/*play list ends*/


router.get('/logout', function(req, res){
  req.logout();

  req.flash('success_msg', 'You are Logged out');

  res.redirect('/');
});



module.exports = router;
