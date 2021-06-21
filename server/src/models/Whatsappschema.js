require("dotenv").config();
const mongoose = require("mongoose");
const UserSchema = mongoose.Schema({
  message: {
    type: String,
    require: true,
    trim: true,
  },
  name: {
    type: String,
    require: true,
    trim: true,
  },
  TimeStamp: {
    type: Date,
    default: Date.now,
    require: true,
  },
  recieved: {
    type: Boolean,
    require: true,
  },
});

/* Create Collection */

const whatsappdatas = new mongoose.model("whatsappdatas", UserSchema);

module.exports = whatsappdatas;
