import * as merge from 'deepmerge';
import { ENVIRONMENT as DEFAULT_ENVIRONMENT } from './environment.default';

export const ENVIRONMENT = merge(DEFAULT_ENVIRONMENT, {
  FOO: 'Hello lovely UAT testers'
});
