/*
 * @author chaolin.jcl 宜鑫
 * @date 2018/08/18
 * @description
 */

import * as fs from 'fs';
import * as debug from 'debug';
import * as path from 'path';
import * as stripComments from 'strip-json-comments';
import * as requireUncached from 'require-uncached';

import { readFile, isExisted } from './util';

// config files
const CONFIG_FILES = [
  '.snippetrc.js',
  '.snippetrc.json',
  '.snippetrc',
]

/**
 * get Config file
 * @param dir current dir
 */
const getConfigFromDir = (dir: string) => CONFIG_FILES.map(file => path.join(dir, file)).find(isExisted) || null;

/**
 * load JSON file config
 * @param filePath
 */
const loadJSONFile = (filePath: string) => {
  const debugJSON = debug('debugJSON');
  debugJSON(`Loading JSON config file: ${filePath}`);

  try {
    return JSON.parse(stripComments(readFile(filePath)));
  } catch (e) {
    debugJSON(`error read JSON ${filePath}`);
    e.message = `Cannot read config file: ${filePath}, Error: ${e.message}`;
    throw e;
  }
}

/**
 * loadJSFile
 * @param filePath
 */
const loadJSFile = (filePath: string) => {
  const debugJS = debug('debugJS');
  debugJS(`Loading JSON config file: ${filePath}`);

  try {
    return requireUncached(filePath);
  } catch (e) {
    debugJS(`error read JS File ${filePath}`);
    e.message = `Cannot read config file: ${filePath}, Error: ${e.message}`;
    throw e;
  }
}

/**
 * load Legacy
 * @param filePath
 */
const loadLegacyFile = (filePath: string) => {
  const debugLegacy = debug('debugLegacy');
  debugLegacy(`Loading Legacy config file: ${filePath}`);
  const yaml = require('js-yaml');
  try {
    return yaml.safeLoad(stripComments(readFile(filePath))) || {};
  } catch (e) {
    debugLegacy(`error read Legacy File ${filePath}`);
    e.message = `Cannot read config file: ${filePath}, Error: ${e.message}`;
    throw e;
  }
}

/**
 * loadConfig file
 * @param filePath
 */
const loadConfigFile = (filePath: string) => {
  let config;

  switch (path.extname(filePath)) {
    case '.js':
      config = loadJSFile(filePath);
      break;
    case '.json':
      config = loadJSONFile(filePath);
      break;
    default:
      config = loadLegacyFile(filePath);
  }
  return config;
}

export {
  loadConfigFile,
  getConfigFromDir,
}

