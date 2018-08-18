# snippets-cli
[English Docs](./README.md)

> 在项目中，经常会初始化一些重复的代码片段(例如: Controller/Model/Component/...)，我们也许会新建文件、复制、粘贴、修改名称。

`Snippets-cli` 要做的事，是将这部分重复的初始化工作配置化，用命令去生成。这有利于提高效率，减少重复性工作。


## 快速开始
### 安装
```
$ npm i snippets-cli -D
```

### 配置
1.新建 `.snippetrc` 文件，例如

```js
{
  "snippets": {
    "controller": {
      // 提示信息
      "name": "Create a new controller",
      // 模板所在的相对路径
      "template": "./snippets/controller.js.snippet",
      // 目标生成路径
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

有如下属性：

- `name`: 提示信息
- `template`: **注意：文件名格式是 {自定义名称}.{文件名后缀}.snippet**
- `target`: 目标生成目录

2. 在 `.snippet` 模板文件中，写入你的模板代码，文件名变量用 **{{}}** 代替

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

3. 在 `package.json` 里配置 `script: { 'tpl': 'snippet' }`

### 使用
配置好后，在项目根目录下去执行 `npm run tpl` ，选择相应的模板，输入文件名，就可以生成模板了。

## 截图
![](https://user-images.githubusercontent.com/13595509/44296557-db9c3400-a2f3-11e8-9a30-bc2c66c542d0.png)

## 将要去做的事
- [ ] 插件扩展机制(像 React/Vue/Koa/Express/Eggjs 常用的代码片段，也可以用一些大牛的代码片段)
- [ ] 不仅在前端使用，也可以用在任何一门编程语言上。

## 贡献
`snippets-cli` 现在还只是一个雏形，希望社区一起共建。
