// Single source of truth for the "book a call" destination.
// Set VITE_BOOKING_URL to your Google Appointment Schedules (or any
// booking) URL. Until then, CTAs fall back to the /contact form.
export const BOOKING_URL = (import.meta.env.VITE_BOOKING_URL || '').trim();
export const hasBooking = BOOKING_URL.length > 0;
