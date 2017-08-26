var express = require('express');
var router = express.Router();
var Interest = require('../models/interest');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('index.twig', {
    message: "hello world"
  });
});


router.get('/interest', function(req, res, next) {
	Interest.find({}, function(err, data){
		if(err) {
			res.json(err);
		} else {
			res.json(data);
		}
	});
});

router.post('/interest', function(req, res, next) {
	var interest = new Interest({
    interestId : req.body.interestId,
		title : req.body.title,
		state : req.body.state,
		desc : req.body.desc,
		coords : {
			x : req.body.x,
			y : req.body.y,
		},
    x : req.body.x,
    y : req.body.y,
		type : req.body.type
	});
	interest.save(function(err, data) {
		if (err) {
			res.json(err);
		} else {
			res.json(data);
		}
	});
});

router.put('/interest', function(req, res, next) {
	Interest.findOneAndUpdate({
		interestId: req.body.interestId
	}, {
		state : req.body.state
	}, {
		new : true,
    runValidators : true
	}, function (err, data) {
		console.log(data)
		if(err) {
			res.json(err);
		} else {
			res.json(data);
		}
	})
});


router.get('/volonteer', function(req, res, next) {
	Interest.find({}, function(err, data){
		if(err) {
			res.json(err);
		} else {
			res.json(data);
		}

	})
});

router.post('/volonteer', function(req, res, next) {
	var volonteer = new Volonteer({
    volonteerId : req.body.volonteerId,
    personnalInformations : req.body.personnalInformations
  });
	volonteer.save(function(err, data) {
		if (err) {
			res.json(err);
		} else {
			res.json(data);
		}
	});
});

router.put('/volonteer', function(req, res, next) {
	console.log(req.body.state);
  Volonteer.findOneAndUpdate({
		volonteerId: req.body.volonteerId
	}, {
		//state : req.body.state
	}, {
		new : true
	}, function (err, data) {
		if(err) {
			res.json(err);
		} else {
			res.json(data);
		}
	})
});


module.exports = router;
