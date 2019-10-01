import { actionSpreader } from '../../utils/commonHelpers';
import {
	GET_USERS,
	GET_USERS_SUCCESS,
	GET_USERS_ERROR,
	TOGGLE_USERS_STATUS,
	GET_FILTERED_USERS,
	GET_FILTERED_USERS_SUCCESS,
	GET_FILTERED_USERS_ERROR,
	TOGGLE_FILTERED_USERS_STATUS,
	SET_API_OBJECT,
} from './constants';

export const getUsers = () => actionSpreader(GET_USERS);

export const getUsersSuccess = (users) => actionSpreader(GET_USERS_SUCCESS, { users });

export const getUsersError = (error) => actionSpreader(GET_USERS_ERROR, { error });

export const toggleUsersStatus = (loading) => actionSpreader(TOGGLE_USERS_STATUS, { loading });

export const getFilteredUsers = () => actionSpreader(GET_FILTERED_USERS);

export const getFilteredUsersSuccess = (users) => actionSpreader(GET_FILTERED_USERS_SUCCESS, { users });

export const getFilteredUsersError = (error) => actionSpreader(GET_FILTERED_USERS_ERROR, { error });

export const toggleFilteredUsersStatus = (filteredLoading) => actionSpreader(TOGGLE_FILTERED_USERS_STATUS, { filteredLoading });

export const setApiObject = (apiObject) => actionSpreader(SET_API_OBJECT, { apiObject });
