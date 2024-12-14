// 引入翻译方法
const { createTranslate } = require('./auto-i18n-webpack/translate');
console.log(createTranslate);
const path = require('path');

// 翻译的目标配置
const target = {
  path: path.resolve(__dirname, './lang'), // 翻译的结果放在哪个目录中
  lang: ['en'], // 要翻译出来的语言
};
// 翻译的源内容配置
const source = {
  path: path.resolve(__dirname, './lang/zh.json'), // 根据哪个中文配置文件来生成对应的国际化语言配置文件
};

// 执行该方法后翻译结果会自动创建/修改到指定的目录中
createTranslate(target, source);
