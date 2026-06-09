#!/usr/bin/env python3

import os
import subprocess
import sys
import time
import urllib.request
from pathlib import Path


HOST = "127.0.0.1"
PORT = 5173
BASE_URL = f"http://{HOST}:{PORT}"
ROOT = Path(__file__).resolve().parents[1]
LOG_DIR = ROOT / ".openclaw"
LOG_FILE = LOG_DIR / "vite-dev.log"


def server_is_ready() -> bool:
    try:
        with urllib.request.urlopen(BASE_URL, timeout=1):
            return True
    except Exception:
        return False


def wait_for_server(timeout: int = 30) -> bool:
    deadline = time.time() + timeout
    while time.time() < deadline:
        if server_is_ready():
            return True
        time.sleep(0.5)
    return False


def tail_log(lines: int = 40) -> str:
    if not LOG_FILE.exists():
        return ""
    content = LOG_FILE.read_text(encoding="utf-8", errors="replace").splitlines()
    return "\n".join(content[-lines:])


def main() -> int:
    if server_is_ready():
        print(f"Dev server already running at {BASE_URL}")
        return 0

    LOG_DIR.mkdir(parents=True, exist_ok=True)
    with LOG_FILE.open("a", encoding="utf-8") as log_handle:
        process = subprocess.Popen(
            ["pnpm", "dev", "--host", HOST, "--port", str(PORT)],
            cwd=ROOT,
            stdout=log_handle,
            stderr=log_handle,
            env=os.environ.copy(),
        )

    try:
        if wait_for_server():
            print(f"Dev server started at {BASE_URL}")
            return 0

        print(f"Dev server did not become ready at {BASE_URL}", file=sys.stderr)
        print(tail_log() or "(no vite log output captured)", file=sys.stderr)
        return 1
    finally:
        if process.poll() is None and not server_is_ready():
            process.terminate()
            try:
                process.wait(timeout=10)
            except subprocess.TimeoutExpired:
                process.kill()


if __name__ == "__main__":
    raise SystemExit(main())
