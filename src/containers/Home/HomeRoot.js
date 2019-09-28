import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { testDis } from './actions';
import { OpenModalAction } from '../../connectors/ModalController/actions';

const HomeRoot = props => (
	<div>
		HomeRoot
		<button onClick={() => props.testDis()}>asd</button>
		<button onClick={() => props.openTestModal()}>open modal</button>
	</div>
);

const mapDispatchToProps = dispatch => ({
	testDis: () => dispatch(testDis()),
	openTestModal: () => dispatch(OpenModalAction('TEST_MODAL')),
});

const mapStateToProps = state => ({});

const withConnect = connect(
	mapStateToProps,
	mapDispatchToProps
);

export default compose(withConnect)(HomeRoot);
