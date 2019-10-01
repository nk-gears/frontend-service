import {
	GET_USERS_SUCCESS,
	GET_USERS_ERROR,
	TOGGLE_USERS_STATUS,
	GET_FILTERED_USERS_SUCCESS,
	GET_FILTERED_USERS_ERROR,
	TOGGLE_FILTERED_USERS_STATUS,
} from './constants';

const initialState = {
	users: [],
	apiObject: {
		pageSize: 5,
		lastId: null,
	},
	loading: false,
	filteredLoading: false,
	error: null,
};

function usersListReducer(state = initialState, action) {
	console.log(action);
	switch (action.type) {
		case GET_USERS_SUCCESS:
			console.log('here', action.payload.users);
			return {
				...state,
				users: action.payload.users,
			};
		case GET_USERS_ERROR:
			return {
				...state,
				error: action.payload.error,
			};
		case TOGGLE_USERS_STATUS:
			return {
				...state,
				loading: action.payload.loading,
			};
		case GET_FILTERED_USERS_SUCCESS:
			return {
				...state,
				users: [
					...state.users,
					...action.payload.users,
				],
			};
		case GET_FILTERED_USERS_ERROR:
			return {
				...state,
				error: action.payload.error,
			};
		case TOGGLE_FILTERED_USERS_STATUS:
			return {
				...state,
				filteredLoading: action.payload.filteredLoading,
			};
		default:
			return state;
	}
}

export default usersListReducer;
