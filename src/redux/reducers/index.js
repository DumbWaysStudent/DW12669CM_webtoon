import {combineReducers} from 'redux';
import {createNavigationReducer} from 'react-navigation-redux-helpers';

import reducerTodos from './../reducers/reducerTodos';
import reducerImg from './../reducers/reducerImg';
import reducerEps from './../reducers/reducerEps';
import reducerWebtoons from './../reducers/reducerWebtoons';
import reducerLogin from './reducerLogin';
import reducerFavs from './../reducers/reducerFav';
import MainNav from './../../navigation/MainNav';

const reducerRouter = createNavigationReducer(MainNav);

const appReducer = combineReducers({
  router: reducerRouter,
  webtoons: reducerWebtoons,
  todos: reducerTodos,
  fav: reducerFavs,
  login: reducerLogin,
  eps: reducerEps,
  img: reducerImg,
});

export default appReducer;
