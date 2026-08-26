const fs = require('fs');
const { execFileSync, execSync } = require('child_process');

const LOCKFILE = 'yarn.lock';
const GROMMET_REPOSITORY = 'https://github.com/grommet/grommet.git';
const CHECK_ONLY = process.argv.includes('--check');

function getLockedCommit() {
  if (!fs.existsSync(LOCKFILE)) return null;

  const lockfile = fs.readFileSync(LOCKFILE, 'utf8');
  const match = lockfile.match(/grommet\/tarball\/stable#([0-9a-f]{40})/);
  return match ? match[1] : null;
}

function getStableCommit() {
  return execFileSync(
    'git',
    ['ls-remote', GROMMET_REPOSITORY, 'refs/heads/stable'],
    { encoding: 'utf8' },
  )
    .trim()
    .split(/\s+/)[0];
}

const lockedCommit = getLockedCommit();
const stableCommit = getStableCommit();

if (lockedCommit === stableCommit) {
  console.log(`yarn.lock already pins grommet at ${stableCommit}`);
  process.exit(0);
}

console.log(
  lockedCommit
    ? `grommet changed from ${lockedCommit} to ${stableCommit}; refreshing yarn.lock`
    : 'grommet is not pinned in yarn.lock; refreshing yarn.lock',
);

if (CHECK_ONLY) process.exit(1);

execSync(
  'rm -rf yarn.lock node_modules && yarn cache clean && yarn install --ignore-engines',
  {
    stdio: 'inherit',
  },
);
execSync('git add yarn.lock', { stdio: 'inherit' });
