
/**
 * Module dependencies.
 */

var express = require('express'),
 routes = require('./routes'),
 programs = require('./routes/programs');
 http = require('http'),
 path = require('path');

var app = express();

// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', __dirname + '/views');
app.set('view engine', 'jade');
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.bodyParser());
app.use(express.methodOverride());
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));

// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}
app.all('/', routes.index);
app.all('/programs', programs.index);
app.all('/programs/stringmatch', programs.stringmatch);

http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});

function jsonData(options){
    return function(req, res){
        var http = require('http');
        var dat;
        http.get(options, function(res) {
            var data = '';
            res.on('data', function (chunk){
                data += chunk;
            });
            res.on('end',function(){
                var obj = JSON.parse(data);
                dat = obj;
            })
        }).on('close', function(){
            res.send(dat);
        }).on('error', function(e) {
            console.log('ERROR: ' + e.message);
        });
    }
}
