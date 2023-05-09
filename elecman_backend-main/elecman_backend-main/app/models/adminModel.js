const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const AdminSchema = new Schema({
  first_name: {
    type: String,
    required: true,
    length: 255,
    trim: true,
  },
  middle_name: {
    type: String,
    required: true,
    length: 255,
    trim: true,
  },
  last_name: {
    type: String,
    required: true,
    length: 255,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    length: 255,
    trim: true,
  },
  gender: {
    type: String,
    required: true,
    length: 1,
    trim: true,
  },
  home_address: {
    type: String,
    required: true,
    length: 255,
    trim: true,
  },
  city: {
    type: String,
    required: true,
    length: 255,
    trim: true,
  },
  postal_code: {
    type: String,
    required: true,
    length: 10,
    trim: true,
  },
  date_of_birth: {
    type: String,
    required: true,
    length: 12,
    trim: true,
  },
  phone_number: {
    type: String,
    required: true,
    length: 15,
    trim: true,
  },
  password: {
    type: String,
    required: true,
    length: 255,
    trim: true,
  },
  status: {
    type: Boolean,
    default: true,
  }
});

module.exports = mongoose.model("Admin", AdminSchema);
