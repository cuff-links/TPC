/**
 * Created by jdorlus on 11/14/13.
 */
var log4js= require('log4js');
log4js.loadAppender('file');
log4js.addAppender(log4js.appenders.file('./logs/ApiLog.log'), 'ApiLog');

var logger = log4js.getLogger('ApiLog');
var mongoose = require('mongoose');
var project = require('../models/project');
var Post = require('../models/post').PostModel;
var Project = require('../models/project').ProjectModel;
var User = require('../models/user');
logger.setLevel('DEBUG');


/****************************************
 *************GET: ALL POSTS*************
 ****************************************/
exports.posts = function(req, res){
     Post.find({}, function(err,posts){
         logger.info('Getting posts...');
         if (err){
             res.json({
                 status: err.status,
                 message: err.message
             });
             logger.error('Error:'+ err.status + " Message:" + err.message)
         }
         else{
             logger.debug('Retrieved posts: \n' + posts);
             res.json({
                 posts: posts
             });
             logger.info('Posts successfully retrieved')
         }
     });
};
/****************************************
 *************GET: POSTS BY TAG**********
 ****************************************/
exports.postsByTag = function(req, res){
    Post.find({'tags.name':req.params.name}, function(err,posts){
        logger.info('Getting posts...');
        if (err){
            res.json({
                status: err.status,
                message: err.message
            });
            logger.error('Error:'+ err.status + " Message:" + err.message)
        }
        else{
            logger.debug('Retrieved posts: \n' + posts);
            res.json({
                posts: posts
            });
            logger.info('Posts successfully retrieved')
        }
    });
};
/****************************************
 *************GET: ONE POST**************
 ****************************************/
exports.post = function(req,res){
    Post.findOne({_id:req.params.id},function(err,post){
        if(err){
            res.json({
                status: err.status,
                message: err.message
            });
            logger.error("Error: "+ err.status + ' - ' + err.message);
        }else{
            if (post === null){
                res.json({
                    status: 404,
                    message: 'Post not found'
                });
                logger.info("Error - 404: Post not Found");
            }else{
                logger.debug('Returns the post: ' + post.title);
                res.json({
                    post:post
                });
            }
        }
    });
};
/****************************************
 *************POST: ADD POST*************
 ****************************************/
exports.addPost = function (req, res) {
    var newPost = new Post();
    newPost.title = req.body.title;
    newPost.shortDescription = req.body.shortDescription;
    newPost.body = req.body.body;
    newPost.urlSlug = req.body.urlSlug;
    newPost.save(function(err){
        if(!err){
            logger.info('Article Created!');
            logger.info('Post was added since authenticated.')
            return res.json({
                status: 200,
                message: "Post was successfully added.",
                data: newPost
            });
        }
        else{
            logger.error(err);
            if(err){
                res.json({
                    status: err.status,
                    message: err.message
                });
            }
        }
    });
};

/****************************************
 *************PUT: EDIT POST*************
 ****************************************/
exports.editPost = function (req, res) {
    logger.info("Edit post: " + req.body.title);
    Post.findByIdAndUpdate(req.params.id, {
            $set: {
                body: req.body.body,
                title: req.body.title,
                urlSlug: req.body.urlSlug,
                shortDescription: req.body.shortDescription,
                tags: req.body.tags[0]._id
            }}, {upsert:true}, function (err) {
            if(!err){
                logger.info('Post successfully updated!');
                res.json({
                    status: 200,
                    message: "Post update successful.",
                    updateSuccessful: true
                });
            }
            else{
                res.json({
                    status: err.status,
                    message: err.message,
                    updateSuccessful: false
                });
                logger.error('Error updating post: '+ err.status + ' - ' + err.message);
            }
        }
    );
};

/****************************************
 *************PUT: DELETE POST***********
 ****************************************/
exports.deletePost = function (req, res) {
    Post.remove({_id: req.params.id}, function (err) {
        if(!err){
            logger.info('Article deleted!');
            res.json({
                deleteSuccessful: true
            });
        }
        else{
            res.json({
                updateSuccessful: false,
                status: err.status,
                message: err.message
            });
            logger.error('Error: '+ err.status + ' - ' + err.message);
        }
    });
};

/****************************************
 *************GET: ALL TAGS**************
 ****************************************/
exports.tags = function(req, res){
    Tag.find({}, function(err,tags){
        logger.info('Getting tags...');
        if (err){
            res.json({
                status: err.status,
                message: err.message
            });
            logger.error('Error:'+ err.status + " Message:" + err.message)
        }
        else{
            logger.debug('Retrieved tags: \n' + tags);
            res.json({
                tags: tags
            });
            logger.info('Tags successfully retrieved')
        }
    });
};

/****************************************
 *************GET: ALL PROJECTS**********
 ****************************************/
exports.projects = function(req, res){
    Project.find({}, function(err,projects){
        res.json({
            projects: projects
        });
    });
};



/****************************************
 *************POST: USER*****************
 ****************************************/
exports.postUsers = function(req, res) {
    var user = new User({
        username: req.body.username,
        password: req.body.password
    });

    user.save(function(err) {
        if (err)
            res.send(err);
        else{
            res.redirect('/login');
//            res.json({ message: 'New user added!', data: user });
        }
    });
};

/****************************************
 *************GET: ALL USERS*************
 ****************************************/
//exports.getUsers = function(req, res) {
//    User.find(function(err, users) {
//        if (err){
//            res.send(err);
//        }
//        else{
//            res.json(users);
//        }
//    });
//};
