var express = require('express');
var router = express.Router();
var Interest = require('../models/interest');

/* GET home page. */
router.get('/', function(req, res, next) {
  Interest.find({}, function(err, data){
		if(err) {
			res.render('index.twig')
		} else {
      res.render('index.twig', {
        message: "hello world",
				datas : data
      });
		}
	})
});

module.exports = router;
