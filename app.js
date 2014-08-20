
/********************************
 * MODULE DEPENDENCIES
*********************************/

var express = require('express')
  , favicon = require('serve-favicon')
  , methodOverride = require('method-override')
  , morganlogger = require('morgan')
  , errorHandler = require('errorhandler')
  , Account = require('./models/account')
  , http = require('http')
  , mongoose = require('mongoose')
  , cookieParser = require('cookie-parser')
  , session = require('express-session')
  , bodyParser = require('body-parser')
  , config = require('./config')
  , path = require('path');
var sass = require('node-sass');
var compass = require('node-compass');
var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;
var LocalAPIStrategy = require('passport-localapikey').Strategy;
var app = express();
var log4js= require('log4js');
log4js.loadAppender('file');
log4js.addAppender(log4js.appenders.file('logs/ApplicationLog.log'), 'ApplicationLog');
var logger = log4js.getLogger('ApplicationLog');




/***************************************
 * CONFIGURATION FOR ALL ENVIRONMENTS
***************************************/
app.set('port', process.env.PORT || 3000);
app.set('views', __dirname + '/views');
app.set('env', 'development');
app.set('view engine', 'jade');
app.use(favicon(__dirname + '/public/favicon.ico'));
app.use(morganlogger('dev'));
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
passport.use(new LocalAPIStrategy(
    function(apikey, done){
        Account.findOne({ apikey : apikey}, function(err, user){
           if(err) {return done(null, false)}
            return done(null, user);
        });
    }
));

/*******************************************
 ***********CONNECT TO MONGODB**************
 *******************************************/
logger.info('Connected to MongoDB - Host: ' + config.get('mongoose:uri') + ' ; ' + 'Database:' + config.get('mongoose:database') + ' : ' + 'Port: ' +config.get('port'));
mongoose.connect(config.get('mongoose:uri'), config.get('mongoose:database'), config.get('port'));

/***************************
 * CREATE THE HTTP SERVER
 ***************************/

http.createServer(app).listen(app.get('port'), function(){
  logger.info('Express server listening on port: ' + app.get('port'));
});
