import shortid from 'shortid';

export const getColumnsForList = ({columns}, listId) => columns.filter(column => column.listId == listId);

const reducerName = 'columns';
const createActionName = name => `app/${reducerName}/${name}`;

export const ADD_COLUMN = createActionName('ADD_COLUMN');

export const createActionAddColumn = payload => ({ payload: { ...payload, id: shortid.generate() }, type: ADD_COLUMN });

export default function reducer(statePart = [], action = {}) {
  switch (action.type) {
    case ADD_COLUMN:
      return [...statePart, action.payload];
    default:
      return statePart;
  }
}