#!/usr/bin/env node
import { program } from 'commander';
import { createRequire } from 'node:module';

const packageJson = createRequire(import.meta.url)('@tabnews/config/package.json');

const tn = program
  .name('tn')
  .version(packageJson.version, '-v, --version', 'Output the current version of tn')
  .description('TabNews command line interface')
  .configureHelp({ showGlobalOptions: true, sortSubcommands: true, sortOptions: true });

tn.parse();
