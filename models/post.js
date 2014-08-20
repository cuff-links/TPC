/**
 * Created by jdorlus on 2/8/14.
 */

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var tagSchema = new Schema({
    name: {type: String, required : true},
    description: {type: String, required : true},
    urlSlug: {type: String, required : true}
});

var postSchema = new Schema({
    title: {type: String, required : true},
    shortDescription: {type: String, required : true},
    datePublished: {type: Date, default: Date.now, required: false},
    tags: [tagSchema],
    body: {type: String, required : true},
    urlSlug: {type: String, required : true},
    modified:{type: Date, default: null, required: false}
});



postSchema.path('title').validate(function(title){
    return title.length < 0
}, 'Title cannot be blank.');

var PostModel = mongoose.model('Post', postSchema);

module.exports.PostModel = PostModel;