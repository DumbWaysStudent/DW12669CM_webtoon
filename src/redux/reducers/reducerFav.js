import * as types from './../types';

const initialState = {
  fav: [],
};

export default function reducerWebtoons(state = initialState, action) {
  switch (action.type) {
    case `${types.GET_FAV}_PENDING`:
      return {
        ...state,
      };
    case `${types.GET_FAV}_FULFILLED`:
      return {
        ...state,
        fav: action.payload.data,
      };
    case `${types.GET_FAV}_REJECTED`:
      return {
        ...state,
        isError: true,
      };
    default:
      return state;
  }
}
