/**
 * Created by jdorlus on 11/14/13.
 */
var log4js= require('log4js');
log4js.loadAppender('file');
log4js.addAppender(log4js.appenders.file('./logs/ApiLog.log'), 'ApiLog');

var logger = log4js.getLogger('ApiLog');
var mongoose = require('mongoose');
var Project = require('../models/project').ProjectModel;
var RecentProject = require('../models/recentProject').RecentProjectModel;
logger.setLevel('DEBUG');




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
 *********GET: ALL RECENT PROJECTS*******
 ****************************************/
exports.recentProjects = function(req,res){
    RecentProject.find({},function(err,recentProjects){
        if(!err){
            res.json({
                recentProjects: recentProjects
            });
        }
        else{
            res.json({
                status: err.status,
                message: err.message
            });
        }
    });
};

