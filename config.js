/**
 * Created by jdorlus on 8/19/14.
 */
var nconf = require('nconf');

nconf.argv()
    .env()
    .file({ file: './config.json' });

module.exports = nconf;