var mongoose = require('mongoose');
mongoose.Promise = require('bluebird');

mongoose.connect('mongodb://localhost/trip-planner');

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'mongodb connection error:'));

var placeSchema = new mongoose.Schema({
  address: {type: String},
  city: {type: String},
  state: {type: String},
  phone: {type: String},
  location: {type: [Number]}
})

var hotelSchema = new mongoose.Schema({
  name: {type: String},
  place: {type: [mongoose.Schema.Types.ObjectId], ref: 'Place'},
  num_stars: {type: Number, enum: [1, 2, 3, 4, 5]},
  amenities: {type: String}
})

var activitySchema = new mongoose.Schema ({
  name: {type: String},
  place: {type: [mongoose.Schema.Types.ObjectId], ref: 'Place'},
  age_range: {type: String}
})

var restaurantSchema = new mongoose.Schema ({
  name: {type: String},
  place: {type: [mongoose.Schema.Types.ObjectId], ref: 'Place'},
  cuisines: {type: String},
  price: {type: Number, enum: [1, 2, 3, 4, 5]}
})

var Place = mongoose.model('Place', placeSchema);
var Hotel = mongoose.model('Hotel', hotelSchema);
var Activity = mongoose.model('Activity', activitySchema);
var Restaurant = mongoose.model('Restaurant', restaurantSchema);

module.exports = {
  Place: Place,
  Hotel: Hotel,
  Activity: Activity,
  Restaurant: Restaurant
}
