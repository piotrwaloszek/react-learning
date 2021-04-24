export const getSearchString = ({searchString}) => searchString;
export const countVisibleCards = ({cards, searchString}) => cards.filter(card => new RegExp(searchString, 'i').test(card.title)).length;
export const countAllCards = ({cards}) => cards.length;

const reducerName = 'change';
const createActionName = name => `app/${reducerName}/${name}`;

export const CHANGE = createActionName('CHANGE');

export const createActionChange = payload => ({ payload, type: CHANGE});

export default function reducer(statePart = '', action = {}) {
  switch (action.type) {
    case CHANGE:
      return action.payload;
    default:
      return statePart;
  }
}