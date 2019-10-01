import React from 'react';
import loadable from '@loadable/component';
import { Loading, ErrorBoundary } from '../../components';

const UserList = loadable(() => import('./UserListRoot'), {
	fallback: <Loading />
});

export default props => (
	<ErrorBoundary>
		<UserList {...props} />
	</ErrorBoundary>
);
