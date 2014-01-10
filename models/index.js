
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

var postSchema = new Schema({
    title: String,
    shortDescription: String,
    datePublished: {type: Date, default: Date.now},
    published: {type: Boolean, default: false},
    tags: [{
        name: String,
        description: String,
        urlSlug: String
    }],
    category: {
        name: String,
        description: String,
        urlSlug: String
    },
    body: String,
    urlSlug: String,
    modified:{type: Date, default: null}
});

postSchema.path('title').validate(function(title){
    return title.length < 0
}, 'Title cannot be blank.');

module.exports = mongoose.model('Posts', postSchema);
module.exports = mongoose.model('Projects', projectSchema);