#!/usr/bin/env python3
"""Validate the GP & Partners marketing execution implementation."""
from __future__ import annotations

import json
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]


def read(relative: str) -> str:
    return (ROOT / relative).read_text(encoding="utf-8")


def assert_contains(relative: str, needle: str) -> None:
    content = read(relative)
    assert needle in content, f"{relative} must contain: {needle}"


def main() -> None:
    assert_contains("index.html", "<title>GP & Partners | USA Market Entry Partner operativo</title>")
    assert_contains("index.html", "GP & Partners - USA Market Entry Partner operativo")
    assert_contains("index.html", "pipeline commerciale reale")

    assert_contains("src/components/shared/Seo.jsx", "USA Market Entry Partner operativo")
    assert_contains("src/App.jsx", "/buyer-readiness-usa")
    assert_contains("src/pages/seo/seoPageData.js", "buyerReadinessUsa")
    assert_contains("src/pages/seo/seoPageData.js", "Il problema non è trovare un buyer. È arrivare pronto quando risponde.")
    assert_contains("src/pages/seo/seoPageData.js", "Ricerca distributori USA per aziende italiane | GP & Partners")
    assert_contains("src/pages/seo/seoPageData.js", "Retail Partnerships USA per brand italiani | GP & Partners")
    assert_contains("src/pages/seo/seoPageData.js", "Temporary Export Manager USA per PMI italiane | GP & Partners")
    assert_contains("src/pages/seo/SeoLandingPage.jsx", "download_checklist")
    assert_contains("src/pages/seo/SeoLandingPage.jsx", "book_call")
    assert_contains("src/pages/seo/SeoLandingPage.jsx", "landing_cta_click")
    assert_contains("src/App.jsx", "landing_scroll_75")
    assert_contains("src/pages/Contact.jsx", "form_submit")
    assert_contains("src/pages/Contact.jsx", "click_phone")
    assert_contains("src/components/shared/SocialLinks.jsx", "click_linkedin")

    lead_magnet = ROOT / "public/lead-magnets/buyer-distributor-readiness-checklist.md"
    assert lead_magnet.exists(), "lead magnet checklist must exist"
    checklist = lead_magnet.read_text(encoding="utf-8")
    assert "Scoring" in checklist
    assert "Buyer/Distributor Readiness" in checklist

    queue_path = ROOT / "content/editorial/gp-partners-linkedin-queue.json"
    assert queue_path.exists(), "LinkedIn editorial queue must exist"
    queue = json.loads(queue_path.read_text(encoding="utf-8"))
    assert len(queue["posts"]) >= 10, "editorial queue must contain at least 10 LinkedIn posts"
    assert all(post.get("landing") for post in queue["posts"]), "each post must have a landing destination"

    comment_strategy = ROOT / "content/editorial/daily-comment-strategy.json"
    assert comment_strategy.exists(), "daily comment strategy must exist"
    strategy = json.loads(comment_strategy.read_text(encoding="utf-8"))
    assert len(strategy["daily_targets"]) >= 5

    print("marketing execution validation passed")


if __name__ == "__main__":
    main()
