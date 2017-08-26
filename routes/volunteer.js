var express = require('express');
var router = express.Router();
var Interest = require('../models/interest');

/* GET home page. */
router.get('/', function(req, res, next) {
  Interest.find({}, function(err, data){
		if(err) {
			res.render('error.twig')
		} else {
      res.render('volunteer.twig', {
        message: "hello world",
				data : data,
        enu: [ 'GREEN', 'ORANGE', 'RED']
      });
		}
	})
});


module.exports = router;
