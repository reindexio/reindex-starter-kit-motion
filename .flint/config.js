var plugin = require('./babelRelayPlugin');

module.exports = {
  port: 3000,

  run: {
    pretty: true
  },

  build: {
    minify: false
  },

  babel: {
    plugins: [plugin]
  }
}
