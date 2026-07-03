#!/usr/bin/env python3
"""Render the branded lead-magnet PDF from its HTML template.

Usage: python3 scripts/generate_lead_magnet_pdf.py
Output: public/lead-magnets/buyer-distributor-readiness-checklist.pdf
"""
from pathlib import Path

from playwright.sync_api import sync_playwright

ROOT = Path(__file__).resolve().parents[1]
TEMPLATE = ROOT / "scripts/lead-magnet/buyer-distributor-readiness-checklist.html"
OUTPUT = ROOT / "public/lead-magnets/buyer-distributor-readiness-checklist.pdf"

FOOTER = """
<div style="width:100%; font-family:-apple-system,'Helvetica Neue',Arial,sans-serif; font-size:7pt; color:#94a3b8; padding:0 15mm; display:flex; justify-content:space-between;">
  <span>GP &amp; Partners — Buyer/Distributor Readiness Checklist</span>
  <span>gianlucapiazza.com &nbsp;·&nbsp; <span class="pageNumber"></span>/<span class="totalPages"></span></span>
</div>
"""


def main() -> None:
    with sync_playwright() as p:
        browser = p.chromium.launch()
        page = browser.new_page()
        page.goto(TEMPLATE.as_uri())
        page.pdf(
            path=str(OUTPUT),
            format="A4",
            print_background=True,
            display_header_footer=True,
            header_template="<span></span>",
            footer_template=FOOTER,
            margin={"top": "0mm", "bottom": "14mm", "left": "0mm", "right": "0mm"},
        )
        browser.close()
    print(f"PDF written: {OUTPUT} ({OUTPUT.stat().st_size / 1024:.0f} KB)")


if __name__ == "__main__":
    main()
