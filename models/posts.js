/**
 * Created by jdorlus on 11/14/13.
 */
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var postSchema = new Schema({
    title: String,
    shortDescription: String,
    datePosted: {type: Date, default: Date.now},
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