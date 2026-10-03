#!/usr/bin/env bash
set -euo pipefail

site_root="$(cd "$(dirname "$0")/.." && pwd)"
preview_root="$site_root/.local/theme-lab/public"

if [[ ! -f "$preview_root/fuwari/posts/personal-agents-2026/index.html" ]]; then
  echo "主题试读页面还未生成，请参考 previews/README.md。" >&2
  exit 1
fi

cp "$site_root/previews/index.html" "$preview_root/index.html"
if [[ -d "$preview_root/meme" ]]; then
  cp "$site_root/previews/meme/header.css" "$preview_root/meme/meme-header.css"
fi
echo "主题对比：http://127.0.0.1:1314/"
exec python3 -m http.server 1314 --bind 127.0.0.1 --directory "$preview_root"
