import {ActionTypes} from '../action/actionType';

const initialState = {
  contactDetail: {
    email: '',
    phonedetail: '',
  },
  personalDetail: {
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
    case ActionTypes.CONTACTDATA:
      return {
        ...state,

        contactDetail: action.payload,
      };
    case ActionTypes.PERSONALDATA:
      return {
        ...state,

        personalDetail: action.payload,
      };
    case ActionTypes.COMPANYDETAIL:
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
