(function(exports){
    "use strict";
    var mongoose = require('mongoose')
        , Posts = require('../models/post').PostModel;
    exports.blog = function(request, result){
        result.render('blog', {title: 'The Power Coder | The Power Blog'});
    }

    exports.partials = function (req, res) {
        var name = req.params.name;
        res.render('partials/' + name);
    };
}(exports));