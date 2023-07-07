import types from './types';

export const userFound = resposejson => {
  console.log('Data in Action', resposejson);
  return dispatch => {
    dispatch({type: types.userFound, playload: {resposejson}});
  };
};

export const userNotFound = responseJson => {
  console.log('No User Exsist', responseJson);
  return dispatch => {
    dispatch({type: types.userNotFound, payload});
  };
};
