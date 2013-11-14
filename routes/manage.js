/**
 * Get manage view (only for administrator to use)
 *
 */
exports.login = function(request, result){
    result.render('manage', {title: 'The Power Coder | Log In'});
}

exports.partials = function (req, res) {
    var name = req.params.name;
    res.render('partials/' + name);
};