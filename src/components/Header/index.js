import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';

const Header = (props) => (
	<React.Fragment>
		<div className="header">
			<img
				src={require('../../app/assets/logo.svg')}
				alt="Logo"
				role="presentation"
			/>
			<h1>Share Flock</h1>
		</div>
		<hr />
	</React.Fragment>
)

const mapDispatchToProps = dispatch => ({});

const mapStateToProps = state => ({});

const withConnect = connect(mapStateToProps, mapDispatchToProps);

export default compose(withConnect)(Header);
