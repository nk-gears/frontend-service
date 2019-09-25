/**
 * Copyright (C) IvyPods - All Rights Reserved
 * Unauthorized copying of this file, via any medium is strictly prohibited
 * Proprietary and confidential
 *
 * @author Deepank Agarwal (https://github.com/deepank411)
 * File Name: actions.js
 * date: 25-09-2019 10:42:04
 */

import { actionSpreader } from '../../utils/commonHelpers';
import { HELLO } from './constants';

export const testDis = () => actionSpreader(HELLO);
