
/**
 * Module dependencies.
 */

var express = require('express')
  , routes = require('./routes')
  , user = require('./routes/user')
  , manage = require('./routes/manage')
  , http = require('http')
  , path = require('path');
var lessMiddleWare = require('less-middleware');
var app = express();


var Mongoose = require('mongoose');
var db = Mongoose.connect('mongodb://localhost/TPCv4');

// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', __dirname + '/views');
app.set('view engine', 'jade');
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.bodyParser());
app.use(express.methodOverride());
app.use(function(req, res, next){
    app.locals.pretty = true;
    next();
})
app.use(app.router);
app.use(lessMiddleWare({
    src: __dirname + '/public',
    compress: true
}));
app.use(express.static(path.join(__dirname, '/public')));

// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}

app.get('/', routes.index);
app.get('/partials/:name', routes.partials);
app.get('/users', user.list);
app.get('/manage', manage.manage);

http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
