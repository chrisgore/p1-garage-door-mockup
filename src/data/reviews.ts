// SAMPLE reviews for the mockup. Replace with real Google reviews (with permission) before launch.
export interface Review { text: string; who: string; where: string; service: string }
export const REVIEWS: Review[] = [
  { text: 'Spring snapped on a Saturday morning. They had it fixed by lunch, and the price on the phone was the price on the invoice.', who: 'Homeowner', where: 'Cumming', service: 'Spring replacement' },
  { text: "Our opener died with both cars inside. The tech showed us repair versus replace pricing and didn't push the expensive one.", who: 'Homeowner', where: 'Suwanee', service: 'Opener repair' },
  { text: 'New insulated door and opener in one visit. They cleaned up, hauled the old door off and walked us through the app.', who: 'Homeowner', where: 'Dawsonville', service: 'New garage door' },
  { text: 'Door came off the track after my son clipped it with the car. They came out that evening and had it running smooth again.', who: 'Homeowner', where: 'Alpharetta', service: 'Off-track repair' },
  { text: 'Booked a tune-up because the door was loud. They swapped the old rollers and now you can barely hear it.', who: 'Homeowner', where: 'Johns Creek', service: 'Tune-up' },
  { text: 'Called at 9 PM with the door stuck open. Someone answered, showed up within the hour and the house was secure that night.', who: 'Homeowner', where: 'Buford', service: 'Emergency repair' },
];
