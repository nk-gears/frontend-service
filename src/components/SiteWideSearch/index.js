import React from 'react';
import GenericModal from '../GenericModal';

const duration = 300;

const SiteWideSearch = props => (
	<GenericModal
		closeModal={() => props.closeModal()}
		customPosition
		customStyle={{
			top: '0',
			height: '100vh',
			width: '100vw',
			transition: `right ${duration}ms ease-in`,
			right: '-100vw',
		}}
		transitionStyles={{
			entering: { right: '-100vw' },
			entered: { right: '0' },
			exiting: { right: '-100vw' },
			exited: { right: '-100vw' },
		}}
	>
		test dasdasd
		<div onClick={() => props.closeModal()}>close</div>
	</GenericModal>
);

export default SiteWideSearch;
