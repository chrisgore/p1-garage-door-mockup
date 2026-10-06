import type { Faq } from './types';

export const FAQ_GROUPS: { title: string; items: Faq[] }[] = [
  {
    title: 'Repairs & springs',
    items: [
      {
        q: 'Is it safe to open my garage door with a broken spring?',
        a: 'No. The springs carry the weight of the door, and without them the door can drop hard and fast. Do not lift it by hand or run the opener. Leave it closed and call us, and if your car is stuck inside, we can usually come the same day.',
      },
      {
        q: 'Should both springs be replaced if only one broke?',
        a: 'On a two-spring door, we recommend it. Both springs went in at the same time and have run the same number of cycles, so the second one is usually close to breaking. Replacing both keeps the door balanced and saves you a second visit.',
      },
      {
        q: 'How long do garage door springs last?',
        a: 'Springs are rated in cycles, and one cycle is the door opening and closing once. Many standard springs are rated for about 10,000 cycles, which is several years for a typical household. Higher-cycle springs cost a little more and make sense if the garage is your main entrance.',
      },
      {
        q: 'Should I repair my garage door or replace it?',
        a: 'Most problems are repairable, including springs, cables, rollers and openers. Replacement makes sense when panels are cracked or badly dented, the door is rotting or rusted through, or the repair cost gets close to the price of a new door. We give you both numbers and you decide.',
      },
      {
        q: 'My door came off its track. What should I do?',
        a: 'Stop using it. Unplug the opener so nobody presses the button, keep people and cars clear, and call us. An off-track door is under spring tension and can fall or bend further if you force it.',
      },
      {
        q: 'What does a tune-up include?',
        a: 'We lubricate the moving parts, tighten the hardware, check the cables and rollers, and balance the springs. Then we test the photo eyes, the auto-reverse and the opener force settings. It catches a worn part before it strands your car.',
      },
    ],
  },
  {
    title: 'Openers',
    items: [
      {
        q: 'Should I get a belt-drive or a chain-drive opener?',
        a: 'A belt drive is much quieter, which matters if there is a bedroom or living space over the garage. A chain drive costs a little less and is very durable. For most attached garages, we recommend a belt drive.',
      },
      {
        q: "Will a new opener work with my car's built-in remote?",
        a: 'Most cars with HomeLink or a similar system can be programmed to a new opener. Some newer openers use a security protocol that older car systems cannot talk to directly, and a small bridge device solves that. We check your car and set it up before we leave.',
      },
      {
        q: 'Can I control my garage door from my phone?',
        a: 'Yes. Many current openers include myQ or a similar app, and others can add it with a small accessory. You can open, close and check the door from anywhere with a connection. We set up the app with you during the install.',
      },
      {
        q: 'Why does my door go back up right after it closes?',
        a: 'The safety sensors near the floor are usually out of line, dirty or blocked. It can also be a force or travel setting that needs adjusting. Check that both sensor lights are steady, and call us if that does not fix it.',
      },
      {
        q: 'How long does an opener installation take?',
        a: 'A straight replacement usually takes 2 to 3 hours. That covers removing the old unit, mounting the new one, setting the travel and force limits, and programming your remotes, keypad and car.',
      },
      {
        q: 'Should I repair or replace my old opener?',
        a: 'If the opener is fairly new and the problem is a gear, sensor or remote, a repair usually makes sense. If it is old, loud, has no battery backup or needs a new logic board, a new opener is often the better value. We price both so you can compare.',
      },
    ],
  },
  {
    title: 'New doors',
    items: [
      {
        q: 'How long does a new garage door installation take?',
        a: 'Most residential door installs take about half a day once the door arrives. Ordering can take longer, since many styles and colors are built to order. We give you a timeline when you approve the quote.',
      },
      {
        q: 'Is an insulated garage door a good idea in Georgia?',
        a: 'For an attached garage, usually yes. Georgia summers are hot, and an insulated door keeps more of that heat out of the garage and the rooms next to it. Insulated doors are also stiffer and quieter.',
      },
      {
        q: 'What door styles do you install?',
        a: 'We install raised-panel and flush steel doors, carriage-house styles and wood-look finishes. You can add windows and pick from a range of colors. Bring a photo of a door you like and we will find something close.',
      },
      {
        q: "Can you match a new door to my HOA's rules?",
        a: "Yes. Share your HOA's guidelines and we will quote doors that meet them. If your HOA needs to approve the door first, we can give you the spec sheet and photos for your application.",
      },
      {
        q: 'Do I need a new opener with a new door?',
        a: 'Not always. If your opener is in good shape and rated for the new door, we keep it and adjust it. If it is old or underpowered, replacing both at once saves a second visit.',
      },
    ],
  },
  {
    title: 'Pricing, scheduling & warranty',
    items: [
      {
        q: 'Do you charge a trip fee?',
        a: 'No. There is no trip fee anywhere in our service area when we do the repair. We give you the price before any work starts.',
      },
      {
        q: 'Do you price match?',
        a: 'Yes. Show us a written quote from a licensed local garage door company for the same work and parts, and we will match it.',
      },
      {
        q: 'What warranty do I get?',
        a: "Our work is covered by a workmanship warranty, and parts carry the manufacturer's warranty. The exact terms depend on the part and the job. We write them on your invoice so you have them on file.",
      },
      {
        q: 'Do you work weekends or after hours?',
        a: 'Yes. We offer 24/7 emergency repair for doors stuck open, broken springs and other urgent problems, weekends included. Call any time and we will tell you how soon a tech can get there.',
      },
      {
        q: 'How can I pay?',
        a: 'We take major credit and debit cards, checks and cash. Payment is due when the job is finished and you are happy with how the door runs.',
      },
      {
        q: 'Do you service commercial garage doors?',
        a: 'We focus on residential garage doors. For light commercial doors, like a small shop or office bay, call and describe the door. We will tell you if it is a job we can take on.',
      },
    ],
  },
];
