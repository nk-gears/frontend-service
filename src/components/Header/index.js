import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { OpenModalAction } from '../../connectors/ModalController/actions';

const Header = props => (
	<header>
		<div className="header w-100 f-sb-bw">
			<div className="side-nav-icon" onClick={() => props.openSideNav()}>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					width="16"
					height="8"
					viewBox="0 0 16 8"
				>
					<g fill="#333" fillRule="evenodd">
						<rect width="16" height="2" rx="1" />
						<rect width="16" height="2" y="6" rx="1" />
					</g>
				</svg>
			</div>
			<h1>Share Flock</h1>
			<div
				className="search-icon"
				onClick={() => props.openSearchModal()}
			>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					width="23"
					height="24"
					viewBox="0 0 23 24"
				>
					<g fill="none" fillRule="nonzero" stroke="#333">
						<path
							strokeWidth="2"
							d="M2.31 6.922A3 3 0 0 0 1 9.401V20a3 3 0 0 0 3 3h14.286a3 3 0 0 0 3-3V9.401a3 3 0 0 0-1.31-2.479l-7.143-4.87a3 3 0 0 0-3.38 0L2.31 6.922z"
						/>
						<path
							fill="#333"
							strokeWidth="1.3"
							d="M10.539 8C8.036 8 6 10.008 6 12.476c0 2.467 2.036 4.475 4.539 4.475a4.556 4.556 0 0 0 2.925-1.056l2.052 2.023a.284.284 0 0 0 .4 0 .277.277 0 0 0 0-.395l-2.042-2.015a4.424 4.424 0 0 0 1.204-3.032c0-2.468-2.036-4.476-4.539-4.476zm-3.972 4.476c0-2.16 1.782-3.917 3.972-3.917s3.972 1.757 3.972 3.917c0 2.159-1.782 3.916-3.972 3.916s-3.972-1.757-3.972-3.916z"
						/>
					</g>
				</svg>
			</div>
		</div>
		<hr />
	</header>
);

const mapDispatchToProps = dispatch => ({
	openSideNav: () => dispatch(OpenModalAction('SIDE_NAV_MODAL')),
	openSearchModal: () => dispatch(OpenModalAction('SITEWIDE_SEARCH_MODAL')),
});

const mapStateToProps = state => ({});

const withConnect = connect(
	mapStateToProps,
	mapDispatchToProps
);

export default compose(withConnect)(Header);
