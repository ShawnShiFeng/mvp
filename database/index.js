const mongoose = require('mongoose');
const Promise = require('bluebird');
const MongoBD = require('mongodb');

Promise.promisifyAll(require('mongodb'));
mongoose.connect('mongodb://localhost/randomizer');

var db = mongoose.connection;
db.on('error', function() { console.error(error)});
db.once('open', function() {console.log('connection is on')});

var resultSchema = mongoose.Schema({
    resultNumber: Number,
    result: {photo: String, text: String},
    choices: [{photo: String, text: String}]
});

var Result = mongoose.model('Result', resultSchema);

module.exports = Result;




