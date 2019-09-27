import React from 'react';
import loadable from '@loadable/component';
import { Loading, ErrorBoundary } from '../../components';

const HomeAlt = loadable(() => import('./HomeAltRoot'), {
	fallback: <Loading />
});

export default props => (
	<ErrorBoundary>
		<HomeAlt {...props} />
	</ErrorBoundary>
);
