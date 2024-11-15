const ItemModel = require('../models/item');

const upsertItem = async ({ itemId, boardId, value, result }) => {
  await ItemModel.findOneAndUpdate({ itemId, boardId }, { value, result }, { upsert: true, new: true });
};

module.exports = { upsertItem };
