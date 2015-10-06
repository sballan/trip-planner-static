var express = require('express');
var router = express.Router();
var Hotel = require('../models').Hotel
var Restaurant = require('../models').Restaurant
var Activity = require('../models').Activity

/* GET home page. */
router.get('/', function(req, res, next) {
  var hPromise = Hotel.find({}).exec();
  var rPromise = Restaurant.find({}).exec();
  var aPromise = Activity.find({}).exec();
  var promises = [hPromise, rPromise, aPromise]

  Promise.all(promises).then(function() {
    res.send(promises);
});


});

module.exports = router;
