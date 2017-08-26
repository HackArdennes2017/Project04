
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var History = new Schema({
	date: Date,
	interestId : Number
});

module.exports = mongoose.model('History', History);
