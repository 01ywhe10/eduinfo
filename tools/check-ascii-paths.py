#!/usr/bin/env python3
"""Report non-ASCII file and directory names in the project."""

import os
from pathlib import Path
import sys


ROOT = Path(__file__).resolve().parent.parent
SKIP_PARTS = {".git"}


def main() -> int:
    invalid = []
    for current, dirnames, filenames in os.walk(ROOT):
        dirnames[:] = [name for name in dirnames if name not in SKIP_PARTS]
        current_path = Path(current)
        for name in dirnames + filenames:
            relative = (current_path / name).relative_to(ROOT)
            if any(not part.isascii() for part in relative.parts):
                invalid.append(relative)

    if invalid:
        print("Non-ASCII paths found:")
        for path in sorted(invalid, key=lambda item: str(item)):
            print(f"- {path}")
        return 1

    print("OK: all project paths are ASCII.")
    return 0


if __name__ == "__main__":
    sys.exit(main())
