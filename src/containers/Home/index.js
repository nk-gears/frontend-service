/**
 * Copyright (C) IvyPods - All Rights Reserved
 * Unauthorized copying of this file, via any medium is strictly prohibited
 * Proprietary and confidential
 *
 * @author Deepank Agarwal (https://github.com/deepank411)
 * File Name: index.js
 * date: 25-09-2019 11:02:48
 */

import React from 'react';
import loadable from '@loadable/component';
import { Loading, ErrorBoundary } from '../../components';

const Home = loadable(() => import('./root'), {
	fallback: <Loading />
});

export default props => (
	<ErrorBoundary>
		<Home {...props} />
	</ErrorBoundary>
);
