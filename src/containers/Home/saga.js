import { takeLatest, put, select } from 'redux-saga/effects';
import { HELLO } from './constants';

function* getHomeDataSaga({ payload }) {
	console.log('payload', payload);
}

export default function* homeSaga() {
	yield takeLatest(HELLO, getHomeDataSaga);
}
