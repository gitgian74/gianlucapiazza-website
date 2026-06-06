import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

/**
 * Resets the window scroll position to the top whenever the route changes.
 * Without this, React Router keeps the previous scroll offset, so navigating
 * (e.g. opening the menu and clicking "About") would land mid-page instead of
 * at the top. Skips hash links so in-page anchors still work.
 */
export function ScrollToTop() {
    const { pathname, hash } = useLocation();

    useEffect(() => {
        if (hash) {
            return;
        }
        window.scrollTo(0, 0);
    }, [pathname, hash]);

    return null;
}
