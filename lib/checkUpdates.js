/* eslint-disable no-console */

const pkg = require('../package.json');

const getInstalledVersion = ({ name, version }) => {
  const installedVersion = require(`${name}/package.json`).version;
  return version === installedVersion ? false : installedVersion;
};

const getVersionNumber = string => {
  const semver = /[~^><=x]/gi;
  return string.replace(semver, '').trim();
};

const checkUpdates = () => {
  console.log(`\neslint-config-apostrophe:\n
    Checking for eslint-config updates...`);

  const { peerDependencies } = pkg;

  const availableUpdates = {};

  Object.keys(peerDependencies).forEach(dependency => {
    const name = dependency;
    const version = getVersionNumber(peerDependencies[dependency]);
    console.log('version', version)

    const updateAvailable = getInstalledVersion({
      name,
      version
    });
    if (updateAvailable) {
      availableUpdates[name] = updateAvailable;
    }
  });

  if (Object.keys(availableUpdates).length) {
    console.log(`
    Updates available for the following configs: \n
${JSON.stringify(availableUpdates, null, 4)}\n`);
  } else {
    console.log('    🎉 ESLint config is up to date.');
  }
};

module.exports = checkUpdates();
