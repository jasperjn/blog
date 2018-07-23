---
title: Flutter 學習筆記 - 0. 環境建置
tags:
  - flutter
date: 2018-07-22 16:00:00
---

系統需求：macOS 64 bit
硬碟空間：官方寫至少 700 MB，但 SDK 解壓縮之後高達 1.1G。不包含 Flutter 需要的工具例如 Android Studio、Android SDK、XCode、iOS SDK 等，保險起見至少準備個 20 GB 才夠用。環境需求：git

各項工具大小（解壓縮前）如下：
Flutter SDK 621 MB
Android Studio 890 MB
Android SDK 952 MB
Xcode 5.3 GB

## Flutter SDK

安裝 SDK

[flutter_macos_v0.5.1-beta.zip](https://storage.googleapis.com/flutter_infra/releases/beta/macos/flutter_macos_v0.5.1-beta.zip)

安裝後解壓縮到 `.bash_profile` 加上環境變數

```bash
export PATH=[PATH_TO_FLUTTER_GIT_DIRECTORY]/flutter/bin:$PATH
```

例如我是將 SDK 放到 `~/Documents/sdk/flutter`

```bash
export PATH=~/Documents/sdk/flutter/bin:$PATH
```

接下來打開 terminal（這邊使用的是 iTerm 2）

執行指令

```bash
flutter doctor
```

這個指令會貼心的幫你檢查 Flutter 開發時需要的工具是否都安裝了，結果會用條列式呈現。特別注意粗體字的部分，建議馬上安裝對應的工具，以免之後開發遇到問題。

![](https://i.imgur.com/zDP7l4G.png)

如果環境已經安裝了 Android Studio 與 Xcode 執行 `flutter doctor` 會是不同結果

![](https://i.imgur.com/2ABB0ML.png)

接下來一步一步來解決粗體字欠缺的工具，以下紀錄沒安裝過 Android Studio 與 Xcode 的安裝過程。

## Android

`Unable to locate Android SDK`

意思是找不到開發 Android App 必備的 Android SDK，Flutter 請你直接去安裝 Android Studio。因為安裝 Android Studio 就會安裝一些 Flutter 需要的工具。

[下載網址](https://developer.android.com/studio/index.html)

安裝好開啟 Android Studio

![](https://i.imgur.com/EI8f9q1.png)

第一次開啟會跳出匯入設定的視窗，如果之前有安裝過 Android Studio 可以匯入設定檔套用，沒有的話點擊 OK。

![](https://i.imgur.com/v6cLMUk.png)

接下來跳出 `Android Studio Setup Wizard` 安裝導引，一步一步往下安裝即可

![](https://i.imgur.com/8iv1pRo.png)

選擇 Standard 點擊 Next 繼續

![](https://i.imgur.com/U2hQ0K0.png)

選擇佈景主題，個人偏好深色系，依自己喜好選取後點擊 Next 繼續

![](https://i.imgur.com/qjhmqnY.png)

最後一步條列顯示預計會安裝的工具，在 Install Type 步驟選擇 Custom 的朋友可以確認有沒有選錯。確認沒問題點擊 Finish 開始安裝。

![](https://i.imgur.com/7RRL7h6.png)

安裝的速度稍慢，請不要離開電腦，因為偶爾會跳出使用系統管理員身份安裝的視窗，需要打密碼才能繼續。

![](https://i.imgur.com/PZAScAm.png)

安裝完成

打開 Terminal 輸入 `flutter doctor --android-licenses`

![](https://i.imgur.com/at4rUhR.png)

同意 android 使用條款，一路輸入 y Enter 直到條款結束

![](https://i.imgur.com/zuXoUZj.png)

直到出現 All SDK package licenses accepted 結束

打開 Android Studio

![](https://i.imgur.com/gmnVKWz.png)

選擇 Start a new Android Studio project

![](https://i.imgur.com/98OsUVW.png)

直接點擊 Next 即可，建立 project 並不是要用 Android Studio 開發 Flutter，而是建好才能叫出之後的設定視窗

![](https://i.imgur.com/p50Rz3y.png)

繼續 Next

![](https://i.imgur.com/3sghzlo.png)

Next \*3

![](https://i.imgur.com/IypDUdb.png)

Next \*4

![](https://i.imgur.com/oAXYXUN.png)

Finish 之後進到以下畫面

![](https://i.imgur.com/KQnDg5N.png)

依照官網的步驟去選單找 Tools>Android>AVD Manager 建立模擬器，but...

![](https://i.imgur.com/MJ8gYIX.png)

打開 Tools 並沒有看到 Android 選項，所幸在 Stack Overflow 找到[解決辦法](https://stackoverflow.com/q/46948322)

在 Android Studio 下方的視窗有顯示 Error `Failed to find Build Tools version 27.0.3` 下方有藍色的 **Install Build Tools 27.0.3 and sync project** 連結，點他！

![](https://i.imgur.com/dT8GXIT.png)

點了會出現 Component Installer 安裝視窗。

![](https://i.imgur.com/saupkDq.png)

安裝完成後點擊 Finish

![](https://i.imgur.com/SyHe84c.png)

Finish 之後會開始建置，建制成功出現下圖

![](https://i.imgur.com/sWNZJYT.png)

打開 Tools 選單

![](https://i.imgur.com/YVewiKK.png)

將將～雖然沒有 Android 選項但 AVD Manager 就是我們要的模擬器管理員

![](https://i.imgur.com/CMenS1C.png)

點擊 Create Virtual Device

![](https://i.imgur.com/MTXJZH1.png)

選擇裝置點擊 Next

![](https://i.imgur.com/uZMWXmI.png)

這時候沒有辦法點擊 Next，因為電腦還沒安裝 Android 系統，選擇要下載的 Android 系統點擊藍色的 Download

![](https://i.imgur.com/NyI0tbH.png)

然後又出現這個 Component Installer (到底要安裝多少東西 ORZ)

![](https://i.imgur.com/65tDCQ8.png)

安裝完成後一樣點擊 Finish，回到剛剛的步驟

![](https://i.imgur.com/NwygXMq.png)

這時候 Next 不再是反灰了，點擊 Next 繼續

![](https://i.imgur.com/qR2MHyq.png)

點擊 Finish

![](https://i.imgur.com/x33wPeP.png)

見好模擬器之後，點擊右方的箭頭
Launch this AVD in emulator，試著跑跑看

![](https://i.imgur.com/KeVsGex.png)

完成！安裝一堆東西都是為了你 QQ

## iOS

`Xcode installation is incomplete; a full installation is necessary for iOS development.`

同樣地，少了開發 iOS APP 需要的 Xcode。直接去 App Store 搜尋 Xcode 下載安裝即可。App Store 一項只能安裝最新版的 App， Xcode 9.4 需要升級 macOS 到 10.13 High Sierra 才能安裝。要安裝 Flutter 的依賴套件還要先安裝依賴套件的依賴套件，累累 der。

![](https://i.imgur.com/eHTqU4l.jpg)

Install 給他點下去！

安裝好後執行（過程可能需要重新開機)

```
sudo xcode-select --switch /Applications/Xcode.app/Contents/Developer
```

確保 Xcode command-line tools 使用剛剛安裝最新版 Xcode

```
sudo xcodebuild -license
```

同意 Xcode 使用條款，或是在 Xcode 上按同意

接著打開 Xcode，第一次開啟會跳出詢問是否安裝附加元件視窗。

![](https://i.imgur.com/b3QoUSA.png)

點擊 Install 安裝，等待安裝過程。

![](https://i.imgur.com/R61gHbw.png)

安裝好之後會打開歡迎畫面

![](https://i.imgur.com/ErMc9qX.png)

到 Xcode>Open Developer Tool>Simulator 打開模擬器

![](https://i.imgur.com/AeU0Qqs.png)

預設會打開 iPhone X 模擬器運行最新的 iOS 11.4

![](https://i.imgur.com/vaEOSuO.jpg)

完成！平平都是安裝模擬器，iOS 不用建 project、不用 Next 點半天、元件裝了又裝，是不是覺得 hen 幸福。

## 下一步

建置好兩大系統模擬器環境後，重新執行 `flutter doctor` 來檢查系統環境。

![](https://i.imgur.com/ESpdApv.png)

粗體字明顯比第一次減少了許多，只剩下 `iOS toolchain` 與 `Android Studio` 底下還有粗體字提示。

iOS toolchain

這邊指的是如果需要部署到實機還少安裝一些工具，通常會使用實機測試應該是 App 將近發佈的時候或是要測實體裝置才有的功能。目前我們連 App 都沒開始開發，這個步驟先跳軌浪軌 XDDD

[官方步驟在這](https://flutter.io/setup-macos/#deploy-to-ios-devices)

Android Studio

要在 Androud Studio 開發 Flutter 要另外安裝 Flutter 與 Dart plugin。基本上我並沒有要用它來開發，一樣可以無視。

完成上述步驟基本上已經建好開發 Flutter 需要的環境，下一篇將介紹使用 VS Code 來開發 Flutter App。
