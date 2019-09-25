/**
 * Copyright (C) IvyPods - All Rights Reserved
 * Unauthorized copying of this file, via any medium is strictly prohibited
 * Proprietary and confidential
 *
 * @author Deepank Agarwal (https://github.com/deepank411)
 * File Name: reducer.js
 * date: 25-09-2019 10:43:59
 */

import { HELLO } from './constants';

const initialState = {
	t: 123123
};

function homeReducer(state = initialState, action) {
	console.log(action);
	switch (action.type) {
		case HELLO:
			return {
				...state,
				q: 11,
			};
		default:
			return state;
	}
}

export default homeReducer;
