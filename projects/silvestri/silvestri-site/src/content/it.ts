import type { Dict } from "./types";

const it: Dict = {
  locale: "it",
  localeTag: "it",
  ogLocale: "it_IT",

  countries: { miami: "Stati Uniti", rome: "Italia", montevideo: "Uruguay" },

  nav: {
    skip: "Vai al contenuto",
    links: {
      home: "Home",
      practice: "Aree di attività",
      about: "Chi siamo",
      professionals: "Professionisti",
      contact: "Contatti",
      privacy: "Privacy",
      cookies: "Cookie policy",
      legal: "Note legali",
    },
    cta: { label: "Parla con noi", page: "contact" },
    contactCta: "Scrivi allo studio",
    langCode: "EN",
    langLabel: "Leggi questa pagina in inglese",
    menuOpen: "Menu",
    menuClose: "Chiudi",
    menuLabel: "Navigazione del sito",
  },

  meta: {
    home: {
      title: "Studio legale italiano a Miami, Roma e Montevideo | Silvestri International",
      description:
        "Silvestri International è uno studio legale italiano e foreign legal consulting company in diritto italiano in Florida. Sedi a Miami, Roma e Montevideo per diritto societario, contrattualistica, M&A, immobiliare, fiscale, immigrazione e contenzioso tra Italia e Stati Uniti. Le questioni di diritto della Florida sono seguite con avvocati affiliati abilitati in Florida.",
      ogTitle: "Studio legale italiano a Miami, Roma e Montevideo | Silvestri International",
      ogDescription:
        "Diritto italiano seguito direttamente, diritto della Florida con avvocati affiliati abilitati — da Miami, Roma e Montevideo.",
    },
    practice: {
      title: "Aree di attività — Societario, M&A, Immobiliare, Fiscale | Silvestri International",
      description:
        "Sette aree di attività tra Italia e Florida: diritto societario e costituzione di società, contratti commerciali, M&A, immobiliare transfrontaliero, pianificazione fiscale italiana, immigrazione e contenzioso transnazionale. Per ogni area è indicato cosa svolge direttamente lo studio e cosa coordina con professionisti locali abilitati.",
      ogTitle: "Aree di attività | Silvestri International",
      ogDescription: "Sette aree, un solo interlocutore — e una linea chiara tra prestazione diretta e coordinamento.",
    },
    about: {
      title: "Chi siamo — Studio legale italiano in Florida | Silvestri International",
      description:
        "Silvestri International – Studio Legale Internazionale è uno studio legale italiano con sedi a Miami Brickell, Roma e Montevideo. Un ponte tra la giurisdizione italiana e quella americana per investitori, aziende e famiglie.",
      ogTitle: "Chi siamo | Silvestri International",
      ogDescription: "Un ponte tra due giurisdizioni, da Miami, Roma e Montevideo.",
    },
    professionals: {
      title: "Professionisti — Lorenzo Silvestri | Silvestri International",
      description:
        "Lorenzo Silvestri, avvocato italiano iscritto all'Ordine di Roma e Certified Foreign Legal Consultant in diritto italiano in Florida — non abilitato all'esercizio della professione forense in Florida — e il team di Silvestri International a Miami, Roma e Montevideo.",
      ogTitle: "Professionisti | Silvestri International",
      ogDescription: "Chi risponde alla vostra prima chiamata è chi poi segue la pratica.",
    },
    contact: {
      title: "Contatti — Miami, Roma, Montevideo | Silvestri International",
      description:
        "Contatta Silvestri International: Miami (1200 Brickell Ave, Suite 310) +1 786 502 3615, Roma (Piazza della Libertà 20) +39 06 3218783, Montevideo (Víctor Soliño 349) +598 94 733 513. Italiano, inglese, spagnolo e francese, scritti e parlati.",
      ogTitle: "Contatti | Silvestri International",
      ogDescription: "Tre sedi, un solo team: Miami, Roma, Montevideo.",
    },
    privacy: {
      title: "Informativa privacy | Silvestri International",
      description:
        "Cosa fa questo sito con i dati personali: nessun modulo di contatto, nessun tracciamento, nessun analytics. Log del server e mappe caricate su clic sono dichiarati, e ciò che lo studio deve ancora fornire resta in evidenza.",
      ogTitle: "Informativa privacy | Silvestri International",
      ogDescription: "Nessun modulo, nessun tracciamento. Il resto è dichiarato.",
    },
    cookies: {
      title: "Cookie policy | Silvestri International",
      description:
        "Questo sito non imposta cookie e non usa analytics: misurato sul sito pubblicato, con i controlli elencati. Le mappe degli uffici si caricano solo se il visitatore preme il pulsante.",
      ogTitle: "Cookie policy | Silvestri International",
      ogDescription: "Nessun cookie, e le misure che lo dimostrano.",
    },
    legal: {
      title: "Note legali | Silvestri International",
      description:
        "Niente in questo sito è consulenza legale e leggerlo non instaura un rapporto professionale. Lorenzo Silvestri è avvocato italiano e Foreign Legal Consultant certificato dalla Florida Bar, non abilitato all'esercizio della professione forense in Florida.",
      ogTitle: "Note legali | Silvestri International",
      ogDescription: "I limiti di cosa è questo sito.",
    },
  },

  scope: {
    directLabel: "Seguito direttamente dallo studio",
    directText:
      "Diritto italiano — societario, commerciale, civile, famiglia, successioni, proprietà intellettuale e fiscale — con consulenza diretta, in italiano, inglese, spagnolo o francese.",
    coordinatedLabel: "Seguito con professionisti locali abilitati",
    coordinatedText:
      "Le questioni di diritto della Florida, i procedimenti giudiziari e le pratiche di immigrazione sono gestiti con studi affiliati abilitati in Florida. Lorenzo Silvestri non è abilitato all'esercizio della professione forense in Florida.",
  },

  home: {
    hero: {
      kicker: "Miami · Roma · Montevideo",
      titleLines: ["Due giurisdizioni.", "Uno studio che le legge entrambe"],
      lead:
        "Uno studio legale italiano e foreign legal consulting company in diritto italiano in Florida. Seguiamo l'intera pratica: il lato italiano, il lato americano e la parte nel mezzo, dove di solito le operazioni si bloccano.",
      leadClaim:
        "Il primo studio legale italiano e foreign legal consulting company in diritto italiano in Florida. Seguiamo l'intera pratica: il lato italiano, il lato americano e la parte nel mezzo, dove di solito le operazioni si bloccano.",
      ctas: [
        { label: "Parla con lo studio", page: "contact" },
        { label: "Cosa seguiamo", page: "practice" },
      ],
      clocksLabel: "Ora locale nelle tre sedi",
      media: {
        pause: "Pausa",
        play: "Riproduci",
        viewLabel: "Vista di sfondo",
        day: "Giorno",
        night: "Notte",
      },
    },
    figures: [
      { value: "2", label: "Giurisdizioni, un solo team" },
      { value: "3", label: "Sedi: Miami, Roma, Montevideo" },
      { value: "7", label: "Aree di attività sotto lo stesso tetto" },
      { value: "4", label: "Lingue di lavoro: IT, EN, ES, FR" },
    ],
    bridge: {
      kicker: "Il ponte",
      title: "Il traffico va in entrambe le direzioni. Anche noi.",
      cells: [
        {
          tag: "Italia → Stati Uniti",
          title: "Aziende e investitori italiani che arrivano in Florida",
          text:
            "Vi serve una società americana che funzioni dal primo giorno, non un certificato in un cassetto. Registriamo la società, teniamo i libri sociali, firmiamo come officer o manager locale se vi serve qualcuno sul posto, apriamo il conto bancario secondo le vostre istruzioni scritte e manteniamo ogni passaggio conforme anche sul lato italiano.",
          media: {
            subject: "Miami al crepuscolo — il lato statunitense di ogni pratica",
            spec: "16:10 · colore",
            src: "/photo/miami-twilight.webp",
            width: 1400,
            height: 875,
            alt: "Downtown Miami al crepuscolo, vista dalla Biscayne Bay",
          },
        },
        {
          tag: "Stati Uniti → Italia",
          title: "Clienti americani e con doppia cittadinanza, con questioni in Italia",
          text:
            "Un appartamento ereditato a Roma, un'azienda di famiglia, una controversia con un fornitore, un marchio, un avviso dell'Agenzia delle Entrate. Il nostro ufficio di Roma segue questioni italiane di diritto commerciale, societario, civile, di famiglia, successorio e di proprietà intellettuale — e vi risponde in inglese, nel vostro fuso orario, senza che dobbiate prendere un aereo.",
          media: {
            subject: "Roma — il centro storico vicino all'ufficio di Piazza della Libertà",
            spec: "16:10 · colore",
            src: "/photo/rome-rooftops.webp",
            width: 1400,
            height: 875,
            alt: "Tetti del centro di Roma al tramonto, con la cupola di una chiesa sullo sfondo",
          },
        },
      ],
    },
    stages: {
      kicker: "Come si entra davvero negli Stati Uniti",
      title: "Dalla decisione alla società operativa",
      lead:
        "Sei fasi, con entrambe le giurisdizioni attive nello stesso momento. Una colonna è ciò che accade negli Stati Uniti, l'altra è ciò che deve accadere in Italia perché lo stesso passaggio regga.",
      head: { step: "Fase", us: "Negli Stati Uniti", it: "In Italia, in parallelo" },
      items: [
        {
          num: "01",
          title: "Struttura e fattibilità",
          us: "Si sceglie il veicolo — LLC o corporation — la catena di controllo e chi firma cosa. Tutto deciso prima di depositare qualsiasi atto.",
          it: "Verifica della struttura rispetto agli obblighi fiscali e dichiarativi italiani del socio, perché la scelta americana non crei un problema in Italia.",
        },
        {
          num: "02",
          title: "Costituzione e sede legale",
          us: "Registrazione della società, domiciliazione, registered agent, custodia dei libri sociali, by-laws, operating agreement o patti parasociali.",
          it: "Mandati fiduciari, trust o costituzione di società italiane quando il gruppo ne ha bisogno, tramite il nostro partner italiano FIDREV.",
        },
        {
          num: "03",
          title: "Banca e una firma sul posto",
          us: "Conto bancario aperto e operato secondo le vostre istruzioni scritte. Se non avete ancora nessuno sul posto, possiamo essere nominati officer o manager della società in Florida.",
          it: "Flussi di capitale e documentazione infragruppo impostati in modo che i movimenti di denaro siano difendibili in entrambi i Paesi.",
        },
        {
          num: "04",
          title: "Sede e persone",
          us: "Locazione o acquisto commerciale negoziati attraverso la nostra rete di developer e broker; contratti di lavoro, agenzia, distribuzione e franchising redatti. Visti gestiti con primari studi di immigrazione della Florida.",
          it: "Distacco, payroll e posizioni previdenziali per il personale che inviate dall'Italia.",
        },
        {
          num: "05",
          title: "Operatività, con i conti in ordine",
          us: "Contratti quotidiani, clienti, fornitori e proprietà intellettuale. Supervisioniamo il lavoro di CPA di fiducia in Florida ovunque vada rispettata anche la legge italiana.",
          it: "Pianificazione e adempimenti fiscali italiani dal nostro dipartimento fiscale e contabile — prevenzione, non contenzioso con l'Agenzia delle Entrate.",
        },
        {
          num: "06",
          title: "Crescita, uscita o controversia",
          us: "Un investimento immobiliare, un'acquisizione dalla LOI al closing, o una controversia transnazionale gestita con studi affiliati della Florida.",
          it: "Il lato italiano della stessa operazione o della stessa causa: societario, civile, famiglia, successioni e proprietà intellettuale, sostenuto da un avvocato italiano che conosce tutta la storia.",
        },
      ],
      note:
        "I tempi dipendono dai documenti del cliente e da terzi — banche, locatori, autorità. Vi diciamo cosa è realistico prima che vi impegniate.",
    },
    hours: {
      kicker: "Tre sedi, una giornata di lavoro",
      title: "Roma apre la pratica. Miami la chiude.",
      lead:
        "Roma apre la giornata, Montevideo la porta avanti nel pomeriggio, Miami la chiude. Le barre qui sotto sono la giornata di lavoro di ogni sede su un asse UTC, ricalcolata sull'ora legale di oggi.",
      officeLabel: "Sede",
      nowLabel: "Ora locale",
      localLegend: "Orario di lavoro locale",
      overlapLegend: "Tutte e tre le sedi aperte",
      overlapUnavailable: "Questa settimana non c'è una finestra con tutte e tre le sedi aperte",
      note:
        "Gli scostamenti sono letti dai fusi IANA nel vostro browser: la finestra comune segue il cambio di ora legale di ciascun Paese invece di un valore fisso. Gli orari sono quelli dichiarati dallo studio e sono da riconfermare.",
    },
    areas: {
      kicker: "Aree di attività",
      title: "Sette aree, un solo interlocutore",
      more: "Leggi il dettaglio",
      rows: [
        {
          id: "corporate",
          title: "Societario",
          text:
            "Società in Florida costituite, domiciliate e gestite davvero — registered agent, libri sociali, documenti di governance, officer locale quando serve.",
          delivery: "Diretto · Adempimenti in Florida con professionisti locali abilitati dove richiesto",
        },
        {
          id: "commercial",
          title: "Commerciale",
          text:
            "Locazioni, lavoro, joint venture, distribuzione, licenza, agenzia e franchising — redatti per la sponda dell'Atlantico che dovrà farli valere.",
          delivery: "Diretto sul diritto italiano · Con avvocati della Florida sul diritto locale",
        },
        {
          id: "ma",
          title: "M&A",
          text:
            "Da una quota di minoranza in una LLC a un'acquisizione totale: lettera d'intenti, negoziazione, due diligence, closing.",
          delivery: "Diretto sul lato italiano · Con avvocati della Florida sul lato americano",
        },
        {
          id: "real-estate",
          title: "Immobiliare",
          text: "La prima casa, una condo conversion o un intero edificio. Operazioni transfrontaliere in cui un giorno perso è un affare perso.",
          delivery: "Diretto su struttura e diritto italiano · Closing in Florida con avvocati abilitati",
        },
        {
          id: "tax",
          title: "Fiscale",
          text: "Pianificazione e adempimenti fiscali italiani, e supervisione dei vostri CPA in Florida dove i due sistemi devono combaciare.",
          delivery: "Diretto sul fiscale italiano · Adempimenti USA con i vostri CPA",
        },
        {
          id: "immigration",
          title: "Immigrazione",
          text: "Visti e residenza permanente con primari studi di immigrazione della Florida, coordinati con i tempi della parte societaria.",
          delivery: "Coordinato con studi di immigrazione della Florida",
        },
        {
          id: "litigation",
          title: "Contenzioso",
          text:
            "Controversie nazionali e transnazionali complesse — commerciali, societarie, immobiliari, di famiglia e successorie — come consulenti di diritto italiano al fianco di studi della Florida.",
          delivery: "Consulenti ed esperti di diritto italiano · Procedimenti in Florida condotti da avvocati abilitati",
        },
      ],
    },
    network: {
      kicker: "La rete",
      title: "Studio piccolo, raggio ampio",
      text:
        "Avete a che fare con un solo team. Dietro: Coen Palandri Silvestri a Roma per l'intera pratica italiana, FIDREV per servizi fiduciari, trust e società italiane, studi affiliati della Florida per contenzioso e immigrazione, e CPA, developer e broker selezionati sul posto. L'ufficio di Miami si trova nel Brickell 21 Financial Centre, nel cuore del distretto finanziario della città.",
      media: {
        subject: "Miami dalla Biscayne Bay — la città da cui lavora la sede",
        spec: "21:9 · colore",
        src: "/photo/brickell-bay.webp",
        width: 2100,
        height: 900,
        alt: "I grattacieli di Miami visti dalla Biscayne Bay in una giornata limpida",
      },
    },
    faq: {
      kicker: "Risposte chiare",
      title: "Le prime domande dei clienti",
      items: [
        {
          q: "Potete rappresentarmi davanti a un tribunale della Florida?",
          a: "Non come avvocati della Florida. Lorenzo Silvestri è avvocato italiano e Foreign Legal Consultant in diritto italiano certificato dal Florida Bar, non abilitato all'esercizio della professione forense in Florida. Agiamo come consulenti di diritto italiano e gestiamo il lato Florida con studi affiliati abilitati — una pratica, una strategia.",
        },
        {
          q: "Potete costituire e poi gestire la mia società in Florida?",
          a: "Sì. Registrazione, domiciliazione, registered agent, libri sociali, by-laws e patti parasociali — e, nella fase di avvio, nomina come officer o manager locale e assistenza sul conto bancario secondo le vostre istruzioni scritte.",
        },
        {
          q: "Ho ereditato un immobile in Italia. Potete seguirlo da Miami?",
          a: "È il cuore del nostro lavoro: questioni italiane civili, di famiglia e successorie, con l'ufficio di Roma e il suo dipartimento fiscale e contabile, gestite nel vostro fuso orario e nella vostra lingua.",
        },
        {
          q: "In quali lingue lavorate?",
          a: "Italiano, inglese, spagnolo e francese. Documenti, trattative e udienze — nessun interprete tra voi e il vostro avvocato.",
        },
      ],
    },
    cta: {
      title: "Diteci cosa volete fare. Vi diremo cosa serve.",
      text: "Due righe sulla questione, i Paesi coinvolti e la vostra scadenza. Nessun documento riservato nella prima email.",
      links: [
        { label: "Scrivi allo studio", href: "mailto:info@silvestri-international.com" },
        { label: "Tutte le sedi e i numeri diretti", page: "contact" },
      ],
    },
  },

  practice: {
    hero: {
      kicker: "Aree di attività",
      title: "Tutto ciò che serve a una pratica, su entrambe le sponde.",
      lead:
        "Sette aree, un solo interlocutore, e nessun vuoto dove finisce il lato italiano e dovrebbe cominciare quello americano. Per ogni area è indicato cosa svolge direttamente lo studio e cosa viene gestito con professionisti locali abilitati.",
    },
    jump: "Vai a un'area",
    deliveryLabels: { direct: "Seguito dallo studio", coordinated: "Con professionisti locali abilitati" },
    areas: [
      {
        id: "corporate",
        num: "01",
        title: "Societario",
        paragraphs: [
          "I nostri partner hanno costruito la loro reputazione portando aziende e privati italiani sul mercato americano nel modo giusto — e tenendoceli. Gestiamo l'intero processo di internazionalizzazione nel rispetto, allo stesso tempo, delle regole italiane e americane: registrazione della società, domiciliazione, servizi di registered agent con custodia dei libri sociali, e redazione di by-laws, operating agreement e patti parasociali.",
          "Tramite il nostro partner italiano FIDREV — Società Fiduciaria e di Revisione seguiamo anche mandati fiduciari statici, trust, e costituzione e gestione di società italiane.",
          "La fase di avvio in una giurisdizione straniera è quella in cui i fondatori perdono mesi. Per questo togliamo di mezzo la burocrazia: possiamo essere nominati officer o manager locale della vostra società in Florida e assistiamo nell'apertura e nella gestione del conto bancario secondo le vostre istruzioni scritte — mentre voi pensate all'attività.",
        ],
        direct:
          "Strutturazione e documenti societari, consulenza di diritto italiano, registered agent e libri sociali, nomina a officer o manager locale, assistenza bancaria secondo istruzioni scritte.",
        coordinated:
          "I pareri sul diritto societario della Florida e qualsiasi deposito giudiziario sono affidati ad avvocati affiliati abilitati in Florida.",
        tags: [
          "Registrazione società",
          "Domiciliazione",
          "Registered agent",
          "Libri sociali",
          "By-laws e operating agreement",
          "Officer / manager locale",
          "Assistenza bancaria",
          "Fiduciarie e trust (FIDREV)",
        ],
      },
      {
        id: "commercial",
        num: "02",
        title: "Commerciale",
        paragraphs: [
          "Dall'apertura di un'attività all'avvio di una rotta commerciale, copriamo ogni passaggio per costruire un'operatività commerciale negli Stati Uniti e in Italia. Una pratica consolidata in entrambe le giurisdizioni significa che il contratto è scritto per il tribunale che lo leggerebbe davvero.",
          "Negoziamo la locazione commerciale e redigiamo i contratti su cui si regge l'attività: lavoro, joint venture, partnership, distribuzione, licenza, agenzia e franchising.",
        ],
        direct: "Redazione e negoziazione, consulenza e contratti di diritto italiano, struttura dell'operazione tra i due sistemi.",
        coordinated: "Le questioni di efficacia secondo il diritto della Florida e il relativo contenzioso vanno ad avvocati abilitati in Florida.",
        tags: ["Locazioni commerciali", "Lavoro", "Joint ventures", "Distribuzione e agenzia", "Licenze", "Franchising"],
      },
      {
        id: "ma",
        num: "03",
        title: "M&A",
        paragraphs: [
          "Che stiate acquistando una piccola partecipazione in una LLC o in una corporation, rilevando un'intera azienda o fondendone due, la sequenza è la stessa e ogni passaggio è un punto in cui si perde valore: lettera d'intenti, negoziazione del contratto di compravendita, due diligence, closing.",
          "Seguiamo l'operazione dall'inizio alla fine e rendiamo visibili le conseguenze di diritto italiano di un'operazione americana — o viceversa — prima della firma, non dopo.",
        ],
        direct: "Gestione dell'operazione, due diligence e documenti di diritto italiano, conseguenze fiscali e societarie italiane.",
        coordinated: "Due diligence di diritto americano, meccanica del closing in Florida e adempimenti regolamentari con avvocati abilitati in Florida.",
        tags: ["Lettere d'intenti", "Negoziazione SPA", "Due diligence", "Closing", "Integrazione post-closing"],
      },
      {
        id: "real-estate",
        num: "04",
        title: "Immobiliare",
        paragraphs: [
          "Nell'immobiliare il tempo è essenziale — e mai come in un'operazione transfrontaliera. Seguiamo sia chi compra per la prima volta sia investitori esperti: la casa di famiglia, una condo conversion, lo sviluppo di un intero edificio residenziale o commerciale.",
          "Con una rete consolidata di developer e broker di fiducia, aiutiamo aziende e privati a trovare la posizione giusta e a negoziare condizioni migliori di locazione o acquisto — per un ufficio operativo, un magazzino o un investimento.",
        ],
        direct: "Struttura dell'operazione, conseguenze civilistiche e fiscali italiane, strategia di negoziazione, immobili e successioni in Italia.",
        coordinated: "Title, closing e diritto condominiale della Florida sono gestiti con avvocati abilitati e title agent locali.",
        tags: [
          "Acquisti residenziali",
          "Investimento e sviluppo",
          "Condo conversions",
          "Locazioni di uffici e magazzini",
          "Due diligence e closing",
        ],
      },
      {
        id: "tax",
        num: "05",
        title: "Fiscale",
        paragraphs: [
          "Il nostro dipartimento fiscale e contabile in Italia assiste nella pianificazione fiscale e negli adempimenti secondo le norme tributarie italiane. In materia fiscale la prevenzione è l'unica difesa che costa poco: il lavoro è costruito per evitare un contenzioso con l'Agenzia delle Entrate, non per vincerlo dopo.",
          "L'ufficio italiano fornisce inoltre servizi fiscali e contabili alle aziende che si espandono sul mercato italiano, e supervisioniamo il lavoro di CPA e commercialisti di fiducia in Florida ogni volta che deve allinearsi alla legge italiana.",
        ],
        direct: "Pianificazione fiscale italiana, dichiarazioni e contabilità in Italia, strategia pre-contenziosa con l'Agenzia delle Entrate.",
        coordinated: "Gli adempimenti federali e statali americani sono predisposti dai CPA; noi ne supervisioniamo la coerenza con il diritto italiano.",
        tags: ["Pianificazione fiscale italiana", "Adempimenti e dichiarazioni", "Contabilità in Italia", "Coordinamento CPA", "Strategia pre-contenziosa"],
      },
      {
        id: "immigration",
        num: "06",
        title: "Immigrazione",
        paragraphs: [
          "Ottenere il visto giusto o la residenza permanente è un processo lungo e formale, che tollera poco l'improvvisazione. Lavoriamo con primari studi di immigrazione della Florida perché il percorso venga scelto una volta e poi eseguito — e lo teniamo sincronizzato con i passaggi societari da cui dipende.",
        ],
        direct: "Pianificazione del percorso rispetto ai tempi societari, preparazione dei documenti sul lato italiano, un unico interlocutore.",
        coordinated: "Istanze, depositi e rappresentanza davanti alle autorità statunitensi sono gestiti dallo studio di immigrazione.",
        tags: ["Visti per investitori e lavoro", "Residenza permanente", "Pianificazione del trasferimento"],
      },
      {
        id: "litigation",
        num: "07",
        title: "Contenzioso",
        paragraphs: [
          "Assistiamo ogni giorno i clienti in controversie nazionali e transnazionali complesse. Una pratica approfondita nel diritto italiano e internazionale, insieme all'affiliazione con importanti studi della Florida specializzati in contenzioso commerciale, societario, immobiliare, di famiglia e successorio, significa che la strategia viene pianificata una volta per entrambe le giurisdizioni — non improvvisata due volte.",
          "I procedimenti di diritto della Florida sono condotti da avvocati abilitati in Florida; lo studio agisce come consulente ed esperto di diritto italiano.",
        ],
        direct: "Procedimenti in Italia, strategia di diritto italiano, pareri esperti di diritto italiano per corti e arbitri stranieri.",
        coordinated: "Ogni procedimento di diritto della Florida è condotto da avvocati abilitati in Florida.",
        tags: ["Controversie commerciali", "Societarie e tra soci", "Immobiliare", "Famiglia e successioni", "Pareri di diritto italiano"],
      },
    ],
    cta: {
      title: "Lavoriamo insieme.",
      text: "Descriveteci la questione in due righe. Riceverete una risposta chiara: se è di nostra competenza e cosa serve.",
      links: [
        { label: "Scrivi allo studio", href: "mailto:info@silvestri-international.com" },
        { label: "Tutte le sedi e i numeri diretti", page: "contact" },
      ],
    },
  },

  about: {
    hero: {
      kicker: "Silvestri International — Studio Legale Internazionale",
      title: "Due ordinamenti, letti davvero.",
      titleClaim: "Il primo studio legale italiano in Florida.",
      lead:
        "Fondato nel gennaio 2019, con sedi a Miami, Roma e Montevideo. Il nostro lavoro è preciso e utile: far funzionare correttamente un investimento, una società o una questione di famiglia in due ordinamenti nello stesso momento.",
    },
    functions: {
      kicker: "Cosa facciamo",
      title: "Tre cose, fatte bene",
      items: [
        {
          num: "01",
          title: "Investitori italiani, in piena regola",
          text:
            "Teniamo gli investitori italiani in regola con il fisco italiano e con il diritto internazionale mentre operano all'estero — prima che il rischio esista, non dopo l'arrivo di un avviso.",
        },
        {
          num: "02",
          title: "Servizi societari in Florida",
          text:
            "Una gamma completa di servizi societari per le realtà che operano in Florida — costituzione, gestione, operatività quotidiana — in conformità con la legge italiana dove si applica, con le questioni di diritto della Florida affidate ad avvocati locali abilitati.",
        },
        {
          num: "03",
          title: "Diritto italiano per clienti italo-americani",
          text:
            "Consulenza legale e fiscale a persone e società italo-americane in diritto commerciale, societario e civile italiano — incluse questioni di famiglia e successorie — e proprietà intellettuale.",
        },
      ],
    },
    mission: {
      kicker: "Missione",
      title: "Un ponte, non un servizio di traduzione",
      paragraphs: [
        "La nostra missione è fare da ponte tra due giurisdizioni: rendere più semplice lo scambio di investimenti e seguire l'intero processo per persone e aziende straniere che vogliono entrare nel mercato americano o in quello italiano con un passo solido e ben organizzato — nel pieno rispetto di entrambi i sistemi.",
        "Collaborazioni consolidate con studi e professionisti di primo piano in ogni ambito legale e fiscale, negli Stati Uniti e in Italia, ci permettono di guidare i clienti nell'incertezza di una giurisdizione straniera con un percorso costruito sui loro obiettivi reali — non su un modello.",
      ],
      media: {
        subject: "Roma — il lato italiano di ogni pratica",
        spec: "16:10 · colore",
        src: "/photo/rome-rooftops.webp",
        width: 1400,
        height: 875,
        alt: "Tetti del centro di Roma al tramonto, con la cupola di una chiesa sullo sfondo",
      },
    },
    timeline: {
      kicker: "Tappe",
      title: "Come è arrivato qui lo studio",
      items: [
        {
          year: "2011",
          text: "Lorenzo Silvestri si trasferisce negli Stati Uniti per aprire l'ufficio di Miami di un prestigioso studio legale italiano, che dirige fino al 2018.",
        },
        {
          year: "2016",
          text: "Certificato dal Florida Bar come Foreign Legal Consultant in diritto italiano — dopo la nomina a Notary Public della Florida nel 2014.",
        },
        {
          year: "2019",
          text: "Nasce Silvestri International – Studio Legale Internazionale, con uffici a Roma, Miami Beach e Miami Brickell.",
        },
        {
          year: "2020",
          text: "Lo studio apre un ufficio strategico nel Brickell 21 Financial Centre, nel cuore del distretto finanziario di Miami.",
        },
        {
          year: "Oggi",
          text: "Miami, Roma e Montevideo. Come partner di Coen Palandri Silvestri, uno studio internazionale a servizio completo per qualsiasi questione legale o fiscale in Italia e, sul diritto italiano, in Florida.",
        },
      ],
    },
    network: {
      kicker: "La rete",
      title: "Chi sta dietro la pratica",
      panels: [
        {
          title: "Coen Palandri Silvestri — Roma",
          text: "L'intera pratica italiana: societario, civile, famiglia, successioni, proprietà intellettuale, e un dipartimento fiscale e contabile dedicato.",
        },
        {
          title: "FIDREV",
          text: "Società Fiduciaria e di Revisione — mandati fiduciari statici, trust, costituzione e gestione di società italiane.",
        },
        {
          title: "Studi affiliati in Florida",
          text: "Avvocati abilitati in Florida per contenzioso e immigrazione, e CPA, developer e broker selezionati.",
        },
        {
          title: "Italy-America Chamber of Commerce SE",
          text: "Socio sostenitore a Miami dal 2013.",
        },
      ],
      media: {
        subject: "Miami dalla Biscayne Bay",
        spec: "21:9 · colore",
        src: "/photo/brickell-bay.webp",
        width: 2100,
        height: 900,
        alt: "I grattacieli di Miami visti dalla Biscayne Bay in una giornata limpida",
      },
    },
    cta: {
      title: "Due sistemi. Una pratica. Un solo interlocutore.",
      text: "Si comincia dalla persona che seguirà la questione.",
      links: [
        { label: "Conosci il team", page: "professionals" },
        { label: "Contatta le sedi", page: "contact" },
      ],
    },
  },

  professionals: {
    hero: {
      kicker: "Professionisti",
      title: "Saprete sempre chi segue la vostra pratica.",
      lead: "Un team piccolo, per scelta. Chi risponde alla vostra prima chiamata è chi poi segue la pratica.",
    },
    people: [
      {
        id: "lorenzo",
        name: "Lorenzo Silvestri",
        role: "Managing Partner — Avvocato italiano e Certified Foreign Legal Consultant",
        limit: "Non abilitato all'esercizio della professione forense in Florida",
        bio: [
          "Lorenzo ha dedicato tutta la sua carriera allo stesso problema: operazioni e controversie che non stanno dentro un solo ordinamento. Immobiliare transfrontaliero, M&A, questioni commerciali e societarie, e consulenza esperta nel contenzioso nazionale e transnazionale in cui il diritto italiano e internazionale decidono l'esito.",
          "Nato a Roma nel 1977, si è laureato in Giurisprudenza all'Università di Bologna nel 2002 con una tesi sulla responsabilità del produttore, ed è iscritto all'Ordine degli Avvocati di Roma dal 2007. Nel 2008 ha conseguito con lode un LL.M. in diritto americano e pratica legale internazionale alla Loyola Law School di Los Angeles.",
          "Dopo undici anni in un prestigioso studio legale italiano — come partner responsabile dell'ufficio di Miami dal 2011 al 2018 — nel gennaio 2019 ha fondato Silvestri International, di cui è managing partner. È manager, officer o consigliere di amministrazione di diverse società nazionali e multinazionali, e dal 2013 è socio sostenitore della Italy-America Chamber of Commerce Southeast di Miami.",
        ],
        facts: [
          {
            label: "Abilitazioni",
            value: "Ordine degli Avvocati di Roma, 2007 · Florida Bar Certified Foreign Legal Consultant in diritto italiano, 2016 · Florida Notary Public, 2014",
          },
          {
            label: "Formazione",
            value: "LL.M., Loyola Law School Los Angeles, 2008 · Laurea in Giurisprudenza, Università di Bologna, 2002 · Liceo Classico G. De Sanctis, Roma, 1996",
          },
          { label: "Lingue", value: "Italiano · Inglese · Spagnolo · Francese" },
        ],
        emails: ["info@silvestri-international.com"],
        links: [{ label: "LinkedIn", href: "https://www.linkedin.com/in/lorenzo-silvestri-2b74276/" }],
        portrait: {
          subject: "Lorenzo Silvestri — ritratto",
          spec: "4:5 · bianco e nero · fotografia reale necessaria",
          alt: "Ritratto di Lorenzo Silvestri",
        },
      },
      {
        id: "guillermina",
        name: "Guillermina Rodríguez Carpin",
        role: "Legal Assistant — Desk di Montevideo",
        limit: null,
        bio: [
          "Nata in Uruguay nel 2002 e formata alla Scuola Italiana di Montevideo, Guillermina studia Giurisprudenza all'Universidad Católica del Uruguay. Ha trascorso un periodo di scambio in Italia presso l'istituto tecnico di Busto Arsizio e altri due mesi negli Stati Uniti per studiare inglese.",
          "Prima di entrare nello studio ha svolto un tirocinio di sei mesi in Telefónica Móviles del Uruguay, occupandosi di gestione dei contratti, incontri con autorità di diversi Paesi e coordinamento tra i reparti aziendali. Lavora in italiano, spagnolo e inglese.",
        ],
        facts: [
          { label: "Formazione", value: "Giurisprudenza, Universidad Católica del Uruguay (in corso) · Scuola Italiana di Montevideo" },
          { label: "Lingue", value: "Italiano · Spagnolo · Inglese" },
        ],
        emails: ["grodriguez@silvestri-international.com"],
        links: [],
        portrait: {
          subject: "Guillermina Rodríguez Carpin — ritratto",
          spec: "4:5 · bianco e nero · fotografia reale necessaria",
          alt: "Ritratto di Guillermina Rodríguez Carpin",
        },
      },
    ],
    behind: {
      title: "Dietro i due nomi",
      text:
        "Lo studio romano Coen Palandri Silvestri con il suo dipartimento fiscale e contabile, FIDREV per servizi fiduciari e trust, e studi affiliati abilitati in Florida per contenzioso e immigrazione. Avete lo specialista senza cambiare interlocutore.",
    },
    working: {
      title: "Lavorare con noi",
      text:
        "Scriveteci in italiano, inglese, spagnolo o francese. Diteci cosa volete ottenere ed entro quando; vi diremo se è di nostra competenza, chi se ne occupa e quanto tempo richiede il prossimo passo.",
    },
    cta: {
      title: "Cominciamo con una conversazione.",
      text: "Linea diretta di Miami, oppure email in una delle nostre quattro lingue di lavoro.",
      links: [
        { label: "+1 786 803 8444 — Miami, diretto", href: "tel:+17868038444" },
        { label: "info@silvestri-international.com", href: "mailto:info@silvestri-international.com" },
      ],
    },
  },

  contact: {
    hero: {
      kicker: "Contatti",
      title: "Tre sedi. Nessun centralino da attraversare.",
      lead:
        "Chiamate la sede più vicina alla vostra questione, oppure scriveteci — in italiano, inglese, spagnolo o francese. Diteci cosa volete fare ed entro quando.",
    },
    officeRoles: { miami: "Sede principale", rome: "Partner di Coen Palandri Silvestri", montevideo: "Desk America Latina" },
    fieldLabels: { address: "Indirizzo", call: "Telefono", email: "Email", web: "Web", hours: "Orari" },
    hoursValue: "Dal lunedì al venerdì, 09:00–18:00 ora locale",
    phoneLabels: { office: "ufficio", direct: "diretto", main: "tel", fax: "fax" },
    map: {
      title: "Mappa",
      consent:
        "La mappa è caricata da Google Maps, che riceve il vostro indirizzo IP e imposta i propri cookie. Nessuna richiesta parte prima che scegliate di caricarla.",
      load: "Carica la mappa",
      provider: "Google Maps",
    },
    notes: [
      {
        title: "Cosa inviarci",
        text:
          "Due righe sulla questione, i Paesi coinvolti e la vostra scadenza. Se esistono documenti, indicate quali sono — non allegate nulla di riservato alla prima email.",
      },
      {
        title: "Quando rispondiamo",
        text:
          "Rispondiamo nella lingua in cui ci avete scritto. Per scadenze urgenti di operazioni immobiliari o closing, chiamate la linea diretta di Miami.",
      },
      {
        title: "Prima di iniziare",
        text:
          "Una richiesta di informazioni non instaura un rapporto professionale tra avvocato e cliente. Il rapporto inizia solo con un incarico scritto, dopo la verifica dei conflitti di interesse.",
      },
    ],
  },

  footer: {
    officeRoles: { miami: "Sede principale", rome: "Partner di Coen Palandri Silvestri", montevideo: "Desk America Latina" },
    connect: "Seguici",
    firmPage: "LinkedIn — Pagina dello studio",
    lorenzoPage: "LinkedIn — Lorenzo Silvestri",
    copyright: "© 2026 Silvestri International Corp.",
    disclaimer:
      "Lorenzo Silvestri è avvocato italiano, iscritto all'Ordine degli Avvocati di Roma, ed è certificato dal Florida Bar come Foreign Legal Consultant in diritto italiano. Non è abilitato all'esercizio della professione forense in Florida. Le questioni di diritto della Florida sono seguite da avvocati affiliati abilitati in Florida. I contenuti di questo sito non costituiscono consulenza legale e il semplice contatto con lo studio non instaura un rapporto professionale tra avvocato e cliente.",
    legalNav: "Informazioni legali",
    phoneLabels: { office: "Ufficio", direct: "Diretto", main: "Tel", fax: "Fax" },
  },

  legal: {
    cookies: {
      kicker: "Cookie policy",
      title: "Questo sito non usa cookie.",
      lead: "Non un insieme ridotto, non “solo quelli tecnici”. Nessuno. È anche il motivo per cui non vi è stato chiesto di accettare niente.",
      sections: [
        {
          heading: "Cosa è stato misurato",
          body: [
            "Non sono intenzioni. Sono misure fatte il 25 ottobre 2026 sul sito pubblicato, a pagina caricata, sia nel browser sia nelle risposte del server. Potete ripeterle con gli strumenti di sviluppo del vostro browser.",
          ],
          checks: [
            { label: "Cookie impostati", value: "Nessuno" },
            { label: "localStorage", value: "Vuoto" },
            { label: "sessionStorage", value: "Vuoto" },
            { label: "Analytics o tag manager", value: "Assenti" },
            { label: "Pixel pubblicitari o social", value: "Assenti" },
            { label: "Richieste a terzi al caricamento", value: "Nessuna" },
          ],
        },
        {
          heading: "Perché non c'è il banner",
          body: [
            "L'articolo 5(3) della direttiva ePrivacy, recepito in Italia dall'articolo 122 del Codice in materia di protezione dei dati personali (d.lgs. 196/2003), si applica quando si memorizzano informazioni sul dispositivo di chi visita o si accede a informazioni già memorizzate. Qui non succede né l'una né l'altra cosa, quindi non c'è un consenso da raccogliere.",
            "Un banner vi chiederebbe di accettare qualcosa che non avviene. Preferiamo dire come stanno le cose e lasciarvi il modo di verificarlo.",
          ],
        },
        {
          heading: "Tutto è ospitato da questo sito",
          body: [
            "Caratteri, fotografie e il filmato della home sono ospitati da questo sito. Niente arriva da Google Fonts, da archivi di immagini o dalla rete di distribuzione di qualcun altro: a parte l'host che serve il sito, nessuno riceve il vostro indirizzo IP solo perché avete aperto una pagina.",
          ],
        },
        {
          heading: "L'unica eccezione, e la decidete voi",
          body: [
            "Le mappe degli uffici, nella pagina dei contatti, non si caricano da sole: ognuna è un riquadro fermo con un pulsante. Se lo premete, la mappa viene richiesta a Google, che in quel momento riceve il vostro indirizzo IP e può impostare cookie propri, secondo le sue regole.",
            "Niente, in questo sito, fa quella richiesta al posto vostro.",
          ],
        },
        {
          heading: "Il selettore giorno e notte",
          body: [
            "Nella home potete scegliere fra la vista di giorno e quella di notte dietro al titolo. La scelta non finisce in un cookie né nella memoria del browser e non viene inviata da nessuna parte: se ricaricate la pagina, si riparte dal filmato di giorno.",
          ],
        },
        {
          heading: "Hosting",
          body: [
            "Come ogni server web, l'host può registrare le richieste che serve. Quei registri non dipendono da questa pagina: ne parla l'informativa privacy.",
          ],
        },
      ],
      pending: {
        heading: "La condizione da cui dipende questa pagina",
        text: "Perché resti esatta, una cosa deve restare vera.",
        items: [
          "Se in futuro si aggiungono analytics, una chat, un modulo incorporato, uno strumento di prenotazione o un pixel pubblicitario, questa pagina non è più corretta e serve un meccanismo di consenso. È una condizione, non una formalità.",
        ],
      },
    },

    privacy: {
      kicker: "Privacy",
      title: "Cosa fa questo sito con i vostri dati — e cosa non può ancora dirvi.",
      lead: "Due parti. La prima è ciò che è stato misurato e si può dire senza giri di parole. La seconda spetta solo allo studio, ed è lasciata in evidenza invece che riempita: una clausola inventata si legge come un impegno.",
      sections: [
        {
          heading: "Il sito, da solo, non raccoglie niente",
          body: [
            "In questo sito non c'è un modulo di contatto. Nessun campo vi chiede nome, indirizzo email o dettagli della vostra pratica. Il contatto passa dagli indirizzi e dai numeri pubblicati nella pagina dei contatti: cosa scrivete, e cosa tenete per voi, resta una vostra decisione.",
            "Non c'è tracciamento, né profilazione, né identificativi pubblicitari, né analytics. La cookie policy spiega come è stato misurato.",
          ],
        },
        {
          heading: "Cosa lascia comunque una traccia",
          body: ["Due cose avvengono, e vale la pena dirle."],
          checks: [
            { label: "Log del server", value: "L'host può registrare ogni richiesta: indirizzo IP, ora, pagina richiesta, browser" },
            { label: "Mappe degli uffici", value: "Caricate solo se premete il pulsante; a quel punto Google riceve il vostro IP" },
          ],
        },
        {
          heading: "Se ci scrivete",
          body: [
            "L'email arriva alla casella dello studio ed è trattata come corrispondenza professionale. Vi chiediamo di non inviare documenti riservati o i dettagli di una controversia in un primo messaggio.",
          ],
        },
        {
          heading: "I vostri diritti secondo il GDPR",
          body: [
            "Dove si applica il Regolamento generale sulla protezione dei dati (Regolamento (UE) 2016/679), potete chiedere al titolare l'accesso ai vostri dati personali, la rettifica o la cancellazione; potete chiedere la limitazione del trattamento, opporvi, e ricevere i dati in un formato portabile. Se il trattamento si basa sul consenso, potete revocarlo in qualsiasi momento, senza effetti su quanto fatto legittimamente prima.",
            "Potete anche proporre reclamo a un'autorità di controllo. A chi rivolgere queste richieste è tra le cose che lo studio deve ancora indicare qui sotto.",
          ],
        },
      ],
      pending: {
        heading: "Cosa deve fornire lo studio",
        text: "Gli articoli 13 e 14 del GDPR richiedono ognuno di questi punti, e nessuno si può ricavare dall'esterno.",
        items: [
          "Identità e dati di contatto del titolare del trattamento, e dell'eventuale rappresentante nell'Unione europea.",
          "Se è stato designato un responsabile della protezione dei dati, e come contattarlo.",
          "Finalità e base giuridica di ogni trattamento, compresi i log del server tenuti dall'host.",
          "I destinatari: fornitore di hosting, fornitore di posta e ogni altro responsabile del trattamento, e in base a quale accordo.",
          "I trasferimenti fuori dall'Unione europea e la garanzia su cui si basa ciascuno: l'host del sito è una società statunitense, il fornitore di posta va indicato.",
          "Per quanto tempo si conserva ciascuna categoria di dati, e con quale criterio.",
          "L'autorità di controllo a cui rivolgere un reclamo.",
          "Come sono trattate le informazioni ricevute prima del conferimento dell'incarico, e quale riservatezza le copre.",
        ],
      },
    },

    legal: {
      kicker: "Note legali",
      title: "Cos'è questo sito, e cosa non è.",
      lead: "Un sito non è un avvocato. Questa pagina fissa i limiti di quello che state leggendo.",
      sections: [
        {
          heading: "Niente qui è consulenza legale",
          body: [
            "Queste pagine descrivono cosa fa lo studio e come lavora. Non sono un parere sulla vostra situazione, non tengono conto dei vostri fatti e non vanno seguite come se lo fossero. Le norme cambiano, e una pagina può non essere aggiornata nel momento in cui la leggete.",
            "Leggere questo sito, o scrivere a un indirizzo pubblicato qui, non crea di per sé un rapporto professionale.",
          ],
        },
        {
          heading: "Chi è abilitato, e dove",
          body: [
            "Lorenzo Silvestri è avvocato italiano, iscritto all'Ordine di Roma, e certificato dalla Florida Bar come Foreign Legal Consultant in diritto italiano. Non è abilitato all'esercizio della professione forense in Florida.",
            "Le questioni di diritto della Florida sono trattate da legali abilitati in Florida, affiliati allo studio. Dove una pagina descrive attività di diritto statunitense, va letta come attività coordinata dallo studio e svolta da professionisti abilitati sul posto.",
          ],
        },
        {
          heading: "Nessun risultato è promesso",
          body: [
            "Niente in questo sito promette un esito, e nessun numero va letto come tale. Dove si accenna a pratiche passate, l'accenno non dice nulla su come andrà la vostra.",
          ],
        },
        {
          heading: "Prima di inviare documenti",
          body: ["Vi chiediamo di non allegare materiale riservato a un primo messaggio."],
        },
        {
          heading: "Immagini",
          body: [
            "Le fotografie e il filmato sono immagini con licenza Pexels. Servono a illustrare e non ritraggono né gli uffici dello studio né i suoi clienti. I ritratti restano segnaposto dichiarati finché non arrivano fotografie vere: nessun volto in questo sito è generato.",
          ],
        },
      ],
      pending: {
        heading: "Cosa deve fornire lo studio",
        text: "Le regole professionali italiane e quelle della Florida Bar sulla pubblicità chiedono entrambe dati identificativi che non sono pubblici.",
        items: [
          "Iscrizione all'albo: l'Ordine, il numero e la data di iscrizione.",
          "Partita IVA, iscrizione al registro delle imprese e sede legale di ogni entità giuridica dello studio.",
          "Assicurazione per la responsabilità professionale: compagnia e numero di polizza. L'obbligo di copertura è nell'articolo 12 della legge 247/2012.",
          "Conferma della Florida Bar che la formula usata qui per il Foreign Legal Consultant sia quella ammessa.",
          "Se la struttura di Miami e quella di Roma sono entità distinte, e con quale delle due il cliente firma l'incarico.",
          "Come e quando nasce il rapporto professionale: lettera d'incarico, verifica dei conflitti, cosa si impegna a fare lo studio prima di allora.",
        ],
      },
    },
  },

  notFound: {
    title: "Questa pagina non c'è.",
    text: "L'indirizzo potrebbe essere cambiato. Ripartite dalla home o andate direttamente alle sedi.",
    cta: "Vai alla home",
  },

  preview: {
    label: "Anteprima interna",
    items: [
      "noindex · non pubblicabile",
      "Fotografie e video hanno licenza e sono ospitati dal sito; i ritratti restano segnaposto dichiarati",
      "Testi legali e disclaimer in attesa di revisione professionale",
    ],
  },
};

export default it;
