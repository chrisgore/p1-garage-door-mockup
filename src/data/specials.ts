// SAMPLE offers for the mockup. Set real amounts and terms with the client.
export interface Special { amount: string; unit?: string; title: string; text: string; terms: string }
export const SPECIALS: Special[] = [
  { amount: '$200', unit: 'off', title: 'Any new garage door', text: 'Installed, with haul-away of the old door included.', terms: 'Double doors. Not combinable with other offers.' },
  { amount: '$50', unit: 'off', title: 'Spring replacement', text: 'Matched pair of high-cycle springs, balanced and tested.', terms: 'Torsion or extension springs, pair replacement.' },
  { amount: '$89', title: 'Tune-up & safety check', text: 'Full lube, hardware check, balance test and auto-reverse test.', terms: 'One door. Parts quoted separately before any work.' },
];
