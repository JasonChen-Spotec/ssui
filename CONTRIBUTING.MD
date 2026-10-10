## Pull Request

我们会关注所有的 pull request，会 review 以及合并你的代码，也有可能要求你做一些修改或者告诉你我们为什么不能接受这样的修改。

在你发送 Pull Request 之前，请确认你是按照下面的步骤来做的：

1. 基于 [正确的分支](#分支管理) 做修改。

2. 如果你修复了一个 bug 或者新增了一个功能，请确保写了相应的测试，这很重要。

3. 确认所有的测试是通过的 `npm run test`。


## 开发流程

在你 clone 代码并且使用 `npm run init` 安装完依赖后，你还可以运行下面几个常用的命令：

1. `npm start` 在本地运行 `assui` 网站。

2. `npm run test` 运行测试。

3. `npm run build` 构建编译。

各包的 `lib/` 和 `es/` 是生成目录，不再提交到 Git。本地开发需要这些文件时，先安装依赖并运行构建；不要使用 `git add -f` 提交产物。

使用 `yarn pub` 选择版本并触发 CI 构建、测试和发布。首次配置、日常操作及失败恢复见 [npm 发布流程](docs/npm-release.md)。
