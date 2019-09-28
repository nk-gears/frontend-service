import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { TransitionGroup } from 'react-transition-group';

import SiteWideSearch from '../../components/SiteWideSearch';
import SideNav from '../../components/SideNav';
import { actionSpreader } from '../../utils/commonHelpers';
import { CloseModalAction, CloseAllModalsAction } from './actions';

const getModal = (type, modalProps, closeModal, i, closeAllModals) => {
	switch (type) {
		case 'SITEWIDE_SEARCH_MODAL':
			return (
				<SiteWideSearch
					{...modalProps}
					closeAllModals={closeAllModals}
					closeModal={(...args) => closeModal('SITEWIDE_SEARCH_MODAL', ...args)}
					key={i}
					modalIdx={i}
				/>
			);
		case 'SIDE_NAV_MODAL':
			return (
				<SideNav
					{...modalProps}
					closeAllModals={closeAllModals}
					closeModal={(...args) => closeModal('SIDE_NAV_MODAL', ...args)}
					key={i}
					modalIdx={i}
				/>
			);
		default:
			return null;
	}
};

const ModalController = ({ currentModals, closeAllModals, closeModal }) => (
	<TransitionGroup component={null}>
		<div>
			{currentModals &&
				currentModals.map((x, i) =>
					getModal(x.type, x.props, closeModal, i, closeAllModals)
				)}
		</div>
	</TransitionGroup>
);

const mapStateToProps = state => ({
	currentModals: state.modals.currentModals
});

const mapDispatchToProps = dispatch => ({
	closeModal: (type, customAction, customParameters) => {
		dispatch(CloseModalAction(type));
		if (customAction) {
			dispatch(actionSpreader(customAction, customParameters));
		}
	},
	closeAllModals: (customAction, customParameters) => {
		dispatch(CloseAllModalsAction);
		if (customAction || customParameters) {
			dispatch(actionSpreader(customAction, customParameters));
		}
	}
});

const withConnect = connect(
	mapStateToProps,
	mapDispatchToProps
);

export default compose(withConnect)(ModalController);
