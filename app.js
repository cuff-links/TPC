
/********************************
 * MODULE DEPENDENCIES
*********************************/

var express = require('express')
  , favicon = require('serve-favicon')
  , methodOverride = require('method-override')
  , morganlogger = require('morgan')
  , errorHandler = require('errorhandler')
  , http = require('http')
  , cookieParser = require('cookie-parser')
  , session = require('express-session')
  , bodyParser = require('body-parser')
  , config = require('./config')
  , path = require('path');
var sass = require('node-sass');
var compass = require('node-compass');
var app = express();
var log4js= require('log4js');
log4js.setGlobalLogLevel('DEBUG');
log4js.loadAppender('file');
log4js.addAppender(log4js.appenders.file('./logs/ApplicationLog.log'), 'ApplicationLog');
var logger = log4js.getLogger('ApplicationLog');




/***************************************
 * CONFIGURATION FOR ALL ENVIRONMENTS
***************************************/
app.use(express.static(path.join(__dirname, '/public')));
app.use(favicon(__dirname + '/public/favicon.ico'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.set('port', process.env.PORT || 3000);
app.set('views', __dirname + '/views');
app.set('env', 'development');
app.set('view engine', 'jade');

app.use(morganlogger('dev'));
app.use(methodOverride());
app.use(function(req, res, next){
    app.locals.pretty = true;
    next();
});
app.use(cookieParser());
app.use(session({
    secret: 'keyboard cat',
    resave: true,
    saveUninitialized:true
}));
app.use(compass());


/**********************************************
 * CONFIGURATION FOR DEVELOPMENT ENVIRONMENT
**********************************************/
if ('development' == app.get('env')) {
  app.use(errorHandler());
}
//Routes
require('./routes')(app);


/***************************
 * CREATE THE HTTP SERVER
 ***************************/

http.createServer(app).listen(app.get('port'), function(){
  logger.info('Express server listening on port: ' + app.get('port'));
});
