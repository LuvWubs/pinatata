var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var HumanSchema = new Schema({

  first_name: {
    type: String
  },
  last_name: {
    type: String
  },
  username: {
    type:String
  },
  password: {
    type:String
  },
  email: {
    type:String
  },
  candy: {
    type:Number
  },
  happy: {
    type:Number
  },
  level: {
    type:Number
  },
  pet: {
    type:String
  },
  sweetness:{
    type:Number
  }
});

var Human = mongoose.model("Human", HumanSchema);
module.exports = Human;
