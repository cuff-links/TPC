(function(exports){
    "use strict";
    exports.blog = function(req, res){
        res.redirect('http://www.thepowercoder.com/blog')
    }

    exports.partials = function (req, res) {
        var name = req.params.name;
        res.render('partials/' + name);
    };
}(exports));