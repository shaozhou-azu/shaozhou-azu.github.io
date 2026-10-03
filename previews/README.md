# 个人主页主题试读

四个候选都使用完整的 Personal Agent 研究文章，保留 13 个二级章节、10 张表格、44 条资料来源和一张 Mermaid 架构图。试读入口是 `http://127.0.0.1:1314/`，可以切换主题，跳到正文、宽表格与架构图，也可以单独打开文章或主页。

| 候选 | 文章入口 | 原始主题 |
| --- | --- | --- |
| Fuwari | `/fuwari/posts/personal-agents-2026/` | https://github.com/saicaca/fuwari |
| Hextra | `/hextra/posts/personal-agents-2026/` | https://github.com/imfing/hextra |
| Blowfish | `/blowfish/posts/personal-agents-2026/` | https://github.com/nunocoracao/blowfish |
| MemE | `/meme/posts/personal-agents-2026/` | https://github.com/reuixiy/hugo-theme-meme |

Fuwari 使用 Astro，其余三个使用 Hugo。前三个加载本地 Noto Sans SC Variable，MemE 加载本地 Noto Serif SC Variable 5.3.0。字体与主题许可证保存在各自的候选目录；宋体字体包的 SHA-512 已核验。

文章的中文排版与表格做了适配。Hextra 收紧阅读宽度，并在桌面显示右侧目录；MemE 的长目录默认折叠。四版都使用已有的本地 Mermaid Tiny 12.1.0，预览渲染器与主题自带脚本隔离。Fuwari 在预览中使用浏览器原生页面滚动，让嵌入试读的段落跳转保持准确。

MemE 的页首淡彩经过微调：降低颜色浓度，并向下渐隐到与正文相同的背景色，去掉导航栏底部的硬边界。独立覆盖样式在 `previews/meme/header.css`，引用它的头部模板在 `previews/meme/head.html`；预览分别使用 `static/meme-header.css` 和 `layouts/partials/custom/head.html`。覆盖层跟随主题背景变量，也适配深色模式，未修改上游主题源码。预览配置设置 `overrideSystemPreferences = false`，让导航中的主题按钮可以正常切换明暗模式。

本次候选代码与已生成页面存放在本机的 `.local/theme-lab/`，未纳入正式站点构建。正式站点现已采用 MemE，研究文章仍为草稿。对比页源文件是 `previews/index.html`；关闭服务后，可以运行 `./scripts/preview-themes.sh` 重新打开本机已有预览。

候选源码：`.local/theme-lab/vendor/`；Hugo 候选站点：`.local/theme-lab/sites/`；已生成页面：`.local/theme-lab/public/`。这部分保留此前的选型预览；正式站点的 MemE 源码位于 `themes/meme`，正式背景覆盖在 `assets/css/custom.css`。网站尚未发布。

已验证四版文章在手机宽度下没有页面横向溢出，宽表格在表格区域内滚动，架构图正常生成。
