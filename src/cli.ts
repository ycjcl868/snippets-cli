import * as inquery from 'inquirer';
import * as os from 'os';


import { generateTmpl } from './generate';
import { loadConfigFile, getConfigFromDir } from './getConfig';
import { logError } from './util';

module.exports = () => {
  const cfg = getConfigFromDir(process.cwd()) || getConfigFromDir(os.homedir());
  if (!cfg) {
    logError('Please write a .snippetrc / .snippetrc.json');
    return false;
  }

  const cfgs = loadConfigFile(cfg);

  const choices = Object.keys(cfgs.snippets).map(c => ({
    name: cfgs.snippets[c].name,
    value: c,
  }));

  const promptConfigs = [{
    name: 'snippet',
    type: 'list',
    message: 'Please choose your snippet you want to generate',
    choices,
  }, {
    name: 'name',
    type: 'input',
    message: 'Please input your template filename',
    validate: value => {
      const match = value.match(/^[_a-zA-Z][_a-zA-Z0-9]*$/);
      return match ? true : 'Please input right variable name';
    },
  }]

  inquery.prompt(promptConfigs).then(({ snippet, name }) => {
    const { template, target } = cfgs.snippets[snippet];
    generateTmpl(template, name, target);
  })

}
