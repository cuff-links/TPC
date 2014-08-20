/**
 * Created by jdorlus on 11/14/13.
 */
var log4js= require('log4js');
log4js.loadAppender('file');
log4js.addAppender(log4js.appenders.file('logs/ApiLog.log'), 'ApiLog');

var logger = log4js.getLogger('ApiLog');
var mongoose = require('mongoose');
var project = require('../models/project');
var Post = require('../models/post').PostModel;
var Project = mongoose.model('Projects', project);

logger.setLevel('INFO');


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
             })
             logger.error('Error:'+ err.status + " Message:" + err.message)
         }
         else{
             logger.debug('Retrieved posts: \n' + posts);
             res.json({
                 posts: posts
             });
             logger.info('Post retrieved...')
         }
     });
};
/****************************************
 *************GET: ONE POST**************
 ****************************************/
exports.post = function(req,res){
    Post.findOne({_id:req.params.id},function(err,post){
        if (!post){
            res.json({
                status: '404',
                message: 'Post not found'
            });
            logger.info("Error - 404: Post not Found");
        }
        if(err){
            res.json({
                status: err.status,
                message: err.message
            });
            logger.error("Error: "+ err.status + ' - ' + err.message);
        }
        else{
            logger.debug('returns the post: ' + obj);
            res.json({
                post:post
            });
        }
    });
};
/****************************************
 *************POST: ADD POST*************
 ****************************************/
exports.addPost = function (req, res) {
    var newPost = new Post(req.body);
    newPost.save(function(err){
        if(!err){
            logger.info('Article Created!');
            return res.send({status : 'OK', post: newPost} )
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
    logger.info("post added: " + req.body);
    res.json(req.body);
    logger.info('Post was added since authenticated.')
};

/****************************************
 *************PUT: EDIT POST*************
 ****************************************/
exports.editPost = function (req, res) {
    logger.info("edit post: " + req.body.title);
    Post.findByIdAndUpdate(req.params.id, {
            $set: { body: req.body.body, title: req.body.title }}, {upsert:true}, function (err) {
            if(!err){
                log.info('Article Updated!');
                res.json({
                    updateSuccessful: true
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
        }
    );
};

/****************************************
 *************PUT: DELETE POST***********
 ****************************************/
exports.deletePost = function (req, res) {
    Post.remove({_id: req.params.id}, function (err) {
        if(!err){
            log.info('Article Updated!');
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
 *************GET: ALL PROJECTS**********
 ****************************************/
exports.projects = function(req, res){
    Project.find({}, function(err,projects){
        res.json({
            projects: projects
        });
    });
};