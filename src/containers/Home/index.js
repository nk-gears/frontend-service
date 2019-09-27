import React from 'react';
import loadable from '@loadable/component';
import { Loading, ErrorBoundary } from '../../components';

const Home = loadable(() => import('./HomeRoot'), {
	fallback: <Loading />
});

export default props => (
	<ErrorBoundary>
		<Home {...props} />
	</ErrorBoundary>
);
