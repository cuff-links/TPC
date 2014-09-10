/**
 * Created by jdorlus on 2/8/14.
 */

var mongoose = require('mongoose');
var Schema = mongoose.Schema;
//var tagSchema = require('./tag').TagModel;


var postSchema = new Schema({
    title: {type: String, required : true, unique: true},
    shortDescription: {type: String, required : true},
    datePublished: {type: Date, default: Date.now, required: false},
    tags:  [{ type : mongoose.Schema.ObjectId, ref : 'Tag' }],
    body: {type: String, required : true},
    urlSlug: {type: String, required : true, unique:true},
    modified:{type: Date, default: null, required: false},
    tags:[
        {
            name: {type: String, required : true, unique: true},
            description: {type: String, required : true},
            urlSlug: {type: String, required : true, unique: true}
        }
    ]
});


var PostModel = mongoose.model('Post', postSchema);

module.exports.PostModel = PostModel;