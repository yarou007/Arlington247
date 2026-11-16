// Street references describe existing Arlington service areas, not office addresses.
// Keep these consistent with the geographic guidance in areas.ts.
export const LOCAL_COVERAGE = [
  { slug: "ballston-locksmith", streets: ["Wilson Boulevard", "North Glebe Road"], detail: "Apartment entrances, office suites and vehicles in garages around Ballston Quarter." },
  { slug: "clarendon-locksmith", streets: ["Wilson Boulevard", "Clarendon Boulevard", "Washington Boulevard"], detail: "Condo lockouts, restaurant entrances and retail door hardware around Clarendon." },
  { slug: "rosslyn-locksmith", streets: ["North Lynn Street", "North Moore Street", "Wilson Boulevard"], detail: "High-rise residential doors, office access and garage vehicle lockouts in Rosslyn." },
  { slug: "crystal-city-locksmith", streets: ["Crystal Drive", "South Bell Street", "18th Street South"], detail: "Residential towers, office entrances and cars in structured parking in Crystal City." },
  { slug: "pentagon-city-locksmith", streets: ["South Hayes Street", "Army Navy Drive", "15th Street South"], detail: "Apartment doors, shop entrances and vehicle lockouts around Pentagon City." },
  { slug: "courthouse-locksmith", streets: ["North Courthouse Road", "Wilson Boulevard", "Clarendon Boulevard"], detail: "Office-suite access, condo doors and car lockouts around the Courthouse station area." },
  { slug: "shirlington-locksmith", streets: ["Campbell Avenue", "South Randolph Street", "Shirlington Road"], detail: "Restaurant and shop doors, residential locks and parked vehicles around Shirlington." },
  { slug: "columbia-pike-locksmith", streets: ["Columbia Pike", "South Walter Reed Drive", "South Glebe Road"], detail: "Homes, apartments and storefronts along the Columbia Pike corridor." },
  { slug: "westover-locksmith", streets: ["Washington Boulevard", "North McKinley Road"], detail: "House lockouts, rekeying and shopfront hardware around Westover Village." },
  { slug: "arlington-ridge-locksmith", streets: ["South Arlington Ridge Road", "Army Navy Drive", "23rd Street South"], detail: "Residential lockouts, deadbolts and rekeying around Arlington Ridge." },
] as const;

export function getLocalCoverage(slug: string) {
  return LOCAL_COVERAGE.find((area) => area.slug === slug);
}
