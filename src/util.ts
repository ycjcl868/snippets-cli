/*
 * @author chaolin.jcl 宜鑫
 * @date 2018/08/18
 * @description
 */
import * as fs from 'fs';
import * as path from 'path';
import chalk from 'chalk';
import * as mkdirp from 'mkdirp';

const readFile = (filePath: string) => {
  return fs.readFileSync(filePath, 'utf-8').replace(/^\ufeff/, '');
}

const writeFile = (filePath: string) => {
  if (!fs.existsSync(filePath)) {

  } else {
    // 存在该文件了
    throw new Error(`${filePath} existed !!!`);
  }
  mkdirp.sync(path.dirname(filePath));
}

const isExisted = (configFile: string) => {
  try {
    return fs.statSync(configFile).isFile();
  } catch (err) {
    if (err.code === 'ENOENT') {
      return false;
    }
    throw err;
  }
}

const logSuccess = (msg: string) => {
  console.log(`${chalk.black.bgGreen('SUCCESS')}: ${msg}`);
}
const logError = (msg: string) => {
  console.log(`${chalk.black.bgRed('ERROR')}: ${msg}`);
}

export {
  readFile,
  writeFile,
  isExisted,
  logSuccess,
  logError,
}
