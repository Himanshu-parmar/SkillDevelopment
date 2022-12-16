import {ActionTypes} from './actionType';

export const getEmail = dataone => ({
  type: ActionTypes.USERDATA,
  payload: dataone,
});
export const updateReg = dataone => ({
  type: ActionTypes.REGDATA,
  payload: dataone,
});
export const addtoCart = dataone => ({
  type: ActionTypes.ADDCART,
  payload: dataone,
});
export const IncCartItem = itemId => ({
  type: ActionTypes.INCREMENT_ITEM,
  payload: itemId,
});

export const DecCartItem = itemId => ({
  type: ActionTypes.DECREMENT_ITEM,
  payload: itemId,
});
