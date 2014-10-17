/**
 * Created by jdorlus on 2/8/14.
 */

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var tagSchema = new Schema({
    name: {type: String, required : true, unique: true},
    description: {type: String, required : true},
    urlSlug: {type: String, required : true, unique: true}
});

var postSchema = new Schema({
    _id: {type: Number, unique: true},
    title: {type: String, required : true, unique: true},
    shortDescription: {type: String, required : true},
    datePublished: {type: Date, default: Date.now, required: false},
    tags:  [{ type : mongoose.Schema.ObjectId, ref : 'Tag' }],
    body: {type: String, required : true},
    urlSlug: {type: String, required : true, unique:true},
    modified:{type: Date, default: null, required: false}
});


var TagModel = mongoose.model('Tag', tagSchema);
var PostModel = mongoose.model('Post', postSchema);

module.exports.TagModel= TagModel;
module.exports.PostModel = PostModel;