const rollupJson = require('@rollup/plugin-json');
const {fromRollup} = require('@web/dev-server-rollup');

const json = fromRollup(rollupJson);

module.exports = {
  open: true,
  nodeResolve: true,
  watch: true,
  appIndex: 'src/index.html',
  // tell the server to serve json files as js
  mimeTypes: {
    '**/*.json': 'js',
  },
  plugins: [json({})],
};
