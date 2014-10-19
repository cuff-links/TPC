/**
 * Created by jdorlus on 2/8/14.
 */

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var projectType = new Schema({
    name: {type: String, required: true},
    description: {type: String, required: true}
});

var projectSchema = new Schema({
    name: {type: String, required: true},
    type: {type: mongoose.Schema.Types.ObjectId , ref: 'ProjectType'},
    startDate: {type: Date , required: true},
    completionDate: {type: Date, required: false},
    gitUrl: {type:String, default: null},
    description: {type: String, required: true},
    projectCode: {type: String, required: true}
});


module.exports = mongoose.model('ProjectType', projectType);
var ProjectModel = mongoose.model('Projects', projectSchema);

module.exports.ProjectModel = ProjectModel;