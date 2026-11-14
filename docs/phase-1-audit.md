# Phase 1 — audit et coordonnées

> Historical baseline. The subsequent implementation repairs the neighborhood routes and replaces the UI/content described below. See [current implementation report](implementation-report.md).

Audit local du 14 novembre 2026, sur le dépôt avant/après modification. Stack Next.js conservée, sans nouvelle dépendance du projet. Les changements restent locaux.

## Priorités, par impact

1. **Dix quartiers non indexables dans cette version.** Toutes les URL `/areas/...` renvoient 404 en développement et production. Le composant et `generateMetadata` lisent `params.slug` sans attendre la Promise exigée par Next.js 16. La réponse hérite du titre/canonical de l’accueil, contient un `noindex` automatique et aucun contenu local. Avancer la correction minimale à la phase 2, sans changer les URL.

2. **Conversion mobile.** Le numéro d’appel est corrigé. L’accueil comporte encore 34 liens téléphone, aucun bouton WhatsApp, et un bouton fixe de seulement 32 px de haut avec un texte de 12 px. Aucun débordement horizontal à 360/390/430 px ; CTA du hero visible sans défilement dans un viewport haut de 844 px. Copie déjà masquée sur mobile. Aucun formulaire, lien mailto ou email affiché trouvé.

3. **Confiance.** Les quatre avis non vérifiés et leurs étoiles restent à supprimer en phase 3, sans remplacement fictif. Les mentions licence/assurance, conditions tarifaires et horaires permanents restent à retirer ou justifier ; garder le nom commercial fourni. Carte avec faux identifiant et liens sociaux `#` à supprimer dans leurs phases UI. Les affirmations non prouvées de `llms.txt` sont déjà retirées.

4. **Contenu local.** Les quartiers ont 273–362 mots spécifiques, FAQ comprise, sous les 400 demandés. Leur plan est répétitif mais leurs textes ne sont pas des copies exactes : recouvrement maximal de groupes de cinq mots de 4,3 % après neutralisation des noms. Ajouter des conseils propres aux lieux et vérifier les repères existants. La fiche urgence a environ 400 mots spécifiques, contre 600+ utiles demandés. Différencier les deux fiches d’extraction sans supprimer leurs URL.

5. **Titres et descriptions.** Les titres HTML des services font 80–95 caractères à cause du suffixe global ; l’Open Graph de la fiche urgence reprend celui de l’accueil. Les descriptions services font 141–155 caractères, celle de l’accueil dépasse 200. Un seul H1 sur chaque page accessible, mais beaucoup de sections répétées. Ajouter systématiquement « Arlington, VA » et des titres propres à chaque intention. Exemple futur : `Emergency Locksmith Arlington, VA | (202) 643-4062`.

6. **Schémas et attribution.** JSON-LD parsable, nouveau téléphone correct, Service/BreadcrumbList présents. La FAQ globale crée deux FAQPage sur les services, dont une sans contenu visible correspondant. Horaires et `priceRange` non confirmés ; identités Locksmith multiples sur les quartiers. Les niveaux `/services` et `/areas` des breadcrumbs renvoient 404. Aucun aggregateRating trouvé. Aucun suivi GA4/Ads/UTM/gclid : `data-call-location` seul n’envoie rien.

## Contrôle des 22 URL

Toutes figurent au sitemap et sont liées en HTML depuis l’accueil ; `robots.txt` autorise `/`. Les services ont contenu SSR, H1, canonical HTTPS sans www/slash final et aucune directive noindex. Les quartiers échouent avant rendu.

Chemins à préfixer par le domaine de `src/lib/business.ts`. Mots spécifiques : paragraphes et FAQ propres à la fiche, hors titres, navigation, footer et gabarit commun. Un nombre de mots n’est pas une garantie de classement.

| Chemin                                          | HTTP dev/prod | Canonical propre / contenu SSR | Mots spécifiques |
| ----------------------------------------------- | ------------- | ------------------------------ | ---------------: |
| `/services/broken-key-removal-arlington-va`     | 200 / 200     | Oui / oui                      |              329 |
| `/services/car-lockout-arlington`               | 200 / 200     | Oui / oui                      |              374 |
| `/services/commercial-storefront-lockout`       | 200 / 200     | Oui / oui                      |              334 |
| `/services/deadbolt-replacement-arlington-va`   | 200 / 200     | Oui / oui                      |              304 |
| `/services/door-hardware-replacement`           | 200 / 200     | Oui / oui                      |              301 |
| `/services/emergency-exit-doors`                | 200 / 200     | Oui / oui                      |              305 |
| `/services/emergency-locksmith-arlington-va`    | 200 / 200     | Oui / oui                      |              400 |
| `/services/key-extraction-lock-repair`          | 200 / 200     | Oui / oui                      |              324 |
| `/services/lock-rekeying-arlington-va`          | 200 / 200     | Oui / oui                      |              299 |
| `/services/panic-bar-repair-arlington-va`       | 200 / 200     | Oui / oui                      |              309 |
| `/services/residential-locksmith-arlington`     | 200 / 200     | Oui / oui                      |              362 |
| `/services/storefront-lock-repair-arlington-va` | 200 / 200     | Oui / oui                      |              323 |
| `/areas/ballston-locksmith`                     | 404 / 404     | Non, accueil / absent          |              362 |
| `/areas/clarendon-locksmith`                    | 404 / 404     | Non, accueil / absent          |              323 |
| `/areas/rosslyn-locksmith`                      | 404 / 404     | Non, accueil / absent          |              300 |
| `/areas/crystal-city-locksmith`                 | 404 / 404     | Non, accueil / absent          |              304 |
| `/areas/pentagon-city-locksmith`                | 404 / 404     | Non, accueil / absent          |              300 |
| `/areas/courthouse-locksmith`                   | 404 / 404     | Non, accueil / absent          |              281 |
| `/areas/shirlington-locksmith`                  | 404 / 404     | Non, accueil / absent          |              284 |
| `/areas/columbia-pike-locksmith`                | 404 / 404     | Non, accueil / absent          |              289 |
| `/areas/westover-locksmith`                     | 404 / 404     | Non, accueil / absent          |              281 |
| `/areas/arlington-ridge-locksmith`              | 404 / 404     | Non, accueil / absent          |              273 |

