# Third-party components

## MemE

- Source: https://github.com/reuixiy/hugo-theme-meme
- Pinned commit: `cf2d984118c34acc8b4e00da50b5c39aa305b8ac`.
- License: MIT, preserved at `themes/meme/LICENSE`.
- Installed as a Git submodule.
- Project-level templates adapt current Hugo language/data interfaces, Dart Sass, the site's favicons, homepage introduction, RSS links and per-page metadata/TOC settings. Upstream source is unchanged.

## Dart Sass

- Source: https://github.com/sass/dart-sass
- Version: `1.105.1`.
- Native distributions: official `sass-embedded` packages for macOS/Linux, ARM64/x64, from npm.
- Package URLs and pinned SHA-512 integrity values are in `scripts/sass-packages.json`; integrity is verified before extracting.
- Downloaded tooling remains under `.local/sass/`; each upstream package includes its license. No Sass executable is served by the website.

## KaTeX

- Source: https://github.com/KaTeX/KaTeX
- Version: `0.19.0`
- Distribution: https://registry.npmjs.org/katex/-/katex-0.19.0.tgz
- Package integrity: `sha512-v6Tznz3zJ7u3niRCoDTsumM2+HA2XXcCu+WAacCeHD2z3p9A9Ks987o5FzfTGBN0e8A0vjEgIDvLbICrXpdw/Q==`
- License: MIT, preserved at `static/vendor/katex/LICENSE`.
- Only the browser distribution, WOFF2 fonts, and license are included. The CSS font sources are reduced to WOFF2 to match the vendored font files.

## Noto Serif SC

- Source: https://github.com/notofonts/noto-cjk
- Distribution: `@fontsource-variable/noto-serif-sc`, version `5.3.0`.
- Package: https://registry.npmjs.org/@fontsource-variable/noto-serif-sc/-/noto-serif-sc-5.3.0.tgz
- Package integrity: `sha512-7LcN2NEf4HDjoSkGWc79WqDDyMK8JvSPdA/gsHjJpZ8l9A9mcK/GQTazp3klmkBwJooy0eqeNvlmaZFXPupHrA==`, verified before extracting.
- License: SIL Open Font License 1.1, preserved at `static/vendor/noto-serif-sc/LICENSE`.
- The original variable WOFF2 files and `index.css` are self-hosted unchanged. Unicode ranges load only the font subsets needed by each page.

## Mermaid Tiny

- Source: https://github.com/mermaid-js/mermaid
- Distribution: `@mermaid-js/tiny`, version `12.1.0`.
- Package: https://registry.npmjs.org/@mermaid-js/tiny/-/tiny-12.1.0.tgz
- Package integrity: `sha512-z/N9vnXv+5Ffcdj19viXxPhSy7Jt5y4vtS+Aa9iZVGIo2U0KKNgO2U+xm8plHh3y5eUVkschMCXfc/DIz8A6uQ==`, verified before extracting.
- License: MIT, preserved at `static/vendor/mermaid/LICENSE`; bundled license comments in `mermaid.tiny.js` are retained.
- The browser bundle is self-hosted unchanged and loaded only on pages with Mermaid code blocks. Tiny supports the example flowchart; it omits some advanced diagram types and layouts.
