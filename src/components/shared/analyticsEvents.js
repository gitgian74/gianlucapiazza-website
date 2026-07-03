// Canonical GA4 event ids. Values are wire names already live in GA4 —
// renaming one breaks reporting continuity, so change keys, never values.
// Contact fires FORM_SUBMIT alongside CONTACT_FORM_SUBMIT on purpose
// (GA4 recommended event + custom event); same for the landing CTA pair
// LANDING_CTA_CLICK + BOOK_CALL vs the generic site-nav CTA_CLICK.
export const ANALYTICS_EVENTS = {
  BOOK_CALL: 'book_call',
  CLICK_LINKEDIN: 'click_linkedin',
  CONTACT_FORM_ERROR: 'contact_form_error',
  CONTACT_FORM_START: 'contact_form_start',
  CONTACT_FORM_SUBMIT: 'contact_form_submit',
  CONTACT_FORM_SUCCESS: 'contact_form_success',
  CTA_CLICK: 'cta_click',
  DOWNLOAD_CHECKLIST: 'download_checklist',
  FORM_SUBMIT: 'form_submit',
  GENERATE_LEAD: 'generate_lead',
  LANDING_CTA_CLICK: 'landing_cta_click',
  LANDING_SCROLL_75: 'landing_scroll_75',
  LANGUAGE_SWITCH: 'language_switch',
  MARKET_RESEARCH_ERROR: 'market_research_error',
  MARKET_RESEARCH_SUBMIT: 'market_research_submit',
  MARKET_RESEARCH_SUCCESS: 'market_research_success',
  NAVIGATION_CLICK: 'navigation_click',
  SCROLL_DEPTH: 'scroll_depth',
  SEO_PATH_CLICK: 'seo_path_click',
  SERVICE_CARD_CLICK: 'service_card_click',
  SOCIAL_CLICK: 'social_click',
};
