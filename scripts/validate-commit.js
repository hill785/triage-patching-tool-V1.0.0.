#!/usr/bin/env node
const fs = require('fs');
const path = require('path');

const commitMessageFile = process.argv[2] || path.join('.git', 'COMMIT_EDITMSG');

try {
  const commitMsg = fs.readFileSync(commitMessageFile, 'utf8').trim();
  const conventionalCommitPattern = /^(feat|fix|chore|refactor|test|docs|style|ci)(\([a-z0-9\-]+\))?: .+/;

  if (!conventionalCommitPattern.test(commitMsg)) {
    console.error('\x1b[31m❌ COMMIT ERROR: Use standard lower prefixes (e.g., feat:, fix:, chore:, test:)\x1b[0m');
    process.exit(1);
  }
  process.exit(0);
} catch (e) {
  process.exit(0); 
}
