/**
 * Copyright (C) IvyPods - All Rights Reserved
 * Unauthorized copying of this file, via any medium is strictly prohibited
 * Proprietary and confidential
 *
 * @author Deepank Agarwal (https://github.com/deepank411)
 * File Name: index.js
 * date: 25-09-2019 03:20:31
 */

import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { testDis } from './actions';

const Home = props => (
	<div>
		Home
		<button onClick={() => props.testDis()}>asd</button>
	</div>
);

const mapDispatchToProps = dispatch => ({
	testDis: () => dispatch(testDis())
});

const mapStateToProps = state => ({});

const withConnect = connect(
	mapStateToProps,
	mapDispatchToProps
);

export default compose(withConnect)(Home);
