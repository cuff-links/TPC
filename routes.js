/**
 * Created by jdorlus on 6/12/14.
 */
var index = require('./routes/index')
    , blog = require('./routes/blog')
    , api = require('./routes/api')
    , manage = require('./routes/manage')
    , Projects = require('./models/project')
    , authController = require('./auth');

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
        .post(authController.isLoggedIn, manage.loginPost);
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

    //Post API
    app.route('/api/posts')
        .get(api.posts);
    app.route('/api/post/:id')
        .get(api.post)
        .put(authController.isAuthenticated, api.editPost)
        .delete(authController.isAuthenticated,api.deletePost);
    app.route('/api/posts/tag/:name')
        .get(api.postsByTag);
    app.route('/api/post')
        .post(authController.isAuthenticated, api.addPost);

    //Project API
    app.route('/api/projects')
        .get(api.projects);

    //RecentProject API
    app.route('/api/recentProjects')
        .get(api.recentProjects);
    //User API
    app.route('/api/users')
        .post(api.postUsers);
//        .get(authController.isAuthenticated, api.getUsers);

};

