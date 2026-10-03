#!/usr/bin/env python3
"""Download the pinned native Sass distribution and print its bin directory."""
import base64
import hashlib
import io
import json
import os
from pathlib import Path
import platform
import sys
import tarfile
import tempfile
import urllib.request

root = Path(__file__).resolve().parent.parent
system = {"Darwin": "darwin", "Linux": "linux"}.get(platform.system())
machine = {"arm64": "arm64", "aarch64": "arm64", "x86_64": "x64"}.get(platform.machine())
if not system or not machine:
    raise SystemExit("Dart Sass bootstrap supports macOS and Linux on ARM64/x64.")
distribution = json.loads((root / "scripts/sass-packages.json").read_text())[f"{system}-{machine}"]
destination = root / ".local/sass" / distribution["version"] / f"{system}-{machine}"
bin_dir = destination / "package/dart-sass"

if not (bin_dir / "sass").is_file():
    print(f"Downloading Dart Sass {distribution['version']}…", file=sys.stderr)
    with urllib.request.urlopen(distribution["url"], timeout=120) as response:
        payload = response.read()
    expected = distribution["integrity"].removeprefix("sha512-")
    actual = base64.b64encode(hashlib.sha512(payload).digest()).decode()
    if actual != expected:
        raise SystemExit("Dart Sass package integrity verification failed.")
    destination.parent.mkdir(parents=True, exist_ok=True)
    with tempfile.TemporaryDirectory(dir=destination.parent) as temporary:
        extraction = Path(temporary)
        with tarfile.open(fileobj=io.BytesIO(payload), mode="r:gz") as archive:
            for member in archive.getmembers():
                target = (extraction / member.name).resolve()
                if not target.is_relative_to(extraction.resolve()) or not (member.isfile() or member.isdir()):
                    raise SystemExit("Invalid path in the Dart Sass package.")
            if hasattr(tarfile, "data_filter"):
                archive.extractall(extraction, filter="data")
            else:
                archive.extractall(extraction)
        executable = extraction / "package/dart-sass/sass"
        executable.chmod(executable.stat().st_mode | 0o111)
        runtime = extraction / "package/dart-sass/src/dart"
        if runtime.exists():
            runtime.chmod(runtime.stat().st_mode | 0o111)
        destination.mkdir(parents=True, exist_ok=True)
        os.rename(extraction / "package", destination / "package")

print(bin_dir)
