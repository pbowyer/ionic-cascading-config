import * as merge from 'deepmerge';
import { ENVIRONMENT as DEFAULT_ENVIRONMENT } from './environment.default';

export const ENVIRONMENT = merge(DEFAULT_ENVIRONMENT, {
  FOO: 'ALWAYS SAY DEV',
  BAR: [35],
  BAZ: {
    alpha: {
      gamma: 'Type checking would prevent this change from number to string',
    }
  }
});
