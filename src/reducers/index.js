import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';

import homeReducer from '../containers/Home/reducer';
import modalsReducer from '../connectors/ModalController/reducer';

const reducers = {
	home: homeReducer,

	modals: modalsReducer,
	// form: formReducer,
};

export default history => combineReducers({ router: connectRouter(history), ...reducers });
