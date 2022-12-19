import {ActionTypes} from '../action/actionType';

const initialState = {
  userLoginData: {
    email: '',
    phonedetail: '',
  },
  nameData: {
    firstName: ' ',
    lastName: '',
  },
  companyData: {
    companyName: '',
    jobtitle: '',
  },
  developmentData: {
    developData: '',
  },
  departrmentData: {
    departData: '',
  },
};

const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.USERDATA:
      return {
        ...state,

        userLoginData: action.payload,
      };
    case ActionTypes.NAMEDETAIL:
      return {
        ...state,

        nameData: action.payload,
      };
    case ActionTypes.JOBDETAIL:
      return {
        ...state,

        companyData: action.payload,
      };
    case ActionTypes.DEVELOPMENT:
      return {
        ...state,

        developmentData: action.payload,
      };

    case ActionTypes.DEPARTMENT:
      return {
        ...state,

        departrmentData: action.payload,
      };

    default:
      return state;
  }
};
export default counterReducer;
