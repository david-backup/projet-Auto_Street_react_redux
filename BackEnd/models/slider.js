// models/Slider.js

const mongoose = require("mongoose");

const sliderSchema = mongoose.Schema({
  id: {
    type: Number,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  picture: {
    type: String,
    required: true,
  },
  span: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("Slider", sliderSchema);
