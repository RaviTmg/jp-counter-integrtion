const mongoose = require('mongoose');

const ItemSchema = new mongoose.Schema({
  itemId: { type: String, required: true },
  value: { type: Number, required: true },
  result: { type: Number, required: true },
});

module.exports = mongoose.model('Item', ItemSchema);
