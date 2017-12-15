const mongoose = require('mongoose'),
      Schema = mongoose.Schema

var User = new Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true,
    trim: true
  },
  telephone: {
    type: String,
    required: true
  },
  company: {
    type: String,
    required: true
  },
  officialVisit: {
    type: Boolean,
    required: true
  },
  escort: {
    type: Boolean,
    required: true
  },
  escortName: {
    type: String,
  }
})

module.exports = mongoose.model('User', User)
