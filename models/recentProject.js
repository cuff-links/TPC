/**
 * Created by jdorlus on 2/8/14.
 */

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var recentProjectSchema = new Schema({
    name: {type: String, required: true},
    purpose: {type: String, required: true},
    siteUrl: {type: String, required: false},
    codeUrl: {type:String, required: false},
    description: {type: String, required: true},
    desktopImageUrl: {type: String, required: true},
    mobileImageUrl: {type: String, required: true}
});


var RecentProjectModel = mongoose.model('RecentProject', recentProjectSchema);

module.exports.RecentProjectModel = RecentProjectModel;