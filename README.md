# snippets-cli

> You can use the latest VSCode [project-level-snippets](https://code.visualstudio.com/updates/v1_28#_project-level-snippets)

![travis](https://img.shields.io/travis/ycjcl868/snippets-cli.svg) [![npm](https://img.shields.io/npm/v/snippets-cli.svg)](https://www.npmjs.com/package/snippets-cli) ![downloads](https://img.shields.io/npm/dw/snippets-cli.svg
)

[中文文档](./README_CN.md)
>  In the project, some repeated code snippets are often initialized (for example: Controller/Model/Component/...), we may create new files, copy, paste, and modify names.

The thing to do with `Snippets-cli` is to configure this part of the repeated initialization work and generate it with commands. It will help improve efficiency, reduce the repeated work.

## Quick start
### Installation
```
$ npm i snippets-cli -D
```

### Configuration
1. Create a new `.snippetrc` file, for example

```js
{
  "snippets": {
    "controller": {
      // prompt message
      "name": "Create a new controller",
      // The relative path where the template is located
      "template": "./snippets/controller.js.snippet",
      // target generation path
      "target": "./controller"
    },
    "model": {
      "name": "新建模型",
      "template": "./snippets/model.js.snippet",
      "target": "./model"
    },
    "component": {
      "name": "新建组件",
      "template": "./snippets/component.js.snippet",
      "target": "./component"
    },
    ...
  }
}
```

the following properties:

- `name`: prompt message
- `template`: **Note: The file name format is {custom name}.{filename suffix}.snippet**
- `target`: target generation directory

2. In the `.snippet` template file, write your template code, and replace the file name variable with **{{}}**

```js
import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class {{ }} extends Component {
  static propTypes = {

  }
  render() {
    return (
      <div>

      </div>
    );
  }
}
```

3. Configure `scripts: { 'tpl': 'snippets' } in `package.json`

### Usage
After configuration, execute `npm run tpl` in the project root directory, select the corresponding template, and enter the file name to generate the template.

## Screenshot
![](https://user-images.githubusercontent.com/13595509/44296557-db9c3400-a2f3-11e8-9a30-bc2c66c542d0.png)

## TODO
 - [ ] add test cases
 - [ ] plugin to extend the fragment (eg React / Vue / Koa / Express / Eggjs snippets, or use others' great code snippets)
 - [ ] not only in FE, it can be used in any programming language

## Changelog
- 2018.8.19 v1.0.0

## Contribution
`snippets-cli` is still just a prototype, hope the community will build together.
