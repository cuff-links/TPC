/**
 * Created by jdorlus on 6/12/14.
 */
var index = require('./routes/index')
    , api = require('./routes/api')
    , blog = require('./routes/blog')
    , Projects = require('./models/project');

module.exports = function(app) {
    /**************************
     ********ROUTES************
     ***************************/
    app.route("/")
        .get(index.index);
    app.route('/partials/:name')
        .get(index.partials);
    app.route('/blog')
        .get(blog.blog);


    /*******************************
     ********JSON REST API**********
     *******************************/
    //Project API
    app.route('/api/projects')
        .get(api.projects);

    //RecentProject API
    app.route('/api/recentProjects')
        .get(api.recentProjects);

};

