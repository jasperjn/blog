---
title: 修改 git init 預設範本
date: 2017-04-14 17:20:00
tags: git
---

`git init` 指令用來將工作區加入 git 版本控管，其實就是在工作目錄底下幫我們產生 `.git` 資料夾。如果想修改預設產生 `.git` 資料夾內的檔案或增加內容，可以參考接下來的說明。

<!--more-->

## 使用 Template Directory

根據[官方文件](https://git-scm.com/docs/git-init#_template_directory)指出，執行 `git init` 時可以多帶 `--template` 參數指定 git 要使用的範本目錄。也就是說 `.git` 裡面的結構是根據範本來產生的，而範本可以自訂。預設範本路徑位於 `/usr/share/git-core/templates`，但我卻是在 `/usr/local/git/share/git-core/templates` 找到這個目錄。推測是安裝 Source Tree 或是 Xcode Command Line Tools 的關係路徑改變了。

{% asset_img templates.png git template path %}

## 修改範本內容

比較常使用的情境是，希望在 `git init` 時設定 lcoal config 而不是採用 global config 內的設定。或是比較進階的想套上已經寫好的 [Hook](https://git-scm.com/book/en/v2/Customizing-Git-Git-Hooks)。都可以修改預設的範本來幫我們產生，省去每次產生新的 git repository 時要一直複製貼上。例如我想在剛產生的 git repository 用另外的身份。可以在剛剛的範本目錄中新增一個名稱叫 `config` 的檔案，寫上想要使用的 `user.name` 與 `user.email`

```text
[user]
        name = ANOTHER_USER_NAME
        email = ANOTHER_USER_NAME@domain.com
```

這樣每次透過 `git init` 產生的 `.git` 目錄底下便會有這個設定檔，而不是採用 global `.gitconfig` 的設定。如果不使用範本，相當於每次初始化 repository 時要重複下面的步驟

```bash
git init
git config user.name "ANOTHER_USER_NAME"
git config user.email "ANOTHER_USER_NAME@domain.com"
```

善用 template 可以省去重複的步驟，特別是同個環境但不同的 repository 需要各自的設定時，可以自訂對應的 template 再透過 `--template` 參數快速幫我們產生對應的 git 範本。