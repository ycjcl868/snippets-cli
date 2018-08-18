"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/*
 * @author chaolin.jcl 宜鑫
 * @date 2018/08/18
 * @description
 */
var fs = require("fs");
var path = require("path");
var chalk_1 = require("chalk");
var mkdirp = require("mkdirp");
var readFile = function (filePath) {
    return fs.readFileSync(filePath, 'utf-8').replace(/^\ufeff/, '');
};
exports.readFile = readFile;
var writeFile = function (filePath) {
    if (!fs.existsSync(filePath)) {
    }
    else {
        // 存在该文件了
        throw new Error(filePath + " existed !!!");
    }
    mkdirp.sync(path.dirname(filePath));
};
exports.writeFile = writeFile;
var isExisted = function (configFile) {
    try {
        return fs.statSync(configFile).isFile();
    }
    catch (err) {
        if (err.code === 'ENOENT') {
            return false;
        }
        throw err;
    }
};
exports.isExisted = isExisted;
var logSuccess = function (msg) {
    console.log(chalk_1.default.black.bgGreen('SUCCESS') + ": " + msg);
};
exports.logSuccess = logSuccess;
var logError = function (msg) {
    console.log(chalk_1.default.black.bgRed('ERROR') + ": " + msg);
};
exports.logError = logError;
//# sourceMappingURL=util.js.map