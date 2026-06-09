import time
import urllib.request
from pathlib import Path
import subprocess

from playwright.sync_api import sync_playwright


BASE_URL = "http://127.0.0.1:5173"
ROOT = Path(__file__).resolve().parents[1]
LOG_DIR = ROOT / ".openclaw"
LOG_FILE = LOG_DIR / "vite-dev.log"
ROUTES = [
    "/",
    "/about",
    "/services",
    "/projects",
    "/contact",
    "/market-research",
    "/mercati/chicago",
    "/mercati/boston",
    "/mercati/las-vegas",
    "/mercati/caraibi",
    "/usa-market-entry-italian-companies",
    "/business-development-usa",
    "/ricerca-distributori-usa",
    "/us-retail-partnerships",
    "/vendere-prodotti-italiani-usa",
    "/temporary-export-manager-usa",
    "/food-beverage-usa",
    "/moda-design-usa",
    "/agente-vs-distributore-usa",
    "/privacy",
    "/missing-route",
]


def wait_for_server(timeout=30):
    deadline = time.time() + timeout
    while time.time() < deadline:
        try:
            urllib.request.urlopen(BASE_URL, timeout=1)
            return
        except Exception:
            time.sleep(0.5)
    raise RuntimeError("Vite server did not start in time")


def tail_log(lines=40):
    if not LOG_FILE.exists():
        return "(no vite log output captured)"
    content = LOG_FILE.read_text(encoding="utf-8", errors="replace").splitlines()
    return "\n".join(content[-lines:])


def main():
    LOG_DIR.mkdir(parents=True, exist_ok=True)
    subprocess.run(["python3", "scripts/dev_server_guard.py"], cwd=ROOT, check=True)

    try:
        wait_for_server()
        with sync_playwright() as p:
            browser = p.chromium.launch(headless=True)
            for viewport in ({"width": 1440, "height": 1000}, {"width": 390, "height": 844}):
                page = browser.new_page(viewport=viewport)
                for route in ROUTES:
                    page.goto(f"{BASE_URL}{route}", wait_until="networkidle")
                    assert page.title(), f"Missing title on {route}"
                    assert page.locator("h1").count() >= 1, f"Missing h1 on {route}"
                page.close()

            page = browser.new_page()
            page.goto(f"{BASE_URL}/", wait_until="networkidle")
            assert page.evaluate("localStorage.getItem('cookieConsent')") is None
            page.wait_for_selector("text=/Accetta tutto|Accept all/", timeout=3000)
            browser.close()
    except Exception:
        print(tail_log(), flush=True)
        raise


if __name__ == "__main__":
    main()
