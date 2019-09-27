import { OPEN_MODAL, CLOSE_MODAL, CLOSE_ALL_MODALS } from './constants';
import { actionSpreader } from '../../utils/commonHelpers';

export const OpenModalAction = (type, props) =>
	actionSpreader(OPEN_MODAL, { type, props });

export const CloseModalAction = type => actionSpreader(CLOSE_MODAL, type);

export const CloseAllModalsAction = () => actionSpreader(CLOSE_ALL_MODALS);
