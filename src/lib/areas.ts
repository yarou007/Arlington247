import type { CopySection, Question } from "@/lib/content-types";
import { AREA_LINKS } from "./navigation.ts";
export { AREA_LINKS } from "./navigation.ts";
export const ARLINGTON_NEIGHBORHOODS = AREA_LINKS.map((area) => area.name);
export const ARLINGTON_ZIP_CODES = [
  "22201",
  "22202",
  "22203",
  "22204",
  "22205",
  "22206",
  "22207",
  "22209",
  "22213",
];
export type AreaPageData = {
  slug: string;
  name: string;
  intro: string;
  sections: CopySection[];
  faq: Question[];
  nearby: string[];
  services: string[];
};
export const AREA_PAGES: AreaPageData[] = [
  {
    slug: "ballston-locksmith",
    name: "Ballston",
    intro:
      "Request mobile locksmith help in Ballston, Arlington, VA, for an apartment, office, storefront or car lockout. When getting in touch, identify the entrance or parking location rather than only the building name. Call for an active lockout, or WhatsApp a location pin and a photo of the problem.",
    sections: [
      {
        heading: "Give the entrance near Ballston Quarter or the Metro",
        paragraphs: [
          "Ballston Quarter, the Ballston-MU station area, Wilson Boulevard and North Glebe Road are useful orientation points, but a landmark is not an exact service address. An apartment entrance can be on a different side from a shopfront or garage entrance in the same development. Send the street number and the side of the building you can reach. If your map pin leads to a retail entrance while the locked door is residential, explain that difference before arranging a visit.",
        ],
      },
      {
        heading: "Separate apartment access from shared-building access",
        paragraphs: [
          "For a Ballston apartment or condo lockout, say whether you are outside the building or outside the unit. A lobby reader, garage gate and unit deadbolt are separate access points. Arrange entry with the concierge, managing agent or another authorized occupant where necessary. If your identification is in the apartment, discuss verification when you call rather than sending documents in a first message. Avoid changing shared hardware or trying to follow another resident into a secured area as a substitute for permission.",
        ],
      },
      {
        heading: "Describe a car’s garage location in usable detail",
        paragraphs: [
          "For a vehicle in a Ballston garage, a street address or location pin may identify the property but not the correct level. Include the vehicle make, model and year, the garage entrance, level and bay or visible sign. Explain whether an attendant or resident needs to authorize access. If the keys are in the trunk rather than the cabin, say so; vehicle security designs differ. Wait somewhere safe and contact emergency services first if anyone is at risk inside the car.",
        ],
      },
      {
        heading: "Office and shop doors need a clear scope",
        paragraphs: [
          "For an office suite or storefront around the Wilson Boulevard and Glebe Road corridors, identify whether the key will not turn, the latch will not release or the door is rubbing. A cylinder replacement alone may not address misalignment. Send a wider entrance photo and close views of the lock from both sides. If the opening is also an emergency exit, mention the push bar or other exit hardware and involve the responsible manager. Ask about availability, the proposed assessment and what work the quote includes before approving a visit.",
        ],
      },
    ],
    faq: [
      {
        question: "Is Ballston Quarter enough as my location?",
        answer:
          "Use it as a reference, then give the actual building address, entrance and parking level if relevant. Retail, residential and garage entrances can be separate within the same property.",
      },
      {
        question: "Can I request rekeying for a Ballston apartment?",
        answer:
          "Confirm the landlord or managing agent’s permission and any building key-system requirements. Send photos of the lock and explain which doors currently share a key.",
      },
    ],
    nearby: [
      "clarendon-locksmith",
      "courthouse-locksmith",
      "westover-locksmith",
    ],
    services: [
      "emergency-locksmith-arlington-va",
      "residential-locksmith-arlington",
      "car-lockout-arlington",
    ],
  },
  {
    slug: "clarendon-locksmith",
    name: "Clarendon",
    intro:
      "For a lockout or lock problem in Clarendon, Arlington, VA, call to describe the entrance and check current availability. WhatsApp is useful for a photo of a worn lock, a shop door or a vehicle location. Tell us whether the request concerns a home, business or car.",
    sections: [
      {
        heading: "A station reference needs a street and a door",
        paragraphs: [
          "Clarendon station, Wilson Boulevard, Clarendon Boulevard and Washington Boulevard can help orient a conversation, but they do not identify which door needs service. A shop’s public entrance may be separate from an apartment entrance or service door. Give the street number and describe where you are waiting. If you can see a business sign, use it as an additional reference rather than assuming a map pin will identify a rear entrance. Keep the authorized property contact available while the visit is discussed.",
        ],
      },
      {
        heading: "Apartment and condo lockouts",
        paragraphs: [
          "If you are outside a Clarendon unit, explain whether the building is already accessible or whether a shared entrance is another barrier. Contact the landlord, managing agent or concierge about their access arrangements before requesting changes to common hardware. Say if the key is inside, a key has broken or the deadbolt is difficult to turn. Those are different situations and may require different work. Avoid repeatedly forcing a sticking key; describe whether pulling or lifting the door changes the symptom.",
        ],
      },
      {
        heading: "Restaurant and retail entrances",
        paragraphs: [
          "For a restaurant or shop, distinguish a customer entrance from a staff door, delivery opening or emergency exit. A failed keyed cylinder, a closer that does not bring the door into the frame and a push bar that will not release are not the same fault. Share photos of the full opening and the visible hardware from both sides. Do not restrain a panic bar or block an exit to work around a lock problem. Arrange authorization with the manager and landlord where necessary.",
        ],
      },
      {
        heading: "Vehicle locations and practical quote details",
        paragraphs: [
          "A Clarendon car lockout request should include the street or parking facility, level where relevant, make, model and year. Mention whether the keys are in the cabin or trunk and whether anyone is inside. For a door repair request, explain whether the property can still be secured. When you speak to someone, ask what the proposed visit covers, how any additional parts would be discussed and whether access restrictions affect the arrangement. An actual arrival estimate and service availability must be confirmed directly for the location, not inferred from a neighborhood page.",
        ],
      },
    ],
    faq: [
      {
        question:
          "What if I need help outside normal office hours in Clarendon?",
        answer:
          "Call to check current availability for the lockout or hardware issue and your exact location. Confirm a visit and an arrival estimate directly rather than relying on a general hours assumption.",
      },
      {
        question: "Should I send a photo of the front or rear shop door?",
        answer:
          "Send the door that has the problem and explain its role: customer entrance, staff access or exit. Include a wider view and any visible latch, closer or push bar.",
      },
    ],
    nearby: ["ballston-locksmith", "courthouse-locksmith", "rosslyn-locksmith"],
    services: [
      "residential-locksmith-arlington",
      "commercial-storefront-lockout",
      "panic-bar-repair-arlington-va",
    ],
  },
  {
    slug: "rosslyn-locksmith",
    name: "Rosslyn",
    intro:
      "Request mobile locksmith service in Rosslyn, Arlington, VA, for a condo, office suite, storefront or vehicle. High-rise buildings and structured parking make the entrance details important. Call for an active lockout, or send your location and a hardware photo on WhatsApp before discussing a visit.",
    sections: [
      {
        heading: "Identify the building entrance around Rosslyn",
        paragraphs: [
          "Rosslyn station, North Lynn Street, North Moore Street and Wilson Boulevard are useful reference points when describing where you are. A building’s postal address does not always point to its garage entrance, security desk or accessible pedestrian entry. Give the street number and name the entrance you can reach. If a directory or security desk controls access to the relevant floor, explain that arrangement before scheduling work. Avoid using a broad reference such as Key Bridge without the actual property or vehicle location.",
        ],
      },
      {
        heading: "Office-suite lockouts and building security",
        paragraphs: [
          "An office suite lock can be separate from the building’s entry reader or after-hours access system. Establish which part is preventing entry and who has authority over it. A tenant’s request does not automatically authorize changes to lobby hardware or a shared access system. Have the manager, tenant representative or property contact available to approve the scope and arrange floor access. If the office door is rubbing, the key spins or a latch does not release, describe those symptoms instead of assuming the cylinder is the only fault.",
        ],
      },
      {
        heading: "Condo access and a lost or trapped key",
        paragraphs: [
          "For a Rosslyn condo or apartment, first distinguish a unit door problem from a shared entrance issue. Ask the concierge or managing agent about an authorized spare-key or entry arrangement where applicable. If the key is trapped or broken, stop applying force and keep the remaining piece. Say whether you can enter through another authorized route and whether the door can still be secured. Discuss verification if identity documents are inside, but do not send access codes or document photos in an initial WhatsApp message.",
        ],
      },
      {
        heading: "Garages, vehicle details and the next step",
        paragraphs: [
          "A vehicle in structured parking needs a garage entrance, level and bay or visible marker in addition to a pin. Include the make, model and year, and say where the keys are. Ask who can authorize garage entry and remain reachable while the service request is assessed. For door or vehicle work, ask what the proposed visit includes and what could change after inspection. A photo can help explain a request but cannot establish hidden damage, guarantee a final price or confirm that every vehicle uses the same opening method.",
        ],
      },
    ],
    faq: [
      {
        question:
          "Can an office tenant authorize work on a Rosslyn lobby lock?",
        answer:
          "Check with building management first. Common entrances, floor access systems and suite locks can have different owners and approval arrangements. Be specific about the affected door.",
      },
      {
        question: "What should I send for a car inside a Rosslyn garage?",
        answer:
          "The garage entrance, level and bay or visible marker, make, model, year and a location pin. Mention any attendant or building-security arrangement needed to reach the vehicle.",
      },
    ],
    nearby: [
      "courthouse-locksmith",
      "clarendon-locksmith",
      "ballston-locksmith",
    ],
    services: [
      "commercial-storefront-lockout",
      "car-lockout-arlington",
      "key-extraction-lock-repair",
    ],
  },
  {
    slug: "crystal-city-locksmith",
    name: "Crystal City",
    intro:
      "For a car lockout, apartment access problem or commercial door fault in Crystal City, Arlington, VA, call with the exact entrance or parking location. You can also use WhatsApp to send a location pin and photos. Include whether the request concerns a home, business or vehicle.",
    sections: [
      {
        heading: "Crystal Drive is a reference, not a complete address",
        paragraphs: [
          "Crystal Drive, South Bell Street, 18th Street South and the Crystal City station area can help identify the part of the neighborhood involved. A residential tower, office lobby and garage entrance may have separate access points even at the same development. Send the actual street number and explain which side or entrance you can use. If your phone’s location pin appears at street level while you are below ground, add the parking level and a sign or bay reference in the message.",
        ],
      },
      {
        heading: "A garage lockout needs more than a map pin",
        paragraphs: [
          "When keys are locked in a car, give the make, model and year and say whether the keys are in the cabin or trunk. For a Crystal City garage, name the vehicle entrance and tell us if an attendant, resident or access card is needed. Arrange authorized entry rather than assuming a public lobby leads to the parking area. Stay in a safe place while discussing help. If a child, vulnerable person or animal is at risk in the car, contact emergency services first.",
        ],
      },
      {
        heading: "Residential doors and managed-building access",
        paragraphs: [
          "For an apartment or condo, say whether you are locked out of your unit, the lobby or both. A building reader or garage gate may be managed separately from the unit’s mechanical lock. Involve the concierge, landlord or managing agent for permission and entry arrangements. If a key has snapped or the deadbolt catches, describe any earlier stiffness or door rubbing. The cause may involve the cylinder or alignment, so do not assume every access problem requires a new lock.",
        ],
      },
      {
        heading: "Commercial hardware and service planning",
        paragraphs: [
          "An office suite or storefront request should identify the door’s role and its visible fault. Say whether staff cannot enter, the premises cannot be secured or an exit device is affected. Share full-door and close-up hardware photos without taking covers off or disconnecting anything. Keep a person with approval authority reachable, especially in a managed building. Ask what the visit includes, which parts may be needed and how any revised work would be authorized. Current availability and an arrival estimate must be confirmed for the actual location and task.",
        ],
      },
    ],
    faq: [
      {
        question: "Can a location pin show my garage level?",
        answer:
          "Usually it should not be relied on for that detail. Add the garage entrance, level, bay or visible marker and explain any gate or attendant access arrangement.",
      },
      {
        question: "What if the apartment lobby is locked as well as my unit?",
        answer:
          "Explain both barriers and contact the building’s authorized representative. Shared access and a unit lock may need different permissions and should not be treated as the same job.",
      },
    ],
    nearby: ["pentagon-city-locksmith", "arlington-ridge-locksmith"],
    services: [
      "car-lockout-arlington",
      "residential-locksmith-arlington",
      "commercial-storefront-lockout",
    ],
  },
  {
    slug: "pentagon-city-locksmith",
    name: "Pentagon City",
    intro:
      "Request locksmith help in Pentagon City, Arlington, VA, for a home, car or commercial entrance. Call if you are locked out now. For hardware questions or a quote discussion, WhatsApp a photo and location details so the actual door or vehicle can be identified before a visit is arranged.",
    sections: [
      {
        heading: "Separate a shopping landmark from your service entrance",
        paragraphs: [
          "Pentagon City station and the Fashion Centre at Pentagon City are useful landmarks, while South Hayes Street, Army Navy Drive and 15th Street South help orient a street location. Do not stop at the landmark name when describing a lockout. A shopfront, residential lobby, service entrance and parking access point can be in different places. Give the building address and the entrance where an authorized person can meet. If the property restricts access, arrange that with the responsible contact before confirming a visit.",
        ],
      },
      {
        heading: "Vehicle lockouts around shops and residences",
        paragraphs: [
          "Send the make, model and year, where the keys are, and the parking facility or street. If the vehicle is in a garage, add the level, bay or a visible sign and the correct vehicle entrance. A map pin alone may point to a pedestrian entrance or another level. Describe whether any person or animal is inside and take an immediate danger to emergency services. Avoid improvised tools around the window, trim or seals while waiting for an assessment of the suitable approach.",
        ],
      },
      {
        heading: "Apartment entry, move-ins and rekeying",
        paragraphs: [
          "For a Pentagon City apartment or condo, identify whether the issue is a missing key, a stiff cylinder or a door that catches in its frame. Explain any separate lobby or garage barrier. Contact the landlord, concierge or managing agent about shared access and permission for unit-lock changes. If the request follows a move or lost key, list which doors share the key and whether any lock is already damaged. Rekeying changes key access on compatible hardware; it is not a repair for every mechanical problem.",
        ],
      },
      {
        heading: "Retail and office-door requests",
        paragraphs: [
          "For a retail or office property, have an authorized manager available and explain whether the fault affects entry, closing security or an exit route. A push bar, closer and keyed cylinder each play a different role. Send photos of the full opening and the relevant hardware without dismantling it. Ask whether the proposed work is entry assistance, repair, replacement or a wider door assessment. Confirm the quote’s scope and how parts or additional findings would be discussed, rather than assuming all door issues are included in a lockout request.",
        ],
      },
    ],
    faq: [
      {
        question: "Is the mall or station name enough to arrange a visit?",
        answer:
          "Use it only as a reference. Give the street address, actual entrance or parking facility, and any garage level or access restriction relevant to reaching you.",
      },
      {
        question: "Can I request lock rekeying when moving into a condo?",
        answer:
          "Check management approval and the existing key arrangement first. Describe how many locks are involved, which share a key and whether any have an existing mechanical fault.",
      },
    ],
    nearby: ["crystal-city-locksmith", "arlington-ridge-locksmith"],
    services: [
      "car-lockout-arlington",
      "lock-rekeying-arlington-va",
      "commercial-storefront-lockout",
    ],
  },
  {
    slug: "courthouse-locksmith",
    name: "Courthouse",
    intro:
      "For locksmith service in Courthouse, Arlington, VA, describe the unit, office suite, shop or vehicle that needs attention. Call to check availability for an active lockout, or send a photo on WhatsApp for a repair discussion. A neighborhood name is useful, but the actual entrance and authorized contact matter most.",
    sections: [
      {
        heading: "Use the address around the Courthouse station area",
        paragraphs: [
          "Courthouse station, North Courthouse Road, Wilson Boulevard and Clarendon Boulevard can orient the request, but they do not identify every building entrance. Be specific about whether you are at a residential lobby, an office suite entrance, a shopfront or a garage. If a map pin points across the block or to a different door, add a short explanation of the entrance you can reach. For a managed property, arrange access with security or the managing agent before assuming a visitor can reach the relevant floor.",
        ],
      },
      {
        heading: "Office access and authority to approve work",
        paragraphs: [
          "For an office lockout, distinguish a suite lock from the building’s shared access controls. Ask who can authorize entry or changes to the actual door; an employee’s access problem does not automatically provide permission to replace building hardware. Tell us if the key turns, jams or has broken, and whether a latch still holds the door. A photo of each side and a wider view helps describe what is present. Do not remove components to identify a fault before the request is assessed.",
        ],
      },
      {
        heading: "Condo and apartment key problems",
        paragraphs: [
          "When a Courthouse resident is locked out, a unit deadbolt and a shared lobby barrier may require different arrangements. Check with the concierge or landlord about an authorized spare or managed-entry option. If identification is locked inside, discuss a verification plan on the phone. For a recurring stiff lock, describe any rubbing or need to pull the door when turning the key. A rekey request after a move should also identify which doors share the key and any management requirements that apply.",
        ],
      },
      {
        heading: "Car locations and commercial exit concerns",
        paragraphs: [
          "A car lockout request should include the vehicle make, model and year, parking street or garage entrance, level and visible location marker. Say whether the keys are in the cabin or trunk. For a business door, say if the issue affects an exit and whether the premises are occupied; do not block or restrain exit hardware. In either case, ask about the proposed visit, scope and price before approving work. Availability and an arrival estimate need to be confirmed directly for the actual service request.",
        ],
      },
    ],
    faq: [
      {
        question: "Can an employee arrange work on an office suite lock?",
        answer:
          "Arrange approval with the person responsible for the suite and check building-management requirements. Describe whether shared building access or only the tenant’s door is involved.",
      },
      {
        question:
          "What should I tell you if my key broke at a Courthouse apartment?",
        answer:
          "Say whether the door is open or closed, how much of the fragment is visible and whether another authorized entry is available. Keep the remaining key piece without pushing it back into the cylinder.",
      },
    ],
    nearby: ["rosslyn-locksmith", "clarendon-locksmith", "ballston-locksmith"],
    services: [
      "commercial-storefront-lockout",
      "broken-key-removal-arlington-va",
      "residential-locksmith-arlington",
    ],
  },
  {
    slug: "shirlington-locksmith",
    name: "Shirlington",
    intro:
      "Request mobile locksmith help in Shirlington, Arlington, VA, for a residential lockout, car lockout or shop-door problem. Call to discuss an active access issue. WhatsApp is useful for the location pin and photos that show a damaged lock, sticking door or unfamiliar commercial exit device.",
    sections: [
      {
        heading:
          "Describe the location around the village and surrounding streets",
        paragraphs: [
          "The Village at Shirlington, Campbell Avenue, South Randolph Street and Shirlington Road provide useful reference points, but service needs an exact property or parking location. A restaurant’s public entrance may be separate from staff or delivery access. An apartment entrance may be reached from another side of the same block. Give the street number and describe the door involved. If someone must meet a visitor at a gate or lobby, arrange that with the authorized resident or property contact before a visit is confirmed.",
        ],
      },
      {
        heading: "Restaurants and retail: name the door’s function",
        paragraphs: [
          "For a restaurant or shop, tell us whether the problem is a customer entrance, staff door, delivery opening or exit. A cylinder that will not turn and a push bar that fails to release need different attention. Photograph the full opening, the lock from both sides and any closer or exit device you can show safely. Do not disable alarms, tape latches or restrain a panic bar while arranging help. If people are at immediate risk, follow emergency procedures and involve the person responsible for the premises.",
        ],
      },
      {
        heading: "Residential doors and changes to keys",
        paragraphs: [
          "For a Shirlington home or condo, say whether the keys are inside, a key has snapped or the door itself is catching. Check permission with the landlord or managing agent where relevant, especially for shared entrances or a managed key system. If the request concerns lost keys or a new occupant, list which doors share a key and whether the locks are already worn. Compatible serviceable cylinders may have rekeying options, but changing a key does not resolve every latch or alignment fault.",
        ],
      },
      {
        heading: "Parking details and a useful service conversation",
        paragraphs: [
          "For a car lockout, identify the parking street or facility, the vehicle make, model and year, and whether the keys are in the cabin or trunk. Add a bay, level or visible marker when applicable. For door work, say whether the property can currently be secured and who can approve the scope. Ask what the proposed quote includes and how additional parts would be discussed. A photo helps explain the request, but it does not guarantee an arrival time, establish every hidden fault or replace a conversation about availability.",
        ],
      },
    ],
    faq: [
      {
        question:
          "What should a restaurant manager send about a sticking push bar?",
        answer:
          "The exact door location, a full-opening photo, the bar and latch, and a description of whether it releases and latches. Explain whether the door is part of an occupied premises’ exit route.",
      },
      {
        question: "Can you discuss a rekey request for a Shirlington home?",
        answer:
          "Send photos of the locks, the number of doors and your key arrangement. Confirm the owner or managing agent’s approval and mention any existing stiffness or damage.",
      },
    ],
    nearby: ["columbia-pike-locksmith", "arlington-ridge-locksmith"],
    services: [
      "panic-bar-repair-arlington-va",
      "storefront-lock-repair-arlington-va",
      "residential-locksmith-arlington",
    ],
  },
  {
    slug: "columbia-pike-locksmith",
    name: "Columbia Pike",
    intro:
      "For a lockout or lock repair along Columbia Pike in Arlington, VA, give the actual address and nearest cross street. Call for an active access issue, or WhatsApp a location pin and a hardware photo. Explain whether the request involves a home, apartment, storefront or vehicle.",
    sections: [
      {
        heading: "A long corridor needs a precise location",
        paragraphs: [
          "Columbia Pike covers a corridor rather than a single building or entrance. References such as Penrose Square, South Walter Reed Drive or South Glebe Road help narrow the conversation, but the street number and cross street are more useful for a visit. Say whether access is from the Pike, a side street or a rear entrance. If the locked door is above a shop or behind a mixed-use property, explain how an authorized person can meet someone at the correct entry point.",
        ],
      },
      {
        heading: "Apartment and house lockouts",
        paragraphs: [
          "Describe whether a missing key, a snapped key or a lock that no longer turns is keeping you out. If a door catches or needs lifting, mention that separately; the frame or alignment can affect the lock. Stop forcing a bending or trapped key. For rental or managed property, check the landlord’s access arrangements and approval for any hardware change. A building entrance and a unit lock are different barriers, so identify each rather than assuming a unit visit includes common-area access.",
        ],
      },
      {
        heading: "Storefront locks and commercial doors",
        paragraphs: [
          "For a business on the corridor, say whether the door prevents opening, cannot be secured at closing or has an exit-device problem. Send a full-door view and close photographs of the visible cylinder, latch and closer. A worn lock and a door that no longer aligns may need different work. Have the manager or authorized property contact available to discuss the scope. Do not wedge, chain or restrain an emergency exit as a workaround for a lock fault or a door that will not latch.",
        ],
      },
      {
        heading: "Vehicle lockouts and preparing a quote request",
        paragraphs: [
          "A car at a curb, surface lot or apartment parking area should be identified by make, model, year and exact position. Add a location pin and say whether the keys are in the passenger compartment or trunk. If an access gate is involved, coordinate entry with the responsible person. For any service request, explain if the property or vehicle is accessible by another authorized route. Ask about current availability, proposed work and what a quote includes. Additional damage or parts should be discussed as a change to scope, not assumed from a photo alone.",
        ],
      },
    ],
    faq: [
      {
        question: "What location details help on Columbia Pike?",
        answer:
          "The street number, nearest cross street, entrance side and a location pin. Explain any side-street, rear-door or gated-parking access rather than using only the corridor name.",
      },
      {
        question: "Can an older lock be rekeyed instead of replaced?",
        answer:
          "That depends on the cylinder’s condition and compatibility. Send a photo and describe any stiffness, damage or alignment issue so rekeying and repair can be discussed separately.",
      },
    ],
    nearby: [
      "shirlington-locksmith",
      "ballston-locksmith",
      "westover-locksmith",
    ],
    services: [
      "emergency-locksmith-arlington-va",
      "storefront-lock-repair-arlington-va",
      "lock-rekeying-arlington-va",
    ],
  },
  {
    slug: "westover-locksmith",
    name: "Westover",
    intro:
      "Request locksmith service in Westover, Arlington, VA, for a home lockout, rekeying, a damaged deadbolt or a local shop-door problem. Call to check availability for urgent access, or WhatsApp photos and the location. Say whether the door is currently open, locked shut or unable to secure.",
    sections: [
      {
        heading: "Identify the property around Washington Boulevard",
        paragraphs: [
          "Westover Village and the Washington Boulevard shopping area are useful reference points, with North McKinley Road helping identify the part of the neighborhood involved. Give the actual residential or business address rather than only a shop or neighborhood landmark. For a house, explain whether the affected lock is at the front, rear or another entrance. If a gate, shared path or separate unit complicates access, describe the lawful route to the door and arrange to meet at the correct point.",
        ],
      },
      {
        heading: "House lockouts and deadbolts that catch",
        paragraphs: [
          "A house key that will not turn may be affected by the cylinder, latch or the position of the door in the frame. Say whether the deadbolt works with the door open and whether pulling or lifting has been necessary. Do not keep forcing the key to compensate for a rubbing door. If a key breaks, retain the remaining piece and avoid pushing it into the cylinder. Mention another authorized entrance if one is available so the access situation is clear.",
        ],
      },
      {
        heading: "Reviewing keys after a move or key loss",
        paragraphs: [
          "For a Westover move-in or lost-key request, list the front, rear and side doors you want included. Note which currently share a key and whether any lock is mechanically unreliable. Rekeying can change key access on compatible serviceable cylinders, while damaged hardware or a different key system may require another option. If the home is rented, check the landlord’s permission and any management-key requirement. Do not assume a key change also cancels a garage remote or electronic credential; those need a separate review.",
        ],
      },
      {
        heading: "Shopfront and vehicle details",
        paragraphs: [
          "For a local business, describe whether the lock will not release, the latch misses its strike or a closer fails to bring the door shut. Include any push bar or exit role in the request. For a parked vehicle, send the make, model, year and precise location, including a driveway or lot reference where useful. Before authorizing service, ask about availability and the proposed assessment, labour and parts. A remote description helps prepare the conversation but cannot establish every internal fault or a fixed response time for the neighborhood.",
        ],
      },
    ],
    faq: [
      {
        question: "Is a sticking Westover house lock always a replacement job?",
        answer:
          "No. Describe whether the issue occurs when the door is open and any rubbing or lifting needed. Alignment, a latch problem or cylinder wear may lead to different recommendations after assessment.",
      },
      {
        question: "What should I list for a rekeying quote?",
        answer:
          "The number of doors and cylinders, which share a key, whether a working key exists, your desired key arrangement and any landlord approval or existing hardware fault.",
      },
    ],
    nearby: ["ballston-locksmith", "columbia-pike-locksmith"],
    services: [
      "lock-rekeying-arlington-va",
      "deadbolt-replacement-arlington-va",
      "residential-locksmith-arlington",
    ],
  },
  {
    slug: "arlington-ridge-locksmith",
    name: "Arlington Ridge",
    intro:
      "For a home lockout, unreliable lock or vehicle access problem in Arlington Ridge, Arlington, VA, call to describe the location and check availability. WhatsApp a photo for a repair or rekey discussion. Explain the exact door or parking position rather than using a broad Arlington location pin.",
    sections: [
      {
        heading: "Clarify the address and approach to the door",
        paragraphs: [
          "South Arlington Ridge Road, Army Navy Drive and 23rd Street South can help orient a request near the neighborhood, but the actual street number and entrance are needed to arrange service. For a property with more than one approach, say where an authorized person can meet. Identify a front door, rear entrance, separate unit or driveway clearly. A neighborhood or road name alone can leave the wrong part of the property in view, especially if the car or affected entrance is set back from the street.",
        ],
      },
      {
        heading: "Residential lockouts and worn hardware",
        paragraphs: [
          "For a house, apartment or condo, describe whether keys are inside, a key has snapped or the mechanism has stopped operating. Say if you can still enter through another authorized route and whether the door can be secured. If pulling, lifting or leaning on the door changes how the key turns, mention the alignment symptom rather than assuming a cylinder replacement is the entire answer. Avoid forcing a trapped key or trying an improvised tool in the lock while a visit is being discussed.",
        ],
      },
      {
        heading: "Rekeying and permission after a change of occupancy",
        paragraphs: [
          "A change of residents or a lost key is a reason to review who has access, not proof that every lock is defective. List the doors involved and the keys shared between them. Compatible serviceable cylinders may have rekeying options; damaged locks and mismatched systems may need a different proposal. For managed or rented property, confirm the owner or managing agent’s permission and any shared-key arrangements. If a building reader, garage remote or access fob is involved, arrange a separate credential review with its manager.",
        ],
      },
      {
        heading: "Vehicles and nearby commercial requests",
        paragraphs: [
          "For a car in a driveway, lot or garage, give the make, model, year and exact parking position, plus any gate or level information. Explain whether the keys are in the cabin or trunk. For a business door, identify the entrance and whether a push bar, closer or exit function is affected. In either case, discuss the proposed scope, any access restrictions and what the quote includes. Confirm availability and an arrival estimate directly, and review any additional work after assessment instead of treating a photo as a final diagnosis.",
        ],
      },
    ],
    faq: [
      {
        question:
          "What helps identify an Arlington Ridge house or vehicle location?",
        answer:
          "The full street address, affected entrance or parking position and a location pin. Add the approach or meeting point where a property has more than one entrance.",
      },
      {
        question: "Can I discuss rekeying and a deadbolt problem together?",
        answer:
          "Yes. Identify which doors need new key access and describe any mechanical fault separately. Rekeying, door adjustment and replacing a damaged deadbolt address different needs.",
      },
    ],
    nearby: [
      "pentagon-city-locksmith",
      "crystal-city-locksmith",
      "shirlington-locksmith",
    ],
    services: [
      "residential-locksmith-arlington",
      "deadbolt-replacement-arlington-va",
      "car-lockout-arlington",
    ],
  },
];
export function getArea(slug: string) {
  return AREA_PAGES.find((area) => area.slug === slug);
}
