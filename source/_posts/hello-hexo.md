---
title: hello hexo
date: 2016-08-04 17:02:14
tags:
---
# 建立自己的 blog

## 安裝 hexo

安裝 hexo 前置作業需要先安裝 Node.js、Git

``` bash
$ sudo npm install -g hexo-cli
```

安裝完成後，在需要建立專案的地方打開 terminal 輸入 `hexo init <專案名稱>`，hexo 指令就會自動幫你建立起 hexo 的專案結構
例如建立 blog 專案

``` bash
$ hexo init blog
```

接著進入專安資料夾初始化 git 儲存庫與安裝 hexo 需要的套件 

``` bash
$ cd blog # 進入專案資料夾
$ git init # 初始化 git 版本控管儲存庫
$ npm install # 安裝 hexo 需要的套件
```

接下來你可以開始使用 markdown 格式寫文章，使用 `hexo new <文章名稱>` 產生新的文章
``` bash
$ hexo new 'hello hexo' # 產生的檔案會在 /source/_posts/hello-hexo.md
```

## 預覽

如果想要預覽產生出的 blog 長什麼樣子，使用 `hexo generate` 指令會幫我們把 .md 檔案轉換成靜態的 .html 檔案
執行完畢後輸入 `hexo server` 會建立本機伺服器，可以讓我們預覽產生出來的 blog 與文章。

``` bash
$ hexo generate # 產生網頁靜態檔案
$ hexo server # 建立本機伺服器
``` 

## 部署

部署 hexo 到免費的 GitHub Pages

部署之前，需要先在 GitHib 建立一個名稱為 <username>.github.io 的 repo
這個 repo 就是網站的根目錄，建立完成後，先將 repo 的路徑複製起來。

回到 hexo 專案目錄，安裝部署工具 hexo-deployer-git
``` bash
$ npm install hexo-deployer-git --save
```

接著編輯 /_cinfig.yml 檔案
修改網站網址以及設定部署方式

``` yml
# URL
## If your site is put in a subdirectory, set url as 'http://yoursite.com/child' and root as '/child/'
url: http://<username>.github.io/
root: /
permalink: :year/:month/:day/:title/
permalink_defaults:
 ...
# Deployment
## Docs: https://hexo.io/docs/deployment.html
deploy:
  type: git
  repo: https://github.com/<username>/<username>.github.io.git
  branch: master

```

編輯存檔後，執行 `hexo deploy` 指令會自動幫我們部署到剛剛建立的 repo

``` bash
$ hexo deploy # 部署到 git
```

完成！自己的 blog 自己架，立馬到 http://<username>.github.io/ 就可以看到剛剛本機預覽過的 blog 嚕