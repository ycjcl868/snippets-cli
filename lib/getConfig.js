"use strict";
/*
 * @author chaolin.jcl 宜鑫
 * @date 2018/08/18
 * @description
 */
Object.defineProperty(exports, "__esModule", { value: true });
var debug = require("debug");
var path = require("path");
var stripComments = require("strip-json-comments");
var requireUncached = require("require-uncached");
var util_1 = require("./util");
// config files
var CONFIG_FILES = [
    '.snippetrc.js',
    '.snippetrc.json',
    '.snippetrc',
];
/**
 * get Config file
 * @param dir current dir
 */
var getConfigFromDir = function (dir) { return CONFIG_FILES.map(function (file) { return path.join(dir, file); }).find(util_1.isExisted) || null; };
exports.getConfigFromDir = getConfigFromDir;
/**
 * load JSON file config
 * @param filePath
 */
var loadJSONFile = function (filePath) {
    var debugJSON = debug('debugJSON');
    debugJSON("Loading JSON config file: " + filePath);
    try {
        return JSON.parse(stripComments(util_1.readFile(filePath)));
    }
    catch (e) {
        debugJSON("error read JSON " + filePath);
        e.message = "Cannot read config file: " + filePath + ", Error: " + e.message;
        throw e;
    }
};
/**
 * loadJSFile
 * @param filePath
 */
var loadJSFile = function (filePath) {
    var debugJS = debug('debugJS');
    debugJS("Loading JSON config file: " + filePath);
    try {
        return requireUncached(filePath);
    }
    catch (e) {
        debugJS("error read JS File " + filePath);
        e.message = "Cannot read config file: " + filePath + ", Error: " + e.message;
        throw e;
    }
};
/**
 * load Legacy
 * @param filePath
 */
var loadLegacyFile = function (filePath) {
    var debugLegacy = debug('debugLegacy');
    debugLegacy("Loading Legacy config file: " + filePath);
    var yaml = require('js-yaml');
    try {
        return yaml.safeLoad(stripComments(util_1.readFile(filePath))) || {};
    }
    catch (e) {
        debugLegacy("error read Legacy File " + filePath);
        e.message = "Cannot read config file: " + filePath + ", Error: " + e.message;
        throw e;
    }
};
/**
 * loadConfig file
 * @param filePath
 */
var loadConfigFile = function (filePath) {
    var config;
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
};
exports.loadConfigFile = loadConfigFile;
//# sourceMappingURL=getConfig.js.map