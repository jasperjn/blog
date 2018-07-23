webpackJsonp([46436505673200],{449:function(t,e){t.exports={data:{site:{siteMetadata:{title:"jasperjn's blog",author:"jasperjn",disqus:"jasperjn"}},markdownRemark:{id:"/home/circleci/repo/content/_posts/2017-04-14-git-template/index.md absPath of file >>> MarkdownRemark",html:'<p><code class="language-text">git init</code> 指令用來將工作區加入 git 版本控管，其實就是在工作目錄底下幫我們產生 <code class="language-text">.git</code> 資料夾。如果想修改預設產生 <code class="language-text">.git</code> 資料夾內的檔案或增加內容，可以參考接下來的說明。</p>\n<!--more-->\n<h2>使用 Template Directory</h2>\n<p>根據<a href="https://git-scm.com/docs/git-init#_template_directory">官方文件</a>指出，執行 <code class="language-text">git init</code> 時可以多帶 <code class="language-text">--template</code> 參數指定 git 要使用的範本目錄。也就是說 <code class="language-text">.git</code> 裡面的結構是根據範本來產生的，而範本可以自訂。預設範本路徑位於 <code class="language-text">/usr/share/git-core/templates</code>，但我卻是在 <code class="language-text">/usr/local/git/share/git-core/templates</code> 找到這個目錄。推測是安裝 Source Tree 或是 Xcode Command Line Tools 的關係路徑改變了。</p>\n<p>\n  <a\n    class="gatsby-resp-image-link"\n    href="/blog/static/templates-9c926dc33d43d05cff75754bd2c9c45c-59197.png"\n    style="display: block"\n    target="_blank"\n    rel="noopener"\n  >\n  \n  <span\n    class="gatsby-resp-image-wrapper"\n    style="position: relative; display: block; ; max-width: 590px; margin-left: auto; margin-right: auto;"\n  >\n    <span\n      class="gatsby-resp-image-background-image"\n      style="padding-bottom: 62.13151927437642%; position: relative; bottom: 0; left: 0; background-image: url(\'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAMCAYAAABiDJ37AAAACXBIWXMAAAsSAAALEgHS3X78AAAB6UlEQVQoz6WS227aQBCGaS6SXLaXSH2P9inii7xX1CehlZoANTTgBVWFpgqFNFGhET6sT9iWTaBIXe94uuvaQKX0KiP9nlnvP9+s5a1URMx79Vfj28tT3aQn+v1ccaituLareCLPLVcZ3kwV426kLANb2cSukixsxbGo8DmKZVgn1KSnxtx4XSniYDb51v21SdDQTRwOvqBlUjQNEx3bQdf1cDI18ep6iuNbC+/uA9RphP4ixIW/wCiMkDOOs+mMSJYEHlnU1lAEMJbSaAm9m5/g2hSWDytYxhF8tx6gM1mB+jWBt59i+PxjDaYXgD7XgXOeyl7btnuCdZgDKaU5UASPNml2rXsZsN+ZWGccQGSe1/uaulEWBoGsuWx0HGcHHI1GmpiEcRzz1XqNmbBl4iEFAJiKPcnlhVjKkXHITyA8OdDzvB1wPB5raZpikiScMVYat1kO238nh5QDS6Dv+ztgFEXbTy7NZfwPKLV/wn+AQRBo5aZs3k5/BFiu9075KLDztwGYJOamQhnIH5kTtxIwXoBkZgVQ2wLDMBziE0Ncm6sSeFir1c4+qK3BRbvTvWhdkvdqm4ianIt8rn4kjVabvGuopFGvE40Qomnavrr9fn/QbDbf5MCj4+Nnongu9PKJelGtVg/+AJHU2wVIKstpAAAAAElFTkSuQmCC\'); background-size: cover; display: block;"\n    >\n      <img\n        class="gatsby-resp-image-image"\n        style="width: 100%; height: 100%; margin: 0; vertical-align: middle; position: absolute; top: 0; left: 0; box-shadow: inset 0px 0px 0px 400px white;"\n        alt="git template path"\n        title=""\n        src="/blog/static/templates-9c926dc33d43d05cff75754bd2c9c45c-fb8a0.png"\n        srcset="/blog/static/templates-9c926dc33d43d05cff75754bd2c9c45c-1a291.png 148w,\n/blog/static/templates-9c926dc33d43d05cff75754bd2c9c45c-2bc4a.png 295w,\n/blog/static/templates-9c926dc33d43d05cff75754bd2c9c45c-fb8a0.png 590w,\n/blog/static/templates-9c926dc33d43d05cff75754bd2c9c45c-59197.png 882w"\n        sizes="(max-width: 590px) 100vw, 590px"\n      />\n    </span>\n  </span>\n  \n  </a>\n    </p>\n<h2>修改範本內容</h2>\n<p>比較常使用的情境是，希望在 <code class="language-text">git init</code> 時設定 lcoal config 而不是採用 global config 內的設定。或是比較進階的想套上已經寫好的 <a href="https://git-scm.com/book/en/v2/Customizing-Git-Git-Hooks">Hook</a>。都可以修改預設的範本來幫我們產生，省去每次產生新的 git repository 時要一直複製貼上。例如我想在剛產生的 git repository 用另外的身份。可以在剛剛的範本目錄中新增一個名稱叫 <code class="language-text">config</code> 的檔案，寫上想要使用的 <code class="language-text">user.name</code> 與 <code class="language-text">user.email</code></p>\n<div class="gatsby-highlight">\n      <pre class="language-text"><code class="language-text">[user]\n        name = ANOTHER_USER_NAME\n        email = ANOTHER_USER_NAME@domain.com</code></pre>\n      </div>\n<p>這樣每次透過 <code class="language-text">git init</code> 產生的 <code class="language-text">.git</code> 目錄底下便會有這個設定檔，而不是採用 global <code class="language-text">.gitconfig</code> 的設定。如果不使用範本，相當於每次初始化 repository 時要重複下面的步驟</p>\n<div class="gatsby-highlight">\n      <pre class="language-bash"><code class="language-bash"><span class="token function">git</span> init\n<span class="token function">git</span> config user.name <span class="token string">"ANOTHER_USER_NAME"</span>\n<span class="token function">git</span> config user.email <span class="token string">"ANOTHER_USER_NAME@domain.com"</span></code></pre>\n      </div>\n<p>善用 template 可以省去重複的步驟，特別是同個環境但不同的 repository 需要各自的設定時，可以自訂對應的 template 再透過 <code class="language-text">--template</code> 參數快速幫我們產生對應的 git 範本。</p>',frontmatter:{title:"修改 git init 預設範本",date:"April 14, 2017",tags:["git"]}}},pathContext:{slug:"/2017/04/14/git-template/",previous:{fields:{slug:"/2017/04/06/visual-studio-code-v1-11-updates/"},frontmatter:{title:"Visual Studio Code v1.11 更新",tags:["vscode"]}},next:{fields:{slug:"/2017/05/11/cannot-install-extensions-on-vscode/"},frontmatter:{title:"VScode 無法安裝擴充功能",tags:["vscode"]}}}}}});
//# sourceMappingURL=path---2017-04-14-git-template-64d8e8d99491ed6d5214.js.map