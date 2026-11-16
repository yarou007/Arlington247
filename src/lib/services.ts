import type { CopySection, Question } from "@/lib/content-types";
export type ServicePageConfig = {
  slug: string;
  seoTitle: string;
  summary: string;
  h1: string;
  intro: string;
  checks: string[];
  sections: CopySection[];
  faq: Question[];
  related: string[];
};
export const SERVICE_PAGES: ServicePageConfig[] = [
  {
    slug: "emergency-locksmith-arlington-va",
    seoTitle: "Emergency Locksmith in Arlington, VA",
    summary:
      "Emergency locksmith for home and business lockouts in Arlington, VA.",
    h1: "Emergency Locksmith & Lockout Services in Arlington, VA",
    intro:
      "Locked out of your home, office or storefront? Call to explain the entry problem and check current availability. If the door can no longer be secured, say so at the start. For a photo of a damaged lock, WhatsApp is a useful way to show what has happened before a visit is arranged.",
    checks: [
      "Your exact entrance and Arlington neighborhood",
      "Home, apartment, office or storefront",
      "Keys inside, key broken, or lock not turning",
      "Who can authorize access at the property",
    ],
    sections: [
      {
        heading: "What to do first during a lockout",
        paragraphs: [
          "Pause before trying to force the door, kick a frame or turn a key that is already bending. A lockout is a problem of access, but improvised entry can turn it into a door and hardware repair as well. Check whether another authorized occupant or your property manager has a working key. If there is a safe alternative entrance that you are entitled to use, mention it when you call.",
          "Tell us if there is a child, vulnerable person, pet or immediate hazard behind the door. Where anyone is in danger, contact emergency services first. Otherwise, wait in a safe location and keep a phone available for updates. A confirmed service request and an arrival estimate must come from a conversation about the actual location and job, rather than a general claim on a website.",
        ],
      },
      {
        heading: "An apartment entrance is not always the unit door",
        paragraphs: [
          "For an apartment or condo, identify which barrier is keeping you out. A lobby reader, garage gate, building entry door and your unit’s deadbolt may be controlled by different people. A locksmith visit for your unit does not automatically provide authority to work on a building’s shared access system. Let the concierge, landlord or managing agent know if their permission or assistance is needed.",
          "Share the building name, street entrance, unit access arrangements and a location pin where the entrance is hard to find. Have reasonable evidence that you are the tenant, owner or authorized representative. If identification is inside, explain that situation before a visit so the verification arrangements can be discussed without creating another surprise at the door.",
        ],
      },
      {
        heading: "Office and storefront entry problems",
        paragraphs: [
          "For a business, describe whether a key will not turn, a lock turns without releasing the door, or the door is catching on the frame. Those symptoms can point to different work. A lockout may involve a cylinder, latch, strike, closer or a combination of worn components. Share a photo of each side of the door and any visible hardware label, but do not dismantle the lock to find a name.",
          "Make sure a person authorized to approve work can be present. In a managed property, coordinate with building security or the landlord about shared entrances and access restrictions. If the same door is part of an emergency exit route, say that explicitly. Avoid blocking or disabling an exit to get around an entry problem; entry security and the ability to leave need to be considered together.",
        ],
      },
      {
        heading: "Entry, repair and replacement are separate decisions",
        paragraphs: [
          "An assessment should establish whether the problem is a missing key, a damaged cylinder or a door that is out of alignment. Ask which entry options are appropriate and whether the lock is likely to remain usable afterward. Replacement is not an automatic requirement for every lockout. If a key has snapped, extraction and a check of the cylinder may be relevant before deciding about new hardware.",
          "Ask for the proposed scope and price, including any visit, assessment, labour and parts that apply. Time of day, the lock design, building access and hardware condition can affect a quote. If inspection changes the proposed work, review that change before authorizing it. For a vehicle lockout, use the dedicated car page and send the make, model and year instead of assuming the same tools or procedure apply.",
        ],
      },
    ],
    faq: [
      {
        question:
          "Can I request emergency locksmith help outside normal office hours?",
        answer:
          "Call with your Arlington address and type of lockout to check current availability. Ask for an arrival estimate and confirm the visit and proposed price directly before arranging service.",
      },
      {
        question: "Does every locked door have to be drilled?",
        answer:
          "No. The suitable approach depends on the lock, door condition and access problem. Ask why a particular method is being proposed and what repair or replacement it would require before agreeing.",
      },
      {
        question: "What if my identification is locked inside?",
        answer:
          "Explain that before the visit. The person arranging service can discuss how to establish your authority to enter. Do not send an identity document or access code in an initial WhatsApp message.",
      },
    ],
    related: [
      "car-lockout-arlington",
      "commercial-storefront-lockout",
      "broken-key-removal-arlington-va",
    ],
  },
  {
    slug: "car-lockout-arlington",
    seoTitle: "Car Lockout Arlington, VA",
    summary:
      "Keys locked in a car in Arlington, VA? Get mobile vehicle lockout help.",
    h1: "Car Lockout Help in Arlington, VA",
    intro:
      "Keys left on a seat, a locked trunk or an unresponsive door can leave you stranded beside a vehicle. Call to describe the situation and check availability, or WhatsApp the vehicle details and a location pin. Include the make, model, year and the exact place where the car is parked.",
    checks: [
      "Make, model and year",
      "Street, parking level or garage bay",
      "Keys inside the cabin, trunk or elsewhere",
      "Whether any person or animal is inside",
    ],
    sections: [
      {
        heading: "Stay safe before arranging vehicle entry",
        paragraphs: [
          "First consider your location. A car on a residential driveway is a different situation from one beside traffic, in a dim garage or at a restricted entrance. Wait in a safe, visible place and describe any access restrictions when arranging help. If a child, vulnerable person or animal is at risk inside a vehicle, contact emergency services immediately rather than waiting for a routine service discussion.",
          "Check whether you have an authorized spare-key option or vehicle assistance through your manufacturer, insurer or roadside plan. Describe what happened without repeatedly pulling the door handle or forcing the glass. Improvised wedges and metal tools can affect trim, seals, wiring or the lock. A vehicle lockout request should identify the car and the access problem before anyone assumes a particular opening method is suitable.",
        ],
      },
      {
        heading: "Give a parking location, not only a street address",
        paragraphs: [
          "An office or apartment street address may lead to a front desk while your car is several levels below it. Send the garage entrance, level, bay or nearby sign, and say whether a gate or attendant controls entry. A location pin helps with surface parking, but a pin alone may not identify the correct underground level or vehicle access route.",
          "For a vehicle around Crystal City, Pentagon City or a Rosslyn office building, be specific about which side of the property you can reach. If you are near a station or shopping area, give the parking facility or street where the car actually stands rather than using the landmark as the entire address. Let the person arranging service know if there is a height restriction or another limitation on reaching the vehicle.",
        ],
      },
      {
        heading:
          "A locked cabin, trunk and broken key need different assessments",
        paragraphs: [
          "Say whether all doors are locked or whether only the trunk cannot be opened. Tell us where the keys are and whether the mechanical key, remote or door controls have stopped responding. Vehicle security arrangements vary by model, so access to one compartment does not always mean another will open in the same way. Photographs can clarify the vehicle and the visible lock, but they cannot establish every internal condition.",
          "If a key has snapped in a door lock, avoid pushing the fragment farther inside. Keep the remaining piece and show a photo of the affected cylinder. Key extraction, door entry, remote issues and making or programming a replacement key are separate services. Do not assume a lockout visit includes a new key or electronic programming; ask which work can be assessed for your vehicle before arranging it.",
        ],
      },
      {
        heading: "Confirm authorization, scope and access before a visit",
        paragraphs: [
          "Expect to discuss who owns or is authorized to use the vehicle. If your documents are locked in the car, mention that when you call so a verification arrangement can be discussed. Have the registration details you can lawfully access and make sure the authorized person can remain available. Do not post documents, a full VIN or keys where strangers can photograph them while you wait.",
          "Ask what the quote covers: the visit, proposed entry work and any additional assessment or parts. The make, model, year, locking system, time of day and parking access may all affect the work. Confirm whether the next step is vehicle entry or examination of a damaged lock. After access is restored, check that you have the keys, and discuss any existing lock fault separately rather than risking another lockout by immediately closing the car again.",
        ],
      },
    ],
    faq: [
      {
        question: "Can you open every make and model?",
        answer:
          "Vehicle security systems differ. Send the make, model and year so suitability and the proposed work can be confirmed. This page does not promise a particular entry method or coverage for every vehicle.",
      },
      {
        question: "Does car lockout service include a new key?",
        answer:
          "Do not assume it does. Entry, broken-key extraction, cutting a new key and electronic programming are different tasks. Ask which service is available for your particular vehicle.",
      },
      {
        question: "What should I send if the car is in a garage?",
        answer:
          "Send the garage entrance, level, bay or visible location marker, plus the vehicle details. Explain whether an attendant, access card or authorized resident must arrange entry.",
      },
    ],
    related: [
      "emergency-locksmith-arlington-va",
      "broken-key-removal-arlington-va",
      "key-extraction-lock-repair",
    ],
  },
  {
    slug: "commercial-storefront-lockout",
    seoTitle: "Commercial Lockout Arlington, VA",
    summary:
      "Office or storefront lockout in Arlington, VA? Discuss entry and door hardware.",
    h1: "Commercial & Storefront Lockouts in Arlington, VA",
    intro:
      "An office suite that will not open and a shop door that will not release need a clear assessment of the whole entrance. Call to explain the access problem, who can authorize work and whether staff or customers are affected. WhatsApp photos of both sides of the door can help identify the visible hardware.",
    checks: [
      "Office suite, retail door or shared entrance",
      "Key, cylinder, latch or frame symptoms",
      "Any emergency exit affected",
      "An authorized manager and building access contact",
    ],
    sections: [
      {
        heading: "Identify the door that is stopping business access",
        paragraphs: [
          "Start with the exact entrance. A building lobby, an office suite, a rear delivery door and a storefront can have separate locks and separate management responsibilities. Explain whether you cannot enter at all, whether the key will not turn, or whether the door appears unlocked but remains stuck. If another authorized entry works, say so; that may change the urgency and how the door can be inspected.",
          "For shops and offices in shared buildings, let building management or security know that a locksmith visit is being considered. Agree which entrance a technician can use and who is responsible for common-area hardware. A tenant’s permission for a suite door does not automatically authorize changes to a building’s access system. Having those arrangements clear helps avoid a visit reaching the wrong door or waiting for someone who cannot approve the work.",
        ],
      },
      {
        heading: "Describe the symptoms without taking the door apart",
        paragraphs: [
          "Useful details include a key that stops halfway, a cylinder that spins without moving the latch, a door rubbing the frame or a closer pulling the door out of alignment. Say whether the problem started suddenly or became harder to use over time. Photograph the door closed, the lock from each side and any hardware label you can see safely. Do not remove screws, covers or security parts just to identify a model.",
          "A storefront lock problem may involve more than the keyed cylinder. Latches, strikes, pivots, hinges and closers work together. Replacing only the cylinder may not solve a door that has dropped or a latch that no longer meets the strike. Ask whether the proposed work addresses the cause of the access problem and how it affects the door’s ability to close and secure afterward.",
        ],
      },
      {
        heading: "Keep entry security and emergency exit operation separate",
        paragraphs: [
          "A commercial door can need to restrict entry while still allowing people inside to leave as required. If a panic bar is sticking, the exit will not latch or a door is being tied open to avoid a lockout, describe that clearly. Do not chain an exit shut or improvise a restraint as a substitute for repair. If there is an immediate threat to people, use emergency procedures for the premises.",
          "Tell us if the affected door has a push bar, alarm, access-control reader or a closer, even if the initial issue seems to be the key. Commercial hardware may have compatibility, fire-door or other requirements that need to be considered before replacement. A remote photo is a starting point, not a compliance inspection or approval of a hardware change. Keep the responsible property manager involved when decisions affect a shared exit route.",
        ],
      },
      {
        heading: "Plan authorization, pricing and key control",
        paragraphs: [
          "Arrange for the manager, owner or other authorized representative to be present or reachable. For a restaurant, shop or office, that person should be able to approve the scope and explain any landlord requirements. Ask what the proposed visit includes, which parts might be needed and what happens if inspection reveals a different cause. Review any revised work before authorizing it rather than assuming entry and full door repair are the same task.",
          "Once access is addressed, consider whether lost keys or staff changes created a separate key-control issue. Rekeying can be an option for compatible serviceable cylinders, while damaged hardware may require a different solution. Make a list of doors sharing a key and discuss how existing staff access should be handled. A written record of the agreed work, hardware and keys is more useful than an unsupported promise that every door can be fixed in the same way.",
        ],
      },
    ],
    faq: [
      {
        question:
          "Can a tenant arrange a locksmith for a shared office building?",
        answer:
          "Confirm your authority with the landlord or managing agent, especially for common-area doors, access systems and exits. Identify who can approve work and arrange entry to the relevant part of the building.",
      },
      {
        question: "Is a storefront lockout the same as storefront lock repair?",
        answer:
          "No. A lockout concerns gaining authorized access. Repair may involve a damaged cylinder, latch, closer, alignment or other hardware. Describe both the access problem and any known fault so the scope is clear.",
      },
      {
        question: "What if the door is also an emergency exit?",
        answer:
          "Tell us at the start. Do not block, chain or disable the exit. Arrange an assessment with the person responsible for the premises; immediate danger should be handled through emergency procedures.",
      },
    ],
    related: [
      "storefront-lock-repair-arlington-va",
      "panic-bar-repair-arlington-va",
      "emergency-exit-doors",
    ],
  },
  {
    slug: "storefront-lock-repair-arlington-va",
    seoTitle: "Storefront Lock Repair Arlington, VA",
    summary:
      "Storefront lock, latch and door alignment problems in Arlington, VA.",
    h1: "Storefront Lock Repair in Arlington, VA",
    intro:
      "If your shop door will not lock, will not release or needs lifting to close, describe the whole door problem before choosing a replacement cylinder. Call to discuss a repair assessment, or send photos of both sides of the entrance and the latch edge on WhatsApp.",
    checks: [
      "Whether the shop can currently be secured",
      "A sticking key or a latch missing its strike",
      "Door closer, hinge or pivot symptoms",
      "Who can approve hardware work",
    ],
    sections: [
      {
        heading: "A lock fault can begin with the door",
        paragraphs: [
          "A cylinder may be working even when the door will not secure. If the door rubs the frame, needs lifting or leaves an uneven gap, the latch may no longer meet the strike correctly. Explain these symptoms when you call rather than describing every fault as a broken key lock. Do not force the key to pull a misaligned door into position; that can damage the cylinder or key as well.",
        ],
      },
      {
        heading: "Photographs that help explain a storefront problem",
        paragraphs: [
          "Send a wider view of the entrance, close views of the cylinder from both sides and the latch edge if the door is safely open. Include the closer or visible pivot when relevant. Say whether the fault occurs with the door open as well as when it is shut. A label can help identify hardware, but do not remove a security cover or dismantle the door to find it.",
        ],
      },
      {
        heading: "Repair, compatible hardware and business access",
        paragraphs: [
          "The proposed work should distinguish a worn cylinder, a latch fault and a door alignment issue. Ask whether an existing component can be serviced or whether a compatible replacement is needed. A glass storefront, narrow-stile door and conventional timber entrance may use different hardware. Arrange landlord approval where required and keep a manager available to discuss staff access, delivery entrances and the ability to secure the shop during the visit.",
        ],
      },
      {
        heading: "Check the exit function as well as the key",
        paragraphs: [
          "If the entrance is also an exit, mention any push bar, alarm or access-control equipment. Hardware changes should not be improvised simply to get a key to turn. Describe whether people can leave and whether the door closes and latches. Ask what the quote covers, including any assessment, alignment work and parts, and review changes to the scope before approving them. An immediate risk to people needs the premises’ emergency response first.",
        ],
      },
    ],
    faq: [
      {
        question: "Why does the key turn only when I pull the door?",
        answer:
          "Door movement or latch alignment may be putting pressure on the lock. That symptom warrants examination of the door and strike as well as the cylinder; it does not establish a single cause remotely.",
      },
      {
        question: "Can I send a photo before arranging service?",
        answer:
          "Yes. Send the entrance, lock from both sides and any visible hardware label, together with the Arlington location and whether the door can be secured.",
      },
      {
        question: "Should I replace the lock immediately?",
        answer:
          "Ask for an assessment first. The problem may involve the cylinder, the latch or the way the door sits in the frame. The appropriate repair depends on what inspection finds.",
      },
    ],
    related: [
      "commercial-storefront-lockout",
      "door-hardware-replacement",
      "panic-bar-repair-arlington-va",
    ],
  },
  {
    slug: "panic-bar-repair-arlington-va",
    seoTitle: "Panic Bar Repair Arlington, VA",
    summary:
      "Sticking push bar or unreliable exit latch in Arlington, VA? Request an assessment.",
    h1: "Panic Bar Repair in Arlington, VA",
    intro:
      "A push bar that sticks, does not release or fails to latch needs attention to the device and the door around it. Call to describe the fault, or WhatsApp a photo of the bar, latch and door. Say immediately if the problem affects an occupied building’s exit route.",
    checks: [
      "Whether the bar releases from inside",
      "Whether the door closes and latches",
      "The device label, if visible",
      "The responsible manager or property contact",
    ],
    sections: [
      {
        heading: "Distinguish release trouble from a latching problem",
        paragraphs: [
          "A bar that will not release and a door that closes without latching are different symptoms. Tell us which is happening and whether the fault changes when the door is open or closed. Do not repeatedly slam the door or force the bar. If there is an immediate danger or an unusable required exit in occupied premises, follow the property’s emergency procedures and involve the responsible manager without waiting for an online response.",
        ],
      },
      {
        heading: "Show the device and the surrounding door",
        paragraphs: [
          "A close photo of the bar alone may not show why it is failing. Include the latch edge, strike, frame and a full view of the door where safe. Note any visible label and whether the door uses rods, a rim latch, an alarm or electronic access equipment. Do not remove covers, disconnect alarms or adjust hardware to create a photograph. Those changes can affect the device’s function.",
        ],
      },
      {
        heading: "Compatibility matters when parts are proposed",
        paragraphs: [
          "Push bars and exit devices are not interchangeable merely because they look alike. Door size, device type, fire-door requirements and existing access arrangements may affect the appropriate work. Ask whether the fault concerns the device, the closer or alignment, and what a repair or replacement would include. A photo is useful for planning, but it does not certify compliance or replace an on-site assessment.",
        ],
      },
      {
        heading: "Keep the route usable while arranging help",
        paragraphs: [
          "Do not chain a door closed, restrain a panic bar or block a route to stop a lockout. Coordinate with the person responsible for the premises about safe access arrangements and any alternative route. Explain whether the business is occupied and who can authorize work. When reviewing a quote, separate the assessment, device components and any door adjustment so the proposed remedy addresses both release and latching symptoms.",
        ],
      },
    ],
    faq: [
      {
        question: "Does a panic bar repair certify the whole exit route?",
        answer:
          "Do not assume it does. Confirm the scope of the assessment and involve building management or the relevant authority where an inspection or compliance decision is needed.",
      },
      {
        question: "Why will the bar release but the door not latch?",
        answer:
          "The latch, strike, closer or door alignment could be involved. Explain both release and closing behavior; the cause cannot be established from that symptom alone.",
      },
      {
        question: "What information helps identify a push bar?",
        answer:
          "Send a full door photo, the bar, latch and any safely visible manufacturer label. Also describe any alarm, electronic equipment or paired-door arrangement.",
      },
    ],
    related: [
      "emergency-exit-doors",
      "storefront-lock-repair-arlington-va",
      "door-hardware-replacement",
    ],
  },
  {
    slug: "emergency-exit-doors",
    seoTitle: "Exit Door Repair Arlington, VA",
    summary: "Emergency exit door and latching problems in Arlington, VA.",
    h1: "Emergency Exit Door Repair in Arlington, VA",
    intro:
      "An exit that will not close, latch or release affects more than day-to-day convenience. Call to explain the door’s condition and the premises involved. If anyone is in immediate danger, follow emergency procedures first. Send photos only when it is safe to do so.",
    checks: [
      "The door’s closing, latching and release behavior",
      "Whether the premises are occupied",
      "Any closer, push bar, alarm or access reader",
      "The manager responsible for the exit route",
    ],
    sections: [
      {
        heading: "Describe all three parts of the problem",
        paragraphs: [
          "An exit door needs to move, close and latch in the way intended for that opening. Explain whether it stays open, rubs the floor, fails to latch or will not release from inside. A closer fault and a failed latch can look like a lock problem but require different work. Note whether the issue affects one leaf of a pair or the entire opening. Do not force a stuck assembly to test it.",
        ],
      },
      {
        heading: "Avoid temporary fixes that create a new hazard",
        paragraphs: [
          "A wedge, chain, taped latch or disconnected alarm can change how an exit or fire-door assembly works. Do not use improvised restraints as a substitute for an assessment. Inform the responsible person at the premises and follow established emergency arrangements if the route is unsafe. A request for door hardware service is not an approval to keep an unsafe exit in use or a declaration that an alternative route is adequate.",
        ],
      },
      {
        heading: "Plan a door and hardware assessment",
        paragraphs: [
          "Photographs of the full opening, frame, closer, latch and any push bar help describe the request. Mention a visible fire label without removing or altering it, and flag electronic controls or alarms. Door alignment, hinges, seals, strikes and device compatibility may need consideration alongside the lock. Ask what is included in the assessment and which decisions need property management or another qualified party to approve.",
        ],
      },
      {
        heading: "Coordinate the work with the property contact",
        paragraphs: [
          "Have the owner, manager or authorized representative available to approve scope and arrange access. Explain when the door is used and whether the premises are occupied. Ask how any proposed parts relate to the existing assembly rather than choosing a replacement only by appearance. Record the symptoms and agreed work for the property’s maintenance records. A specific hardware visit does not by itself certify the entire building or exit route.",
        ],
      },
    ],
    faq: [
      {
        question: "Is an exit door problem the same as an emergency lockout?",
        answer:
          "No. A lockout concerns access to the property. An exit fault may affect leaving, closing or latching and should be described separately when arranging an assessment.",
      },
      {
        question: "Can you diagnose a door from WhatsApp photos?",
        answer:
          "Photos can help identify visible hardware and plan a discussion. They cannot establish all internal faults or replace a physical inspection or compliance decision.",
      },
      {
        question: "Who should authorize exit hardware work?",
        answer:
          "Arrange this with the person responsible for the premises and any landlord or managing agent. Shared entrances, fire-door assemblies and access systems may have additional requirements.",
      },
    ],
    related: [
      "panic-bar-repair-arlington-va",
      "door-hardware-replacement",
      "commercial-storefront-lockout",
    ],
  },
  {
    slug: "residential-locksmith-arlington",
    seoTitle: "Residential Locksmith Arlington, VA",
    summary:
      "Home and apartment lockouts, rekeying and lock repair in Arlington, VA.",
    h1: "Residential Locksmith in Arlington, VA",
    intro:
      "Request help with a home lockout, a worn lock or a change of keys after a move. Call for an active access problem, or use WhatsApp to show the door and explain what is happening. Apartment building access and a unit lock should be described separately.",
    checks: [
      "House, apartment or condo",
      "Whether you can still enter or secure the door",
      "Who owns or manages the lock",
      "Which doors share the same key",
    ],
    sections: [
      {
        heading: "Start with the access problem",
        paragraphs: [
          "Say whether the keys are inside, a key has broken or the lock has stopped turning. If the handle moves but the door stays shut, mention that too. Avoid forcing a key or trying to lever the door. Check whether an authorized occupant or property manager has a spare. If you rent, confirm permission for work before replacing a lock that belongs to the landlord or building.",
        ],
      },
      {
        heading: "Building entrances and unit doors",
        paragraphs: [
          "For an apartment or condo, a lobby reader, shared entrance and unit deadbolt may have different rules and owners. Explain which door is affected and arrange building entry with management or the concierge where needed. If your identification is inside, raise that when arranging service so verification can be discussed. A request for unit access does not automatically authorize changes to a building’s common locks.",
        ],
      },
      {
        heading: "Rekeying after keys change hands",
        paragraphs: [
          "Moving in, losing keys or changing occupants can be reasons to review who has access. List all doors that share a key and say whether any lock is already worn or unreliable. Rekeying changes which key operates a compatible cylinder; it does not repair every mechanical fault or control an electronic access system. Ask whether the existing hardware is suitable before assuming replacement or rekeying is the right choice.",
        ],
      },
      {
        heading: "Repair and hardware choices",
        paragraphs: [
          "A sticking deadbolt may be affected by alignment as well as the lock itself. Send photos of the lock, door edge and frame, and explain whether the problem happens with the door open. Discuss compatible hardware, any landlord requirements and what the quote covers. For a household, it is useful to agree how many authorized keys are needed and keep a record of any approved change rather than leaving old access arrangements unclear.",
        ],
      },
    ],
    faq: [
      {
        question: "Can a renter request a lock change?",
        answer:
          "Confirm the landlord or managing agent’s permission and the lease requirements first. Unit locks and common-area locks may have different owners and key arrangements.",
      },
      {
        question: "Do I need new locks after losing a key?",
        answer:
          "A serviceable compatible lock may be rekeyed. A damaged lock or a different security requirement may call for replacement. Ask for the options based on the actual hardware.",
      },
      {
        question: "What should I do if my deadbolt catches?",
        answer:
          "Stop forcing the key. Describe any rubbing, lifting or pulling needed to close the door and send photos. The cause may involve the frame or alignment as well as the deadbolt.",
      },
    ],
    related: [
      "emergency-locksmith-arlington-va",
      "lock-rekeying-arlington-va",
      "deadbolt-replacement-arlington-va",
    ],
  },
  {
    slug: "lock-rekeying-arlington-va",
    seoTitle: "Lock Rekeying Arlington, VA",
    summary:
      "Review lost-key and move-in access with lock rekeying in Arlington, VA.",
    h1: "Lock Rekeying in Arlington, VA",
    intro:
      "Rekeying can change which key operates a compatible existing cylinder. It is worth discussing after a move, lost key or change of authorized occupants. Share photos of the locks and say how many doors currently use the same key before arranging an assessment.",
    checks: [
      "Number of doors and cylinders",
      "Which doors currently share a key",
      "Whether a working key is available",
      "Landlord or property manager approval",
    ],
    sections: [
      {
        heading: "What rekeying changes",
        paragraphs: [
          "Rekeying changes a cylinder’s key configuration so an old key no longer operates that cylinder. It is different from replacing the complete lock or repairing a damaged latch. If the key is difficult to turn, the door rubs or the handle is loose, describe those symptoms separately. A change of keys will not resolve every alignment or mechanical fault, and the lock must be suitable for the proposed rekey work.",
        ],
      },
      {
        heading: "Take stock of existing access",
        paragraphs: [
          "List the front, rear, side and other doors included in the request. Note whether one key operates them all and whether you want to keep or change that arrangement. Similar-looking locks may use different key systems and may not be made to work with one key. Tell us about a building master-key system before arranging work; the property manager may need to approve or coordinate the change.",
        ],
      },
      {
        heading: "Moving, staff changes and lost keys",
        paragraphs: [
          "After a change of occupants or staff, think about who may still hold a copy. Rekeying may help with mechanical key control, but it does not cancel a fob, garage remote or electronic credential. Review those access methods with whoever manages them. If you rent, confirm authority to alter the cylinder and any requirement to provide an authorized management key. Do not share key photographs or access codes in a public message.",
        ],
      },
      {
        heading: "Compare the scope before deciding",
        paragraphs: [
          "Send photos of each lock face and the door edge, plus the number of keys you need. Ask whether the quote includes all cylinders, keys and any separate access work. If a lock is damaged or incompatible with the desired arrangement, replacement may be discussed instead. Confirm the actual plan before approving it, and check every agreed key against every included door before the work is treated as complete.",
        ],
      },
    ],
    faq: [
      {
        question: "Will all old keys stop working?",
        answer:
          "Rekeying concerns the cylinders included in the work. Other doors, master-key arrangements, fobs and electronic credentials must be reviewed separately. Confirm the exact scope before proceeding.",
      },
      {
        question: "Can every lock use one key?",
        answer:
          "Compatibility matters. Different keyways or systems may prevent a single-key arrangement. Photos and an assessment help establish what can be proposed for the existing hardware.",
      },
      {
        question: "Is rekeying always cheaper than replacement?",
        answer:
          "There is no universal price comparison. Hardware condition, compatibility, the number of cylinders and key requirements affect the options. Ask for a quote for the scope you actually need.",
      },
    ],
    related: [
      "residential-locksmith-arlington",
      "deadbolt-replacement-arlington-va",
      "commercial-storefront-lockout",
    ],
  },
  {
    slug: "deadbolt-replacement-arlington-va",
    seoTitle: "Deadbolt Replacement Arlington, VA",
    summary:
      "Worn or unreliable deadbolt in Arlington, VA? Discuss replacement options.",
    h1: "Deadbolt Replacement in Arlington, VA",
    intro:
      "A deadbolt that sticks, slips or no longer secures the door needs an assessment of the lock and its fit. Call to explain the problem, or send photos of both sides, the door edge and strike. Tell us if the property is currently unsecured.",
    checks: [
      "The deadbolt and strike from both sides",
      "Any rubbing, lifting or pulling needed",
      "Door material and existing holes",
      "Keyed, thumbturn or electronic hardware",
    ],
    sections: [
      {
        heading: "Confirm whether the bolt or the door is failing",
        paragraphs: [
          "A bolt can bind because the strike is misaligned, the door has moved or the internal mechanism is worn. Describe whether the issue occurs with the door open, closed or both. Do not force the key to pull a door into alignment. If the bolt does not engage fully or the lock turns without moving it, explain that clearly so the request is not treated as a routine cosmetic change.",
        ],
      },
      {
        heading: "Choose hardware that fits the opening",
        paragraphs: [
          "Door thickness, existing preparation, backset and strike position can affect which replacement is suitable. A photograph helps identify the current arrangement but may not provide every measurement needed. Tell us about any electronic lock, unusual trim or paired handleset. Do not buy a replacement solely because it looks similar; ask how it fits the door and whether the proposed work includes adjustment to the frame or strike.",
        ],
      },
      {
        heading: "Review keys and permission",
        paragraphs: [
          "If you rent or live in a managed condo, check permission and any approved-hardware requirements before changing the deadbolt. Say whether you want to keep using a key shared with other doors or are reviewing access after a lost key. A new deadbolt does not automatically make every lock on the property use one key. Discuss key compatibility, authorized copies and any management access arrangement before approving work.",
        ],
      },
      {
        heading: "Agree what replacement includes",
        paragraphs: [
          "Ask whether the proposed quote covers hardware, fitting, strike work, keys and assessment of the door’s movement. A damaged frame or unsuitable existing preparation may affect the scope. Review those findings before authorizing changes. After work, check that the door closes normally and that the bolt can be operated from the intended sides without pulling or lifting the door. Keep the hardware information with the property’s maintenance records.",
        ],
      },
    ],
    faq: [
      {
        question: "Can replacing a deadbolt fix a rubbing door?",
        answer:
          "Not necessarily. Hinges, the frame and alignment may be the cause. Describe the rubbing and whether the bolt works when the door is open so both issues can be assessed.",
      },
      {
        question: "Can I keep my existing key?",
        answer:
          "That depends on the replacement and the key system. Mention the request and any other doors using the key before choosing hardware.",
      },
      {
        question: "What photos should I send?",
        answer:
          "Send the inside and outside lock, door edge and strike, plus a wider door view. Say whether the door can currently be secured and whether it is a rental or managed property.",
      },
    ],
    related: [
      "lock-rekeying-arlington-va",
      "door-hardware-replacement",
      "residential-locksmith-arlington",
    ],
  },
  {
    slug: "broken-key-removal-arlington-va",
    seoTitle: "Broken Key Removal Arlington, VA",
    summary:
      "Key snapped in a lock in Arlington, VA? Request broken-key removal help.",
    h1: "Broken Key Removal in Arlington, VA",
    intro:
      "A key fragment in a cylinder can prevent entry or stop the door from being secured. Stop turning or pushing the remaining key into the lock. Call to describe the issue, or send a photo showing the lock and how much of the key is visible.",
    checks: [
      "Home, business or vehicle lock",
      "Whether the door is open or closed",
      "How much of the fragment is visible",
      "The remaining key piece, kept safely",
    ],
    sections: [
      {
        heading: "Avoid pushing the fragment farther in",
        paragraphs: [
          "Once a key breaks, repeated attempts with the remaining piece can move the fragment deeper or damage components around it. Avoid glue, drilling or improvised picks. Keep the rest of the key and describe whether it bent, caught or stopped turning before snapping. If the door is open, avoid closing it until you have considered how it will be secured and how you will regain access.",
        ],
      },
      {
        heading: "Explain the lock and the access situation",
        paragraphs: [
          "Tell us whether the fragment is in a house door, apartment deadbolt, office lock, storefront cylinder or vehicle. A lock on an open door may be easier to assess than one on a closed, inaccessible entrance, but the actual work depends on the hardware. If it is a car, include make, model and year and distinguish a door lock from an ignition problem. Do not assume one visit includes electronic key work.",
        ],
      },
      {
        heading: "Removal and lock condition are separate questions",
        paragraphs: [
          "Taking out a fragment does not by itself show why the key failed. The cylinder, key wear, door alignment or a damaged latch could have contributed. Ask for the lock’s operation to be assessed after extraction before deciding whether to keep it, repair it or discuss replacement. If a key has been repeatedly difficult to turn, mention that history rather than treating the break as the only symptom.",
        ],
      },
      {
        heading: "Prepare for the service discussion",
        paragraphs: [
          "Send a clear photo without removing hardware, your Arlington location and whether the property is accessible or unsecured. Keep a spare key available if you have one, but do not force it into a cylinder containing a fragment. Ask what the quote includes and whether additional entry or repair work would be separate. Arrange appropriate authorization for the property or vehicle, and keep your phone available to discuss any change in the proposed scope.",
        ],
      },
    ],
    faq: [
      {
        question: "Should I put glue on the broken key?",
        answer:
          "No. Adhesive can enter the cylinder and create further damage. Keep the remaining piece and request an assessment without pushing tools or material into the lock.",
      },
      {
        question: "Does a snapped key mean the lock must be replaced?",
        answer:
          "Not automatically. The fragment and the underlying cause need assessment. A serviceable lock may have different options from a cylinder that is already damaged.",
      },
      {
        question: "Can I send a vehicle key problem on WhatsApp?",
        answer:
          "Yes. Describe whether it is a door lock or ignition, include make, model and year, and send a photo of the visible problem. Confirm which work is available before arranging a visit.",
      },
    ],
    related: [
      "key-extraction-lock-repair",
      "emergency-locksmith-arlington-va",
      "car-lockout-arlington",
    ],
  },
  {
    slug: "key-extraction-lock-repair",
    seoTitle: "Key Extraction & Repair Arlington, VA",
    summary:
      "A stuck key or recurring cylinder fault in Arlington, VA? Discuss extraction and repair.",
    h1: "Key Extraction & Lock Repair in Arlington, VA",
    intro:
      "A trapped key, stiff cylinder or repeated key breakage may signal a problem beyond the key itself. Describe how the lock behaves and whether the door can be secured. This service focuses on assessing the lock after a stuck or broken key, rather than assuming extraction alone resolves it.",
    checks: [
      "Stuck whole key or broken fragment",
      "Symptoms before the key became trapped",
      "Door open, closed or difficult to secure",
      "Any spare key and visible hardware label",
    ],
    sections: [
      {
        heading: "Describe the sequence, not only the final symptom",
        paragraphs: [
          "Was the key becoming harder to turn over several days, did the door need pulling to unlock, or did the key suddenly stop moving? Those details help separate key wear from pressure on a latch, cylinder damage or alignment. Stop applying force once a key is trapped or bending. If you have another authorized entrance, use it safely and explain that the property remains accessible when arranging the assessment.",
        ],
      },
      {
        heading: "Extraction is followed by a decision about the lock",
        paragraphs: [
          "A removed key or fragment leaves a second question: whether the cylinder and door can operate reliably. Ask what needs checking before the same fault is put back into daily use. Internal wear, damage to the key, latch pressure and the strike position can affect the recommendation. Repair, rekeying and replacement address different problems, so ask how the proposed option relates to the symptoms you described.",
        ],
      },
      {
        heading: "Home, office and storefront hardware differ",
        paragraphs: [
          "A residential deadbolt, an office suite cylinder and a storefront lock body can use different components. Share the door type and photographs of the visible lock from both sides. In a managed building, identify who owns the hardware and who can approve a change. If a master-key system, push bar or electronic reader is involved, say so before arranging work rather than assuming a standard cylinder repair will preserve those arrangements.",
        ],
      },
      {
        heading: "Agree the repair scope and record the outcome",
        paragraphs: [
          "Ask whether the quotation covers extraction, access work, inspection, parts and any adjustment. If the lock cannot be assessed fully until the key is removed, clarify how additional work would be discussed and authorized. Keep the remaining key and any known spare available without forcing either into the cylinder. Once an option is agreed and work is completed, review operation at the door and keep a record of any parts or key changes.",
        ],
      },
    ],
    faq: [
      {
        question: "How is this different from broken-key removal?",
        answer:
          "Broken-key removal focuses on a snapped fragment. This page also covers a whole key that is stuck and the assessment of the lock’s condition or recurring fault after extraction.",
      },
      {
        question: "Will rekeying repair a stiff lock?",
        answer:
          "Rekeying changes key access; it is not a universal remedy for wear, damage or door alignment. Ask which cause has been found and how the proposed work addresses it.",
      },
      {
        question: "Can a photo confirm that a lock is repairable?",
        answer:
          "A photo helps describe the visible hardware. Internal wear and some alignment issues require an on-site assessment before a repair or replacement recommendation can be established.",
      },
    ],
    related: [
      "broken-key-removal-arlington-va",
      "lock-rekeying-arlington-va",
      "storefront-lock-repair-arlington-va",
    ],
  },
  {
    slug: "door-hardware-replacement",
    seoTitle: "Door Hardware Arlington, VA",
    summary:
      "Worn handles, locksets and door closers in Arlington, VA? Discuss suitable replacements.",
    h1: "Door Hardware Replacement in Arlington, VA",
    intro:
      "A handle that sags, a latch that no longer catches or a closer that pulls the door shut incorrectly can make an entrance unreliable. Share photos of the hardware and a wider door view. Call if the fault is preventing entry, security or safe use of an exit.",
    checks: [
      "The handle, lockset, latch or closer involved",
      "Door material and existing hardware",
      "Shared building or fire-door requirements",
      "Access and approval from the property contact",
    ],
    sections: [
      {
        heading: "Identify what the hardware is meant to do",
        paragraphs: [
          "A passage handle, keyed lockset, deadbolt, closer and exit device have different roles. Describe whether the problem is holding the door closed, securing it against entry or allowing people to leave. A loose handle does not establish that every component needs replacement. Ask for an assessment of the affected part and the door around it, particularly if rubbing, movement or a damaged frame accompanies the fault.",
        ],
      },
      {
        heading: "A replacement must fit more than the finish",
        paragraphs: [
          "Door thickness, handing, hole positions, backset and the existing latch arrangement can affect compatibility. Commercial openings may also have requirements associated with their use or door assembly. Photographs of both sides and the door edge are useful, but a matching colour or similar-looking handle does not establish that a part will fit. Mention any access-control equipment or manufacturer label without removing safety covers or dismantling the hardware.",
        ],
      },
      {
        heading: "Coordinate residential and commercial permissions",
        paragraphs: [
          "For a rented home, condo, office suite or retail unit, confirm who may authorize changes to the opening. A landlord or managing agent may have approved hardware or key requirements, and shared entrances may be outside a tenant’s control. If the door is part of an exit route, involve the responsible property contact. Do not improvise a lock or latch modification simply to keep the door closed until someone can visit.",
        ],
      },
      {
        heading: "Clarify the work and key arrangements",
        paragraphs: [
          "Ask whether the proposal includes the hardware, fitting, adjustment, keys and any work to the strike or frame. Say whether you need compatibility with other locks or whether access is being reviewed after a lost key. If inspection identifies a different fault, agree the revised scope before proceeding. After fitting, review closing, latching, locking and release as relevant, and keep the hardware details for future maintenance rather than relying on appearance alone.",
        ],
      },
    ],
    faq: [
      {
        question: "Can I supply my own replacement handle?",
        answer:
          "Discuss it before buying or arranging a visit. The hardware must suit the door, preparation and use, and any applicable building requirements need to be considered.",
      },
      {
        question: "Does a new closer solve every door that will not latch?",
        answer:
          "No. The latch, strike, hinges, door movement or frame may be involved. Describe the closing behavior and ask which cause the proposed work addresses.",
      },
      {
        question: "What if the door is a shared or emergency exit?",
        answer:
          "Involve the responsible property manager and explain the exit function when requesting service. A hardware replacement should not be treated as permission to change a shared access or safety arrangement.",
      },
    ],
    related: [
      "deadbolt-replacement-arlington-va",
      "panic-bar-repair-arlington-va",
      "emergency-exit-doors",
    ],
  },
];
export function getService(slug: string): ServicePageConfig {
  const service = SERVICE_PAGES.find((page) => page.slug === slug);
  if (!service) throw new Error(`Unknown service: ${slug}`);
  return service;
}
