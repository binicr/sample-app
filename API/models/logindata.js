// Product.js

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define collection and schema for Product
let loginInfo = new Schema({
  name: {
    type: String
  },
  username: {
    type: String
  },

},{
    collection: 'LoginInformation'
});

module.exports = mongoose.model('loginInfo', loginInfo);