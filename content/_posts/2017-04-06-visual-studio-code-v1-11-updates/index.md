---
title: Visual Studio Code v1.11 更新
date: 2017-04-06 16:52:13
tags:
  - vscode
---

1.11 版本更新重點整理

<!--more-->

## 客製化工作區主題樣式

以後 VS Code 編輯器全部的顏色樣式都可以透過設定檔改變

## 全新的快捷鍵編輯器

習慣使用快捷鍵可以大大的提升效率。全新的快捷鍵編輯器讓你一個字都不用打，按按滑鼠就可以幫你產生設定檔。透過新的快捷鍵編輯器可以更清楚看到目前的快捷鍵設定是 `Default`（預設值）還是 `User`（自定）。當然還是可以直接修改 `keyboinding.json` 檔案設定

## 搜尋速度加快

搜尋預設會參考 `.gitignore` 設定，不搜尋不加入版本控管的檔案

多了兩個 icon 在搜尋時可以選擇要不要套用 `files.exclude` `search.exclude` 設定

## 最大化 Panel

最大化 Panel 視窗，收合會自動恢復上一次開啟的大小

## 保持開啟已刪除的檔案

透過 `workbench.editor.closeOnFileDelete` 設定檔案被刪除時，要不要關閉該檔案已開啟的 editor

## 合併編輯群組

透過 `workbench.action.joinTwoGroups` 指令可以把目前編輯群組往左邊的編輯群組合併

## 視窗巡覽

透過 `workbench.action.navigateLeft` `workbench.action.navigateDown` 切換目前 focus 的區域

## 快捷鍵調整視窗大小

`workbench.action.increaseViewSize` 放大 `workbench.action.decreaseViewSize` 縮小。

> 個人比較常用 `workbench.action.maximizeEditor` 搭配 `workbench.action.focusFirstEditorGroup` `workbench.action.focusSecondEditorGroup` `workbench.action.focusThirdEditorGroup` 來最大化目前編輯的視窗

## 已開啟的檔案不再其他編輯群組開啟

透過 `workbench.editor.revealIfOpen` 設定如果要開啟的檔案已在其他編輯群組開啟了，會自動開啟原本已開啟的編輯視窗。也就是同個檔案不會在其他編輯群組出現。建議可以設成 `true`，減少相同檔案的 tab 數量也可以知道檔案是看到哪一個段落，不用開新的編輯視窗重頭找。

## 文字拖曳改進

拖曳文字時按著 <kbd>Option</kbd> (macOS) <kbd>Ctrl</kbd> (Windows) <kbd>Alt</kbd> (Linux) 可以複製拖曳的文字，而不是搬動他

## 關閉選取文字高亮提示

`editor.occurrencesHighlight` 設定顯示/關閉選取文字出現高亮提示

## 自動猜測檔案編碼

`files.autoGuessEncoding` 設定自動猜測檔案編碼，有可能會猜錯。如果編碼不是 **UTF-8** 建議還是從 `files.encoding` 設定下手

## 自動完成模糊比對

改進了自動完成建議的模糊比對

## 註解內的 IntelliSense

`editor.quickSuggestions` 設定要不要在註解或字串裡面出現自動完成提示

## 設定新增檔案預設選用的語言

`files.defaultLanguage` 設定新增檔案時套用的語言模式，不用每次新增檔案都重選。建議設定成最常用的語言，前端工程師立馬設定成 `javascript`

## Terminal

* 改進顯示鏈結方式。改成用 <kbd>Cmd</kbd> 或 <kbd>Ctrl</kbd> 加滑鼠點擊才打開鏈結。
* Windows 第一次開啟 Terminal 時，會自動偵測有哪些 shell 可以用給你選要用哪一個
* by 工作區設定 shell 加回來，多了提示才採用設定
* `terminal.integrated.confirmOnExit` 設定離開有 Terminal 在跑的視窗時要不要跳提示
