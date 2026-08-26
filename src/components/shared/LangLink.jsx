import { Link } from 'react-router-dom';
import { useLanguage } from '../../hooks/use-language';
import { langPath } from '../../lib/locale';

// Link che resta nella lingua corrente: to="/services" porta a /services in
// italiano e a /en/services in inglese. Senza questo, navigare dalla versione
// inglese riporterebbe in italiano al primo clic.
// URL assoluti, ancore e oggetti location passano invariati.
export function LangLink({ to, ...rest }) {
    const { language } = useLanguage();
    const target = typeof to === 'string' && to.startsWith('/')
        ? langPath(to, language)
        : to;

    return <Link to={target} {...rest} />;
}
