import * as types from './../types';
import axios from 'axios';

export const handleLogin = (email, password) => ({
  type: types.LOGIN,
  payload: axios({
    method: 'POST',
    url: 'https://webtoon-backend.herokuapp.com/api/v1/login',
    data: {email, password},
  }),
});
