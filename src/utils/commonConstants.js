export const ResponseStatus = {
	OK: 200,
	NODATA: 204,
	RESETCONTENT: 205,
	BADREQUEST: 400,
	UNAUTHORIZED: 401,
	FORBIDDEN: 403,
	INVALIDPARAM: 406,
	CONFLICT: 409,
	UNSUPPORTED_MEDIA: 415,
	INVALID_TOKEN: 498,
	TOKEN_REQUIRED: 499,
	SERVER_ERROR: 500,
};

export const errorCodes = {
	SERVER_ERROR: 'Server issue. Please try again',
	WRONG_CREDENTIALS: 'Username or Password is incorrect, Please try again.',
	EXISTING_SESSION_NOT_FOUND: 'You\'ve been logged out, Please login again.',
	AGENT_BRAND_ACCESS_NOT_ALLOWED: 'You are not allowed to access this Brand Account.',
	BRAND_SWITCH_CONFLICT: 'Failed to Switch Brand Account. Reload to try again.',
	DUPLICATE_SESSION: 'Your account has been logged-in at more than one places, Login again to continue.'
};
