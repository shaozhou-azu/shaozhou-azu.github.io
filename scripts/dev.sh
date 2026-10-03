#!/usr/bin/env bash
set -euo pipefail
project_root="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
cd "${project_root}"
git submodule update --init --recursive
exec ./scripts/hugo server --bind 127.0.0.1 --baseURL http://127.0.0.1:1313/ \
  --port 1313 --destination .local/preview --buildDrafts --disableFastRender "$@"
