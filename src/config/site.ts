// One place for business details. Everything in brackets or marked PLACEHOLDER
// must be replaced with the client's real information before launch.
export const SITE = {
  name: 'P1 Garage Door Repair',
  short: 'P1',
  tagline: 'Same-day garage door repair in Cumming, GA',
  phone: '(770) 555-0142', // PLACEHOLDER
  phoneHref: 'tel:+17705550142', // PLACEHOLDER
  email: 'service@example.com', // PLACEHOLDER
  street: '[Street address]', // PLACEHOLDER
  city: 'Cumming',
  region: 'GA',
  zip: '30040',
  hoursShort: 'Open 24/7 for emergencies',
  hoursOffice: 'Office: Monday to Saturday, 7 AM to 7 PM',
  rating: '4.9', // PLACEHOLDER
  reviewCount: '120', // PLACEHOLDER
  ownerName: '[Owner name]', // PLACEHOLDER
  isMockup: true,
};

/** Prefix a site path with the configured base (works on GitHub Pages and on a real domain). */
export function href(path = '/'): string {
  const base = import.meta.env.BASE_URL.replace(/\/$/, '');
  const clean = path.startsWith('/') ? path : `/${path}`;
  if (clean.includes('#') || clean.endsWith('/')) return base + clean;
  return `${base}${clean}/`;
}

export const NAV = [
  { label: 'Repair', path: '/services/garage-door-repair/' },
  { label: 'New doors', path: '/services/new-garage-doors/' },
  { label: 'Openers', path: '/services/opener-repair/' },
  { label: 'Specials', path: '/specials/' },
  { label: 'Service area', path: '/service-areas/' },
  { label: 'About', path: '/about/' },
];
