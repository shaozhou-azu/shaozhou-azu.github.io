# Azu's Notes

Azu 的个人主页与博客，基于 Hugo + [MemE](https://github.com/reuixiy/hugo-theme-meme)。采用中文宋体、单栏阅读布局和向下渐隐的淡彩页首，支持明暗模式、分类、标签、文章目录、代码高亮、公式、流程图与 RSS。

- 代码仓库：https://github.com/shaozhou-azu/shaozhou-azu.github.io
- 预定网站地址：https://shaozhou-azu.github.io/
- GitHub 账号：https://github.com/shaozhou-azu

## 本地预览

需要 Git、curl 和 Python 3.9+，支持 macOS 和 Linux。脚本会将固定版本的 Hugo 和 Dart Sass 下载到项目的 `.local/`，核验官方校验值，不需要安装 Node.js 或全局工具。

```bash
git clone --recurse-submodules https://github.com/shaozhou-azu/shaozhou-azu.github.io.git azu_homepage
cd azu_homepage
./scripts/dev.sh
```

打开 <http://127.0.0.1:1313/>。本地预览包含草稿；正式构建只输出非草稿文章。

## 修改内容与样式

| 文件 | 用途 |
| --- | --- |
| `hugo.toml` | 站点名称、作者、导航与主题设置 |
| `content/_index.md` | 首页介绍 |
| `content/about.md` | 个人简介与公开联系方式 |
| `content/posts/` | 博客文章、图片与附件 |
| `data/Socials.toml` | 页脚的 GitHub、RSS 等链接 |
| `assets/css/custom.css` | 页首渐隐、中文字体、表格与流程图样式 |

正文采用本地托管的 Noto Serif SC Variable，浏览器按页面使用的字符加载分片。字体、公式和流程图不依赖外部 CDN。

## 写文章

```bash
./scripts/hugo new content posts/my-first-post/index.md
```

新文章默认是草稿。准备好后将文章开头的 `draft: true` 改成 `draft: false`。`slug` 可以指定英文网址，文章路径为 `/posts/英文短名称/`。

图片可与文章放在同一目录，使用 `![说明](image.png)` 引用。分类、标签通过 `categories` 和 `tags` 设置，目录通过 `toc` 控制。

公式需要设置 `math: true`，支持 `\(a^2+b^2=c^2\)` 和 `$$ ... $$`。流程图直接使用 `mermaid` 代码块，网站会自动按需加载本地渲染器。

`content/posts/personal-agents-2026/` 保存完整研究示例，包括 10 张表格、一张架构图及 44 条来源附件。它目前是草稿；源文件随仓库保存，`draft` 只控制网站输出。

## 构建与发布

```bash
./scripts/build.sh
```

网站输出到被 Git 忽略的 `public/`。默认地址已设置为 `https://shaozhou-azu.github.io/`。

GitHub Actions 在推送或拉取请求时检查构建。初次建库不会自动上线。准备发布时：

1. 在仓库 **Settings → Pages → Source** 选择 **GitHub Actions**。
2. 在 **Actions → Build and deploy to GitHub Pages → Run workflow** 勾选 `publish`，运行工作流。
3. 工作流成功后访问网站地址。

只有手动勾选 `publish` 才执行部署；草稿不会进入发布产物。GitHub Actions 会读取 Pages 的实际网址，也支持子目录部署。

## 主题与维护

MemE 通过 Git submodule 固定版本。自己的修改保存在主题目录外，包含 Hugo 接口兼容、Dart Sass、个人信息、长文目录、宽表格与页首背景覆盖。

```bash
git submodule update --remote themes/meme
./scripts/build.sh
```

Hugo 版本记录在 `.hugo-version`，Dart Sass 版本及各平台的 SHA-512 记录在 `scripts/sass-packages.json`。第三方来源与许可证见 `THIRD_PARTY.md`。`previews/` 保存选型对比入口和样式草案，不参与正式网站构建。
