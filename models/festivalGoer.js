
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var FestivalGoer = new Schema({
	festivalGoerId: Number,
	personnalInformations : String
});

module.exports = mongoose.model('FestivalGoer', FestivalGoer);
