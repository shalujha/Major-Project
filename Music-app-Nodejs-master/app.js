var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var exphbs = require('express-handlebars');
var expressValidator = require('express-validator');
var flash = require('connect-flash');
var session = require('express-session');
var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;
var mongo = require('mongodb');
var mongoose = require('mongoose');
var multer = require('multer');
var fs = require('fs')
var logger = require("morgan");
var nodemailer = require('nodemailer');
var mg = require('nodemailer-mailgun-transport');
var nconf = require('nconf');
var auth = require('./package.json');
var bundle = require('bundle-js');


mongoose.connect('mongodb://dutt:musictest@ds161262.mlab.com:61262/music-app');
mongoose.Promise = require('bluebird');
mongoose.Promise = Promise;
var db = mongoose.connection;

var routes = require('./routes/index');
var users = require('./routes/users');

// Init App
var app = express();

//View Engine
app.set('views',path.join(__dirname, 'views'));
app.engine('handlebars', exphbs({defaultLayout:'layout'}));
app.set('view engine', 'handlebars');

//Bodyparser Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(cookieParser());

//Public folder css,img,jquery file holder
app.use(express.static(path.join(__dirname, 'public')));

//Express session
app.use(session({
    secret: 'secret',
    saveUninitialized: true,
    resave: true
}));

//Passport initialize
app.use(passport.initialize());
app.use(passport.session());


// In this example, the formParam value is going to get morphed into form body format useful for printing.
// taken from github
app.use(expressValidator({
  errorFormatter: function(param, msg, value) {
      var namespace = param.split('.')
      , root    = namespace.shift()
      , formParam = root;

    while(namespace.length) {
      formParam += '[' + namespace.shift() + ']';
    }
    return {
      param : formParam,
      msg   : msg,
      value : value
    };
  }
}));

// connect to flash for messages
app.use(flash());

//Global vars for error messages
app.use(function(req, res, next){
    res.locals.success_msg = req.flash('success_msg');
    res.locals.error_msg = req.flash('error_msg');
    res.locals.error = req.flash('error');
    res.locals.user = req.user || null;
    next();
});



//routing
app.use('/',routes);
app.use('/users',users);

//set port for connection
app.set('port', (process.env.PORT || 3300));

app.listen(app.get('port'), function(){
	console.log('Server started on port '+app.get('port'));
});
