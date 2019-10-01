import { path } from 'ramda';
import { reduce } from 'lodash';

export const actionSpreader = (type, payload, origin) => ({
	type,
	payload,
	origin
});

export const ArrayMaybe = arr => arr || [];
export const ObjectMaybe = obj => obj || {};
export const StringMaybe = str => str || '';

export const accessDeepObject = (arr, obj) =>
	path(Array.isArray(arr) ? arr : arr.split('.'), obj);

export const isNotEmptyArray = arr => arr && arr.length > 0;

export const isNotEmptyObject = obj => obj && Object.keys(obj).length > 0;

export const isObject = a => !!a && a.constructor === Object;
export const isArray = a => Array.isArray(a);

export const getObjPropFromString = (obj, str) =>
	isNotEmptyObject(obj)
		? str.split('.').reduce((key, idx) => key[idx], obj)
		: null;

export const openConfirmationDialog = (message, cb) => {
	if (window.confirm(message)) {
		cb();
	}
};

export const renameObjectKeys = (obj, newKeysmap) =>
	reduce(
		obj,
		(result, value, key) => {
			key = newKeysmap[key] || key;
			result[key] = value;
			return result;
		},
		{}
	);

export const numFormatter = num => {
	if (num >= 1000000000) {
		return `${(num / 1000000000).toFixed(1).replace(/\.0$/, '')}B`;
	}
	if (num >= 1000000) {
		return `${(num / 1000000).toFixed(1).replace(/\.0$/, '')}M`;
	}
	if (num >= 1000) {
		return `${(num / 1000).toFixed(1).replace(/\.0$/, '')}K`;
	}
	return num;
};

export const decimalRounder = (num, places) => num.toFixed(places || 2);

export const isValidJson = str => {
	if (typeof str !== 'string') {
		return false;
	}
	if (!str.length) {
		return true;
	}
	try {
		JSON.parse(str);
	} catch (e) {
		return false;
	}
	return true;
};

export const getBaseUrl = () =>
	`${window.location.protocol}//${window.location.host}${window.location.pathname}${window.location.search}`;

export const getCurrentEpochTime = () => new Date().getTime();

export const encodeQueryData = (data) => {
	const d = Object.keys(data).map(key => data[key] && [key, data[key]].map(encodeURIComponent).join("=")).join("&");
	if (d[d.length - 1] === '&') {
		return d.slice(0, -1);
	}
	return d;
}
