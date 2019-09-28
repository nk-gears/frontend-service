import React from 'react';
import GenericModal from '../GenericModal';

const duration = 300;

const SideNav = props => (
	<GenericModal
		closeModal={() => props.closeModal()}
		customPosition
		customStyle={{
			top: '0',
			height: '100vh',
			width: '100vw',
			transition: `left ${duration}ms ease-in`,
			left: '-100vw',
		}}
		transitionStyles={{
			entering: { left: '-100vw' },
			entered: { left: '0' },
			exiting: { left: '-100vw' },
			exited: { left: '-100vw' },
		}}
	>
		SideNav
		<div onClick={() => props.closeModal()}>close</div>
	</GenericModal>
);

export default SideNav;
