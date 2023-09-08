const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const plantSchema = new Schema({
   Id: Number,
  Symbol: String,
  ScientificName: String,
  CommonName: String,
}, {
  timestamps: true
});

module.exports = mongoose.model('Plant', plantSchema);