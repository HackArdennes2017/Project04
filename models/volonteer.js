
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var type = require('./../enums/type');

var Volonteer = new Schema({
	volonteerId: Number,
	personnalInformations : String,
	type: type;
});

module.exports = mongoose.model('Volonteer', Volonteer);
