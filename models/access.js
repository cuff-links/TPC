/**
 * Created by jdorlus on 8/19/14.
 */

var AccessToken = new Schema({
    userId: {
        type: String,
        required: true
    },
    clientId : {
        type : String,
        required : true
    },
    token: {
        type: String,
        unique: true,
        required: true
    },
    created: {
        type: Date,
        default: Date.now
    }
});

var AccessTokenModel = mongoose.model('AccessToken', AccessToken);

module.exports.AccessTokenModel = AccessTokenModel;