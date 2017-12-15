const mongoose = require('mongoose'),
      Schema = mongoose.Schema,
      bcrypt = require('bcryptjs')

var User = new Schema({
  displayName: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true,
    trim: true
  },
  username: {
    type: String,
    required: true,
    unique: true,
    trim: true
  },
  password: {
    type: String,
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
  escortRequired: {
    type: Boolean,
    required: true
  },
  escortName: {
    type: String,
  },
  createdOn: {
    type: Date,
    required: true
  }
})

module.exports = mongoose.model('User', User)
