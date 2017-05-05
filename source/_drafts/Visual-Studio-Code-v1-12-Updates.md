---
title: Visual Studio Code v1.12 更新
tags:
- vscode
---

1.12 版本更新重點整理

<!--more-->

## 客製化工作區主題樣式

在上一版更新預告了可以客製化整個工作區的主題樣式，在這個版本中正式發表了。可以自訂檔案總管、差異比對檢視、狀態列、通知、捲軸、分割視窗、按鈕等文字或背景顏色。
設定 `workbench.colorCustomization`，例如把左邊動作欄背景改成紅色：

```json
{
    "workbench.colorCustomizations": {
        "activityBar.background": "#f00",
    }
}
```

想要分享目前的樣式的話，可以透過 *Developer: Generate Color Theme From Current Settings* 指令把目前的樣式轉換成主題，方便你發佈到擴充功能市集上。

## 快捷鍵編輯器

可以用快捷鍵搜尋快捷鍵拉！方便你找到哪個快捷鍵倍套用到哪個指令上。但目前只能用關鍵字的方式搜尋，例如搜尋 `cmd p` 會找到快捷鍵包含 <kbd>cmd</kbd>+<kbd>p</kbd> 的指令。期待未來可以直接用按快捷鍵的方式找到快捷鍵的設定。

## macOS 頁籤

可以使用原生的頁籤功能，讓多個 VSCode 視窗改用頁籤的方式顯示。

## macOS 手勢

支援三指往左往右滑動，往返上一次使用的編輯器，就像看電視兩台往返的功能。沒有觸控功能的朋友們可以用新的指令來達成。

## 終端機

支援了路徑包含行數與欄數的檔案連結，點了會跳到對應的檔案位置。

## TypeScript 2.3

JavaScript(.js)檔案也能幫你檢查型別。