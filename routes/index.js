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

  Promise.all(promises).then(function(data) {

    // res.locals.hotels = data[0];
    // res.locals.restaurants = data[1];
    // res.locals.activities = data[2];

    var elem = {};
    elem.hotels = data[0]
    elem.restaurants = data[1]
    elem.activities = data[2]
    elem.dangerButtons = [{name: '1', content: "Yo!"}, {name: '2', content: "Hey!"}, {name: '3', content: "Whats's Up!"}]


    //console.log(res.locals.hotels[0].name)
    res.render('sidebar', elem);
    //res.send(data)
});


});

module.exports = router;
