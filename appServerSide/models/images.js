
var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var ImageSchema = new Schema({

  img_url: {
    type: String
  },
  human_id: {
    type: String
  }
});

var Image = mongoose.model("Image", ImageSchema);
module.exports = Image;
