import {
	OPEN_EXCLUSIVE_MODAL,
	OPEN_MODAL,
	CLOSE_MODAL,
	CLOSE_ALL_MODALS
} from './constants';

// The initial state of the App
const initialState = {
	currentModals: []
};

export default (state = initialState, action) => {
	switch (action.type) {
		case OPEN_EXCLUSIVE_MODAL:
			return {
				...state,
				currentModals: [action.payload],
			};
		case OPEN_MODAL:
			return {
				...state,
				currentModals: state.currentModals.concat(action.payload),
			};
		case CLOSE_MODAL:
			return {
				...state,
				currentModals: state.currentModals.filter(x => x.type !== action.payload),
			};
		case CLOSE_ALL_MODALS:
			return {
				...state,
				currentModals: [],
			};
		default:
			return state;
	}
};
