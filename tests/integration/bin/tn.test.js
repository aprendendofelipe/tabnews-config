import { execSync } from 'node:child_process';

import packageJson from 'package.json';

describe('tn', () => {
  it('should display the current version of tn using the -v flag', () => {
    const output = execSync('tn -v').toString().trim();

    expect(output).toContain(packageJson.version);
  });

  it('should display the help message using the --help flag', () => {
    const output = execSync('tn --help').toString().trim();

    expect(output).toContain('Usage: tn [options]');
    expect(output).toContain('TabNews command line interface');
  });
});
