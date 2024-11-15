const initMondayClient = require('monday-sdk-js');
// TODO: write tests
const getColumnValue = async (token, itemId, columnId) => {
  try {
    const mondayClient = initMondayClient({ token });
    mondayClient.setApiVersion('2024-04');

    const query = `query($itemId: [ID!], $columnId: [String!]) {
        items (ids: $itemId) {
          column_values(ids:$columnId) {
            value
          }
        }
      }`;
    const variables = { columnId, itemId };

    const response = await mondayClient.api(query, { variables });
    const rawValue = response.data.items[0].column_values[0].value;
    try {
      return JSON.parse(rawValue);
    } catch (e) {
      return rawValue;
    }
  } catch (err) {
    console.error(err);
  }
};

const changeColumnValue = async (token, boardId, itemId, columnId, value) => {
  try {
    const mondayClient = initMondayClient({ token });
    mondayClient.setApiVersion('2024-01');

    const query = `mutation change_column_value($boardId: ID!, $itemId: ID!, $columnId: String!, $value: JSON!) {
        change_column_value(board_id: $boardId, item_id: $itemId, column_id: $columnId, value: $value) {
          id
        }
      }
      `;
    const variables = {
      boardId,
      columnId,
      itemId,
      value: [undefined, null].includes(value) ? '""' : JSON.stringify(value),
    };

    const response = await mondayClient.api(query, { variables });
    return response;
  } catch (err) {
    console.error(err);
  }
};

module.exports = {
  getColumnValue,
  changeColumnValue,
};
