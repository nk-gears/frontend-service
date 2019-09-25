/* @flow */

import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';

import home from './home';
import userInfo from './userInfo';
import homeReducer from '../containers/Home/reducer';

const reducers = {
	home,
	userInfo,
	test: homeReducer,
};

export type Reducers = typeof reducers;

export default history =>
	combineReducers({ router: connectRouter(history), ...reducers });
