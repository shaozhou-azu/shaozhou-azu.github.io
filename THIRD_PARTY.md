# Third-party components

## PaperMod

- Source: https://github.com/adityatelange/hugo-PaperMod
- Pinned commit: `d3768854d00ad003b0a8dbdba254ce9224377a01`
- License: MIT, preserved at `themes/PaperMod/LICENSE`.
- Installed as a Git submodule.
- Three project-level template overrides (`layouts/baseof.html`, `layouts/rss.xml`, and `layouts/_partials/templates/opengraph.html`) replace deprecated Hugo language properties with `Locale` and `Direction`.

## KaTeX

- Source: https://github.com/KaTeX/KaTeX
- Version: `0.19.0`
- Distribution: https://registry.npmjs.org/katex/-/katex-0.19.0.tgz
- Package integrity: `sha512-v6Tznz3zJ7u3niRCoDTsumM2+HA2XXcCu+WAacCeHD2z3p9A9Ks987o5FzfTGBN0e8A0vjEgIDvLbICrXpdw/Q==`
- License: MIT, preserved at `static/vendor/katex/LICENSE`.
- Only the browser distribution, WOFF2 fonts, and license are included. The CSS font sources are reduced to WOFF2 to match the vendored font files.

## Noto Sans SC

- Source: https://github.com/notofonts/noto-cjk
- Distribution: `@fontsource-variable/noto-sans-sc`, version `5.3.0` (Google Fonts revision `v40`).
- Package: https://registry.npmjs.org/@fontsource-variable/noto-sans-sc/-/noto-sans-sc-5.3.0.tgz
- Package integrity: `sha512-lNar1dF7Ik/lHNPo/7JWG0TolXY29LtsqYgMvEysooZ5bsO9uH4shJmRrwyJ3PjyTPljhpMJEK0jDuLSU4vJ1w==`, verified before extracting.
- License: SIL Open Font License 1.1, preserved at `static/vendor/noto-sans-sc/LICENSE`.
- The original variable WOFF2 files and `index.css` are self-hosted unchanged. Unicode ranges load only the font subsets needed by each page.
