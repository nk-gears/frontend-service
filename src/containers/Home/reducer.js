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
