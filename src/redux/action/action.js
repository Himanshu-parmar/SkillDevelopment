import {ActionTypes} from './actionType';

export const getEmail = dataone => ({
  type: ActionTypes.USERDATA,
  payload: dataone,
});
