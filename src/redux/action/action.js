import {ActionTypes} from './actionType';

export const updateContact = data => ({
  type: ActionTypes.CONTACTDATA,
  payload: data,
});

export const updatePersonalDetail = data => ({
  type: ActionTypes.PERSONALDATA,
  payload: data,
});

export const updateCompanyDetail = data => ({
  type: ActionTypes.COMPANYDETAIL,
  payload: data,
});

export const updateCourseDev = data => ({
  type: ActionTypes.DEVELOPMENT,
  payload: data,
});

export const updateDepartment = data => ({
  type: ActionTypes.DEPARTMENT,
  payload: data,
});
