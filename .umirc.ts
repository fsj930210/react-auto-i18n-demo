import { defineConfig } from 'umi';
import path from 'path';
const AutoI18nPlugin = require('./auto-i18n-webpack/plugin');
const root = process.cwd();
export default defineConfig({
  nodeModulesTransform: {
    type: 'all',
  },
  // publicPath: '/i18n/',
  routes: [{ path: '/', component: '@/pages/index' }],
  fastRefresh: {},
  alias: {
    '@': path.resolve(root, 'src'),
  },
  chainWebpack(config) {
    config.module
      // 这里设置loader，把js文件和vue文件里的script标签内的脚本设置经过i18n-auto-webpack/loader的编译，实现转译中文为vue-i18n提供的i18n.tc方法
      .rule('js')
      .enforce('post')
      .use('i18n-auto-loader')
      .loader('./auto-i18n-webpack/loader')
      .options({
        name: 'i18next.t',
        // alias: ['$t', /\.\$t$/],
        watch: true,
        dependency: {
          name: 'i18next',
          value: 'i18next',
        },
      })
      .before('babel-loader')
      .end();
    // 这里设置仅在本地开发环境下生成国际化词条配置文件
    if (process.env.NODE_ENV === 'development') {
      config.plugin('i18n-auto-webpack').use(AutoI18nPlugin, [
        {
          watch: true,
        },
      ]);
    }
  },
});
