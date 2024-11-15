const mondayService = require('../services/monday-service');
const calculationService = require('../services/calculation-service');
const itemRepo = require('../repo/item-repo');

async function executeAction(req, res) {
  const { shortLivedToken } = req.session;
  const { payload } = req.body;

  try {
    const { inputFields } = payload;
    const { boardId, itemId, sourceColumnId, targetColumnId } = inputFields;

    const value = await mondayService.getColumnValue(shortLivedToken, itemId, sourceColumnId);
    if (!value) {
      return res.status(200).send({});
    }
    const result = calculationService.multiplyBy(value, 5);
    await itemRepo.upsertItem({ itemId, value, result });

    await mondayService.changeColumnValue(shortLivedToken, boardId, itemId, targetColumnId, result);

    return res.status(200).send({});
  } catch (err) {
    console.error(err);
    return res.status(500).send({ message: 'internal server error' });
  }
}

module.exports = {
  executeAction,
};
