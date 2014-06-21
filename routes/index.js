(function(exports){
"use strict";
var mongoose = require('mongoose')
    , project = require('../models/project')
    , Projects = mongoose.model('Projects', project);

    exports.index = function(req,res,next){
      res.render('index', { title: 'The Power Coder | Home' });
    };

    exports.partials = function (req,res,next) {
        var name = req.params.name;
        res.render('partials/' + name);
    };
}(exports));