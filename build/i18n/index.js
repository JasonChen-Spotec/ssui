import fs from 'fs';
import colors from 'colors';
import glob from 'glob';
import flatten from 'lodash/flatten';
import chokidar from 'chokidar';
import { transform } from '@babel/core';
import resolveCwd from '../sections/resolveCwd';

const TARGET_DIRETORY = 'src/**/*.js';

const getFilePaths = () => new Promise((resolve, reject) => {
  glob(TARGET_DIRETORY, { dot: true }, (error, path) => (error ? reject(error) : resolve(path)));
});

const readFile = path => new Promise((resolve, reject) => {
  fs.readFile(path, (error, code) => (error ? reject(error) : resolve(code)));
});

const extract = path => new Promise((resolve, reject) => {
  try {
    return readFile(path).then(code => resolve(transform(code, {
      plugins: [
        'react-intl',
        '@babel/plugin-transform-runtime',
        '@babel/plugin-proposal-class-properties'
      ],
      presets: ['@babel/preset-env', '@babel/preset-react']
    }).metadata['react-intl'].messages), error => reject(error));
  } catch (error) {
    process.stderr.write(`Error transforming file: ${path}\n${error}`);
    return reject(error);
  }
});

const sortAndStringify = (messages) => {
  const sortMessages = flatten(messages)
    .sort((a, b) => a.id.localeCompare(b.id));
  const messagesObject = Object.assign(...sortMessages.map(d => ({ [d.id]: d.defaultMessage })));
  return messagesObject;
};

const toJSON = msgObject => JSON.stringify(msgObject, null, 2)
.replace(/\n {2}\}/g, ',\n  }')
.replace(/\}\n\]/g, '},\n]');

const getContent = msgObject => `/* eslint-disable */\nexport default ${toJSON(msgObject)}`;

const filePath = `src/locales/zh-CN.js`;

const generateI18nFiles = msgObject => fs.writeFileSync(filePath, getContent(msgObject))

const compileI18n = () => {
  // 1) Get all file paths.
  getFilePaths()
    // 2) Extract all messages into an array.
    .then(filePaths => Promise.all(filePaths.map(path => extract(path))))
    // 3) Sort and stringify the messages.
    .then(messages => sortAndStringify(messages))
    // 4) Generate i18n translation files by the settings of locals.
    .then(messagesObject => {
      generateI18nFiles(messagesObject)
      console.log(colors.green(('i18n Compiled successfully')))
    });
};

compileI18n();

const watchOptions = {
  ignoreInitial: true,
  persistent: true,
  followSymlinks: false,
  atomic: false,
  alwaysStat: true,
  ignorePermissionErrors: true,
};

chokidar.watch(resolveCwd('src/shared/intl/messages'), watchOptions).on('change', (event, path) => {
  compileI18n();
});
