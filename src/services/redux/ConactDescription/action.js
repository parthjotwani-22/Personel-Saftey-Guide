import types from './types';

export const addedSuccessfully = responsejson => {
  return dispatch => {
    dispatch({type: types.addedToContact, playload: {responsejson}});
  };
};

// export const removedSuccessfully = responsejson => {
//   console.log('removing data : ', responsejson);
//   return dispatch => {
//     dispatch({type: types.removedFromCart, playload: {responsejson}});
//   };
// };

export const removedSuccessfully = data => {
  return dispatch => {
    dispatch({
      type: types.removedFromContact,
      playload: {
        responsejson: data,
      },
    });
  };
};
