---
title: 使用 Circle CI 自動部署到 Github Pages
tags:
  - circle ci
  - gatsby
  - github
date: 2018-06-06 16:40:00
---

什麼是 Circle CI？簡單的說就是可以監測程式碼異動後自動跑指令的工具。傳統上在本機開發時，程式碼建置、部署通常都是自己按 IDE 或打指令。當環境不只一個，每天要處理建置、部署是非常繁瑣的事。這時候可以出動 Circle CI 來當我們的左右手，減少重複性的動作以節省時間。

## 與 Github 串接

Circle CI 提供了超級簡單的步驟，只要滑鼠點一點一行指令碼都不用寫就可以完成與 Github 串接的設定。

打開 Circle CI 官網，點擊「Start Building For Free」。

![Circle CI Homepage](https://i.imgur.com/y40K8aT.png)

選擇使用 Github 帳號登入

![Sign Up With GitHub](https://i.imgur.com/5uduHrt.png)

允許讀取權限

![](https://i.imgur.com/w9bc7El.png)

點擊 Add Projects

![](https://i.imgur.com/IyTWF7C.png)

點擊「Setup Project」選擇要自動部署的專案，這邊我選擇「blog」

Operating System 選擇 Linux
Language 選擇 Node

![](https://i.imgur.com/G5NANoV.png)

依照底下的 Next Steps 步驟到專案底下建立 `.cycleci/config.yml` 設定檔

```yaml=
# Javascript Node CircleCI 2.0 configuration file
#
# Check https://circleci.com/docs/2.0/language-javascript/ for more details
#
version: 2
jobs:
  build:
    docker:
      # specify the version you desire here
      - image: circleci/node:7.10

      # Specify service dependencies here if necessary
      # CircleCI maintains a library of pre-built images
      # documented at https://circleci.com/docs/2.0/circleci-images/
      # - image: circleci/mongo:3.4.4

    working_directory: ~/repo

    steps:
      - checkout

      # Download and cache dependencies
      - restore_cache:
          keys:
          - v1-dependencies-{{ checksum "package.json" }}
          # fallback to using the latest cache if no exact match is found
          - v1-dependencies-

      - run: yarn install

      - save_cache:
          paths:
            - node_modules
          key: v1-dependencies-{{ checksum "package.json" }}

      # run tests!
      - run: yarn test
```

由於我沒有寫測試程式，不跑 37 行的 `yarn test` 改用 `yarn run build`，如果建置沒出錯就使用 `yarn run deploy` 部署。

```yaml=
      # run tests!
      # - run: yarn test
      - run: yarn run build
      - deploy:
          command: |
            git config --global user.email $GH_EMAIL
            git config --global user.name $GH_NAME
            yarn run deploy
```

開啟 `package.json` 寫好 deploy script，安裝 `gh-pages` 將建置後 public 底下的檔案 commit 到 `gh-pages` 分支

```bash
npm i gh-pages -D
```

`package.json`

```json=
{
  ...
  "scripts": {
    "start": "gatsby develop",
    "build": "gatsby build",
    "deploy":
      "gatsby build --prefix-paths && gh-pages -d public -m \"Automated deployment to GitHub Pages: ${CIRCLE_SHA1}\""
  }
}
```

## 設定 User Key

設定好 `config.yml` `package.json` commit 後先別急著 push，否則 Circle CI 建置時可能會出現以下的錯誤。

```
ERROR: The key you are authenticating with has been marked as read only.
fatal: Could not read from remote repository.
```

原因是先前用滑鼠按一按授權給 Circle CI 讀取的 Key 是唯讀的。只能讀取我們的 Repository 但不能 push。如果要在 Circle CI 上處理用我們的身份 commit、push 需要設定 User Key。

到 Settings > Projects > 找到專案點右邊的齒輪

![](https://i.imgur.com/SqKLOnS.png)

到 Permissions 底下的 Checkout SSH Keys 裡面有 Add User Key 框框，點擊「Authorize With GitHub」

![](https://i.imgur.com/DTKinx1.png)

允許權限

![](https://i.imgur.com/DKJ1FKi.png)

點擊「Create and add <username> user key」

![](https://i.imgur.com/kdmpgZh.png)

系統會自動產生新的 User Key

![](https://i.imgur.com/s1OwCtP.png)

> 記得要保護好自己的 Key 不要公開分享給其他人，圖片範例裡面的 Key 已經被我置換掉了。

回到剛剛 Project Settings 頁面，選擇 BUILD SETTINGS 底下的 Environment Variables。加上 commit 使用的 `GH_EMAIL` `GH_NAME`

![](https://i.imgur.com/oZD2Gdi.png)

以上設定完成後 push 專案，Circle CI 會自動偵測異動並依照 `config.yml` 設定檔建置、部署到 `gh-pages` 分支。

參考資料

* [Circle CI](https://circleci.com/)
* [GitHub and Bitbucket Integration](https://circleci.com/docs/2.0/gh-bb-integration/)
* [Deploying to GitHub Pages using Circle CI 2.0](https://blog.frederikring.com/articles/deploying-github-pages-circle-ci/)
