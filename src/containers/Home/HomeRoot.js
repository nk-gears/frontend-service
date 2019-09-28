import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { testDis } from './actions';

const HomeRoot = props => (
	<div>
		HomeRoot
		<button onClick={() => props.testDis()}>asd</button>
	</div>
);

const mapDispatchToProps = dispatch => ({
	testDis: () => dispatch(testDis()),
});

const mapStateToProps = state => ({});

const withConnect = connect(
	mapStateToProps,
	mapDispatchToProps
);

export default compose(withConnect)(HomeRoot);
