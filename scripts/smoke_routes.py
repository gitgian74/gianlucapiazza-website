import subprocess
import time
import urllib.request

from playwright.sync_api import sync_playwright


BASE_URL = "http://127.0.0.1:5173"
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


def main():
    server = subprocess.Popen(
        ["pnpm", "dev", "--host", "127.0.0.1"],
        stdout=subprocess.DEVNULL,
        stderr=subprocess.DEVNULL,
    )

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
            page.wait_for_selector("text=Accetta", timeout=3000)
            browser.close()
    finally:
        server.terminate()
        server.wait(timeout=10)


if __name__ == "__main__":
    main()
