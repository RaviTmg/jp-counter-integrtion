const ItemModel = require('../models/item');

const upsertItem = async ({ itemId, value, result }) => {
  await ItemModel.findOneAndUpdate({ itemId }, { value, result }, { upsert: true, new: true });
};

module.exports = { upsertItem };
