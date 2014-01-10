(function(exports){
"use strict";
var mongoose = require('mongoose')
    , Projects = mongoose.model('Projects');

    exports.index = function(req, res){
      res.render('index', { title: 'The Power Coder | Home' });
    };

    exports.partials = function (req, res) {
        var name = req.params.name;
        res.render('partials/' + name);
    };
}(exports));