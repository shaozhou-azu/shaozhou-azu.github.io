#!/usr/bin/env bash
set -euo pipefail
project_root="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
cd "${project_root}"
git submodule update --init --recursive
exec ./scripts/hugo --gc --minify "$@"
