(function(exports){
"use strict";
    exports.index = function(req,res,next){
      res.render('index', { title: 'The Power Coder | Home' });
    };

    exports.partials = function (req,res,next) {
        var name = req.params.name;
        res.render('partials/' + name);
    };
}(exports));