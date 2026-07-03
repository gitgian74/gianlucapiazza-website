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

    assert_contains("src/lib/coreMeta.js", "USA Market Entry Partner operativo")
    assert_contains("index.html", "structured-data-site")
    assert_contains("index.html", "classList.add('js')")
    assert_contains("src/index.css", "html.js .seo-static-fallback")
    assert_contains("src/App.jsx", "/buyer-readiness-usa")

    robots = read("public/robots.txt")
    for agent in ("GPTBot", "OAI-SearchBot", "ClaudeBot", "Claude-User", "PerplexityBot", "Perplexity-User"):
        assert f"User-agent: {agent}\nAllow: /" in robots, f"robots.txt must allow AI crawler: {agent}"
    assert "Disallow: /" not in robots, "robots.txt must not disallow any crawler (GEO policy 2026-07-03)"

    llms = read("public/llms.txt")
    for slug in ("miami", "new-york", "chicago", "caraibi", "silicon-valley"):
        assert f"https://gianlucapiazza.com/mercati/{slug}" in llms, f"llms.txt must list market page: {slug}"

    for needle in ("renderHomeFallback", "buildCorePageHtml"):
        assert_contains("scripts/generate_seo_html.mjs", needle)
    assert_contains("src/pages/seo/seoPageData.js", "buyerReadinessUsa")
    assert_contains("src/pages/seo/seoPageData.js", "Il problema non è trovare un buyer. È arrivare pronto quando risponde.")
    assert_contains("src/pages/seo/seoPageData.js", "Ricerca distributori USA per aziende italiane | GP & Partners")
    assert_contains("src/pages/seo/seoPageData.js", "Retail Partnerships USA per brand italiani | GP & Partners")
    assert_contains("src/pages/seo/seoPageData.js", "Temporary Export Manager USA per PMI italiane | GP & Partners")
    assert_contains("src/components/shared/analyticsEvents.js", "'download_checklist'")
    assert_contains("src/components/shared/analyticsEvents.js", "'book_call'")
    assert_contains("src/components/shared/analyticsEvents.js", "'landing_cta_click'")
    assert_contains("src/components/shared/analyticsEvents.js", "'landing_scroll_75'")
    assert_contains("src/components/shared/analyticsEvents.js", "'form_submit'")
    assert_contains("src/components/shared/analyticsEvents.js", "'click_phone'")
    assert_contains("src/components/shared/analyticsEvents.js", "'click_linkedin'")
    assert_contains("src/pages/seo/SeoLandingPage.jsx", "ANALYTICS_EVENTS.DOWNLOAD_CHECKLIST")
    assert_contains("src/pages/seo/SeoLandingPage.jsx", "ANALYTICS_EVENTS.BOOK_CALL")
    assert_contains("src/pages/seo/SeoLandingPage.jsx", "ANALYTICS_EVENTS.LANDING_CTA_CLICK")
    assert_contains("src/App.jsx", "ANALYTICS_EVENTS.LANDING_SCROLL_75")
    assert_contains("src/pages/Contact.jsx", "ANALYTICS_EVENTS.FORM_SUBMIT")
    assert_contains("src/pages/Contact.jsx", "ANALYTICS_EVENTS.CLICK_PHONE")
    assert_contains("src/components/shared/SocialLinks.jsx", "ANALYTICS_EVENTS.CLICK_LINKEDIN")

    for module in ("src/App.jsx", "src/components/Layout.jsx", "scripts/generate_seo_html.mjs"):
        assert_contains(module, "marketRoutes")
    market_data = read("src/pages/markets/marketLandingData.js")
    routes_module = read("src/pages/markets/marketRoutes.js")
    for slug in ("miami", "new-york", "chicago", "boston", "las-vegas", "caraibi"):
        assert f'"{slug}": {{' in market_data, f"marketLandingData must define: {slug}"
        assert f"slug: '{slug}'" in routes_module, f"marketRoutes must define: {slug}"
    assert market_data.count('"faqs"') >= 24, "every market landing must have IT+EN faqs"
    assert_contains("src/pages/markets/MarketLandingPage.jsx", "FAQ_TITLE")
    assert_contains("scripts/generate_seo_html.mjs", "faqNode")

    lead_magnet = ROOT / "public/lead-magnets/buyer-distributor-readiness-checklist.md"
    assert lead_magnet.exists(), "lead magnet checklist source must exist"
    checklist = lead_magnet.read_text(encoding="utf-8")
    assert "Scoring" in checklist
    assert "Buyer/Distributor Readiness" in checklist

    lead_magnet_pdf = ROOT / "public/lead-magnets/buyer-distributor-readiness-checklist.pdf"
    assert lead_magnet_pdf.exists(), "branded lead magnet PDF must exist (scripts/generate_lead_magnet_pdf.py)"
    assert lead_magnet_pdf.stat().st_size > 50_000, "lead magnet PDF looks truncated"
    assert_contains("src/pages/seo/seoPageData.js", "buyer-distributor-readiness-checklist.pdf")

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
