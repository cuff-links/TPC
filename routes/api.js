/**
 * Created by jdorlus on 11/14/13.
 */
var mongoose = require('mongoose');
var Post = mongoose.model('Posts');
var Project = mongoose.model('Projects');


/****************************************
 *************GET: ALL POSTS*************
 ****************************************/
exports.posts = function(req, res){
     Post.find({}, function(err,posts){
         res.json({
             posts: posts
         });
     });
};
/****************************************
 *************GET: ONE POST**************
 ****************************************/
exports.post = function(req,res){
    Post.findOne({_id:req.params.id},function(err,obj){
        console.log('returns the post: ' + obj);
        res.json({
            post:obj
        });
    });
};
/****************************************
 *************POST: ADD POST**************
 ****************************************/
exports.addPost = function (req, res) {
    var newPost = new Post(req.body);
    newPost.save();
    console.log("post added: " + req.body);
    res.json(req.body);
};

/****************************************
 *************PUT: EDIT POST**************
 ****************************************/
exports.editPost = function (req, res) {
    //console.log("edit post: " + req.body.title);
    Post.findByIdAndUpdate(req.params.id, {
            $set: { text: req.body.text, title: req.body.title }}, {upsert:true}, function (err, user) {
            return res.json(true);
        }
    );
};

/****************************************
 *************PUT: DELETE POST**************
 ****************************************/
exports.deletePost = function (req, res) {
    Post.remove({_id: req.params.id}, function (err) {
        if (!err) {
            console.log('no delete post error');
            res.json(true);
        }
        else {
            console.log('delete post error');
            res.json(false);
        }
    });
};

/****************************************
 *************GET: ALL PROJECTS*************
 ****************************************/
exports.projects = function(req, res){
    Project.find({}, function(err,projects){
        res.json({
            projects: projects
        });
    });
};