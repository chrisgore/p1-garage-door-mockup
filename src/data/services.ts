import type { Service } from './types';

export const SERVICES: Service[] = [
  {
    slug: "garage-door-repair",
    name: "Garage door repair",
    short: "Garage door repair",
    icon: "wrench",
    metaTitle: "Garage Door Repair in Cumming, GA",
    metaDescription:
      "Garage door repair in Cumming, GA and Forsyth County. Springs, openers, cables, rollers and off-track doors fixed same day on most calls. Upfront pricing.",
    h1: "Garage Door Repair in Cumming, GA",
    lede:
      "If your garage door is noisy, stuck, crooked or dead, we can usually find the cause and fix it in one visit. You get a price before any work starts.",
    cardBlurb:
      "Noisy, slow, stuck or crooked doors. We find the cause, quote the fix upfront and repair most problems the same day.",
    priceRange: "$150 – $400",
    visitTime: "About 1 to 2 hours",
    signs: [
      "The door makes grinding, popping or squealing noises.",
      "It opens partway and then stops or reverses.",
      "One side of the door sits lower than the other.",
      "The opener hums but the door does not move.",
      "The door feels heavy when you lift it by hand.",
      "You see a frayed cable or a bent section of track.",
    ],
    process: [
      {
        title: "Listen and look",
        body: "We ask what you have noticed, then run the door and watch how it moves. Sounds and movement usually point to the problem fast.",
      },
      {
        title: "Check the balance",
        body: "We disconnect the opener and lift the door by hand. A balanced door stays put at waist height, and one that drops or shoots up tells us the springs need attention.",
      },
      {
        title: "Inspect every part",
        body: "We check springs, cables, drums, rollers, hinges, track and opener settings. You get a written price for the repair before we touch anything.",
      },
      {
        title: "Make the repair",
        body: "Our trucks carry the common parts, so we can usually fix the door on the same visit.",
      },
      {
        title: "Test and adjust",
        body: "We lubricate moving parts, set the opener's force and travel limits, and test the safety reversal. Then we show you how the door runs.",
      },
    ],
    priceFactors: [
      "Which part failed, since a spring pair costs more than a roller swap.",
      "How many problems we find, because one failed part often wears out the parts around it.",
      "The size and weight of the door, which sets the size of the springs and cables.",
      "Whether the visit is during regular hours or after hours.",
    ],
    sections: [
      {
        heading: "How a garage door works",
        body: [
          "The springs lift your garage door. A typical two-car steel door weighs 130 to 200 pounds, and the springs are wound to carry nearly all of it. The opener only guides the door up and down, which is why a broken spring stops the door even when the opener works fine.",
          "Cables run from the bottom corners of the door to drums at the top. Rollers ride in the tracks on each side, and hinges let the sections fold around the curve. When one of those parts wears or breaks, the others take extra load and wear faster too.",
        ],
      },
      {
        heading: "Common problems we fix",
        body: [
          "Broken springs are the most common garage door failure. After that come worn-out openers, frayed or snapped cables, noisy rollers and doors that have come off the track. Each one has its own page on this site with more detail.",
          "Problems often show up together. A door that has run for years on a weak spring usually has worn rollers and a strained opener as well. We check the whole system and tell you what needs fixing now and what can wait.",
        ],
      },
      {
        heading: "What Georgia weather does to garage doors",
        body: [
          "Summer heat and humidity in north Georgia are hard on steel parts. Springs and cables rust, and rust speeds up wear and makes a spring more likely to snap. Attached garages also get very hot, which dries out lubricant and weatherstripping.",
          "Wind is rarely a concern around Cumming. Moisture is the bigger issue. A light coat of garage door lubricant on the springs, hinges and rollers a couple of times a year slows rust down.",
        ],
      },
    ],
    safety:
      "Do not try to adjust or remove springs, cables or the bottom brackets yourself. They hold the full weight of the door under tension and can cause serious injury when released.",
    faqs: [
      {
        q: "Is it worth repairing my garage door, or should I replace it?",
        a: "Most doors are worth repairing. Springs, cables, rollers and openers are all replaceable parts, and fixing them costs far less than a new door. Replacement makes sense when several sections are badly damaged, the door is rusted through, or you want better insulation or a new look.",
      },
      {
        q: "Can you fix it the same day?",
        a: "Usually, yes. Our trucks carry common springs, cables, rollers, hinges and opener parts. If your door needs a special-order part, we tell you the lead time and make the door safe to use in the meantime when we can.",
      },
      {
        q: "How much does garage door repair cost?",
        a: "Most repairs in the Cumming area fall between $150 and $400. Spring replacement, a new opener or a new section costs more. You get the exact price before work starts.",
      },
      {
        q: "Why is my garage door so loud?",
        a: "Noise usually comes from worn rollers, dry hinges, loose hardware or an opener that is wearing out. Grinding or banging can also point to a spring or cable problem. A tune-up fixes most noise, and we tell you if a part needs replacing.",
      },
      {
        q: "Do you work on all brands?",
        a: "Yes. We service residential doors and openers from all the major brands, including Clopay, Amarr, Wayne Dalton, LiftMaster, Chamberlain and Genie.",
      },
    ],
    related: ["spring-replacement", "opener-repair", "tune-up"],
  },
  {
    slug: "spring-replacement",
    name: "Garage door spring replacement",
    short: "Broken springs",
    icon: "spring",
    metaTitle: "Garage Door Spring Replacement in Cumming, GA",
    metaDescription:
      "Broken garage door spring in Cumming, GA? We replace torsion and extension springs matched to your door's weight, usually the same day. Price upfront.",
    h1: "Garage Door Spring Replacement in Cumming, GA",
    lede:
      "A broken spring is the most common reason a garage door stops working. We match new springs to your door's weight and replace them the same day on most visits.",
    cardBlurb:
      "Torsion and extension springs sized to your door, replaced in pairs, with the balance tested before we leave.",
    priceRange: "$250 – $450",
    visitTime: "About 1 hour",
    signs: [
      "You heard a loud bang from the garage, like a gunshot.",
      "There is a gap in the spring coil above the door.",
      "The opener strains, lifts the door a few inches and stops.",
      "The door feels extremely heavy when you try to lift it.",
      "The door slams shut instead of lowering slowly.",
      "The cables look loose or have slipped off the drums.",
    ],
    process: [
      {
        title: "Secure the door",
        body: "We lock the door down and clamp the track so the door cannot move while the springs are off.",
      },
      {
        title: "Measure the old springs",
        body: "We measure wire size, inside diameter and length, and weigh the door when needed. That tells us the exact spring to install.",
      },
      {
        title: "Unwind and replace",
        body: "Using proper winding bars, we release any tension left in the old spring, remove it and install the new pair.",
      },
      {
        title: "Wind and balance",
        body: "We wind the springs to the right number of turns, then lift the door by hand to check that it holds at mid-height.",
      },
      {
        title: "Check related parts",
        body: "We inspect the cables, drums, bearings and rollers, lubricate the springs and run the opener through several cycles.",
      },
    ],
    priceFactors: [
      "Torsion or extension springs, and whether your door has one spring or two.",
      "Standard 10,000-cycle springs or high-cycle springs rated for 20,000 cycles or more.",
      "The weight of the door, since heavier doors need heavier wire.",
      "Whether the cables or drums also need replacing on the same visit.",
    ],
    sections: [
      {
        heading: "Torsion springs and extension springs",
        body: [
          "Most newer doors use torsion springs. They mount on a steel bar above the door and twist to store energy. They lift smoothly and hold up well.",
          "Older doors and some single-car doors use extension springs. These run along the horizontal tracks on each side and stretch as the door closes. They should always have a safety cable running through the center so a broken spring cannot fly across the garage. If yours are missing that cable, we add it.",
          "Some homeowners convert from extension to torsion springs. It costs more upfront, and the door runs quieter and the setup is safer. We can quote both options.",
        ],
      },
      {
        heading: "Cycle ratings and how long springs last",
        body: [
          "Springs are rated in cycles. One cycle is the door opening and closing once. Standard springs are rated for about 10,000 cycles. If you use the door four times a day, that works out to roughly seven years.",
          "High-cycle springs are rated for 20,000 cycles or more. They cost a bit more and use longer or heavier wire. If your garage is the main way in and out of the house, high-cycle springs usually pay for themselves. Humidity and rust shorten spring life in Georgia, so a coat of lubricant twice a year helps.",
        ],
      },
      {
        heading: "Why we replace springs in pairs",
        body: [
          "On a door with two springs, both were installed at the same time and have run the same number of cycles. When one breaks, the other is close behind. Replacing only one usually means a second service call within months.",
          "A matched pair also keeps the door balanced. A new spring paired with a worn one pulls unevenly, which strains the cables and the opener.",
        ],
      },
    ],
    safety:
      "Torsion springs store enough energy to cause serious injury. Do not loosen the set screws or try to unwind a spring, and do not pull the emergency release while the door is open with a broken spring, because the door can drop.",
    faqs: [
      {
        q: "Can I still open the door with a broken spring?",
        a: "Please don't. Without the spring, the opener and your back take the full weight of the door. You can damage the opener, bend the door or get hurt. If a car is trapped inside, call us and we will get it out safely.",
      },
      {
        q: "Should I replace both springs if only one broke?",
        a: "Yes, in almost every case. Both springs have the same wear, so the second one usually fails soon after the first. Replacing the pair costs less than two separate visits.",
      },
      {
        q: "How long do garage door springs last?",
        a: "Standard springs last about 10,000 cycles, which is around seven years for most households. High-cycle springs last two or more times as long. Heavy daily use, rust and lack of lubrication shorten spring life.",
      },
      {
        q: "Why did my spring break?",
        a: "Springs break from metal fatigue. Every cycle flexes the steel, and eventually it cracks. Rust speeds this up, and a cold morning is often when a worn spring finally gives out.",
      },
      {
        q: "Do you carry springs on the truck?",
        a: "We stock the common torsion and extension sizes for residential doors. Unusual sizes or very heavy custom doors may need a special order, and we tell you before we start.",
      },
    ],
    related: ["cable-roller-repair", "emergency-repair", "tune-up"],
  },
  {
    slug: "opener-repair",
    name: "Garage door opener repair and installation",
    short: "Openers",
    icon: "opener",
    metaTitle: "Garage Door Opener Repair in Cumming, GA",
    metaDescription:
      "Garage door opener repair and installation in Cumming, GA. LiftMaster, Chamberlain, Genie and Craftsman. Remotes, keypads, sensors and myQ smart setup.",
    h1: "Garage Door Opener Repair and Installation in Cumming, GA",
    lede:
      "We repair openers from all the major brands and install new ones when repair no longer makes sense. We also set up remotes, keypads, safety sensors and smart Wi-Fi control.",
    cardBlurb:
      "Repair or replace LiftMaster, Chamberlain, Genie and Craftsman openers, plus remotes, keypads, sensors and myQ smart setup.",
    priceRange: "$125 – $850",
    visitTime: "Repair in about 1 hour, new opener in about 2 to 3 hours",
    signs: [
      "The door starts to close, then reverses back up.",
      "The opener light blinks and the door won't move.",
      "You hear the motor run, but the door stays put.",
      "Remotes or the wall keypad work only some of the time.",
      "The opener is loud, grinds or shakes the ceiling.",
      "Your opener is old and has no safety sensors near the floor.",
    ],
    process: [
      {
        title: "Rule out the door",
        body: "We disconnect the opener and run the door by hand first. Many problems that look like opener trouble turn out to be springs or track.",
      },
      {
        title: "Diagnose the opener",
        body: "We read the error codes and check the sensors, wiring, gears, logic board and travel limits to find what failed.",
      },
      {
        title: "Repair or replace",
        body: "We quote the repair and, when it makes sense, the cost of a new opener. You choose which way to go.",
      },
      {
        title: "Install and program",
        body: "We replace the part or install the new unit, then program your remotes, keypad, car buttons and the myQ app.",
      },
      {
        title: "Test safety features",
        body: "We set the force and travel limits and test the safety reversal with an object under the door.",
      },
    ],
    priceFactors: [
      "Repair parts such as sensors, gears or a logic board cost much less than a new unit.",
      "Belt drive openers cost more than chain drive, and wall-mount openers cost the most.",
      "Add-ons such as battery backup, a keypad, extra remotes or a camera.",
      "Whether the job needs new wiring, a ceiling outlet or extra mounting brackets.",
      "Doors taller than 7 feet need a rail extension kit.",
    ],
    sections: [
      {
        heading: "Chain, belt and wall-mount openers",
        body: [
          "Chain drive openers are the most affordable and very durable. They are also the loudest, so they suit detached garages or garages that sit away from bedrooms.",
          "Belt drive openers use a reinforced rubber belt in place of a chain. They run much quieter, which matters when there is a bedroom or living room over the garage. Belt drive is the most popular choice for attached garages.",
          "Wall-mount openers, also called jackshaft openers, mount beside the door on the torsion bar. They free up the ceiling for storage or a car lift and work well with high ceilings. They cost more and need a torsion spring system.",
        ],
      },
      {
        heading: "Smart openers, sensors and battery backup",
        body: [
          "Most new LiftMaster and Chamberlain openers include myQ, which lets you open, close and check the door from your phone. Genie uses its Aladdin Connect app. You can get an alert when the door opens and close it from anywhere if you forgot.",
          "Openers sold in the United States have required photo-eye safety sensors since 1993. If your opener has no sensors near the floor, it is time to replace it.",
          "Battery backup keeps the opener working during a power outage. Summer thunderstorms knock out power in north Georgia, and with backup you can still get the car out.",
        ],
      },
      {
        heading: "Repair or replace?",
        body: [
          "Repair makes sense when the opener is under about 10 years old and the problem is a sensor, gear, remote or wiring fault. These are common, inexpensive fixes.",
          "Replacement makes sense when the opener is older, the logic board has failed, parts are no longer made, or it lacks modern safety and security features. Older openers with fixed-code remotes are also easier to break into than current rolling-code models.",
        ],
      },
    ],
    faqs: [
      {
        q: "Which opener brand do you recommend?",
        a: "LiftMaster, Chamberlain, Genie and Craftsman all make reliable openers. LiftMaster and Chamberlain come from the same company, and LiftMaster models are sold through installers. We recommend a model based on your door, your ceiling and how quiet you need it to be.",
      },
      {
        q: "Why does my garage door reverse before it closes?",
        a: "The most common cause is the safety sensors. They may be out of line, dirty or blocked by something on the floor, and low afternoon sun shining into a sensor can do it too. If cleaning and realigning them doesn't help, the force setting or a problem with the door itself may be the cause.",
      },
      {
        q: "Can you add myQ or Wi-Fi to my existing opener?",
        a: "Often, yes. Many existing openers work with a myQ smart hub that mounts on the ceiling. Some older or less common models need a different add-on, and sometimes replacing the opener makes more sense.",
      },
      {
        q: "How much does a new opener cost installed?",
        a: "Most new openers installed in the Cumming area run $450 to $850. Chain drives are at the low end, belt drives in the middle and wall-mount units at the top. The price includes removing and hauling away your old opener.",
      },
      {
        q: "How long does a garage door opener last?",
        a: "Most openers last 10 to 15 years. Doors with weak springs or poor balance wear openers out faster, because the motor ends up doing work the springs should do.",
      },
    ],
    related: ["garage-door-repair", "spring-replacement", "tune-up"],
  },
  {
    slug: "cable-roller-repair",
    name: "Garage door cable and roller repair",
    short: "Cables & rollers",
    icon: "cable",
    metaTitle: "Garage Door Cable & Roller Repair in Cumming, GA",
    metaDescription:
      "Frayed cables, worn rollers or a crooked garage door in Cumming, GA? We replace lift cables, drums, rollers and hinges, usually the same day. Price upfront.",
    h1: "Garage Door Cable and Roller Repair in Cumming, GA",
    lede:
      "Cables, drums, rollers and hinges carry and guide the door every time it moves. When they wear out, the door gets loud, crooked or stuck, and we can usually fix it the same day.",
    cardBlurb:
      "Frayed lift cables, worn drums, noisy rollers and cracked hinges replaced, so the door runs level and quiet again.",
    priceRange: "$175 – $350",
    visitTime: "About 1 to 2 hours",
    signs: [
      "A cable is frayed, rusty or hanging loose beside the door.",
      "One side of the door is higher than the other.",
      "The door grinds, rattles or squeaks as it moves.",
      "Rollers wobble, have cracked wheels or have popped out of the track.",
      "Hinges between the sections are cracked or bent.",
    ],
    process: [
      {
        title: "Secure the door",
        body: "We lock the door in place and clamp the track before touching any cables.",
      },
      {
        title: "Release spring tension",
        body: "On a torsion system the cables cannot come off safely until the springs are unwound, so we unwind them first.",
      },
      {
        title: "Replace worn parts",
        body: "We install new cables, plus drums, rollers or hinges as needed. Cables are always replaced as a pair.",
      },
      {
        title: "Rewind and level",
        body: "We rewind the springs and set the cable tension so both sides of the door lift evenly.",
      },
      {
        title: "Lubricate and test",
        body: "We lubricate the new parts and run the door by hand and with the opener to check that it travels level and quiet.",
      },
    ],
    priceFactors: [
      "How many parts need replacing, from one pair of cables to a full set of rollers and hinges.",
      "Nylon rollers with sealed bearings cost more than basic steel rollers and last much longer.",
      "Whether the cable drums are damaged and need replacing.",
      "Whether the door also came off track or bent a section when the cable failed.",
    ],
    sections: [
      {
        heading: "What cables and drums do",
        body: [
          "Lift cables connect the bottom corners of the door to drums on the spring bar. As the springs turn, the cables wind onto the drums and lift the door. If one cable frays or slips off its drum, that side drops and the door hangs crooked.",
          "Georgia humidity rusts cables, especially near the bottom bracket where water collects. Once the strands start to break, a cable can snap without warning. New cables cost little compared to the damage a snapped one can cause, so we replace them at the first sign of fraying.",
        ],
      },
      {
        heading: "Why rollers wear out",
        body: [
          "Rollers ride in the track every time the door moves. Basic steel rollers have open bearings that dry out and rust, and the wheels wear flat. Then they grind, wobble and put extra load on the opener.",
          "Nylon rollers with sealed ball bearings run much quieter and last longer. On most homes, new rollers are one of the cheapest ways to quiet a noisy door. We replace hinges at the same time if they are cracked or worn at the pin.",
        ],
      },
    ],
    safety:
      "Cables and bottom brackets are under full spring tension. Do not loosen the bottom brackets or try to put a cable back on its drum yourself, because the cable can whip loose and the door can fall.",
    faqs: [
      {
        q: "Can a snapped cable be fixed without replacing the springs?",
        a: "Usually, yes. We unwind the springs, replace the cables and rewind the same springs. If the springs are near the end of their life, we tell you, since doing both on one visit costs less.",
      },
      {
        q: "Why did my cable come off the drum?",
        a: "Common causes are a broken spring, the door hitting something while closing, a stretched cable, or someone pulling the emergency release with the door partway open. We find the cause so it doesn't happen again.",
      },
      {
        q: "How often should rollers be replaced?",
        a: "Basic steel rollers often need replacing after 5 to 7 years. Quality nylon rollers with sealed bearings can last 15 years or more. If yours wobble, grind or have cracked wheels, it is time.",
      },
      {
        q: "Is it safe to use the door with a frayed cable?",
        a: "No. A frayed cable can snap at any time and drop that side of the door. Stop using the door, keep people and cars clear of it, and give us a call.",
      },
    ],
    related: ["spring-replacement", "off-track-repair", "tune-up"],
  },
  {
    slug: "off-track-repair",
    name: "Off-track garage door repair",
    short: "Off-track doors",
    icon: "track",
    metaTitle: "Off-Track Garage Door Repair in Cumming, GA",
    metaDescription:
      "Garage door off its track or hit by a car in Cumming, GA? We reset doors, straighten or replace bent track and replace damaged panels. Upfront pricing.",
    h1: "Off-Track Garage Door Repair in Cumming, GA",
    lede:
      "A door that has jumped its track or taken a hit from a car is unstable and can fall. We secure it, put it back on track and repair or replace the damaged track and panels.",
    cardBlurb:
      "Doors off track, bent track and dented or cracked panels repaired, including doors that were hit by a car.",
    priceRange: "$175 – $450",
    visitTime: "About 1 to 3 hours",
    signs: [
      "The door is crooked or hanging at an angle in the opening.",
      "Rollers have come out of the track on one or both sides.",
      "A section of track is bent, kinked or pulled away from the wall.",
      "A panel is dented, cracked or buckled.",
      "Someone backed into the door or bumped it with a car.",
    ],
    process: [
      {
        title: "Stop and secure",
        body: "We clamp the door so it can't fall and disconnect the opener so nobody runs it by accident.",
      },
      {
        title: "Assess the damage",
        body: "We check the track, rollers, cables, springs, hinges and each panel. A door that was hit often has damage in more than one place.",
      },
      {
        title: "Reset the door",
        body: "We release spring tension as needed, guide the rollers back into the track and reattach any loose cables.",
      },
      {
        title: "Fix track and panels",
        body: "We straighten or replace bent track, re-anchor loose brackets and replace sections that can't be repaired.",
      },
      {
        title: "Balance and test",
        body: "We check the spring balance, set the opener limits and run the door through several full cycles.",
      },
    ],
    priceFactors: [
      "How far the door came off and whether the cables or springs were damaged.",
      "Whether the track can be straightened or needs to be replaced.",
      "A replacement section is quoted separately, since it has to be ordered to match your door.",
      "Damage to the opener rail or header bracket from the impact.",
    ],
    sections: [
      {
        heading: "Why doors come off track",
        body: [
          "The most common causes are a car hitting the door, a broken cable letting one side drop, worn rollers popping out of the track and loose track brackets. Running the opener while something blocks the door can also force it out.",
          "A door that is off track on one side carries its weight unevenly. If it keeps moving, it can twist, bend the panels and pull the track off the wall.",
        ],
      },
      {
        heading: "When a car hits the door",
        body: [
          "Even a low-speed bump can bend the track, crack the bottom section and knock the opener rail out of line. Leave the door where it is, keep the car clear if you can, and don't try to run the opener.",
          "If a car caused the damage, your homeowner's or auto insurance may cover it. We can give you a written estimate to send with your claim.",
        ],
      },
      {
        heading: "Repairing panels or replacing the door",
        body: [
          "A dented or cracked section can often be replaced by itself if the manufacturer still makes that model and color. We order the matching section and install it in place of the damaged one.",
          "If your door is older, discontinued or damaged in several sections, a new door may cost about the same as the repair. We quote both so you can compare.",
        ],
      },
    ],
    safety:
      "Do not run the opener on a door that is crooked or off track, and do not try to force it back by hand. The door can fall, and the springs and cables are still under tension.",
    faqs: [
      {
        q: "Can I put my garage door back on the track myself?",
        a: "We advise against it. An off-track door is often held up only by cables under spring tension, and it can drop or swing without warning. Leave it in place, unplug the opener and call us.",
      },
      {
        q: "Can you replace just one damaged panel?",
        a: "Often, yes. If the manufacturer still makes your door model and color, we can order a matching section. If the door is discontinued, a new door may be the better value, and we quote both.",
      },
      {
        q: "Will insurance pay for a garage door hit by a car?",
        a: "Many homeowner and auto policies cover it, depending on who was driving and your deductible. We give you a written estimate you can send to your insurance company.",
      },
      {
        q: "My door is stuck open and crooked. Can you come tonight?",
        a: "Yes. An off-track door that won't close is a security problem, and our emergency line answers 24/7. We secure the door that night and finish the repair as soon as parts allow.",
      },
    ],
    related: ["cable-roller-repair", "new-garage-doors", "emergency-repair"],
  },
  {
    slug: "new-garage-doors",
    name: "New garage door installation",
    short: "New garage doors",
    icon: "door",
    metaTitle: "New Garage Door Installation in Cumming, GA",
    metaDescription:
      "New garage doors installed in Cumming, GA. Steel, insulated, carriage house, glass and wood-look styles. We measure, install and haul away the old door.",
    h1: "New Garage Door Installation in Cumming, GA",
    lede:
      "We help you pick a door that fits your home and your budget, measure the opening and install it in one visit. We take the old door away too.",
    cardBlurb:
      "Steel, insulated, carriage house, full-view glass and wood-look doors, measured and installed, with the old door hauled away.",
    priceRange: "$1,400 – $4,500",
    visitTime: "Install in about 4 to 6 hours",
    signs: [
      "Several panels are dented, cracked or rusted through.",
      "Your door is an old one-piece tilt-up or a heavy wood door.",
      "The garage is hot in summer and cold in winter.",
      "You keep paying for repairs on the same old door.",
      "The door looks dated next to the rest of the house.",
    ],
    process: [
      {
        title: "Choose the door",
        body: "We go over styles, insulation, windows and colors with you and bring samples and catalogs to look through.",
      },
      {
        title: "Measure the opening",
        body: "We measure the width, height, headroom, side room and back room. Those numbers decide which door and spring system will fit.",
      },
      {
        title: "Order and schedule",
        body: "We order the door built to your size and schedule the install when it arrives.",
      },
      {
        title: "Remove and install",
        body: "We take down the old door and track, then install the new door, track, springs and hardware and reconnect or replace the opener.",
      },
      {
        title: "Balance, test, haul away",
        body: "We balance the door, test it with the opener, walk you through it and haul the old door away.",
      },
    ],
    priceFactors: [
      "Size, since a 16x7 double door costs more than an 8x7 or 9x7 single.",
      "Insulation, from single-layer steel up to thick polyurethane-insulated doors.",
      "Style and material, with carriage house, full-view glass and wood-look finishes at the higher end.",
      "Windows, decorative hardware and custom colors.",
      "Whether you need a new opener or repairs to the framing around the opening.",
    ],
    sections: [
      {
        heading: "Door styles and materials",
        body: [
          "Steel doors are the most common choice. They are strong, low maintenance and come in raised-panel, flush and carriage house designs. Carriage house doors have the look of old swing-out barn doors and open overhead like any other door.",
          "Full-view doors use aluminum frames with glass or polycarbonate panels and suit modern homes. Wood-look doors use a steel or composite skin textured and finished to look like stained wood, without the sanding and refinishing real wood needs in Georgia humidity.",
        ],
      },
      {
        heading: "Insulation and R-values",
        body: [
          "R-value measures how well a door slows heat moving through it. An uninsulated steel door is close to zero. Polystyrene-insulated doors typically run about R-6 to R-9, and polyurethane-insulated doors about R-12 to R-18.",
          "In Cumming, the biggest benefit is summer comfort. An attached garage that faces west can get very hot by late afternoon, and that heat moves into the rooms beside it and above it. Insulated doors are also stiffer and quieter. If you have a room over the garage, we recommend polyurethane insulation.",
        ],
      },
      {
        heading: "Sizes and measuring",
        body: [
          "Most double garages take a 16x7 door, and many newer homes have 16x8 openings for taller trucks and SUVs. Single doors are usually 8x7 or 9x7. We measure the opening ourselves before ordering so the door fits the first time.",
          "We also check the headroom above the opening and the space on each side. Low headroom may call for special track or a wall-mount opener, and we sort that out before the door is ordered.",
        ],
      },
    ],
    faqs: [
      {
        q: "How long does it take to get a new door?",
        a: "Stock sizes in common colors often arrive within a week or two. Custom sizes, colors and windows take longer. The install itself takes about 4 to 6 hours.",
      },
      {
        q: "Do I need a new opener with a new door?",
        a: "Not always. If your opener is in good shape and can handle the new door, we reconnect it. If it is old, noisy or has no safety sensors, replacing both on the same visit saves a separate trip.",
      },
      {
        q: "Is an insulated door worth it in Georgia?",
        a: "For an attached garage, usually yes. Insulation keeps summer heat out of the garage and the rooms next to it, and insulated doors are stronger and quieter. For a detached garage used only for storage, a single-layer door may be all you need.",
      },
      {
        q: "What warranty comes with a new door?",
        a: "The door, springs and opener carry the manufacturer warranty on parts, and the installation is backed by our workmanship warranty. We go over the coverage for your specific door before you buy.",
      },
      {
        q: "Do you remove the old door?",
        a: "Yes. We take down the old door, track and springs and haul them away as part of the installation.",
      },
    ],
    related: ["opener-repair", "off-track-repair", "tune-up"],
  },
  {
    slug: "tune-up",
    name: "Garage door tune-up and safety check",
    short: "Tune-up & safety check",
    icon: "gauge",
    metaTitle: "Garage Door Tune-Up in Cumming, GA",
    metaDescription:
      "Garage door tune-up and safety check in Cumming, GA. We lubricate, tighten, balance and test springs, cables, rollers and the opener to head off breakdowns.",
    h1: "Garage Door Tune-Up and Safety Check in Cumming, GA",
    lede:
      "A tune-up catches worn parts before they break and quiets a noisy door. We go over the whole system, adjust it and tell you what to keep an eye on.",
    cardBlurb:
      "Lubrication, a balance check, hardware tightening and safety tests that catch worn parts before they leave you stuck.",
    priceRange: "$89 – $129",
    visitTime: "About 45 minutes to 1 hour",
    signs: [
      "The door is louder than it used to be.",
      "Nobody has looked at the door in over a year.",
      "The door shakes, jerks or moves unevenly.",
      "The opener seems to work harder than it used to.",
      "You don't know if the safety reversal still works.",
    ],
    process: [
      {
        title: "Run and listen",
        body: "We cycle the door with the opener and watch for jerks, noise and uneven travel.",
      },
      {
        title: "Check the balance",
        body: "We disconnect the opener and lift the door by hand to see if the springs still carry its weight.",
      },
      {
        title: "Inspect and tighten",
        body: "We check the springs, cables, drums, rollers, hinges and track, and tighten bolts and brackets that have worked loose.",
      },
      {
        title: "Lubricate moving parts",
        body: "We apply garage door lubricant to the springs, hinges, rollers and bearings. We leave the tracks dry, since grease in the track collects dirt.",
      },
      {
        title: "Test the safety features",
        body: "We test the photo-eye sensors and auto-reverse, set the opener force and give you a list of anything that needs attention.",
      },
    ],
    priceFactors: [
      "The number of garage doors at the home.",
      "Small adjustments are included, and any replacement parts are quoted before we install them.",
      "Doors that need major spring or cable adjustment may take extra time.",
    ],
    sections: [
      {
        heading: "Why a tune-up helps",
        body: [
          "Most garage door breakdowns build up slowly. A spring loses tension, rollers wear and bolts work loose from vibration. A tune-up finds these early, when the fix is small and you can plan for it.",
          "Think of it as a pit stop for a part of the house you use every day. Forty-five minutes of adjustment keeps the door running smoothly for the next year.",
        ],
      },
      {
        heading: "What you can do between visits",
        body: [
          "Once a month, watch the door open and close and listen for new noises. Test the auto-reverse by laying a roll of paper towels on the floor under the door. The door should reverse as soon as it touches the roll.",
          "Spray the springs, hinges and rollers with garage door lubricant every few months, especially through the humid summer. Keep the photo-eye sensors clean, and leave spring and cable work to a technician.",
        ],
      },
    ],
    faqs: [
      {
        q: "How often should I get a garage door tune-up?",
        a: "Once a year works for most homes. If your garage is the main entrance and the door runs many times a day, twice a year is better.",
      },
      {
        q: "What lubricant should I use?",
        a: "Use a lubricant made for garage doors or a white lithium spray. Avoid heavy grease, which collects dirt, and keep lubricant off the inside of the tracks.",
      },
      {
        q: "Will a tune-up make my door quieter?",
        a: "Usually. Lubrication and tightening fix most squeaks and rattles. If the noise comes from worn rollers or an aging chain drive opener, we tell you which upgrade would quiet it down.",
      },
      {
        q: "What if you find a problem during the tune-up?",
        a: "We show you what we found and give you a price to fix it. You decide whether to do it that day or later. Nothing gets replaced without your approval.",
      },
    ],
    related: ["garage-door-repair", "cable-roller-repair", "opener-repair"],
  },
  {
    slug: "emergency-repair",
    name: "24/7 emergency garage door repair",
    short: "24/7 emergency repair",
    icon: "clock",
    metaTitle: "Emergency Garage Door Repair in Cumming, GA",
    metaDescription:
      "24/7 emergency garage door repair in Cumming, GA. Door stuck open, car trapped inside or a door that won't close? Call any hour and we'll secure it fast.",
    h1: "24/7 Emergency Garage Door Repair in Cumming, GA",
    lede:
      "A door stuck open at night or a car trapped inside can't wait until morning. Our emergency line answers around the clock, and we come out to secure or repair the door.",
    cardBlurb:
      "Door stuck open, car trapped inside or a door that won't close. Our emergency line answers day and night.",
    priceRange: "$175 – $450",
    visitTime: "About 1 to 2 hours on site",
    signs: [
      "The door is stuck open and won't close.",
      "Your car is trapped inside and you need to leave.",
      "A spring or cable broke and the door is hanging crooked.",
      "The door came off track or was hit by a car.",
      "The door won't latch or lock shut.",
    ],
    process: [
      {
        title: "Call the emergency line",
        body: "Tell us what happened and what you see. We give you safety steps over the phone and an arrival window.",
      },
      {
        title: "Make it safe",
        body: "When we arrive, we clamp the door, disconnect the opener and check whether the springs or cables are under tension.",
      },
      {
        title: "Price before work",
        body: "We explain the problem and give you the full after-hours price before we start.",
      },
      {
        title: "Repair or secure",
        body: "If the parts are on the truck, we fix the door that night. If not, we close and secure it and come back for the repair.",
      },
      {
        title: "Test and lock",
        body: "We run the door and make sure it closes fully and locks before we leave.",
      },
    ],
    priceFactors: [
      "Time of day, since nights, weekends and holidays include an after-hours charge.",
      "What failed, from a quick reset to a full spring replacement.",
      "Whether we can finish the repair that night or need a second visit for parts.",
    ],
    sections: [
      {
        heading: "What to do while you wait",
        body: [
          "Keep people, pets and cars away from the door. Unplug the opener so nobody tries to run it, and lock the door from the garage into the house. If a spring or cable broke, leave the door where it is.",
          "If the door is closed and the springs are intact, you may be able to pull the red emergency release cord and lift the door by hand to get a car out. If a spring is broken, leave it closed. The door will be too heavy to control and can fall.",
        ],
      },
      {
        heading: "Getting a trapped car out",
        body: [
          "A broken spring is the most common reason a car gets stuck in the garage. In most cases we can replace the springs that night. If we can't, we raise the door safely and clamp it open long enough for you to back the car out.",
        ],
      },
      {
        heading: "Securing the house overnight",
        body: [
          "A door stuck open leaves the garage, and often the door into your house, exposed. If we can't finish the repair that night, we close and secure the door so your home is locked up until we return.",
        ],
      },
    ],
    safety:
      "Do not pull the emergency release while the door is open and a spring is broken, because the door can slam down. Do not run the opener on a crooked or off-track door.",
    faqs: [
      {
        q: "Do you really answer at night and on weekends?",
        a: "Yes. Our emergency line answers 24 hours a day, 7 days a week, including holidays.",
      },
      {
        q: "How fast can you get here?",
        a: "It depends on the time of night and where you are in our service area. We give you an arrival window when you call and let you know if it changes.",
      },
      {
        q: "Does emergency service cost more?",
        a: "Calls at night, on weekends and on holidays include an after-hours charge. We tell you the full price before any work starts.",
      },
      {
        q: "Is a broken spring an emergency?",
        a: "It depends. If the door is closed and you don't need the car, it can usually wait for a regular appointment. If the door is stuck open or your car is trapped, call the emergency line.",
      },
      {
        q: "Can I close a stuck-open door myself?",
        a: "If the door is level and the springs and cables are intact, pulling the emergency release and lowering it slowly by hand may work. If a spring or cable is broken or the door is crooked, leave it alone and call us. A door in that state can drop suddenly.",
      },
    ],
    related: ["spring-replacement", "off-track-repair", "garage-door-repair"],
  },
];

export const serviceBySlug = (slug: string) => SERVICES.find((s) => s.slug === slug);
