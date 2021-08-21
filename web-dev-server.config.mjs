import json from '@rollup/plugin-json';
import { rollupAdapter } from '@web/dev-server-rollup';

export default {
  open: true,
  nodeResolve: true,
  watch: true,
  appIndex: 'src/index.html',
  // tell the server to serve json files as js
  mimeTypes: {
    '**/*.json': 'js',
  },
  plugins: [rollupAdapter(json())],
};
