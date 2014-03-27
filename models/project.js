/**
 * Created by jdorlus on 2/8/14.
 */

var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var projectSchema = new Schema({
    name: String,
    projectType:{
        name: String,
        description: String
    },
    startDate: Date,
    completionDate: Date,
    gitUrl: {type:String, default: null},
    description: String,
    projectCode: String
});

module.exports = mongoose.model('Projects', projectSchema);