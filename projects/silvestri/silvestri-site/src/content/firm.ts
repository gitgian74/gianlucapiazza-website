import type { OfficeId } from "@/lib/routes";

/**
 * Language-neutral firm data. Every value here is cross-checked against the
 * firm's own public pages and llms.txt; items still awaiting confirmation are
 * flagged in docs/OPEN-DATA.md and listed with `pendingConfirmation`.
 */

export interface Office {
  id: OfficeId;
  city: string;
  country: string;
  street: string[];
  timeZone: string;
  /** Local opening hours, 24h. Prototype data — awaiting confirmation. */
  opens: number;
  closes: number;
  phones: { label: "office" | "direct" | "main" | "fax"; display: string; tel?: string }[];
  emails: string[];
  web?: { label: string; href: string };
  mapEmbed: string;
  geo?: { lat: number; lon: number };
  pendingConfirmation: string[];
}

export const OFFICES: Office[] = [
  {
    id: "miami",
    city: "Miami",
    country: "United States",
    street: ["1200 Brickell Ave, Suite 310", "Miami, FL 33131 — Brickell 21 Financial Centre"],
    timeZone: "America/New_York",
    opens: 9,
    closes: 18,
    phones: [
      { label: "office", display: "+1 786 502 3615", tel: "+17865023615" },
      { label: "direct", display: "+1 786 803 8444", tel: "+17868038444" },
    ],
    emails: ["info@silvestri-international.com"],
    mapEmbed:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3593.260456276918!2d-80.194142684979!3d25.761959283636788!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88d9b68143732e83%3A0x3742d33fc709dc!2s1200%20Brickell%20Ave%20%23%20310-B%2C%20Miami%2C%20FL%2033131!5e0!3m2!1sen!2sus!4v1591796802188!5m2!1sen!2sus",
    geo: { lat: 25.761959, lon: -80.194142 },
    pendingConfirmation: [
      "opening hours 09:00-18:00",
      "map pin resolves to '1200 Brickell Ave # 310-B' while the address reads Suite 310",
    ],
  },
  {
    id: "rome",
    city: "Rome",
    country: "Italy",
    street: ["Piazza della Libertà 20", "00192 Rome, Italy"],
    timeZone: "Europe/Rome",
    opens: 9,
    closes: 18,
    phones: [
      { label: "main", display: "+39 06 3218783", tel: "+39063218783" },
      { label: "fax", display: "+39 06 32295715" },
    ],
    emails: ["segreteria@coenpalandri.it"],
    web: { label: "coenpalandri.it", href: "https://www.coenpalandri.it/" },
    mapEmbed:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2969.193378420518!2d12.468607715602639!3d41.91020147138345!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x132f60f7c1a098fb%3A0xdfebe16709a6fbfd!2sPiazza+della+Libert%C3%A0%2C+20%2C+00192+Roma+RM!5e0!3m2!1sit!2sit!4v1548437488035",
    pendingConfirmation: ["opening hours 09:00-18:00", "fax line still in service"],
  },
  {
    id: "montevideo",
    city: "Montevideo",
    country: "Uruguay",
    street: ["Víctor Soliño 349, 1710", "Montevideo 11300, Uruguay"],
    timeZone: "America/Montevideo",
    opens: 9,
    closes: 18,
    phones: [{ label: "main", display: "+598 94 733 513", tel: "+59894733513" }],
    emails: ["grodriguez@silvestri-international.com"],
    mapEmbed:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3271.283647113011!2d-56.16047222339491!3d-34.92442257284107!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x959f8177fa2de0e3%3A0x5d98e4a752afd43d!2s1710%2C%20V%C3%ADctor%20Soli%C3%B1o%20349%2C%2011300%20Montevideo%2C%20Departamento%20de%20Montevideo%2C%20Uruguay!5e0!3m2!1sen!2sus!4v1742934777181!5m2!1sen!2sus",
    pendingConfirmation: ["opening hours 09:00-18:00"],
  },
];

export const officeById = (id: OfficeId): Office => {
  const found = OFFICES.find((o) => o.id === id);
  if (!found) throw new Error(`Unknown office: ${id}`);
  return found;
};

export const EMAIL = "info@silvestri-international.com";
export const MIAMI_OFFICE_PHONE = "+1 786 502 3615";
export const MIAMI_DIRECT_PHONE = "+1 786 803 8444";
export const ROME_PHONE = "+39 06 3218783";

export const SOCIALS = [
  { id: "instagram", label: "Instagram", href: "https://www.instagram.com/silvestriinternational" },
  { id: "facebook", label: "Facebook", href: "https://www.facebook.com/silvestriinternational" },
  { id: "linkedin-firm", label: "LinkedIn", href: "https://www.linkedin.com/company/silvestri-international" },
  { id: "linkedin-lorenzo", label: "LinkedIn", href: "https://www.linkedin.com/in/lorenzo-silvestri-2b74276/" },
] as const;

export const LEGAL_NAME = "Silvestri International – Studio Legale Internazionale";
export const COPYRIGHT_HOLDER = "Silvestri International Corp.";
export const FOUNDED = "2019-01";
