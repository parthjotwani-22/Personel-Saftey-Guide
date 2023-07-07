import types from './types';
const intialstate = {
  userData: null,
};

const UserReducer = (state = intialstate, action) => {
  switch (action.type) {
    case types.userFound:
      console.log('Data in My Reducer', action);
      return {
        ...state,
        userData: action.playload.resposejson,
      };
    case types.userNotFound:
      return {
        userData: action.payload.responseJson,
      };
    default:
      return state;
  }
};
export default UserReducer;
