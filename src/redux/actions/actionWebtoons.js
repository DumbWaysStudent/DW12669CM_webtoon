import * as types from './../types';
import axios from 'axios';

export const handleGetWebtoons = () => ({
  type: types.GET_WEBTOONS,
  payload: axios.get('https://webtoon-backend.herokuapp.com/api/v1/webtoons'),
});
export const handleGetFav = id => ({
  type: types.GET_FAV,
  payload: axios.get(
    `https://webtoon-backend.herokuapp.com/api/v1/webtoonfav/${id}`,
  ),
});
export const handleGetEps = id => ({
  type: types.GET_EPS,
  payload: axios.get(
    `https://webtoon-backend.herokuapp.com/api/v1/webtoon/${id}/episodes`,
  ),
});
export const handleAddWebtoons = params => ({
  type: types.ADD_WEBTOONS,
  payload: params,
});
export const handleUpdateWebtoons = params => ({
  type: types.UPDATE_WEBTOONS,
  payload: params,
});
export const handleDeleteWebtoons = params => ({
  type: types.DELETE_WEBTOONS,
  payload: params,
});
