---
title: Visual Studio Code 使用 Typescript
date: 2016-08-17 11:50:56
tags:
- vscode
- typescript
---

在 Visual Studio Code 開發 Typescript 應用

<!--more-->

初始化 npm

```bash
npm init
```

安裝 typescript typings webpack

```bash
npm install -g typescript typings webpack
```

* typescript: typescript compiler
* typings: typescript 定義檔 (.d.ts) 套件管理員
* webpack: 靜態檔案打包工具，可以將網站多個 js 把打包成單一 js

```bash
tsc --init # 產生 tsconfig.json (TypeScript 設定檔)
```

