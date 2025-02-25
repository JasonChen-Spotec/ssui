import { defineConfig } from 'dumi';
import { resolve } from 'path';

export default defineConfig({
  base: '/ssui',
  publicPath: '/ssui/',
  locales: [{ id: 'zh-CN', name: '中文' }],
  themeConfig: {
    name: 'assui',
    // nav:[
    //   {
    //     title:'assui',
    //     link:'/packages'
    //   }
    // ]
  },
  resolve: {
    docDirs: ['docs'],
    atomDirs: [
      // { type: 'component', dir: 'packages/assui/src/a-select' },
      { type: 'component', dir: 'packages/aa-utils/src' },
      { type: 'component', dir: 'packages/ec-common/src/consts' },
      { type: 'component', dir: 'packages/assui/src' },
    ],
  },
  alias: {
    'aa-utils': resolve(__dirname, 'packages/aa-utils'),
    'assui': resolve(__dirname, 'packages/assui'),
  },
});
