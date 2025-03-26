---
home: true
heroImage: /images/home.png
heroText: 我的项目文档
tagline: 基于 VuePress 的项目文档网站
actions:
  - text: 快速上手
    link: /guide/getting-started.html
    type: primary
  - text: 项目简介
    link: /guide/introduction.html
    type: secondary
features:
  - title: 简洁至上
    details: 以 Markdown 为中心的项目结构，以最少的配置帮助你专注于写作。
  - title: Vue 驱动
    details: 享受 Vue 的开发体验，可以在 Markdown 中使用 Vue 组件，又可以使用 Vue 来开发自定义主题。
  - title: 高性能
    details: VuePress 会为每个页面预渲染生成静态的 HTML，同时，每个页面被加载的时候，将作为 SPA 运行。
  - title: 主题
    details: 提供了一个开箱即用的默认主题。你也可以挑选一个社区主题，或者创建一个你自己的主题。
  - title: 插件
    details: 灵活的插件API，使得插件可以为你的站点提供许多即插即用的功能。
  - title: 打包工具
    details: 推荐的打包工具是 Vite ，但也同样支持使用 Webpack 。选一个你喜欢的来使用吧！
footer: MIT Licensed | Copyright © 2018-present Gardenia
---

# 快速上手

::: warning 注意
VuePress v2 目前仍处于 RC (Release Candidate) 阶段。你已经可以用它来构建你的站点，但是它的配置和 API 还不够稳定，有可能会发生一些微小的 Breaking Changes 。因此，在每次更新 RC 版本之后，请一定要仔细阅读 [更新日志](https://github.com/vuepress/core/blob/main/CHANGELOG.md)。
:::

## 安装

### 依赖环境

- [Node.js v18.19.0+](https://nodejs.org/)
- 包管理器，如 [pnpm](https://pnpm.io/zh/)、[yarn](https://classic.yarnpkg.com/en/)、[npm](https://www.npmjs.com/) 等。

::: tip 提示
- 使用 [pnpm](https://pnpm.io/zh/) 时，你需要安装 `vue` 作为 peer-dependencies 。
- 使用 [yarn 2+](https://yarnpkg.com/) 时，你需要在 [`.yarnrc.yml`](https://yarnpkg.com/configuration/yarnrc#nodeLinker) 文件中设置 `nodeLinker: 'node-modules'` 。
:::

### 创建项目

这一章节会帮助你从头搭建一个简单的 VuePress 文档网站。

- 创建并进入一个新目录

```bash
mkdir vuepress-starter
cd vuepress-starter
```

- 初始化项目

::: code-tabs
@tab npm
```bash
git init
npm init
```

@tab yarn
```bash
git init
yarn init
```

@tab pnpm
```bash
git init
pnpm init
```
:::

- 安装 VuePress

::: code-tabs
@tab npm
```bash
# 安装 vuepress
npm install -D vuepress@next
# 安装打包工具和主题
npm install -D @vuepress/bundler-vite@next @vuepress/theme-default@next
# 安装 sass-embedded
npm install -D sass-embedded
```

@tab yarn
```bash
# 安装 vuepress
yarn add -D vuepress@next
# 安装打包工具和主题
yarn add -D @vuepress/bundler-vite@next @vuepress/theme-default@next
# 安装 sass-embedded
yarn add -D sass-embedded
```

@tab pnpm
```bash
# 安装 vuepress 和 vue
pnpm add -D vuepress@next vue
# 安装打包工具和主题
pnpm add -D @vuepress/bundler-vite@next @vuepress/theme-default@next
# 安装 sass-embedded
pnpm add -D sass-embedded
```
:::

- 创建 `docs` 目录和 `docs/.vuepress` 目录

```bash
mkdir docs
mkdir docs/.vuepress
```

- 创建 VuePress 配置文件 `docs/.vuepress/config.js`

```ts
import { viteBundler } from '@vuepress/bundler-vite'
import { defaultTheme } from '@vuepress/theme-default'
import { defineUserConfig } from 'vuepress'

export default defineUserConfig({
  bundler: viteBundler(),
  theme: defaultTheme(),
})
```

- 创建你的第一篇文档

```bash
echo '# 你好！' > docs/README.md
```

## 目录结构

创建完成后，你项目的目录结构应该是这样的：

```
├─ docs
│  ├─ .vuepress
│  │  └─ config.js
│  └─ README.md
└─ package.json
```

`docs` 目录是你放置 Markdown 文件的地方，它同时也会作为 VuePress 的源文件目录。

`docs/.vuepress` 目录，即源文件目录下的 `.vuepress` 目录，是放置所有和 VuePress 相关的文件的地方。当前这里只有一个配置文件。默认还会在该目录下生成临时文件、缓存文件和构建输出文件。建议你把它们添加到 `.gitignore` 文件中。

::: details 示例 `.gitignore` 文件
```
# VuePress 默认临时文件目录
.vuepress/.temp
# VuePress 默认缓存目录
.vuepress/.cache
# VuePress 默认构建生成的静态文件目录
.vuepress/dist
```
:::

## 开始使用 VuePress

### 启动开发服务器

你可以在 `package.json` 中添加一些 [scripts](https://classic.yarnpkg.com/zh-Hans/docs/package-json#toc-scripts) ：

```json
{
  "scripts": {
    "docs:dev": "vuepress dev docs",
    "docs:build": "vuepress build docs"
  }
}
```

运行 `docs:dev` 脚本可以启动开发服务器:

::: code-tabs
@tab npm
```bash
npm run docs:dev
```

@tab yarn
```bash
yarn docs:dev
```

@tab pnpm
```bash
pnpm docs:dev
```
:::

VuePress 会在 [http://localhost:8080](http://localhost:8080) 启动一个热重载的开发服务器。当你修改你的 Markdown 文件时，浏览器中的内容也会自动更新。

::: tip 提示
- 如果打开网页之后发现页面乱码，可能是 Markdown 文件当前的文件编码不是 UTF-8 ，这时需要你回到 IDE 进行修改并保存。
:::

### 构建你的网站

运行 `docs:build` 脚本可以构建你的网站：

::: code-tabs
@tab npm
```bash
npm run docs:build
```

@tab yarn
```bash
yarn docs:build
```

@tab pnpm
```bash
pnpm docs:build
```
:::

在 `docs/.vuepress/dist` 目录中可以找到构建生成的静态文件。你可以查看 [部署](https://vuepress.github.io/guide/deployment.html) 来了解如何部署你的网站。

## 进一步了解 VuePress

现在，你应该已经有了一个简单可用的 VuePress 网站。但你可能仍需要阅读后续的指南来更加了解 VuePress 。

如需进一步了解 VuePress ，可以前往 [配置](https://vuepress.github.io/guide/configuration.html) 了解更多配置文件相关的内容。
