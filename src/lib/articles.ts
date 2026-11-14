import type { CopySection, Question } from "@/lib/content-types";
export type AdviceArticle = {
  slug: string;
  intro: string;
  sections: CopySection[];
  faq: Question[];
  services: string[];
};
export const ARTICLES: AdviceArticle[] = [
  {
    slug: "locked-out-of-car-arlington",
    intro:
      "A car lockout is easier to describe when you separate three things: whether anyone is at risk, where the vehicle can be reached and what is actually locked. This guide helps you prepare a useful request for vehicle entry in Arlington, VA, without attempting a method that could damage the car.",
    sections: [
      {
        heading: "Put people and your waiting location first",
        paragraphs: [
          "If a child, vulnerable person or animal is in danger inside the vehicle, contact emergency services immediately. For an ordinary lockout, move to a safe place away from traffic and stay reachable by phone. Think about lighting, garage access and whether you can wait at an authorized nearby entrance. Do not leave someone at risk while trying to solve the problem through messages or an online search.",
        ],
      },
      {
        heading: "Check the assistance options you already have",
        paragraphs: [
          "An authorized spare key, manufacturer assistance or an existing roadside plan may be relevant. Check what you can use without putting yourself at risk or leaving the vehicle in an unsafe situation. If arranging a locksmith visit, have the vehicle make, model and year ready. A remote that does not respond, keys locked in the cabin and a locked trunk are different descriptions; tell the person arranging help which applies.",
        ],
      },
      {
        heading: "Send a location someone can actually use",
        paragraphs: [
          "A pin may work well for a surface lot but not identify an underground parking level. Add the street or facility, vehicle entrance, level and bay or visible marker. For a car at a managed apartment or office property, explain who can authorize entry through a gate or garage. A station or shopping landmark is useful context, but it should not replace the actual position of the vehicle.",
        ],
      },
      {
        heading: "Avoid improvised entry and clarify the scope",
        paragraphs: [
          "Tools inserted around glass or seals can affect trim, wiring and the door. Rather than forcing an opening, explain the lockout and ask which work is suitable for the vehicle. Entry does not automatically include a new key, remote repair or programming. Ask what the quote covers and what authority or documents will be needed. If documents are inside, discuss verification before the visit. After entry, make sure the keys are in your possession before closing the vehicle again.",
        ],
      },
    ],
    faq: [
      {
        question: "Should I say the keys are in the trunk?",
        answer:
          "Yes. Access to one compartment does not mean every vehicle’s trunk can be opened in the same way. The vehicle model and the exact locked compartment matter.",
      },
      {
        question: "Is a photo of the car enough for a quote?",
        answer:
          "It helps, but add make, model, year, location and the access problem. Confirm the proposed scope and availability directly rather than treating a photograph as a complete diagnosis.",
      },
    ],
    services: ["car-lockout-arlington", "broken-key-removal-arlington-va"],
  },
  {
    slug: "locksmith-cost-factors-arlington",
    intro:
      "A useful locksmith quote describes the job, not only a starting figure. Before arranging a visit in Arlington, VA, separate entry, inspection, repair and replacement. Those may be different parts of the request. This guide explains the details to provide and the questions to ask without inventing a price list.",
    sections: [
      {
        heading: "Explain the fault and the access situation",
        paragraphs: [
          "State whether the keys are inside, a key has broken, the cylinder will not turn or the door will not latch. Say if another authorized entrance is available and whether the property can currently be secured. For a car, include make, model, year and whether the cabin or trunk is locked. Different symptoms and hardware can require different work even when each customer describes the problem as a lockout.",
        ],
      },
      {
        heading: "Account for location, timing and parts",
        paragraphs: [
          "Time of day, travel and access arrangements may affect the proposed visit. A garage gate, building security desk or restricted service entrance should be mentioned before scheduling. Hardware requirements matter too: replacing a conventional lockset is not the same scope as assessing a storefront lock body or exit device. Ask whether a proposed part is compatible and whether fitting, keys or door adjustment are included.",
        ],
      },
      {
        heading: "Ask for the scope behind the number",
        paragraphs: [
          "Useful questions include what the visit or assessment costs, what labour is covered, which parts are included and what is excluded. Ask how taxes or other applicable charges are presented and whether a quote is conditional on inspection. A low advertised starting figure does not explain the whole job. Keep a record of the agreed scope and avoid approving a vague promise that every possible repair is covered.",
        ],
      },
      {
        heading: "Review changes after inspection",
        paragraphs: [
          "A photo cannot show every worn internal component or alignment issue. If inspection changes the recommendation, ask what was found and how the extra work addresses it before authorizing a revision. Entry, rekeying and full replacement serve different purposes. For a rental or shared commercial property, make sure the person approving cost also has permission to approve hardware changes. Request a record of the final work and parts so future maintenance or key-control decisions are based on what was actually done.",
        ],
      },
    ],
    faq: [
      {
        question: "Why is there no fixed price on this page?",
        answer:
          "The correct scope depends on the lock, vehicle, access situation and parts. A price invented without those details would not explain what your particular visit includes.",
      },
      {
        question: "Can WhatsApp help with a quote discussion?",
        answer:
          "Yes. Send a location pin, photos and a description of the problem. Ask which details remain subject to an on-site assessment before treating the quote as the agreed work.",
      },
    ],
    services: [
      "emergency-locksmith-arlington-va",
      "lock-rekeying-arlington-va",
      "door-hardware-replacement",
    ],
  },
  {
    slug: "broken-key-in-lock",
    intro:
      "When a key snaps, the temptation is to turn the remaining piece or pull at the fragment. That can make the situation harder to assess. If you are dealing with a broken key in Arlington, VA, focus first on keeping the door and lock from further damage and explaining the access situation clearly.",
    sections: [
      {
        heading: "Stop applying force",
        paragraphs: [
          "Do not push the remaining key back into the lock. Keep it safely so the shape and break can be discussed during an assessment. Avoid glue, drilling and improvised extraction tools; material or damage introduced into the cylinder can create another problem. If the door is open, think about how it can be kept secure without closing yourself out or interfering with a required exit.",
        ],
      },
      {
        heading: "Record the symptom that came before the break",
        paragraphs: [
          "Did the key become stiff over time, catch only when the door was closed or bend during a single turn? Describe any need to lift, push or pull the door. Key wear, a cylinder fault and alignment pressure can produce different recommendations after extraction. A broken key is the visible event, but it may not be the only condition that needs attention before the lock returns to regular use.",
        ],
      },
      {
        heading: "Prepare a clear message",
        paragraphs: [
          "Send a photo of the lock and visible fragment without taking hardware apart. Say whether the door is open or closed, whether another authorized entrance is available and whether the property can be secured. For a vehicle, identify make, model, year and whether the problem is a door lock or ignition. Keep identity documents, access codes and detailed key photographs out of an initial message.",
        ],
      },
      {
        heading: "Treat extraction and repair as separate decisions",
        paragraphs: [
          "Ask whether the proposed quote covers removing the key, gaining entry if needed, assessing the cylinder and any repair or parts. Once the fragment is removed, the reason for the fault should still be discussed. A usable cylinder may have different options from a damaged one, and rekeying does not fix every mechanical issue. Arrange authorization with the owner or property manager where applicable and review any revised work before approving it.",
        ],
      },
    ],
    faq: [
      {
        question: "Can I try a spare key while the fragment is still inside?",
        answer:
          "Do not force a spare into a cylinder containing a fragment. It may push the broken piece farther in. Tell the person arranging service that you have a spare available.",
      },
      {
        question: "Is replacement unavoidable after a key breaks?",
        answer:
          "No single recommendation follows from a break alone. The fragment, cylinder condition and underlying cause need assessment before deciding about repair or replacement.",
      },
    ],
    services: ["broken-key-removal-arlington-va", "key-extraction-lock-repair"],
  },
  {
    slug: "panic-bar-not-latching",
    intro:
      "A panic bar that releases but leaves a door unlatched is not the same fault as a device that will not release. For an Arlington, VA business, describing that difference is an important first step. Any immediate risk to people should go through the premises’ emergency procedures before a routine repair conversation.",
    sections: [
      {
        heading: "Describe release, closing and latching separately",
        paragraphs: [
          "Observe what can be seen safely without forcing or dismantling the device. Does the bar move, does the door return toward the frame and does the latch engage? Is one leaf of a paired opening affected? Those details distinguish the symptom from a broad report that the door is broken. A closer, strike, alignment or the device itself may be involved; a remote description alone does not establish the cause.",
        ],
      },
      {
        heading: "Avoid workarounds that alter an exit",
        paragraphs: [
          "Do not chain the opening, restrain the push bar, tape a latch or disconnect an alarm to make the problem disappear. A temporary-looking change can affect how people leave or how an assembly operates. Involve the person responsible for the premises, tell them whether the building is occupied and follow the property’s emergency arrangements if the route is unsafe. Do not treat an online guide as approval to continue using a faulty exit.",
        ],
      },
      {
        heading: "Show the whole opening",
        paragraphs: [
          "A useful WhatsApp message includes a full-door view, the bar and latch, the frame and any safely visible manufacturer label. Mention rods, a rim latch, an alarm, an electronic reader or a door closer where present. Avoid removing covers to find identification. Explain the address, which entrance is involved and who can authorize access and work. Those details help prepare a service discussion without turning a photo into a claimed inspection.",
        ],
      },
      {
        heading: "Ask how the proposed work fits the existing assembly",
        paragraphs: [
          "Exit devices are not interchangeable solely because their shape looks similar. The door type, hardware configuration and use can affect what is suitable. Ask whether the proposal addresses a device fault, door movement or both, and whether replacement parts are compatible. Confirm the scope, cost and who must approve the change. A hardware repair request is not certification of the entire exit route or building; obtain any separate inspection or compliance decision through the appropriate responsible party.",
        ],
      },
    ],
    faq: [
      {
        question: "Can a door closer cause latching problems?",
        answer:
          "It may be part of the issue, but latch, strike and alignment faults can also matter. Describe what the door does at each stage and request an assessment rather than assuming a single replacement.",
      },
      {
        question: "Does a working push bar mean the exit is compliant?",
        answer:
          "Do not assume that. An exit route involves more than one visible component. Consult the responsible property contact and appropriate authority for any required compliance decision.",
      },
    ],
    services: ["panic-bar-repair-arlington-va", "emergency-exit-doors"],
  },
  {
    slug: "apartment-condo-lockout-arlington",
    intro:
      "Being outside an apartment does not always mean the unit lock is the only barrier. Arlington, VA residents may need to coordinate a lobby, garage or managed entrance as well. The first conversation should identify which door is locked and who is authorized to arrange access or approve hardware work.",
    sections: [
      {
        heading: "Check the managed-entry options",
        paragraphs: [
          "Contact an authorized occupant, landlord, concierge or managing agent about any established spare-key or access arrangement. Do not assume someone you meet in the lobby can give permission to alter a shared lock. If the unit is accessible from another authorized entrance, mention it when asking for help. Where anyone is at immediate risk behind the door, contact emergency services rather than waiting through a routine lockout discussion.",
        ],
      },
      {
        heading: "Describe each barrier",
        paragraphs: [
          "A building reader, lobby door, garage gate and unit deadbolt may be managed separately. Explain whether you can reach your floor and whether a technician would need a resident or building representative to provide entry. Send the actual entrance address and a pin, adding the unit access arrangement without sharing security codes. A postal address alone may identify a shopfront or the opposite side of a large residential development.",
        ],
      },
      {
        heading: "Discuss authority and a trapped key",
        paragraphs: [
          "If identification is locked inside, raise that before a visit so verification can be discussed. If you rent, check permission and any lease or building restrictions on changing a cylinder. For a broken or trapped key, stop forcing it and keep the remaining piece. A door that needs lifting or pulling can have an alignment issue as well as a lock problem; describe the earlier symptoms rather than simply requesting a replacement.",
        ],
      },
      {
        heading: "Agree the work and future access",
        paragraphs: [
          "Ask about availability, an arrival estimate, the proposed method or assessment and the quoted scope. Entry does not automatically include rekeying or replacing the lock. If new hardware or a new key arrangement is suggested, confirm compatibility with management requirements before approval. After the immediate problem, review how an authorized spare can be held and whether a missing key creates a separate access-control concern. Avoid putting a key photograph or entry code into a public post while seeking help.",
        ],
      },
    ],
    faq: [
      {
        question: "Can I request a locksmith if my ID is inside?",
        answer:
          "Explain the situation when arranging service and discuss how your authority to enter can be established. Do not send an identity document or access code in an initial WhatsApp message.",
      },
      {
        question:
          "Will a unit-lock visit include the building’s electronic access?",
        answer:
          "Do not assume it does. Shared readers and building systems may be controlled by management and need different permissions or a separate service arrangement.",
      },
    ],
    services: [
      "residential-locksmith-arlington",
      "emergency-locksmith-arlington-va",
      "lock-rekeying-arlington-va",
    ],
  },
  {
    slug: "choose-trustworthy-locksmith",
    intro:
      "A stressful lockout can make it hard to compare service offers. Before arranging a locksmith in Arlington, VA, ask for verifiable identity, a clear description of the work and a price tied to that scope. A review badge, a very low starting figure or a claim on a website is not proof by itself.",
    sections: [
      {
        heading: "Start with the business identity",
        paragraphs: [
          "Ask for the business name and who will attend the property. Confirm that the arriving provider matches the service you arranged and request identification. If a licence, registration or insurance is claimed, ask for the details needed to verify it with the issuing body or provider. Requirements can change; check the current rules through official sources rather than assuming a generic badge establishes a valid credential for a particular service.",
        ],
      },
      {
        heading: "Ask questions before agreeing to work",
        paragraphs: [
          "Describe the fault and ask what the proposed entry or repair approach is intended to address. Ask which visit, assessment, labour and parts charges are included and what could change after inspection. A legitimate conversation can recognize that hidden damage is uncertain without leaving the whole price unexplained. Keep the agreed scope and authorization in a record you can refer to if the recommendation changes at the door.",
        ],
      },
      {
        heading: "Recognize pressure and unsupported certainty",
        paragraphs: [
          "Be cautious if someone insists that every locked door must be drilled or that every failed cylinder needs the same expensive replacement without assessing it. Repeated pressure, an unexplained change in the business name or reluctance to describe charges are reasons to stop and ask more questions. Equally, a promise of no damage or a fixed arrival time is not evidence of the actual lock’s condition or the provider’s current location.",
        ],
      },
      {
        heading: "Use reviews and credentials as evidence, not decoration",
        paragraphs: [
          "Look for reviews on a real independently accessible business profile and consider whether the name and service area match. Initials, star icons and job stories without a source cannot be independently checked. Ask how any warranty applies to the actual work rather than assuming it covers every part. In Virginia, use the Department of Criminal Justice Services’ official resources to check current credential requirements and verification routes.",
        ],
      },
    ],
    faq: [
      {
        question: "What should I ask when a locksmith arrives?",
        answer:
          "Ask for identification, the business name, an explanation of the proposed work and its scope and price before authorization. Clarify any change from the original service discussion.",
      },
      {
        question: "Are star ratings on a website enough to establish trust?",
        answer:
          "No. Check the actual public review source and business identity. A rating without accessible evidence should not be treated as proof of real customer experience.",
      },
    ],
    services: [
      "emergency-locksmith-arlington-va",
      "residential-locksmith-arlington",
    ],
  },
  {
    slug: "rekey-or-replace-locks",
    intro:
      "A lost key and a damaged lock do not call for the same decision. For a home or business in Arlington, VA, first separate key control from the condition of the door hardware. Rekeying changes who has a working key; replacing a lock changes hardware. Either option should match the actual problem.",
    sections: [
      {
        heading: "When the concern is who has a key",
        paragraphs: [
          "After a move, staff change or key loss, list the doors and cylinders whose access you want to review. A compatible serviceable cylinder may be rekeyed so the old key no longer operates it. That does not cancel an electronic fob, garage remote or credential for another system. Check those separately with whoever manages them, especially in apartments, offices and properties with shared entrances.",
        ],
      },
      {
        heading: "When the concern is wear, damage or fit",
        paragraphs: [
          "A key that repeatedly sticks, a loose handle or a bolt that will not meet its strike needs an assessment of the mechanism and door. Rekeying alone does not correct every internal fault or alignment issue. Replacement may be discussed if hardware is damaged, unsuitable or incompatible with the desired arrangement. Ask how the proposed change addresses the symptom, not just whether the new lock looks more substantial.",
        ],
      },
      {
        heading: "Check the key system and property permissions",
        paragraphs: [
          "Similar-looking locks can use different keyways, so a single key for all doors is not always possible with existing hardware. Mention any master-key arrangement before work is proposed. A landlord, condo manager or commercial managing agent may control the approved cylinder or have a management-key requirement. Confirm authority to change the affected lock and avoid treating a tenant’s unit permission as approval to alter common-area access.",
        ],
      },
      {
        heading: "Compare complete scopes",
        paragraphs: [
          "Ask whether a quote includes every cylinder, the required keys, fitting and any strike or door adjustment. For replacement, discuss compatibility and how keys for other doors will be handled. For rekeying, identify which locks remain outside the scope. If an assessment reveals wear or another fault, review the revised recommendation before approving additional work. Keep a record of the parts, doors and keys included and test the agreed access arrangement afterward rather than relying only on a general description of the service.",
        ],
      },
    ],
    faq: [
      {
        question: "Does rekeying improve a worn door mechanism?",
        answer:
          "It changes key access, not every mechanical condition. Describe stiffness, rubbing or a loose latch separately so the underlying issue can be assessed.",
      },
      {
        question: "Will replacing one lock make all my keys match?",
        answer:
          "Not automatically. The new hardware and existing locks must be compatible with the desired key arrangement. Discuss all included doors and keys before choosing an option.",
      },
    ],
    services: [
      "lock-rekeying-arlington-va",
      "deadbolt-replacement-arlington-va",
      "door-hardware-replacement",
    ],
  },
  {
    slug: "storefront-door-wont-lock",
    intro:
      "A shop door that will not secure at closing can involve the lock, latch, frame or the way the door moves. For an Arlington, VA business, start by describing what happens rather than ordering a cylinder replacement from a photo. Keep the authorized manager involved and flag any effect on an exit.",
    sections: [
      {
        heading: "Describe what happens at the frame",
        paragraphs: [
          "Does the key turn normally with the door open but not when closed? Does the latch miss its strike, or does the door need lifting? Those observations help explain the request but do not establish the cause on their own. Avoid forcing the key to drag a heavy or misaligned door into place. If the key is bending or the lock is already damaged, stop applying pressure and describe that condition when arranging an assessment.",
        ],
      },
      {
        heading: "Photograph more than the cylinder",
        paragraphs: [
          "Send a wider view of the opening, the lock from both sides and the visible latch edge. Add the closer, hinges or pivots where relevant and any safely visible label. Say whether the problem affects a glass storefront, conventional door or paired opening. Do not remove safety covers, disconnect equipment or dismantle hardware to obtain a model name. A photo should help communicate the request without creating another repair issue.",
        ],
      },
      {
        heading: "Keep security and egress in the same conversation",
        paragraphs: [
          "A shop entrance may also serve as an exit. Do not chain it shut, restrain a panic bar or improvise a latch change to compensate for the fault. Inform the responsible manager and landlord where appropriate. If the route is unsafe or people are at immediate risk, follow the premises’ emergency procedures. A service request and remote conversation are not a declaration that a temporary arrangement is suitable or that the building complies with all requirements.",
        ],
      },
      {
        heading: "Plan the assessment and authorization",
        paragraphs: [
          "Explain whether the premises can currently be secured and who can approve work. Ask whether the proposed scope addresses the cylinder, latch, door alignment or a combination. Confirm whether parts, fitting and any adjustment are included, and how a changed diagnosis would be reviewed. Once work is agreed and completed, check closing, latching, locking and release as relevant and keep a record for maintenance. A recurring need to lift or pull the door should not be ignored simply because the key can be made to turn once.",
        ],
      },
    ],
    faq: [
      {
        question: "Should I buy a replacement storefront cylinder first?",
        answer:
          "Discuss the fault and hardware compatibility before buying parts. The cause may be a latch, closer, door movement or alignment problem rather than the cylinder alone.",
      },
      {
        question: "What should the manager have ready for a visit?",
        answer:
          "Authorization to approve the scope, building access arrangements, any landlord hardware requirements and a clear account of whether the door is also an exit.",
      },
    ],
    services: [
      "storefront-lock-repair-arlington-va",
      "commercial-storefront-lockout",
      "panic-bar-repair-arlington-va",
    ],
  },
];
export function getArticle(slug: string) {
  return ARTICLES.find((article) => article.slug === slug);
}
