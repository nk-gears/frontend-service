import axios from 'axios';
import { call } from 'redux-saga/effects';
import { errorCodes, ResponseStatus } from './commonConstants';
import { ObjectMaybe } from './commonHelpers';

function request(method, url, options) {
	return axios({
		method,
		url,
		withCredentials: true,
		// headers: {
		// 	Authorization: getBrandId()
		// },
		...options,
	})
		.then(res => res)
		.catch(err => err);
}

/**
 * Checks if a network request came back fine, and throws an error if not
 *
 * @param  {object} response   A response from a network request
 *
 * @return {object|undefined} Returns either the response, or throws an error
 */
export function checkStatus(response) {
	response = ObjectMaybe(response).response || response;
	let confirmReload = false;
	let data;
	if (response['data']) {
		data = response['data'];
	}
	else if (response.code || response.refId) {
		data = response;
	}
	else {
		data = {};
	}
	let txt;
	const errorCode = data.code;
	const errorMsg = data.msg;
	const errorRefId = data.refId;
	switch (response.status) {
		case ResponseStatus.OK:
			return response;
		case ResponseStatus.NODATA:
		case ResponseStatus.RESETCONTENT:
			return null;
		case ResponseStatus.BADREQUEST:
			txt = errorCodes[errorCode] || errorMsg || 'Something went wrong. Please try again';
		case ResponseStatus.UNAUTHORIZED:
			txt = errorCodes[errorCode] || 'You\'ve been logged out. Please login again to continue.';
			confirmReload = true;
			break;
		case ResponseStatus.CONFLICT:
			txt = errorCodes[errorCode] || 'You\'ve logged in somewhere else. Please login again.';
			confirmReload = true;
			break;
		case ResponseStatus.SERVER_ERROR:
			txt = errorCodes[errorCode];
		default:
			break;
	}

	return {
		...response,
		CUSTOM_FIELDS: {
			txt,
			errorCode,
			errorMsg,
			errorRefId,
		},
		confirmReload,
	};
}

export function* requestSaga(method, url, options, subsequentActions) {
	try {
		const data = yield call(request, method, url, options);
		const modifiedResponseObject = checkStatus(data);
		if (modifiedResponseObject.status === ResponseStatus.BADREQUEST || modifiedResponseObject.status === ResponseStatus.SERVER_ERROR) {
			const error = new Error(modifiedResponseObject.CUSTOM_FIELDS.txt);
			error.response = modifiedResponseObject;
			throw error;
		}
		else {
			return modifiedResponseObject;
		}
	}
	catch (e) {
		console.log('requestSaga error', e, e.response);
		// NOTE: use if subsequent actions passed from outside
		// yield effects.all(subsequentActions.map(x => effects.put(x())));
	}
}
