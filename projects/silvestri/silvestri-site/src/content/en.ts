import type { Dict } from "./types";

const en: Dict = {
  locale: "en",
  localeTag: "en",
  ogLocale: "en_US",

  countries: { miami: "United States", rome: "Italy", montevideo: "Uruguay" },

  nav: {
    skip: "Skip to content",
    links: {
      home: "Home",
      practice: "Practice Areas",
      about: "About",
      professionals: "Professionals",
      contact: "Contact",
      privacy: "Privacy",
      cookies: "Cookie policy",
      legal: "Legal notice",
    },
    cta: { label: "Talk to us", page: "contact" },
    contactCta: "Email the firm",
    langCode: "IT",
    langLabel: "Read this page in Italian",
    menuOpen: "Menu",
    menuClose: "Close",
    menuLabel: "Site navigation",
  },

  meta: {
    home: {
      title: "Italian Law Firm in Miami, Rome & Montevideo | Silvestri International",
      description:
        "Silvestri International is an Italian law firm and foreign legal consulting company in Italian law in Florida. Offices in Miami, Rome and Montevideo for corporate, commercial, M&A, real estate, tax, immigration and litigation matters between Italy and the United States. Florida-law matters are handled with affiliated Florida-licensed counsel.",
      ogTitle: "Italian Law Firm in Miami, Rome & Montevideo | Silvestri International",
      ogDescription:
        "Italian law handled directly, Florida law with affiliated Florida-licensed counsel — from Miami, Rome and Montevideo.",
    },
    practice: {
      title: "Practice Areas — Corporate, M&A, Real Estate, Tax | Silvestri International",
      description:
        "Seven practice areas between Italy and Florida: corporate and company formation, commercial contracts, M&A, cross-border real estate, Italian tax planning, immigration and transnational litigation. Each area states what the firm does directly and what it coordinates with licensed local professionals.",
      ogTitle: "Practice Areas | Silvestri International",
      ogDescription: "Seven areas, one point of contact — and a clear line between direct work and coordinated work.",
    },
    about: {
      title: "About the Firm — Italian Law Firm in Florida | Silvestri International",
      description:
        "Silvestri International – Studio Legale Internazionale is an Italian law firm with offices in Miami Brickell, Rome and Montevideo. A bridge between the Italian and US jurisdictions for investors, companies and families.",
      ogTitle: "About the Firm | Silvestri International",
      ogDescription: "A bridge between two jurisdictions, from Miami, Rome and Montevideo.",
    },
    professionals: {
      title: "Professionals — Lorenzo Silvestri | Silvestri International",
      description:
        "Lorenzo Silvestri, Italian attorney, member of the Bar of Rome and Certified Foreign Legal Consultant in Italian law in Florida — not admitted to practise law in Florida — and the Silvestri International team in Miami, Rome and Montevideo.",
      ogTitle: "Professionals | Silvestri International",
      ogDescription: "The person who takes your first call is the person who runs the matter.",
    },
    contact: {
      title: "Contact — Miami, Rome, Montevideo | Silvestri International",
      description:
        "Contact Silvestri International: Miami (1200 Brickell Ave, Suite 310) +1 786 502 3615, Rome (Piazza della Libertà 20) +39 06 3218783, Montevideo (Víctor Soliño 349) +598 94 733 513. Written and spoken Italian, English, Spanish and French.",
      ogTitle: "Contact | Silvestri International",
      ogDescription: "Three offices, one team: Miami, Rome, Montevideo.",
    },
    privacy: {
      title: "Privacy notice | Silvestri International",
      description:
        "What this site does with personal data: no contact form, no tracking, no analytics. Server logs and click-to-load office maps are named, and the notice the firm still has to supply is listed in the open.",
      ogTitle: "Privacy notice | Silvestri International",
      ogDescription: "No form, no tracking, no analytics. What remains is named.",
    },
    cookies: {
      title: "Cookie policy | Silvestri International",
      description:
        "This site sets no cookies and uses no analytics: measured on the published build, with the checks listed. Office maps load only when the visitor presses the button.",
      ogTitle: "Cookie policy | Silvestri International",
      ogDescription: "No cookies, and the measurements that show it.",
    },
    legal: {
      title: "Legal notice | Silvestri International",
      description:
        "Nothing on this site is legal advice and no lawyer-client relationship is formed by reading it. Lorenzo Silvestri is an Italian attorney and a Foreign Legal Consultant certified by The Florida Bar, not admitted to practise law in Florida.",
      ogTitle: "Legal notice | Silvestri International",
      ogDescription: "The limits of what this site is.",
    },
  },

  scope: {
    directLabel: "Handled by the firm",
    directText:
      "Italian law — corporate, commercial, civil, family, estate, intellectual property and tax — advised on directly, in Italian, English, Spanish or French.",
    coordinatedLabel: "Handled with licensed local counsel",
    coordinatedText:
      "Florida-law matters, court proceedings and immigration filings are run with affiliated Florida-licensed firms. Lorenzo Silvestri is not admitted to practise law in Florida.",
  },

  home: {
    hero: {
      kicker: "Miami · Rome · Montevideo",
      titleLines: ["Two jurisdictions.", "One firm that reads both"],
      lead:
        "An Italian law firm and foreign legal consulting company in Italian law in Florida. We take the whole file — the Italian side, the US side, and the part in the middle where deals usually stall.",
      leadClaim:
        "The first Italian law firm and foreign legal consulting company in Italian law in Florida. We take the whole file — the Italian side, the US side, and the part in the middle where deals usually stall.",
      ctas: [
        { label: "Speak to the firm", page: "contact" },
        { label: "See what we handle", page: "practice" },
      ],
      clocksLabel: "Local time in the three offices",
      media: {
        pause: "Pause",
        play: "Play",
        viewLabel: "Background view",
        day: "Day",
        night: "Night",
      },
    },
    figures: [
      { value: "2", label: "Jurisdictions, one team" },
      { value: "3", label: "Offices: Miami, Rome, Montevideo" },
      { value: "7", label: "Practice areas under one roof" },
      { value: "4", label: "Working languages: IT, EN, ES, FR" },
    ],
    bridge: {
      kicker: "The bridge",
      title: "Traffic runs both ways. So do we.",
      cells: [
        {
          tag: "Italy → United States",
          title: "Italian companies and investors landing in Florida",
          text:
            "You want a US entity that works from day one, not a certificate in a drawer. We register the company, keep the corporate books, sign as local officer or manager if you need one on the ground, get the bank account open under your written instructions, and keep every step compliant on the Italian side too.",
          media: {
            subject: "Miami at twilight — the United States side of every file",
            spec: "16:10 · colour",
            src: "/photo/miami-twilight.webp",
            width: 1400,
            height: 875,
            alt: "Downtown Miami at twilight, seen across Biscayne Bay",
          },
        },
        {
          tag: "United States → Italy",
          title: "US and dual-national clients with matters in Italy",
          text:
            "An inherited apartment in Rome, a family company, a supplier dispute, a trademark, an Italian tax notice. Our Rome office handles Italian commercial, corporate, civil, family, estate and IP matters — and answers you in English, at your hour, without you flying anywhere.",
          media: {
            subject: "Rome — the historic centre near the Piazza della Libertà office",
            spec: "16:10 · colour",
            src: "/photo/rome-rooftops.webp",
            width: 1400,
            height: 875,
            alt: "Rooftops of central Rome at sunset, a church dome on the skyline",
          },
        },
      ],
    },
    stages: {
      kicker: "How a US entry actually runs",
      title: "From decision to operating company",
      lead:
        "Six stages, both jurisdictions live at the same time. One column is what happens in the United States, the other is what has to happen in Italy for the same step to hold up.",
      head: { step: "Step", us: "In the United States", it: "In Italy, at the same time" },
      items: [
        {
          num: "01",
          title: "Structure and feasibility",
          us: "Choose the vehicle — LLC or corporation — the ownership chain and who signs what. Decided before anything is filed.",
          it: "Check the structure against Italian tax and reporting duties for the shareholder, so the US choice does not create an Italian problem.",
        },
        {
          num: "02",
          title: "Incorporation and registered seat",
          us: "Company registration, domiciliation, registered agent, custody of the corporate books, by-laws, operating or shareholders' agreements.",
          it: "Fiduciary and trust arrangements or Italian company registration where the group needs them, through our Italian partner FIDREV.",
        },
        {
          num: "03",
          title: "Banking and a signature on the ground",
          us: "Bank account opened and operated under your written instructions. Where you have nobody local yet, we can be appointed officer or manager of the Florida entity.",
          it: "Capital flows and intercompany documentation set up so the money movement is defensible in both countries.",
        },
        {
          num: "04",
          title: "Premises and people",
          us: "Commercial lease or purchase negotiated through our developer and broker network; employment, agency, distribution and franchising agreements drafted. Visas handled with primary Florida immigration firms.",
          it: "Secondment, payroll and social security positions for staff you send over from Italy.",
        },
        {
          num: "05",
          title: "Trading, with the books straight",
          us: "Day-to-day contracts, customers, suppliers and IP. We supervise the work of trusted Florida CPAs wherever Italian law has to be respected as well.",
          it: "Italian tax planning and compliance from our tax and accounting department — prevention, not litigation with the Agenzia delle Entrate.",
        },
        {
          num: "06",
          title: "Growth, exit or dispute",
          us: "Real estate investment, an acquisition from LOI to closing, or a transnational dispute run with affiliated Florida firms.",
          it: "The Italian-law side of the same deal or case: corporate, civil, family, estate and IP, argued by Italian counsel who has the whole history.",
        },
      ],
      note:
        "Timelines depend on the client's own documents and on third parties — banks, landlords, authorities. We tell you what is realistic before you commit.",
    },
    hours: {
      kicker: "Three offices, one working day",
      title: "Rome opens the file. Miami closes it.",
      lead:
        "Rome starts the day, Montevideo carries it through the afternoon, Miami closes it. The bars below are each office's working day on a UTC axis, recomputed for today's daylight-saving offsets.",
      officeLabel: "Office",
      nowLabel: "Local now",
      localLegend: "Local working hours",
      overlapLegend: "All three offices open",
      overlapUnavailable: "No window with all three offices open this week",
      note:
        "Offsets are read from the IANA time zones in your browser, so the overlap follows each country's daylight-saving change instead of a fixed figure. Hours are the firm's stated office hours and are pending confirmation.",
    },
    areas: {
      kicker: "Practice areas",
      title: "Seven areas, one point of contact",
      more: "Read the detail",
      rows: [
        {
          id: "corporate",
          title: "Corporate",
          text:
            "Florida entities set up, domiciled and actually run — registered agent, corporate books, governance documents, local officer where you need one.",
          delivery: "Direct · Florida filings with licensed local professionals where required",
        },
        {
          id: "commercial",
          title: "Commercial",
          text:
            "Leases, employment, joint ventures, distribution, licence, agency and franchising — drafted for whichever side of the Atlantic has to enforce them.",
          delivery: "Direct on Italian law · With Florida counsel on Florida law",
        },
        {
          id: "ma",
          title: "M&A",
          text:
            "From a minority stake in an LLC to a full buyout: letter of intent, negotiation, due diligence, closing.",
          delivery: "Direct on the Italian-law side · With Florida counsel on the US side",
        },
        {
          id: "real-estate",
          title: "Real estate",
          text: "First home, condo conversion, or a whole building. Cross-border deals where a day lost is a deal lost.",
          delivery: "Direct on structure and Italian law · Florida closings with licensed counsel",
        },
        {
          id: "tax",
          title: "Tax",
          text: "Italian tax planning and compliance, and supervision of your Florida CPAs where the two systems have to agree.",
          delivery: "Direct on Italian tax · US filings with your CPAs",
        },
        {
          id: "immigration",
          title: "Immigration",
          text: "Visas and permanent residency run with primary Florida immigration firms, coordinated with your corporate timeline.",
          delivery: "Coordinated with Florida immigration firms",
        },
        {
          id: "litigation",
          title: "Litigation",
          text:
            "Complex national and transnational disputes — commercial, corporate, real estate, family and estate — as Italian-law counsel alongside Florida firms.",
          delivery: "Italian-law counsel and expert · Florida proceedings by Florida-licensed counsel",
        },
      ],
    },
    network: {
      kicker: "The network",
      title: "Small firm, wide reach",
      text:
        "You deal with one team. Behind it: Coen Palandri Silvestri in Rome for the full Italian practice, FIDREV for fiduciary, trust and Italian company work, affiliated Florida firms for litigation and immigration, and vetted CPAs, developers and brokers on the ground. The Miami office sits in Brickell 21 Financial Centre, in the middle of the city's financial district.",
      media: {
        subject: "Miami from Biscayne Bay — the city the headquarters works from",
        spec: "21:9 · colour",
        src: "/photo/brickell-bay.webp",
        width: 2100,
        height: 900,
        alt: "Miami's high-rise skyline seen across Biscayne Bay on a clear day",
      },
    },
    faq: {
      kicker: "Straight answers",
      title: "What clients ask first",
      items: [
        {
          q: "Can you represent me in a Florida court?",
          a: "Not as Florida counsel. Lorenzo Silvestri is an Italian attorney and a Foreign Legal Consultant certified in Italian law by The Florida Bar, not admitted to practise law in Florida. We act as Italian-law counsel and run the Florida side with affiliated licensed firms — one file, one strategy.",
        },
        {
          q: "Can you form and then run my Florida company?",
          a: "Yes. Registration, domiciliation, registered agent, corporate books, by-laws and shareholders' agreements — and, during the start-up phase, appointment as local officer or manager and assistance with the bank account under your written instructions.",
        },
        {
          q: "I inherited property in Italy. Can you handle it from Miami?",
          a: "That is core work: Italian civil, family and estate matters, with the Rome office and its tax and accounting department, managed on your time zone and in your language.",
        },
        {
          q: "Which languages do you work in?",
          a: "Italian, English, Spanish and French. Documents, negotiations and hearings — no interpreter between you and your lawyer.",
        },
      ],
    },
    cta: {
      title: "Tell us what you are trying to do. We will tell you what it takes.",
      text: "Two lines on the matter, the countries involved and your deadline. No confidential documents in a first email.",
      links: [
        { label: "Write to the firm", href: "mailto:info@silvestri-international.com" },
        { label: "All offices and direct lines", page: "contact" },
      ],
    },
  },

  practice: {
    hero: {
      kicker: "Practice areas",
      title: "Everything a file needs, on both sides.",
      lead:
        "Seven areas, one point of contact, and no gap where the Italian side stops and the American side is supposed to start. Each area states what the firm does directly and what it runs with licensed local professionals.",
    },
    jump: "Jump to an area",
    deliveryLabels: { direct: "Handled by the firm", coordinated: "With licensed local professionals" },
    areas: [
      {
        id: "corporate",
        num: "01",
        title: "Corporate",
        paragraphs: [
          "Our partners built their reputation getting Italian companies and individuals into the US market properly — and keeping them there. We run the whole internationalisation process in compliance with Italian and US rules at the same time: company registration, domiciliation, registered agent services with custody of the corporate books, and the drafting of by-laws, operating agreements and shareholders' agreements.",
          "Through our Italian partner FIDREV — Società Fiduciaria e di Revisione, we also cover static fiduciary mandates, trusts, and Italian company registration and management.",
          "The start-up phase in a foreign jurisdiction is where founders lose months. So we take the bureaucracy off the table: we can be appointed local officer or manager of your Florida entity, and we assist with opening and operating the company bank account under your written instructions — while you get on with the business.",
        ],
        direct:
          "Corporate structuring and documents, Italian-law advice, registered agent and corporate books, appointment as local officer or manager, bank account assistance under written instructions.",
        coordinated:
          "Opinions on Florida corporate law and any court filing are referred to affiliated Florida-licensed counsel.",
        tags: [
          "Company registration",
          "Domiciliation",
          "Registered agent",
          "Corporate books",
          "By-laws & operating agreements",
          "Local officer / manager",
          "Bank account assistance",
          "Fiduciary & trust (FIDREV)",
        ],
      },
      {
        id: "commercial",
        num: "02",
        title: "Commercial",
        paragraphs: [
          "From opening a business to setting up a trade route, we cover every step of building a commercial operation in the United States and in Italy. Proven practice in both jurisdictions means the contract is drafted for the court that would actually read it.",
          "We negotiate the commercial lease and draft the agreements the business runs on: employment, joint venture, partnership, distribution, licence, agency and franchising.",
        ],
        direct: "Drafting and negotiation, Italian-law advice and Italian-law contracts, deal structure across the two systems.",
        coordinated: "Florida-law enforceability questions and litigation on those contracts go to Florida-licensed counsel.",
        tags: ["Commercial leases", "Employment", "Joint ventures", "Distribution & agency", "Licensing", "Franchising"],
      },
      {
        id: "ma",
        num: "03",
        title: "M&A",
        paragraphs: [
          "Whether you are buying a small equity stake in an LLC or a corporation, taking over an entire business, or merging two of them, the sequence is the same and every step of it is where value leaks: letter of intent, negotiation of the sale and purchase agreement, due diligence, closing.",
          "We guide the transaction end to end and keep the Italian-law consequences of a US deal — or the reverse — visible before signature, not after it.",
        ],
        direct: "Transaction management, Italian-law due diligence and documents, Italian tax and corporate consequences.",
        coordinated: "US-law due diligence, Florida closing mechanics and regulatory filings are run with Florida-licensed counsel.",
        tags: ["Letters of intent", "SPA negotiation", "Due diligence", "Closing", "Post-closing integration"],
      },
      {
        id: "real-estate",
        num: "04",
        title: "Real estate",
        paragraphs: [
          "In real estate, time is of the essence — and never more than in a cross-border deal. Our real estate practice handles first-time purchasers and seasoned investors alike: the family home, a condo conversion, the development of an entire residential or commercial building.",
          "With an established network of trusted developers and brokers, we help companies and individuals find the right location and negotiate better lease or purchase terms — for an operating office, a warehouse, or an investment.",
        ],
        direct: "Deal structure, Italian-law and tax consequences, negotiation strategy, Italian property and estate matters.",
        coordinated: "Florida title, closing and condominium law are handled with Florida-licensed counsel and title agents.",
        tags: [
          "Residential purchases",
          "Investment & development",
          "Condo conversions",
          "Office & warehouse leases",
          "Due diligence & closing",
        ],
      },
      {
        id: "tax",
        num: "05",
        title: "Tax",
        paragraphs: [
          "Our dedicated tax and accounting department in Italy advises on tax planning and compliance with Italian tax rules. In tax, prevention is the only cheap defence: the practice is built around avoiding a dispute with the Italian tax authority rather than winning one later.",
          "The Italian office also provides tax and accounting services to companies expanding into the Italian market, and we supervise the work of trusted Florida CPAs and accountants whenever it has to line up with Italian law.",
        ],
        direct: "Italian tax planning, Italian filings and accounting, pre-dispute strategy with the Italian tax authority.",
        coordinated: "US federal and Florida state filings are prepared by CPAs; we supervise the Italian-law fit.",
        tags: ["Italian tax planning", "Compliance & filings", "Accounting in Italy", "CPA coordination", "Pre-dispute strategy"],
      },
      {
        id: "immigration",
        num: "06",
        title: "Immigration",
        paragraphs: [
          "Getting the right visa or permanent residency is a long, formal process with little tolerance for improvisation. We work with primary Florida immigration firms so the route is chosen once and then executed — and we keep it synchronised with the corporate steps it depends on.",
        ],
        direct: "Route planning against your corporate timeline, document preparation on the Italian side, single point of contact.",
        coordinated: "Petitions, filings and representation before US authorities are handled by the immigration firm.",
        tags: ["Investor & work visas", "Permanent residency", "Relocation planning"],
      },
      {
        id: "litigation",
        num: "07",
        title: "Litigation",
        paragraphs: [
          "We assist clients daily in complex national and transnational disputes. Deep practice in Italian and international law, plus affiliation with prominent Florida firms specialising in commercial, corporate, real estate, family and estate disputes, means the strategy is planned once for both jurisdictions — not improvised twice.",
          "Florida-law proceedings are conducted by Florida-licensed counsel; the firm acts as Italian-law counsel and expert.",
        ],
        direct: "Italian proceedings, Italian-law strategy, expert opinions on Italian law for foreign courts and arbitrators.",
        coordinated: "Every Florida-law proceeding is conducted by Florida-licensed counsel.",
        tags: ["Commercial disputes", "Corporate & shareholder", "Real estate", "Family & estate", "Expert Italian-law opinions"],
      },
    ],
    cta: {
      title: "Let's work together.",
      text: "Send us the matter in two lines. You will get a straight answer on whether it is ours, and what it takes.",
      links: [
        { label: "Write to the firm", href: "mailto:info@silvestri-international.com" },
        { label: "All offices & direct lines", page: "contact" },
      ],
    },
  },

  about: {
    hero: {
      kicker: "Silvestri International — Studio Legale Internazionale",
      title: "Two systems, read properly.",
      titleClaim: "The first Italian law firm in Florida.",
      lead:
        "Founded in January 2019, with offices in Miami, Rome and Montevideo. Our job is narrow and useful: make an investment, a company or a family matter work correctly in two legal systems at once.",
    },
    functions: {
      kicker: "What we do",
      title: "Three things, done properly",
      items: [
        {
          num: "01",
          title: "Italian investors, fully compliant",
          text:
            "We keep Italian investors square with Italian taxation and international law while they operate abroad — before the exposure exists, not after a notice arrives.",
        },
        {
          num: "02",
          title: "Corporate services in Florida",
          text:
            "A full range of company services for entities operating in Florida — registration, management, day-to-day business operations — kept compliant with Italian law where it applies, with Florida-law questions referred to licensed local counsel.",
        },
        {
          num: "03",
          title: "Italian law for US-Italian clients",
          text:
            "Legal and tax advice for US-Italian individuals and entities on Italian commercial, corporate and civil law — including family and estate matters — and intellectual property.",
        },
      ],
    },
    mission: {
      kicker: "Mission",
      title: "A bridge, not a translation service",
      paragraphs: [
        "Our mission is to act as a bridge between two jurisdictions: to make the exchange of investments easier, and to supervise the whole process for foreign individuals and companies who want to take a solid, well-organised step into the US or the Italian market — in full compliance with both systems.",
        "Established partnerships with leading firms and professionals across every legal and tax field in the US and Italy let us guide clients through the uncertainty of a foreign jurisdiction with a course of action tailored to their actual goals — not to a template.",
      ],
      media: {
        subject: "Rome — the Italian side of every file",
        spec: "16:10 · colour",
        src: "/photo/rome-rooftops.webp",
        width: 1400,
        height: 875,
        alt: "Rooftops of central Rome at sunset, a church dome on the skyline",
      },
    },
    timeline: {
      kicker: "Milestones",
      title: "How the firm got here",
      items: [
        {
          year: "2011",
          text: "Lorenzo Silvestri moves to the United States to open the Miami office of a prestigious Italian law firm, and leads it until 2018.",
        },
        {
          year: "2016",
          text: "Certified by The Florida Bar as a Foreign Legal Consultant in Italian law — after appointment as a Florida Notary Public in 2014.",
        },
        {
          year: "2019",
          text: "Silvestri International – Studio Legale Internazionale is founded, with offices in Rome, Miami Beach and Miami Brickell.",
        },
        {
          year: "2020",
          text: "The firm opens a strategic office at Brickell 21 Financial Centre, in the heart of Miami's financial district.",
        },
        {
          year: "Today",
          text: "Miami, Rome and Montevideo. As a partner of Coen Palandri Silvestri, a full-service international practice covering any legal or tax matter in Italy and, on Italian law, in Florida.",
        },
      ],
    },
    network: {
      kicker: "The network",
      title: "Who stands behind the file",
      panels: [
        {
          title: "Coen Palandri Silvestri — Rome",
          text: "The full Italian practice: corporate, civil, family, estate, IP, and a dedicated tax and accounting department.",
        },
        {
          title: "FIDREV",
          text: "Società Fiduciaria e di Revisione — static fiduciary mandates, trusts, Italian company registration and management.",
        },
        {
          title: "Affiliated Florida firms",
          text: "Florida-licensed counsel for litigation and immigration, and vetted CPAs, developers and brokers.",
        },
        {
          title: "Italy-America Chamber of Commerce SE",
          text: "Sustaining member in Miami since 2013.",
        },
      ],
      media: {
        subject: "Miami from Biscayne Bay",
        spec: "21:9 · colour",
        src: "/photo/brickell-bay.webp",
        width: 2100,
        height: 900,
        alt: "Miami's high-rise skyline seen across Biscayne Bay on a clear day",
      },
    },
    cta: {
      title: "Two systems. One file. One conversation.",
      text: "Start with the person who will run the matter.",
      links: [
        { label: "Meet the team", page: "professionals" },
        { label: "Contact the offices", page: "contact" },
      ],
    },
  },

  professionals: {
    hero: {
      kicker: "Professionals",
      title: "You will know who is on your file.",
      lead: "A small team by design. The person who takes your first call is the person who runs the matter.",
    },
    people: [
      {
        id: "lorenzo",
        name: "Lorenzo Silvestri",
        role: "Managing Partner — Italian Lawyer and Certified Foreign Legal Consultant",
        limit: "Not admitted to practise law in Florida",
        bio: [
          "Lorenzo has spent his whole career on the same problem: transactions and disputes that will not sit inside one legal system. Cross-border real estate, M&A, commercial and corporate matters, and expert counsel in domestic and transnational litigation where Italian and international law decide the outcome.",
          "Born in Rome in 1977, he took a law degree at the University of Bologna in 2002 with a thesis on manufacturer's liability, and has been a member in good standing of the Bar of Rome since 2007. In 2008 he earned an LL.M. with high honours from Loyola Law School of Los Angeles in American law and international legal practice.",
          "After eleven years with a prestigious Italian law firm — as partner responsible for its Miami office from 2011 to 2018 — he founded Silvestri International in January 2019 and is its managing partner. He sits as manager, officer or board member of several national and multinational companies, and has been a sustaining member of the Italy-America Chamber of Commerce Southeast in Miami since 2013.",
        ],
        facts: [
          {
            label: "Admissions",
            value: "Bar of Rome, 2007 · Florida Bar Certified Foreign Legal Consultant in Italian law, 2016 · Florida Notary Public, 2014",
          },
          {
            label: "Education",
            value: "LL.M., Loyola Law School Los Angeles, 2008 · Law degree, Università di Bologna, 2002 · Liceo Classico G. De Sanctis, Rome, 1996",
          },
          { label: "Languages", value: "Italian · English · Spanish · French" },
        ],
        emails: ["info@silvestri-international.com"],
        links: [{ label: "LinkedIn", href: "https://www.linkedin.com/in/lorenzo-silvestri-2b74276/" }],
        portrait: {
          subject: "Lorenzo Silvestri — portrait",
          spec: "4:5 · black and white · real photograph required",
          alt: "Portrait of Lorenzo Silvestri",
        },
      },
      {
        id: "guillermina",
        name: "Guillermina Rodríguez Carpin",
        role: "Legal Assistant — Montevideo desk",
        limit: null,
        bio: [
          "Born in Uruguay in 2002 and educated at the Scuola Italiana in Montevideo, Guillermina is reading law at the Universidad Católica del Uruguay. She spent an exchange term in Italy at the Busto Arsizio technical school and a further two months studying English in the United States.",
          "Before joining the firm she completed a six-month internship at Telefónica Móviles del Uruguay, working on contract management, meetings with authorities in several countries, and coordination between company departments. She works in Italian, Spanish and English.",
        ],
        facts: [
          { label: "Education", value: "Law, Universidad Católica del Uruguay (reading) · Scuola Italiana di Montevideo" },
          { label: "Languages", value: "Italian · Spanish · English" },
        ],
        emails: ["grodriguez@silvestri-international.com"],
        links: [],
        portrait: {
          subject: "Guillermina Rodríguez Carpin — portrait",
          spec: "4:5 · black and white · real photograph required",
          alt: "Portrait of Guillermina Rodríguez Carpin",
        },
      },
    ],
    behind: {
      title: "Behind the two names",
      text:
        "The Rome practice of Coen Palandri Silvestri, its tax and accounting department, FIDREV for fiduciary and trust work, and affiliated Florida-licensed firms for litigation and immigration. You get the specialist without changing your point of contact.",
    },
    working: {
      title: "Working with us",
      text:
        "Write in Italian, English, Spanish or French. Say what you are trying to achieve and the deadline you are working to; we will tell you whether it is our matter, who handles it, and what the next step costs you in time.",
    },
    cta: {
      title: "Start with a conversation.",
      text: "Miami direct line, or email in any of our four working languages.",
      links: [
        { label: "+1 786 803 8444 — Miami direct", href: "tel:+17868038444" },
        { label: "info@silvestri-international.com", href: "mailto:info@silvestri-international.com" },
      ],
    },
  },

  contact: {
    hero: {
      kicker: "Contact",
      title: "Three offices. No switchboard maze.",
      lead:
        "Call the office closest to your matter, or write to us — Italian, English, Spanish or French. Tell us what you are trying to do and by when.",
    },
    officeRoles: { miami: "Headquarters", rome: "Partner of Coen Palandri Silvestri", montevideo: "Latin America desk" },
    fieldLabels: { address: "Address", call: "Call us", email: "Email", web: "Web", hours: "Hours" },
    hoursValue: "Monday to Friday, 09:00–18:00 local time",
    phoneLabels: { office: "office", direct: "direct", main: "tel", fax: "fax" },
    map: {
      title: "Map",
      consent:
        "The map is loaded from Google Maps, which receives your IP address and sets its own cookies. Nothing is requested until you choose to load it.",
      load: "Load the map",
      provider: "Google Maps",
    },
    notes: [
      {
        title: "What to send us",
        text:
          "Two lines on the matter, the countries involved, and your deadline. If documents exist, mention what they are — do not attach anything confidential to a first email.",
      },
      {
        title: "When we reply",
        text:
          "We answer in the language you wrote in. For urgent real estate or closing deadlines, call the Miami direct line.",
      },
      {
        title: "Before we start",
        text:
          "An enquiry does not create an attorney–client relationship. That begins only with a written engagement, after we have checked for conflicts.",
      },
    ],
  },

  footer: {
    officeRoles: { miami: "Headquarters", rome: "Partner of Coen Palandri Silvestri", montevideo: "Latin America desk" },
    connect: "Connect",
    firmPage: "LinkedIn — Firm page",
    lorenzoPage: "LinkedIn — Lorenzo Silvestri",
    copyright: "© 2026 Silvestri International Corp.",
    disclaimer:
      "Lorenzo Silvestri is an Italian attorney, member of the Bar of Rome, and is certified by The Florida Bar as a Foreign Legal Consultant in Italian law. He is not admitted to practise law in Florida. Florida-law matters are handled by affiliated Florida-licensed counsel. Nothing on this site is legal advice, and no attorney–client relationship is formed by contacting the firm.",
    legalNav: "Legal",
    phoneLabels: { office: "Office", direct: "Direct", main: "Tel", fax: "Fax" },
  },

  legal: {
    cookies: {
      kicker: "Cookie policy",
      title: "This site sets no cookies.",
      lead: "Not a reduced set, not “strictly necessary only”. None at all. That is also why you were never asked to agree to anything.",
      sections: [
        {
          heading: "What was measured",
          body: [
            "These are not intentions. They were measured on 25 October 2026 on the published site, with the page fully loaded, both in the browser and in the server's own responses. Anyone can repeat the check with their browser's developer tools.",
          ],
          checks: [
            { label: "Cookies set", value: "None" },
            { label: "localStorage", value: "Empty" },
            { label: "sessionStorage", value: "Empty" },
            { label: "Analytics or tag manager", value: "None present" },
            { label: "Advertising or social pixels", value: "None present" },
            { label: "Third-party requests on page load", value: "None" },
          ],
        },
        {
          heading: "Why there is no banner",
          body: [
            "Article 5(3) of the ePrivacy Directive applies when information is stored on your device, or when information already stored there is accessed. Neither happens on these pages, so there is no consent to collect.",
            "A banner would ask you to agree to something that does not occur. We would rather state the position and leave you able to check it.",
          ],
        },
        {
          heading: "Everything is served from here",
          body: [
            "Typefaces, photographs and the home-page video are hosted by this site. Nothing is fetched from Google Fonts, from a stock library or from somebody else's content delivery network, so no one other than the host serving this site learns your IP address merely because you opened a page.",
          ],
        },
        {
          heading: "The one exception, and you control it",
          body: [
            "The office maps on the contact page do not load by themselves. Each is a still panel with a button until you press it. Press it and the map is requested from Google, which at that point receives your IP address and may set its own cookies under its own policy.",
            "Nothing on this site makes that request on your behalf.",
          ],
        },
        {
          heading: "The day and night switch",
          body: [
            "The home page lets you choose between the daytime and the night-time view behind the title. The choice is not written to a cookie or to browser storage and is not sent anywhere. Reload the page and it starts from the daytime clip again.",
          ],
        },
        {
          heading: "Hosting",
          body: [
            "Like any web server, the host can record the requests it serves. Those records are not set by this page; they are covered in the privacy notice.",
          ],
        },
      ],
      pending: {
        heading: "The condition this page depends on",
        text: "One thing has to stay true for it to remain accurate.",
        items: [
          "If analytics, a chat widget, an embedded form, a booking tool or an advertising pixel is added later, this page stops being correct and a consent mechanism becomes necessary. Treat that as a condition, not a formality.",
        ],
      },
    },

    privacy: {
      kicker: "Privacy",
      title: "What this site does with your data — and what it cannot tell you yet.",
      lead: "Two halves. The first is what was measured and can be stated plainly. The second is what only the firm can state, and it is left visible rather than filled in, because an invented clause reads like a commitment.",
      sections: [
        {
          heading: "The site collects nothing by itself",
          body: [
            "There is no contact form on this site. No field asks for your name, your email address or anything about your matter. Contact runs through the addresses and telephone numbers published on the contact page, so what you send, and what you keep back, stays your decision.",
            "There is no tracking, no profiling, no advertising identifier and no analytics. The cookie policy sets out how that was measured.",
          ],
        },
        {
          heading: "What still leaves a trace",
          body: ["Two things happen that are worth naming plainly."],
          checks: [
            { label: "Server logs", value: "The host can record each request: IP address, time, page requested, browser" },
            { label: "Office maps", value: "Loaded only when you press the button; Google then receives your IP address" },
          ],
        },
        {
          heading: "If you write to us",
          body: [
            "An email reaches the firm's mailbox and is handled as professional correspondence. Please do not send confidential documents or the details of a dispute in a first message.",
          ],
        },
        {
          heading: "Your rights under the GDPR",
          body: [
            "Where the General Data Protection Regulation (Regulation (EU) 2016/679) applies to you, you may ask the controller for access to your personal data and for its rectification or erasure; you may ask for processing to be restricted, object to it, and ask for your data in a portable form. Where processing rests on consent you may withdraw it at any time, without affecting what was lawfully done before.",
            "You may also lodge a complaint with a supervisory authority. Who to address these requests to is part of what the firm still has to state below.",
          ],
        },
      ],
      pending: {
        heading: "What the firm has to supply",
        text: "Articles 13 and 14 of the GDPR require each of these, and none can be established from outside the firm.",
        items: [
          "The identity and contact details of the data controller, and of an EU representative if one is appointed.",
          "Whether a Data Protection Officer has been designated, and how to reach them.",
          "The purpose and the legal basis of each processing operation, the host's server logs included.",
          "The recipients: hosting provider, mail provider and any other processor, and under which agreement.",
          "Transfers outside the EU and the safeguard relied on for each: the site's host is a United States company, and the mail provider has to be named.",
          "How long each category of data is kept, and the rule that decides it.",
          "The supervisory authority a complaint should be addressed to.",
          "How information received before an engagement is handled, and what confidentiality covers it.",
        ],
      },
    },

    legal: {
      kicker: "Legal notice",
      title: "What this site is, and what it is not.",
      lead: "A website is not a lawyer. This page sets out the limits of what you are reading.",
      sections: [
        {
          heading: "Nothing here is legal advice",
          body: [
            "These pages describe what the firm does and how it works. They are not an opinion on your situation, they take no account of your facts, and they must not be acted on as advice. Laws change, and a page can be out of date by the time you read it.",
            "Reading this site, or writing to an address published on it, does not by itself create a lawyer–client relationship.",
          ],
        },
        {
          heading: "Who is admitted where",
          body: [
            "Lorenzo Silvestri is an Italian attorney, a member of the Bar of Rome, and is certified by The Florida Bar as a Foreign Legal Consultant in Italian law. He is not admitted to practise law in Florida.",
            "Florida-law matters are handled by affiliated Florida-licensed counsel. Where a page describes work under United States law, read it as work coordinated by the firm and carried out by locally licensed professionals.",
          ],
        },
        {
          heading: "No result is promised",
          body: [
            "Nothing on this site promises an outcome, and no figure on it should be read as one. Where past matters are mentioned, they say nothing about what will happen in yours.",
          ],
        },
        {
          heading: "Before you send documents",
          body: ["Please do not attach confidential material to a first message."],
        },
        {
          heading: "Images",
          body: [
            "The photographs and the video are licensed stock from Pexels. They are illustrative and show neither the firm's offices nor its clients. The portraits are declared placeholders until real photographs are supplied: no face on this site is generated.",
          ],
        },
      ],
      pending: {
        heading: "What the firm has to supply",
        text: "Italian professional rules and Florida advertising rules both call for identifying detail that is not public information.",
        items: [
          "Bar registration: the Ordine, the register number and the date of admission.",
          "VAT number, company registration and registered office of each legal entity behind the firm.",
          "Professional indemnity insurance: insurer and policy number. Cover is required by Italian Law 247/2012, article 12.",
          "Confirmation from The Florida Bar that the Foreign Legal Consultant wording used here is the admitted form.",
          "Whether the Miami and the Rome practice are separate entities, and which one a client signs the engagement with.",
          "How and when the lawyer–client relationship begins: engagement letter, conflict check, and what the firm commits to before then.",
        ],
      },
    },
  },

  notFound: {
    title: "This page is not here.",
    text: "The address may have changed. Start from the home page or go straight to the offices.",
    cta: "Go to the home page",
  },

  preview: {
    label: "Internal preview",
    items: [
      "noindex · not for publication",
      "Photography and video are licensed and served by the site; portraits are still labelled placeholders",
      "Legal copy and disclaimer awaiting professional review",
    ],
  },
};

export default en;
