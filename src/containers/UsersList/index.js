import React from 'react';
import loadable from '@loadable/component';
import { Loading, ErrorBoundary } from '../../components';

const UsersList = loadable(() => import('./UsersListRoot'), {
	fallback: <Loading />
});

export default props => (
	<ErrorBoundary>
		<UsersList {...props} />
	</ErrorBoundary>
);
