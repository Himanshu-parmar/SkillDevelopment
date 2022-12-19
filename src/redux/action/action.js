import {ActionTypes} from './actionType';

export const getEmail = dataone => ({
  type: ActionTypes.USERDATA,
  payload: dataone,
});

export const getName = dataone => ({
  type: ActionTypes.NAMEDETAIL,
  payload: dataone,
});

export const getJobTitle = dataone => ({
  type: ActionTypes.JOBDETAIL,
  payload: dataone,
});

export const getDevelopment = dataone => ({
  type: ActionTypes.DEVELOPMENT,
  payload: dataone,
});

export const getDepartment = dataone => ({
  type: ActionTypes.DEPARTMENT,
  payload: dataone,
});
