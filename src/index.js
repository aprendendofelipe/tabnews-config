import { ask } from './ask.js';
import * as envs from './envs.js';
import * as logger from './logger.js';
import * as test from './tester.js';

const tn = {
  ask,
  envs,
  logger,
  test,
};

export default tn;
export { ask, envs, logger, test };
