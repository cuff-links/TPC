/**
 * Get manage view (only for administrator to use)
 *
 */

var Account = require('../models/account'),
    passport = require('passport');

exports.partials = function (req, res) {
    var name = req.params.name;
    res.render('partials/' + name);
};

exports.login = function(req,res){
    res.render('login', {title: 'The Power Coder | Log In', user: req.user});
}

exports.register = function(req,res){
    if(req.isAuthenticated()){
        res.render('register', {});
    }
    else{
        res.redirect('/login');
    }
}

exports.loginPost = function(req, res) {
    res.redirect('/managePosts');
};

exports.managePosts = function(req,res){
    if(req.isAuthenticated()){
        res.render('managePosts');
    }
    else{
        res.redirect('/login');
    }
}

exports.registerPost = function(req, res) {
    Account.register(new Account({ username: req.body.username }), req.body.password, function (err) {
        if (err) {
            return res.render(err.message);
        }
        passport.authenticate('local')(req, res, function () {
            res.redirect('/login');
        });
    });
};

exports.logout = function(req,res){
    req.logOut();
    res.redirect('/login');
}
