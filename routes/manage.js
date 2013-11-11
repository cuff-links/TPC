/**
 * Get manage view (only for administrator to use)
 *
 */
exports.manage = function(request, result){
    result.render('manage', {title: 'The Power Coder | Manage'});
}