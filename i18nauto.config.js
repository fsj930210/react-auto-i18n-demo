const { resolve } = require('path');
const rootPath = process.cwd();
module.exports = {
  //   input: {
  //     path: resolve('./lang'),
  //     filename: 'zh.json',
  //   },
  translate: {
    on: false, // 要自动翻译，请设置true
    lang: ['en'],
    path: resolve(rootPath, './lang'),
    secretId: '', // 请输入你的腾讯翻译api的用户secretId
    secretKey: '', // 请输入你的腾讯翻译api的用户secretKey
  },
};
