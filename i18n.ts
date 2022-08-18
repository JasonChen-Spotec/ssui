/* eslint-disable global-require */
const fs = require('fs');
const colors = require('colors');
const glob = require('glob');
const path = require('path');
const forEach = require('lodash/forEach');
const endsWith = require('lodash/endsWith');
const find = require('lodash/find');
const zhCNMessageMap = require('./packages/ec-common/src/intl/messages/index').default;

function resolveCwd(...args: any[]) {
  args.unshift(process.cwd());
  return path.join(...args);
}

const getMessagesFilePaths: () => Promise<string[]> = () =>
  new Promise((resolve, reject) => {
    glob('./src/shared/intl/messages/**/*.ts', { dot: true }, (error: any, filePath: string[]) =>
      error ? reject(error) : resolve(filePath),
    );
  });

const checkI18n = () => {
  getMessagesFilePaths().then((filePaths) => {
    const allMessagesMap: Record<string, string> = {};
    const messagefilePaths = filePaths.filter((filePath) => !endsWith(filePath, 'index.ts'));
    messagefilePaths.forEach((filePath) => {
      // eslint-disable-next-line import/no-dynamic-require
      const mesageMap = require(resolveCwd(filePath)).default;
      forEach(mesageMap, (value: any, key: string) => {
        if (allMessagesMap[key]) {
          console.log(colors.red(`i18n ${key} Already defined`));
        }

        if (find(allMessagesMap, { defaultMessage: value.defaultMessage })) {
          console.log(colors.red(`i18n ${value.defaultMessage} Already defined`));
        }
      });
      Object.assign(allMessagesMap, mesageMap);
    });
  });
};

const buildI18n = () => {
  const messagesObject: Record<string, string> = {};
  forEach(zhCNMessageMap, (value: { id: string; defaultMessage: string }) => {
    messagesObject[value.id] = value.defaultMessage;
  });

  const content = `${JSON.stringify(messagesObject, null, 2)}\n`;

  !fs.existsSync('src') && fs.mkdirSync('src/locales');
  // !fs.existsSync('src/locales/en-US.json') && fs.writeFileSync('src/locales/en-US.json', '');
  fs.writeFileSync('./src/locales/zh-CN.json', content);
  // fs.writeFileSync('src/locales/en-US.json', content);
  console.log(colors.green('src Compiled successfully'));
};

buildI18n();
// if (process.env.NODE_ENV !== 'production') {
//   console.log('process.env.NODE_ENV', process.env.NODE_ENV);

checkI18n();
// }
