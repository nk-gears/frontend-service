import { takeLatest, put, select, call } from 'redux-saga/effects';
import {
	GET_USERS,
	GET_FILTERED_USERS,
} from './constants';
import { getUsersSuccess } from './actions';
import { ResponseStatus } from '../../utils/commonConstants';
import { requestSaga } from '../../utils/requestSaga';
import { apiGetUsers } from '../../utils/apiUrls';
import { accessDeepObject } from '../../utils/commonHelpers';

function* getUsersSaga({ payload }) {
	console.log('payload', payload, __SERVER__);
	const apiObject = yield select(state => state.users.apiObject);
	console.log('apiObject', apiObject);
	try {

		const res = yield call(requestSaga, 'GET', apiGetUsers(apiObject.pageSize, apiObject.lastId));
		console.log('object', res.data, __SERVER__);
		if (res.status === ResponseStatus.OK) {
			yield put(getUsersSuccess(accessDeepObject('data.data', res)));
		}
	}
	catch (e) {
		console.log('e', e);
	}
}

function* getFilteredUsersSaga({ payload }) {
	console.log('payload', payload);
}

export default function* homeSaga() {
	yield takeLatest(GET_USERS, getUsersSaga);
	yield takeLatest(GET_FILTERED_USERS, getFilteredUsersSaga);
}
