
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var type = require('./../enums/type');
var state = require('./../enums/state');

var Interest = new Schema({
	interestId: {
		type: Number,
		index: {
			unique: true
	}},
	title : String,
	state : state,
	coords : {
		x : Number,
		y : Number
	},
	x: Number,
	y: Number,
	type : type,
	pushstate: [],
	desc : String
});

module.exports = mongoose.model('Interest', Interest);
