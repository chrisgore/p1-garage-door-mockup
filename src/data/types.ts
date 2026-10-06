export interface Faq {
  q: string;
  a: string;
}

export type IconName =
  | 'wrench' | 'spring' | 'opener' | 'cable' | 'track' | 'door' | 'gauge' | 'clock';

export interface Service {
  /** URL segment: /services/<slug>/ */
  slug: string;
  /** Full name, e.g. "Garage door spring replacement" */
  name: string;
  /** Short card label, e.g. "Broken springs" */
  short: string;
  icon: IconName;
  /** <title> without the brand suffix, 30-55 chars */
  metaTitle: string;
  /** 140-160 chars */
  metaDescription: string;
  h1: string;
  /** 1-2 sentences under the H1 */
  lede: string;
  /** ~20 words, used on service cards */
  cardBlurb: string;
  /** Sample price range shown with a "sample" label, e.g. "$250 – $450" */
  priceRange: string;
  /** e.g. "About 1 to 2 hours" */
  visitTime: string;
  /** 4-6 symptoms, each a short sentence */
  signs: string[];
  /** 4-5 steps in the order the tech does them */
  process: { title: string; body: string }[];
  /** 3-5 things that change the price */
  priceFactors: string[];
  /** 2-3 deeper sections, each 1-3 paragraphs */
  sections: { heading: string; body: string[] }[];
  /** Optional safety warning, one or two sentences */
  safety?: string;
  /** 3-5 */
  faqs: Faq[];
  /** 3 slugs of other services */
  related: string[];
}

export interface City {
  /** URL segment: /service-areas/<slug>/ */
  slug: string;
  name: string;
  county: string;
  zips: string[];
  /** e.g. "about 20 minutes" */
  driveFromCumming: string;
  metaTitle: string;
  metaDescription: string;
  h1: string;
  lede: string;
  /** 2 paragraphs, unique to this city */
  intro: string[];
  /** 2-4 well-known places, from the supplied fact list only */
  landmarks: string[];
  /** 2-3 short sections specific to the area */
  localNotes: { heading: string; body: string }[];
  /** 2-3 city-specific questions */
  faqs: Faq[];
  /** 3 slugs of neighboring cities */
  nearby: string[];
}
