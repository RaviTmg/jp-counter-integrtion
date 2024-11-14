const mondayService = require('../services/monday-service');
const calculationService = require('../services/calculation-service');

async function executeAction(req, res) {
  const { shortLivedToken } = req.session;
  const { payload } = req.body;

  try {
    const { inputFields } = payload;
    console.log(inputFields);
    const { boardId, itemId, sourceColumnId, targetColumnId } = inputFields;

    const value = await mondayService.getColumnValue(shortLivedToken, itemId, sourceColumnId);
    if (!value) {
      return res.status(200).send({});
    }
    const transformedValue = calculationService.multiplyBy(value, 5);

    await mondayService.changeColumnValue(shortLivedToken, boardId, itemId, targetColumnId, transformedValue);

    return res.status(200).send({});
  } catch (err) {
    console.error(err);
    return res.status(500).send({ message: 'internal server error' });
  }
}

module.exports = {
  executeAction,
};
