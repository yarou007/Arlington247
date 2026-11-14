export const SERVICE_LINKS = [
  {
    slug: "emergency-locksmith-arlington-va",
    label: "Emergency lockouts",
    need: "home or business lockout",
    icon: "key",
  },
  {
    slug: "car-lockout-arlington",
    label: "Car lockouts",
    need: "car lockout",
    icon: "car",
  },
  {
    slug: "commercial-storefront-lockout",
    label: "Commercial lockouts",
    need: "office or storefront lockout",
    icon: "shop",
  },
  {
    slug: "storefront-lock-repair-arlington-va",
    label: "Storefront lock repair",
    need: "storefront lock repair",
    icon: "shop",
  },
  {
    slug: "panic-bar-repair-arlington-va",
    label: "Panic bar repair",
    need: "panic bar repair",
    icon: "door",
  },
  {
    slug: "emergency-exit-doors",
    label: "Emergency exit doors",
    need: "emergency exit door repair",
    icon: "door",
  },
  {
    slug: "residential-locksmith-arlington",
    label: "Residential locksmith",
    need: "home lock or apartment door",
    icon: "home",
  },
  {
    slug: "lock-rekeying-arlington-va",
    label: "Lock rekeying",
    need: "lock rekeying",
    icon: "key",
  },
  {
    slug: "deadbolt-replacement-arlington-va",
    label: "Deadbolt replacement",
    need: "deadbolt replacement",
    icon: "lock",
  },
  {
    slug: "broken-key-removal-arlington-va",
    label: "Broken key removal",
    need: "broken key removal",
    icon: "key",
  },
  {
    slug: "key-extraction-lock-repair",
    label: "Key extraction & lock repair",
    need: "key extraction and lock repair",
    icon: "key",
  },
  {
    slug: "door-hardware-replacement",
    label: "Door hardware replacement",
    need: "door hardware replacement",
    icon: "door",
  },
] as const;

export const AREA_LINKS = [
  { slug: "ballston-locksmith", name: "Ballston" },
  { slug: "clarendon-locksmith", name: "Clarendon" },
  { slug: "rosslyn-locksmith", name: "Rosslyn" },
  { slug: "crystal-city-locksmith", name: "Crystal City" },
  { slug: "pentagon-city-locksmith", name: "Pentagon City" },
  { slug: "courthouse-locksmith", name: "Courthouse" },
  { slug: "shirlington-locksmith", name: "Shirlington" },
  { slug: "columbia-pike-locksmith", name: "Columbia Pike" },
  { slug: "westover-locksmith", name: "Westover" },
  { slug: "arlington-ridge-locksmith", name: "Arlington Ridge" },
] as const;

export const ARTICLE_LINKS = [
  {
    slug: "locked-out-of-car-arlington",
    label: "Locked out of your car: what to do",
    shortTitle: "Car Lockout Advice",
  },
  {
    slug: "locksmith-cost-factors-arlington",
    label: "What affects a locksmith quote?",
    shortTitle: "Locksmith Cost Factors",
  },
  {
    slug: "broken-key-in-lock",
    label: "Broken key in the lock: do and don’t",
    shortTitle: "Broken Key Advice",
  },
  {
    slug: "panic-bar-not-latching",
    label: "Panic bar not latching: a business guide",
    shortTitle: "Panic Bar Advice",
  },
  {
    slug: "apartment-condo-lockout-arlington",
    label: "Locked out of an apartment or condo",
    shortTitle: "Apartment Lockout Advice",
  },
  {
    slug: "choose-trustworthy-locksmith",
    label: "How to choose a trustworthy locksmith",
    shortTitle: "Choosing a Locksmith",
  },
  {
    slug: "rekey-or-replace-locks",
    label: "Rekey or replace your locks?",
    shortTitle: "Rekey or Replace Locks?",
  },
  {
    slug: "storefront-door-wont-lock",
    label: "Storefront door won’t lock: next steps",
    shortTitle: "Storefront Door Advice",
  },
] as const;

export function getContactMessage(path: string): string {
  const service = SERVICE_LINKS.find(
    (item) => path === `/services/${item.slug}`,
  );
  if (service)
    return `Hi, I need help with ${service.need} in Arlington, VA. I can send my location pin and a photo.`;
  const area = AREA_LINKS.find((item) => path === `/areas/${item.slug}`);
  if (area)
    return `Hi, I need locksmith help in ${area.name}, Arlington VA, for my home, car or business. I can send my location pin and a photo.`;
  const article = ARTICLE_LINKS.find((item) => path === `/advice/${item.slug}`);
  if (article)
    return `Hi, I read your guide, “${article.label}”. I need locksmith help in Arlington, VA and can send a photo and location pin.`;
  return "Hi, I need locksmith help in Arlington, VA. I can send my location pin and a photo of the lock, door or car.";
}
