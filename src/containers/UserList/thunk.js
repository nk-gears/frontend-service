import axios from 'axios';
import {
	GET_USERS_SUCCESS,
	GET_USERS_ERROR,
	TOGGLE_USERS_STATUS,
	SET_API_OBJECT,
} from './constants';
import { actionSpreader } from '../../utils/commonHelpers';

const API_URL = 'http://localhost:8080/v1/users?limit=5';

export const fetchUsers = (URL = API_URL) => async (dispatch) => {
	dispatch(actionSpreader(TOGGLE_USERS_STATUS, { loading: true }));
	try {
		const { data } = await axios.get(URL);
		console.log('data', __SERVER__, data.data[data.data.length - 1]._id, data);
		dispatch(actionSpreader(GET_USERS_SUCCESS, { users: data.data }));
		dispatch(actionSpreader(SET_API_OBJECT, { lastId: data.data[data.data.length - 1]._id }));
		dispatch(actionSpreader(TOGGLE_USERS_STATUS, { loading: false }));
	} catch (err) {
		dispatch(actionSpreader(GET_USERS_ERROR, { err: err.message }));
	}
};

export const fetchFilteredUsers = (URL = API_URL) => async (dispatch, getState) => {
	console.log('getState', getState());
	try {
		const newurl = `${URL}&last_id=`
		const { data } = await axios.get(URL);
		console.log('data', __SERVER__, data);
		dispatch(actionSpreader(GET_USERS_SUCCESS, { users: data.data }));
		dispatch(actionSpreader(SET_API_OBJECT, { lastId: data.data[data.data.length - 1]._id }));
	} catch (err) {
		dispatch(actionSpreader(GET_USERS_ERROR, { err: err.message }));
	}
}

const shouldFetchUsers = (state) => {
	if (state.users.users.length !== 0) return false;
	// if (state.users.users === 'success') return false;
	return true;
};

export const fetchUsersIfNeeded = () => (dispatch, getState) => {
	if (shouldFetchUsers(getState())) return dispatch(fetchUsers());

	return null;
};
