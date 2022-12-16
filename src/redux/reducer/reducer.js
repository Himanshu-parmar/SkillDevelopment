import {ActionTypes} from '../action/actionType';

const initialState = {
  userLoginData: {
    email: '',
    phonedetail: '',
    firstName: ' ',
    lastName: '',
    companyName: '',
    jobtitle: '',
  },
};

const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.USERDATA:
      console.log(action.payload);
      return {
        ...state,
        userLoginData: action.payload,
      };
    default:
      return state;
  }
};
export default counterReducer;
