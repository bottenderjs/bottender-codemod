#!/usr/bin/env node

const path = require('path');
const childProcess = require('child_process');

const transformName = process.argv[2];

if (!transformName) {
  console.error('transform name is required.');
  process.exit(1);
}

const args = process.argv.slice(3).join(' ');

// jscodeshift -t <codemod-script> <file>
const cp = childProcess.exec(
  `npx jscodeshift -t ${path.resolve(
    __dirname,
    '..',
    'transforms',
    `${transformName}.js`
  )} ${args}`
);

cp.stdout.pipe(process.stdout);
cp.stderr.pipe(process.stderr);
