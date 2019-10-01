import React from 'react';
import { renderRoutes } from 'react-router-config';
import Helmet from 'react-helmet';
import { hot } from 'react-hot-loader';
import TagManager from 'react-gtm-module';

import config from '../config';
// Import your global styles here
import 'normalize.css/normalize.css'; // eslint-disable-line import/first
import './styles.scss';
import ModalController from '../connectors/ModalController';
import Header from '../components/Header';
import Constants from '../../privateConstants';

const tagManagerArgs = {
	gtmId: Constants.TAG_MANAGER,
};

const App = ({ route }) => {
	React.useEffect(() => {
		TagManager.initialize(tagManagerArgs);
	}, []);
	return (
		<div className="App">
			<Helmet {...config.app} />
			<ModalController />
			{/* <Header /> */}
			{/* Child routes won't render without this */}
			{renderRoutes(route.routes)}
		</div>
	);
};

export default hot(module)(App);
