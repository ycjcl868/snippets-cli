"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/*
 * @author chaolin.jcl 宜鑫
 * @date 2018/08/18
 * @description
 */
/**
 * Generate Templates
 * @param tmpl
 * @param target
 */
var fs = require("fs");
var path = require("path");
var mkdirp = require("mkdirp");
var util_1 = require("./util");
var generateTmpl = function (tmpl, name, target) {
    var tmplPath = path.resolve(tmpl);
    var tmplFileName = path.basename(tmpl);
    var fileExt = tmplFileName.substring(tmplFileName.indexOf('.'), tmplFileName.lastIndexOf('.'));
    if (!util_1.isExisted(tmplPath)) {
        util_1.logError("no such template file " + tmpl);
        return false;
    }
    var tmplContent = util_1.readFile(tmplPath);
    // {{  }} 替换掉
    var result = tmplContent.replace(/\{\{(.*?)\}\}/g, name);
    var outputFile = path.resolve(target, "" + name + fileExt);
    if (util_1.isExisted(outputFile)) {
        // create dir if not existed
        util_1.logError(target + " file existed");
        return false;
    }
    try {
        mkdirp.sync(path.dirname(outputFile));
        fs.writeFileSync(outputFile, result, 'utf-8');
    }
    catch (e) {
        util_1.logError(name + " " + e + " ");
        return false;
    }
    util_1.logSuccess(name + " generated in ");
    return true;
};
exports.generateTmpl = generateTmpl;
//# sourceMappingURL=generate.js.map