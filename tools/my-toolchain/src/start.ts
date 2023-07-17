#!/usr/bin/env node

import * as colors from 'colors';
import * as child_process from 'child_process';

console.log('Start Invoking my-toolchain....');

child_process.execSync('tsc', { stdio: 'inherit' });

console.log(colors.green('Success!'));
