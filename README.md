# Azu's Notes

个人主页与博客，基于 Hugo + [PaperMod](https://github.com/adityatelange/hugo-PaperMod)。采用简洁的单栏阅读布局，包含中文排版、文章目录、代码高亮、公式、搜索、标签、归档和 RSS。

站点名称和介绍暂用 Azu，可在 `hugo.yaml` 中修改。

## 本地预览

需要 Git、curl 和 macOS 或 Linux。Hugo 会由脚本下载到项目内的 `.local/`，使用 `.hugo-version` 中固定的版本，并验证官方 SHA-256 校验值；不需要安装 Node.js 或全局 Hugo。

首次克隆时同时下载主题：

```bash
git clone --recurse-submodules <你的仓库地址> azu_homepage
cd azu_homepage
./scripts/dev.sh
```

已在本项目目录中时，直接运行 `./scripts/dev.sh`，打开 <http://127.0.0.1:1313/>。本地预览包含草稿；正式构建只发布 `draft: false` 的文章。

## 修改个人信息

| 文件 | 内容 |
| --- | --- |
| `hugo.yaml` | 站点名称、作者、首页介绍、导航、默认配色 |
| `content/about.md` | 个人简介与公开联系方式 |
| `content/posts/` | 博客文章及图片 |
| `assets/css/extended/custom.css` | 正文宽度、中文字体与排版 |

没有预设真实的工作经历、社交账号或邮箱。关于页面中的提示文字可直接替换。

## 写一篇文章

```bash
./scripts/hugo new content posts/my-first-post/index.md
```

新文章默认是草稿。修改标题、描述、标签和正文，准备好后将 `draft: true` 改为 `draft: false`。设置 `slug: my-first-post` 可以指定网址中的英文短名称，文章地址按 `/posts/日期-slug/` 生成。

图片可以放在同一个文章目录中，在 Markdown 中用 `![说明](image.png)` 引用。

需要公式时，在文章头部设置 `math: true`：

```markdown
行内公式：\(a^2 + b^2 = c^2\)

$$
E = mc^2
$$
```

公式使用本地托管的 KaTeX，不依赖外部 CDN。头部 `math: false` 的页面不会加载公式资源。

## 构建与发布

```bash
./scripts/build.sh --baseURL https://你的用户名.github.io/
```

生成的网站位于 `public/`，该目录已被 Git 忽略。

发布到 GitHub Pages：

1. 在自己的 GitHub 账号下创建空仓库。主个人主页建议命名为 `<用户名>.github.io`。
2. 将本地 `main` 分支推送到自己的仓库。
3. 在 GitHub 的 **Settings → Pages → Build and deployment → Source** 中选择 **GitHub Actions**。
4. 在 **Actions** 中运行 **Build and deploy to GitHub Pages**，或再次推送一次提交。

发布流程会自动读取 GitHub Pages 的实际网址，因此同时支持 `用户名.github.io` 和 `用户名.github.io/仓库名/`。拉取请求只执行构建，不执行发布。

```bash
git remote add origin https://github.com/<用户名>/<仓库名>.git
git push -u origin main
```

本地配置的 `baseURL` 是示例地址。确定最终地址后可以更新 `hugo.yaml`，方便手动构建；GitHub Actions 的构建会自动覆盖这个配置。

## 主题与版本

PaperMod 通过 Git submodule 固定在当前提交，自己的样式和布局扩展位于主题目录之外。

`layouts/baseof.html`、`layouts/rss.xml` 和 `layouts/_partials/templates/opengraph.html` 是当前 Hugo 语言接口的兼容覆盖。主题更新后可以检查这些覆盖是否仍有必要。

更新主题：

```bash
git submodule update --remote themes/PaperMod
./scripts/build.sh
git add themes/PaperMod
git commit -m "Update PaperMod theme"
```

Hugo 版本在 `.hugo-version` 中管理。第三方代码来源和许可证见 `THIRD_PARTY.md`。
