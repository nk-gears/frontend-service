import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';

import homeReducer from '../containers/Home/reducer';

const reducers = {
	home: homeReducer,
};

export default history => combineReducers({ router: connectRouter(history), ...reducers });
