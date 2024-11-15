const mongoose = require('mongoose');

const ItemSchema = new mongoose.Schema({
  itemId: { type: String, required: true },
  value: { type: String, required: true },
  result: { type: String, required: true },
  boardId: { type: String, required: true },
});

module.exports = mongoose.model('Item', ItemSchema);
