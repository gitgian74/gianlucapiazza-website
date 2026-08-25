import React from 'react';

// Senza questo, qualunque errore di render lascia una pagina bianca senza
// spiegazioni. Il caso concreto piu' frequente: dopo un deploy, chi ha la
// scheda gia' aperta naviga verso una route lazy e chiede un chunk con l'hash
// vecchio, che non esiste piu'. Per quel caso specifico ricaricare risolve, e
// lo facciamo una volta sola per non finire in un ciclo di reload.
const RELOAD_FLAG = 'chunkReloadAttempted';

function isStaleChunkError(error) {
    const message = `${error?.name || ''} ${error?.message || ''}`;
    return /ChunkLoadError|Loading chunk|dynamically imported module|Importing a module script failed/i.test(message);
}

export class ErrorBoundary extends React.Component {
    constructor(props) {
        super(props);
        this.state = { hasError: false };
    }

    static getDerivedStateFromError() {
        return { hasError: true };
    }

    componentDidCatch(error, info) {
        console.error('[ErrorBoundary]', error, info?.componentStack);

        if (isStaleChunkError(error) && !sessionStorage.getItem(RELOAD_FLAG)) {
            try {
                sessionStorage.setItem(RELOAD_FLAG, '1');
            } catch {
                // Se lo storage non e' disponibile evitiamo il reload:
                // senza il flag non potremmo impedire un ciclo infinito.
                return;
            }
            window.location.reload();
        }
    }

    render() {
        if (!this.state.hasError) {
            return this.props.children;
        }

        // Volutamente indipendente dal contesto lingua: se il boundary e'
        // scattato non possiamo dare per scontato che i provider siano vivi.
        return (
            <div
                role="alert"
                className="min-h-screen flex flex-col items-center justify-center gap-4 px-6 text-center bg-slate-950 text-slate-100"
            >
                <h1 className="text-2xl font-medium">Qualcosa è andato storto</h1>
                <p className="text-slate-400 max-w-md">
                    Si è verificato un errore imprevisto. Ricaricare la pagina di solito risolve.
                    <span className="block mt-1">Something went wrong. Reloading usually fixes it.</span>
                </p>
                <button
                    type="button"
                    onClick={() => window.location.reload()}
                    className="mt-2 bg-white text-slate-950 px-6 py-2.5 rounded-lg font-medium hover:bg-slate-200 transition-colors"
                >
                    Ricarica / Reload
                </button>
            </div>
        );
    }
}