Le sitemap contient 25 pages : accueil, 12 services, 10 quartiers et 2 pages légales. Ne pas soumettre les quartiers avant correction des 404. Les `lastModified` sont calculés à la génération plutôt que fondés sur une modification réelle. Next.js redirige en 308 le slash final d’une fiche service. Normalisation publique www/HTTPS non vérifiée. Le favicon référencé renvoie 404.

L’accès au domaine public a été refusé par le proxy de cet environnement avant d’atteindre le serveur ; ce n’est pas une réponse 403 du site. Ni le déploiement public, ni les canonicals choisis par Google, ni l’indexation réelle n’ont été inspectés. L’absence d’impressions ne prouve pas une absence d’indexation : utiliser ensuite Inspection de l’URL et le rapport Pages de Search Console.

## Référence mobile

| Lighthouse mobile 13.6.0, production initiale |       Résultat |
| --------------------------------------------- | -------------: |
| Performance                                   |         88/100 |
| Accessibilité                                 |         93/100 |
| Bonnes pratiques                              |         96/100 |
| SEO automatisé, accueil uniquement            |        100/100 |
| LCP / CLS                                     |      3,0 s / 0 |
| TBT / FCP                                     | 290 ms / 0,9 s |

Mesure synthétique locale avec throttling : ni Core Web Vitals réels, ni INP, ni percentiles CrUX. Le score SEO ne valide pas l’indexation. L’objectif performance 90+ reste à atteindre. Actions étayées : réduire JavaScript/blocs répétés, optimiser les images (133 Kio potentiels signalés) et la priorité LCP, corriger les contrastes sur fond rouge et les noms accessibles des CTA. Next/Image, conteneurs dimensionnés, polices système et lazy loading sont déjà présents. L’échec Ahrefs vient du réseau de test ; le favicon 404 est distinct.

## Changements réalisés

- Configuration unique `src/lib/business.ts` : cinq constantes demandées, lien téléphone, libellé accessible et générateur WhatsApp avec message encodé. `seo.ts` réexporte des alias compatibles avec les composants existants.
- Remplacement du numéro dans les 12 services, données des 10 quartiers, pages légales, hero, FAQ, descriptions, Open Graph/Twitter, liens et JSON-LD. Domaine et nom commercial centralisés là où ils étaient dupliqués dans le code.
- `/llms.txt` garde son URL et devient une route texte statique issue des constantes/catalogue. Ancien fichier public retiré ; suppression des délais, avis, garanties et statuts professionnels non étayés.
- Référence historique de `prompt.md` remplacée par la constante. Aucun changement d’URL ni de dépendances. Aucun placeholder ou message de confirmation ajouté au site.

## Vérification

- `npm run build` : réussi, 30 entrées générées. Cela ne prouve pas le fonctionnement des quartiers : le crawl confirme leurs 404.
- 25 URL testées dans les deux modes : 15 pages accessibles, 10 erreurs préexistantes diagnostiquées. Nouveau téléphone vérifié dans tous les liens et JSON-LD des 15 pages ; anciennes variantes d’appel absentes des 25 réponses HTML.
- Descriptions, Open Graph et Twitter vérifiés sur l’accueil et les 12 services. Sources des dix quartiers mises à jour ; leur rendu reste bloqué.
- `/llms.txt` : 200, type texte, destinations appel/WhatsApp distinctes. Encodage/décodage du message WhatsApp testé avec apostrophe et espaces.
- Chromium à 360/390/430/1280 px : liens, absence de débordement et copie desktop vérifiés. Aucun appel ni message réel envoyé.
- Recherche sources/public/documentation : ancien numéro réservé à sa constante WhatsApp et aux liens générés. `git diff --check` réussi ; manifestes et lockfile inchangés.
- `tsc --noEmit --incremental false` : échec préexistant sur le typage de `params` dans les routes de quartiers générées par le mode développement. `npm run lint` : échec préexistant, `next lint` supprimé de Next.js 16. Aucun de ces contrôles n’est présenté comme réussi.

Résultats détaillés hors dépôt : `/workspace/.arlington-audit/` contient les crawls avant/après, `lighthouse-baseline.json`, `mobile-baseline.json`, `authored-content.json` et `phase1-browser-checks.json`.

## Après validation

Phase 2 : composants globaux Call/WhatsApp, tracking configurable, schémas honnêtes, suppression des liens sociaux vides et correction minimale des routes de quartiers. Phase 3 : accueil, suppression avis/carte non vérifiables, grille, segments et guides prix/WhatsApp. Phases 4–6 : services puis quartiers. Phase 7 : contenus, sitemap vérifié, liste à soumettre, checklist Search Console et bilan KPI.

Informations utiles pour la suite, sans les afficher sur le site : lien/nom exact du Google Business Profile, avis vérifiables, horaires réels, preuves des qualifications ou garanties à mentionner, photos utilisables, identifiant GA4 et destinations Ads. Toute information absente reste omise.

KPI : impressions, clics, CTR, position par requête cible, pages indexées, clics téléphone/WhatsApp par page et emplacement, appels du Business Profile. Clic téléphone ≠ appel connecté ; clic WhatsApp ≠ message envoyé.
