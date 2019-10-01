import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import { reducer as formReducer } from 'redux-form';

import homeReducer from '../containers/Home/reducer';
import usersListReducer from '../containers/UsersList/reducer';
import modalsReducer from '../connectors/ModalController/reducer';

const reducers = {
	home: homeReducer,
	users: usersListReducer,

	modals: modalsReducer,
	form: formReducer,
};

export default history => combineReducers({
	router: connectRouter(history),
	...reducers,
});
