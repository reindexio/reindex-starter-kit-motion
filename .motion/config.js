/*

  This is your config file, we're working on documenting this better,
  for now we've commented out some of the defaults.

  See: https://motion.io/docs/configuration

*/

var relayPlugin = require('./babelRelayPlugin');

module.exports = {
  port: 3000,

  run: {
    pretty: true
  },

  build: {
    minify: false
  },

  babel: {
    plugins: [relayPlugin]
  },
}
