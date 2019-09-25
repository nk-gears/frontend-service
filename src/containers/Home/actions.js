import { actionSpreader } from '../../utils/commonHelpers';
import { HELLO } from './constants';

export const testDis = () => actionSpreader(HELLO);
