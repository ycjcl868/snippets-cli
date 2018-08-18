"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var inquery = require("inquirer");
var os = require("os");
var generate_1 = require("./generate");
var getConfig_1 = require("./getConfig");
var util_1 = require("./util");
module.exports = function () {
    var cfg = getConfig_1.getConfigFromDir(process.cwd()) || getConfig_1.getConfigFromDir(os.homedir());
    if (!cfg) {
        util_1.logError('Please write a .snippetrc / .snippetrc.json');
        return false;
    }
    var cfgs = getConfig_1.loadConfigFile(cfg);
    var choices = Object.keys(cfgs.snippets).map(function (c) { return ({
        name: cfgs.snippets[c].name,
        value: c,
    }); });
    var promptConfigs = [{
            name: 'snippet',
            type: 'list',
            message: 'Please choose your snippet you want to generate',
            choices: choices,
        }, {
            name: 'name',
            type: 'input',
            message: 'Please input your template filename',
            validate: function (value) {
                var match = value.match(/^[_a-zA-Z][_a-zA-Z0-9]*$/);
                return match ? true : 'Please input right variable name';
            },
        }];
    inquery.prompt(promptConfigs).then(function (_a) {
        var snippet = _a.snippet, name = _a.name;
        var _b = cfgs.snippets[snippet], template = _b.template, target = _b.target;
        generate_1.generateTmpl(template, name, target);
    });
};
//# sourceMappingURL=cli.js.map