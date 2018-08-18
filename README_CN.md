# snippets-cli
> 在项目中，经常会初始化一些重复的代码片段(例如: Controller/Model/Component/...)，我们也许会新建文件、复制、粘贴、修改名称。

`Snippets-cli` 要做的事，是将这部分重复的初始化工作配置化，用命令去生成。


## 快速开始
### 安装
```
$ npm i snippets-cli -D
```

### 配置
1.新建 `.snippetrc` 文件，例如

```json
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
- `template`: ** 注意：文件名格式是 {自定义名称}.{文件名后缀}.snippet **
- `target`: 目标生成目录

2. 在 `package.json` 里配置 `script: { 'tpl': 'snippet' }`

### 使用
配置好后，在项目根目录下去执行 `npm run tpl` ，选择相应的模板，输入文件名，就可以生成模板了。

## 截图
![](https://user-images.githubusercontent.com/13595509/44296557-db9c3400-a2f3-11e8-9a30-bc2c66c542d0.png)