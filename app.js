
/********************************
 * MODULE DEPENDENCIES
*********************************/

var express = require('express')
  , favicon = require('serve-favicon')
  , methodOverride = require('method-override')
  , logger = require('morgan')
  , errorHandler = require('errorhandler')
  , Account = require('./models/account')
  , http = require('http')
  , mongoose = require('mongoose')
  , cookieParser = require('cookie-parser')
  , session = require('express-session')
  , bodyParser = require('body-parser')
  , path = require('path');
var lessMiddleWare = require('less-middleware');
var sass = require('node-sass');
var compass = require('node-compass');
var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;
var app = express();




/***************************************
 * CONFIGURATION FOR ALL ENVIRONMENTS
***************************************/
app.set('port', process.env.PORT || 3000);
app.set('views', __dirname + '/views');
app.set('env', 'development');
app.set('view engine', 'jade');
app.use(favicon(__dirname + '/public/favicon.ico'));
app.use(logger('dev'));
app.use(bodyParser());
app.use(methodOverride());
app.use(function(req, res, next){
    app.locals.pretty = true;
    next();
});
app.use(cookieParser());
app.use(session({secret: 'keyboard cat'}));
app.use(passport.initialize());
app.use(passport.session());
//app.use(lessMiddleWare(__dirname + '/public'));
app.use(compass());
app.use(express.static(path.join(__dirname, '/public')));

/**********************************************
 * CONFIGURATION FOR DEVELOPMENT ENVIRONMENT
**********************************************/
if ('development' == app.get('env')) {
  app.use(errorHandler());
}
//Routes
require('./routes')(app);


/********************************************
 ************PASSPORT CONFIG ****************
 ********************************************/
passport.use('local',new LocalStrategy(Account.authenticate()));
passport.serializeUser(Account.serializeUser());
passport.deserializeUser(Account.deserializeUser());

/*******************************************
 ***********CONNECT TO MONGODB**************
 *******************************************/
mongoose.connect("127.0.0.1", "TPCv4", 27017);

/***************************
 * CREATE THE HTTP SERVER
 ***************************/

http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port: ' + app.get('port'));
});
