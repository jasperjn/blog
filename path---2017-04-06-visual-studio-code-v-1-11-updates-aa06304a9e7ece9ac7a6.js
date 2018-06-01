webpackJsonp([68036998304525],{437:function(e,t){e.exports={data:{site:{siteMetadata:{title:"jasperjn's blog",author:"jasperjn",disqus:"jasperjn"}},markdownRemark:{id:"/home/circleci/repo/content/_posts/2017-04-06-visual-studio-code-v1-11-updates/index.md absPath of file >>> MarkdownRemark",html:'<p>1.11 版本更新重點整理</p>\n<!--more-->\n<h2>客製化工作區主題樣式</h2>\n<p>以後 VS Code 編輯器全部的顏色樣式都可以透過設定檔改變</p>\n<h2>全新的快捷鍵編輯器</h2>\n<p>習慣使用快捷鍵可以大大的提升效率。全新的快捷鍵編輯器讓你一個字都不用打，按按滑鼠就可以幫你產生設定檔。透過新的快捷鍵編輯器可以更清楚看到目前的快捷鍵設定是 <code class="language-text">Default</code>（預設值）還是 <code class="language-text">User</code>（自定）。當然還是可以直接修改 <code class="language-text">keyboinding.json</code> 檔案設定</p>\n<h2>搜尋速度加快</h2>\n<p>搜尋預設會參考 <code class="language-text">.gitignore</code> 設定，不搜尋不加入版本控管的檔案</p>\n<p>多了兩個 icon 在搜尋時可以選擇要不要套用 <code class="language-text">files.exclude</code> <code class="language-text">search.exclude</code> 設定</p>\n<h2>最大化 Panel</h2>\n<p>最大化 Panel 視窗，收合會自動恢復上一次開啟的大小</p>\n<h2>保持開啟已刪除的檔案</h2>\n<p>透過 <code class="language-text">workbench.editor.closeOnFileDelete</code> 設定檔案被刪除時，要不要關閉該檔案已開啟的 editor</p>\n<h2>合併編輯群組</h2>\n<p>透過 <code class="language-text">workbench.action.joinTwoGroups</code> 指令可以把目前編輯群組往左邊的編輯群組合併</p>\n<h2>視窗巡覽</h2>\n<p>透過 <code class="language-text">workbench.action.navigateLeft</code> <code class="language-text">workbench.action.navigateDown</code> 切換目前 focus 的區域</p>\n<h2>快捷鍵調整視窗大小</h2>\n<p><code class="language-text">workbench.action.increaseViewSize</code> 放大 <code class="language-text">workbench.action.decreaseViewSize</code> 縮小。</p>\n<blockquote>\n<p>個人比較常用 <code class="language-text">workbench.action.maximizeEditor</code> 搭配 <code class="language-text">workbench.action.focusFirstEditorGroup</code> <code class="language-text">workbench.action.focusSecondEditorGroup</code> <code class="language-text">workbench.action.focusThirdEditorGroup</code> 來最大化目前編輯的視窗</p>\n</blockquote>\n<h2>已開啟的檔案不再其他編輯群組開啟</h2>\n<p>透過 <code class="language-text">workbench.editor.revealIfOpen</code> 設定如果要開啟的檔案已在其他編輯群組開啟了，會自動開啟原本已開啟的編輯視窗。也就是同個檔案不會在其他編輯群組出現。建議可以設成 <code class="language-text">true</code>，減少相同檔案的 tab 數量也可以知道檔案是看到哪一個段落，不用開新的編輯視窗重頭找。</p>\n<h2>文字拖曳改進</h2>\n<p>拖曳文字時按著 <kbd>Option</kbd> (macOS) <kbd>Ctrl</kbd> (Windows) <kbd>Alt</kbd> (Linux) 可以複製拖曳的文字，而不是搬動他</p>\n<h2>關閉選取文字高亮提示</h2>\n<p><code class="language-text">editor.occurrencesHighlight</code> 設定顯示/關閉選取文字出現高亮提示</p>\n<h2>自動猜測檔案編碼</h2>\n<p><code class="language-text">files.autoGuessEncoding</code> 設定自動猜測檔案編碼，有可能會猜錯。如果編碼不是 <strong>UTF-8</strong> 建議還是從 <code class="language-text">files.encoding</code> 設定下手</p>\n<h2>自動完成模糊比對</h2>\n<p>改進了自動完成建議的模糊比對</p>\n<h2>註解內的 IntelliSense</h2>\n<p><code class="language-text">editor.quickSuggestions</code> 設定要不要在註解或字串裡面出現自動完成提示</p>\n<h2>設定新增檔案預設選用的語言</h2>\n<p><code class="language-text">files.defaultLanguage</code> 設定新增檔案時套用的語言模式，不用每次新增檔案都重選。建議設定成最常用的語言，前端工程師立馬設定成 <code class="language-text">javascript</code></p>\n<h2>Terminal</h2>\n<ul>\n<li>改進顯示鏈結方式。改成用 <kbd>Cmd</kbd> 或 <kbd>Ctrl</kbd> 加滑鼠點擊才打開鏈結。</li>\n<li>Windows 第一次開啟 Terminal 時，會自動偵測有哪些 shell 可以用給你選要用哪一個</li>\n<li>by 工作區設定 shell 加回來，多了提示才採用設定</li>\n<li><code class="language-text">terminal.integrated.confirmOnExit</code> 設定離開有 Terminal 在跑的視窗時要不要跳提示</li>\n</ul>',frontmatter:{title:"Visual Studio Code v1.11 更新",date:"April 06, 2017",tags:["vscode"]}}},pathContext:{slug:"/2017/04/06/visual-studio-code-v1-11-updates/",previous:{fields:{slug:"/2016/08/17/visual-studio-code-typescript/"},frontmatter:{title:"Visual Studio Code 使用 Typescript",tags:["vscode","typescript"]}},next:{fields:{slug:"/2017/04/14/git-template/"},frontmatter:{title:"修改 git init 預設範本",tags:["git"]}}}}}});
//# sourceMappingURL=path---2017-04-06-visual-studio-code-v-1-11-updates-aa06304a9e7ece9ac7a6.js.map