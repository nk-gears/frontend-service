/**
 * Copyright (C) IvyPods - All Rights Reserved
 * Unauthorized copying of this file, via any medium is strictly prohibited
 * Proprietary and confidential
 *
 * @author Deepank Agarwal (https://github.com/deepank411)
 * File Name: client.js
 * date: 25-09-2019 11:33:08
 */

import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';
import { renderRoutes } from 'react-router-config';
import { loadableReady } from '@loadable/component';
import MobileDetect from 'mobile-detect';

import configureStore from './utils/configureStore';
import routes from './routes';

let isMobile = false;
const md = new MobileDetect(window.navigator.userAgent);
if (md.mobile() && !md.tablet()) {
	isMobile = true;
}

// Get the initial state from server-side rendering
const initialState = window.__INITIAL_STATE__;
const { store, history } = configureStore({ initialState, isMobile });

const render = Routes => {
	const renderMethod = module.hot ? ReactDOM.render : ReactDOM.hydrate;

	renderMethod(
		<AppContainer>
			<Provider store={store}>
				<ConnectedRouter history={history}>
					{renderRoutes(Routes)}
				</ConnectedRouter>
			</Provider>
		</AppContainer>,
		// $FlowFixMe: isn't an issue
		document.getElementById('react-view')
	);
};

// loadable-component setup
loadableReady(() => {
	render(routes);
});

if (module.hot) {
	// Enable webpack hot module replacement for routes
	module.hot.accept('./routes', () => {
		try {
			const nextRoutes = require('./routes').default;

			render(nextRoutes);
		} catch (error) {
			console.error(`==> 😭  Routes hot reloading error ${error}`);
		}
	});
}
