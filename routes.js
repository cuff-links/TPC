/**
 * Created by jdorlus on 6/12/14.
 */
var passport = require('passport')
    , Account = require('./models/account')
    , index = require('./routes/index')
    , blog = require('./routes/blog')
    , api = require('./routes/api')
    , manage = require('./routes/manage')
    , Projects = require('./models/project')
    , Posts = require('./models/post');

module.exports = function(app) {
    /**************************
     ********ROUTES************
     ***************************/
    app.route("/")
        .get(index.index);
    app.route('/partials/:name')
        .get(index.partials);
    app.route('/login')
        .get(manage.login)
        .post(passport.authenticate('local'), manage.loginPost);
    app.route('/register')
        .get(manage.register)
        .post(manage.registerPost);
    app.route('/blog')
        .get(blog.blog);
    app.route('/managePosts')
        .get(manage.managePosts);
    app.route('/logout')
        .get(manage.logout);


    /*******************************
     ********JSON REST API**********
     *******************************/
    app.route('/api/posts')
        .get(api.posts);
    app.route('/api/projects')
        .get(api.projects);
    app.route('/api/post/:id')
        .get(api.post)
        .put( api.editPost)
        .delete(api.deletePost);
    app.route('/api/post')
        .post(passport.authenticate('localapikey'),api.addPost);
};

