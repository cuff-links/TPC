/**
 * Created by jdorlus on 2/8/14.
 */

var mongoose = require('mongoose'),
    Schema = mongoose.Schema,
    passportLocalMongoose = require('passport-local-mongoose');

var Account = new Schema({
    username: String,
    password: String,
    apikey: String
});

Account.plugin(passportLocalMongoose);

module.exports = mongoose.model('Account', Account);