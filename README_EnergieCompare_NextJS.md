# ÉnergieCompare — Cahier de construction Next.js

## 1. Présentation du projet

ÉnergieCompare est un site vitrine / plateforme web Next.js destiné à présenter un service de comparaison des offres d’énergie en France.

Le site doit permettre aux visiteurs de comprendre rapidement l’intérêt du service, comparer les offres d’électricité et de gaz, découvrir les fournisseurs disponibles, demander un rappel, et préparer une future évolution vers un vrai comparateur dynamique connecté à un CRM et à des API partenaires.

Le projet actuel est un site vitrine existant en Next.js.  
L’objectif est de remplacer l’ancien contenu par ce nouveau contenu métier, puis de construire progressivement les pages et modules nécessaires.

---

## 2. Objectif principal

Créer un site clair, professionnel et orienté conversion pour un service de comparaison d’énergie.

Promesse principale :

> Comparez les offres d’électricité et de gaz en quelques minutes, estimez vos économies et changez facilement de fournisseur.

Le site doit inspirer confiance, expliquer simplement le service et encourager l’utilisateur à :

- comparer les offres ;
- demander un rappel ;
- découvrir les fournisseurs ;
- consulter les guides ;
- laisser ses coordonnées pour être accompagné.

---

## 3. Technologie du projet

Le projet est développé avec :

- Next.js ;
- React ;
- TypeScript si déjà présent dans le projet ;
- Tailwind CSS ou le système de style déjà utilisé ;
- composants existants à réutiliser autant que possible.

Important :

- Le projet n’est pas WordPress.
- Il ne faut pas convertir le projet vers WordPress.
- Il ne faut pas ajouter de dépendances inutiles.
- Il faut respecter l’architecture actuelle du projet.
- Il faut vérifier si le projet utilise `app/` router ou `pages/` router.

---

## 4. Marché cible

Le site cible principalement le marché français.

Publics concernés :

- particuliers propriétaires ;
- particuliers locataires ;
- personnes en déménagement ;
- clients souhaitant réduire leur facture ;
- clients intéressés par l’énergie verte ;
- TPE / PME souhaitant comparer des offres pro ;
- utilisateurs souhaitant être accompagnés par téléphone.

---

## 5. Positionnement métier

ÉnergieCompare aide les utilisateurs à comparer :

- les offres d’électricité ;
- les offres de gaz ;
- les offres d’électricité verte ;
- les offres de biogaz ;
- les contrats à prix fixe ;
- les contrats à prix variable ;
- les contrats indexés ;
- les offres sans engagement ;
- les fournisseurs partenaires ou non partenaires.

Le site doit également préparer une logique de lead generation :

1. Un visiteur arrive sur le site.
2. Il découvre le service.
3. Il renseigne ses informations.
4. Il demande un rappel ou lance une comparaison.
5. Le lead est transmis à une équipe commerciale / call center / CRM.
6. Un conseiller rappelle le client.
7. Le client est orienté vers une offre adaptée.

---

## 6. Ton éditorial

Le ton du site doit être :

- professionnel ;
- clair ;
- rassurant ;
- accessible ;
- orienté conversion ;
- transparent ;
- sans jargon inutile.

Le vocabulaire doit rester simple.  
Éviter les promesses exagérées comme “garanti moins cher” si le calcul réel n’existe pas encore.

Préférer :

- “estimez vos économies” ;
- “comparez les offres disponibles” ;
- “demandez un rappel gratuit” ;
- “trouvez une offre adaptée à votre profil”.

---

## 7. Nom du service

Nom provisoire :

**ÉnergieCompare**

Ce nom peut être utilisé dans les textes, le header, le footer, les metadata et les sections principales.

---

## 8. Navigation principale

Le menu principal doit contenir :

- Accueil
- Comparer les offres
- Fournisseurs
- Électricité
- Gaz
- Énergie verte
- Guides
- FAQ
- Contact

Boutons CTA possibles :

- Comparer maintenant
- Être rappelé
- Demander un devis
- Parler à un conseiller

---

## 9. Pages à prévoir

### 9.1 Accueil

Objectif : présenter le service, rassurer l’utilisateur et pousser vers la comparaison ou la demande de rappel.

Sections attendues :

- Hero section
- Éléments de confiance
- Services
- Comment ça marche
- Avantages
- Fournisseurs
- Accompagnement conseiller
- FAQ courte
- CTA final

---

### 9.2 Page Comparer les offres

URL suggérée :

`/comparer`

Objectif : préparer une interface de comparaison.

Pour le MVP, cette page peut être statique ou semi-dynamique.

Champs à prévoir :

- type de logement ;
- surface ;
- nombre d’occupants ;
- code postal ;
- type d’énergie : électricité, gaz ou les deux ;
- fournisseur actuel ;
- consommation annuelle ;
- préférence offre verte ;
- préférence prix fixe / variable / indexé ;
- email ou téléphone optionnel pour recevoir les résultats.

Important :

- Ne pas connecter encore une vraie API fournisseur sauf si c’est explicitement demandé.
- Préparer une structure propre et extensible.
- Prévoir un affichage de résultats fictifs ou statiques si nécessaire.

---

### 9.3 Page Fournisseurs

URL suggérée :

`/fournisseurs`

Objectif : afficher les fournisseurs référencés.

Fournisseurs à afficher au lancement :

- EDF
- Engie
- TotalEnergies
- Eni
- Ekwateur
- Octopus Energy
- OHM Énergie
- Vattenfall
- Butagaz

Texte de section :

> Nous référençons les principaux fournisseurs d’énergie du marché français afin de vous aider à comparer les prix, les conditions, les offres vertes et les options disponibles.

Chaque fournisseur peut être représenté par une card contenant :

- nom ;
- type d’énergie ;
- marché : résidentiel / pro ;
- offre verte oui/non ;
- description courte ;
- bouton “Voir les offres”.

---

### 9.4 Page Électricité

URL suggérée :

`/electricite`

Objectif : expliquer la comparaison des offres d’électricité.

Contenu attendu :

- comprendre le prix du kWh ;
- comprendre l’abonnement mensuel ;
- expliquer la puissance compteur ;
- expliquer les heures pleines / heures creuses ;
- présenter les offres vertes ;
- CTA vers comparaison.

---

### 9.5 Page Gaz

URL suggérée :

`/gaz`

Objectif : expliquer la comparaison des offres gaz.

Contenu attendu :

- comprendre la consommation annuelle ;
- expliquer les zones tarifaires ;
- comparer prix fixe et prix indexé ;
- présenter les offres biogaz ;
- CTA vers comparaison ou rappel.

---

### 9.6 Page Énergie verte

URL suggérée :

`/energie-verte`

Objectif : présenter les offres vertes.

Contenu attendu :

- électricité verte ;
- biogaz ;
- garanties d’origine ;
- impact environnemental ;
- critères de comparaison ;
- CTA vers comparaison.

---

### 9.7 Page Guides

URL suggérée :

`/guides`

Objectif : lister des guides pratiques SEO.

Guides à prévoir :

- Comment changer de fournisseur d’électricité ?
- Comment changer de fournisseur de gaz ?
- Comprendre le prix du kWh
- Prix fixe ou prix indexé : que choisir ?
- Comment réduire sa facture d’énergie ?
- Électricité verte : comment comparer ?
- Déménagement : ouvrir un contrat énergie

---

### 9.8 Page FAQ

URL suggérée :

`/faq`

Objectif : répondre aux questions fréquentes.

FAQ principale :

#### Changer de fournisseur d’énergie est-il gratuit ?

Oui, le changement de fournisseur est gratuit pour les particuliers. Il n’y a pas de frais de résiliation pour les contrats résidentiels d’électricité ou de gaz.

#### Vais-je subir une coupure pendant le changement ?

Non. Le changement de fournisseur ne provoque pas de coupure. Le réseau reste le même, seul le contrat commercial change.

#### Puis-je comparer gaz et électricité en même temps ?

Oui. Vous pouvez comparer les offres d’électricité, de gaz ou les deux selon votre logement et votre consommation.

#### Une offre verte est-elle forcément plus chère ?

Pas toujours. Certaines offres vertes peuvent être compétitives selon le fournisseur, la période et votre profil de consommation.

#### Comment sont calculées les économies ?

Les économies sont estimées à partir de votre consommation annuelle, du prix du kWh, de l’abonnement mensuel et des conditions tarifaires de l’offre.

#### Puis-je être accompagné par téléphone ?

Oui. Vous pouvez demander un rappel gratuit pour être accompagné dans la comparaison et le changement de fournisseur.

---

### 9.9 Page Contact

URL suggérée :

`/contact`

Objectif : permettre à l’utilisateur de demander un rappel.

Champs formulaire souhaités :

- nom ;
- email ;
- téléphone ;
- code postal ;
- type d’énergie : électricité, gaz, les deux ;
- message.

CTA :

> Demander un rappel gratuit

Message RGPD court :

> Les données transmises via ce formulaire sont utilisées uniquement pour traiter votre demande et vous recontacter si nécessaire.

---

## 10. Contenu détaillé des sections

### 10.1 Hero section

Titre :

> Comparez les offres d’électricité et de gaz en quelques minutes

Sous-titre :

> ÉnergieCompare vous aide à trouver une offre adaptée à votre logement, votre consommation et vos préférences : prix fixe, offre verte, gaz, électricité ou contrat sans engagement.

CTA principal :

> Comparer les offres

CTA secondaire :

> Parler à un conseiller

Éléments de confiance :

- Comparaison gratuite
- Offres électricité & gaz
- Accompagnement au changement de fournisseur
- Données mises à jour régulièrement

---

### 10.2 Section Services

#### Comparaison d’offres électricité

Comparez les offres d’électricité selon votre consommation, votre puissance compteur et vos préférences tarifaires.

#### Comparaison d’offres gaz

Trouvez une offre gaz adaptée à votre logement, votre zone tarifaire et votre consommation annuelle.

#### Offres d’énergie verte

Identifiez les fournisseurs proposant de l’électricité verte, du biogaz ou des offres certifiées renouvelables.

#### Changement de fournisseur

Obtenez un accompagnement simple pour changer de fournisseur sans coupure et sans intervention technique.

#### Estimation des économies

Estimez le coût annuel de votre contrat et les économies possibles par rapport à votre offre actuelle.

#### Accompagnement conseiller

Un conseiller peut vous rappeler pour vous aider à comprendre les offres et finaliser votre choix.

---

### 10.3 Section Comment ça marche

#### 1. Renseignez votre logement

Indiquez votre type de logement, votre code postal, votre surface et le nombre d’occupants.

#### 2. Ajoutez votre consommation

Saisissez votre consommation annuelle ou laissez-nous l’estimer à partir de votre profil.

#### 3. Comparez les offres

Visualisez les offres disponibles selon le prix, le type d’énergie, l’engagement et les options vertes.

#### 4. Choisissez ou demandez un rappel

Sélectionnez une offre ou demandez à être accompagné par un conseiller.

---

### 10.4 Section Avantages

Avantages à afficher :

- Comparaison claire et gratuite
- Gain de temps
- Vision simple des prix et conditions
- Offres électricité, gaz et énergie verte
- Accompagnement humain possible
- Transparence sur les offres partenaires

Texte possible :

> ÉnergieCompare simplifie la lecture des offres d’énergie pour vous aider à prendre une décision plus rapidement. Vous gardez la main sur votre choix et pouvez être accompagné si vous le souhaitez.

---

### 10.5 Section Fournisseurs

Texte :

> Nous référençons les principaux fournisseurs d’énergie du marché français afin de vous aider à comparer les prix, les conditions, les offres vertes et les options disponibles.

Fournisseurs :

| Fournisseur | Énergie | Description courte |
|---|---|---|
| EDF | Électricité + Gaz | Fournisseur historique d’électricité en France. |
| Engie | Électricité + Gaz | Fournisseur historique de gaz, présent aussi sur l’électricité. |
| TotalEnergies | Électricité + Gaz | Fournisseur alternatif majeur avec offres fixes et indexées. |
| Eni | Électricité + Gaz | Fournisseur d’énergie proposant des offres gaz et électricité. |
| Ekwateur | Électricité verte + Biogaz | Fournisseur orienté énergie renouvelable. |
| Octopus Energy | Électricité | Fournisseur connu pour ses offres innovantes. |
| OHM Énergie | Électricité + Gaz | Fournisseur alternatif avec offres compétitives. |
| Vattenfall | Électricité verte | Fournisseur européen proposant des offres d’électricité. |
| Butagaz | Gaz + GPL | Acteur connu du gaz et de l’énergie pour les particuliers. |

---

### 10.6 Section Accompagnement conseiller

Titre :

> Besoin d’aide pour choisir votre fournisseur ?

Texte :

> Nos conseillers peuvent vous accompagner dans la lecture des offres, l’estimation de votre consommation et les démarches de changement de fournisseur.

CTA :

> Demander un rappel gratuit

---

### 10.7 CTA final

Titre :

> Prêt à comparer votre offre d’énergie ?

Texte :

> Lancez une comparaison ou demandez à être rappelé par un conseiller pour trouver une offre adaptée à votre situation.

Boutons :

- Comparer maintenant
- Être rappelé

---

## 11. SEO et metadata

### Metadata globale

Title :

> ÉnergieCompare — Comparez les offres d’électricité et de gaz

Description :

> Comparez les fournisseurs d’énergie en France, estimez vos économies et trouvez une offre d’électricité, de gaz ou d’énergie verte adaptée à votre logement.

### Open Graph

Title :

> Comparez les offres d’énergie en France

Description :

> Électricité, gaz, énergie verte : trouvez une offre adaptée et changez facilement de fournisseur.

---

## 12. Données à structurer

Si le projet contient des fichiers de données, utiliser des fichiers comme :

- `siteConfig.ts`
- `navigation.ts`
- `services.ts`
- `features.ts`
- `suppliers.ts`
- `faq.ts`
- `steps.ts`
- `guides.ts`

Ne pas hardcoder le contenu dans les composants si une structure de données existe déjà.

---

## 13. Structure de données suggérée

### Fournisseur

```ts
type Supplier = {
  name: string;
  energyTypes: string[];
  market: "residentiel" | "pro" | "residentiel_pro";
  isGreen?: boolean;
  description: string;
  ctaLabel?: string;
};
```

### Service

```ts
type Service = {
  title: string;
  description: string;
  icon?: string;
};
```

### FAQ

```ts
type FAQItem = {
  question: string;
  answer: string;
};
```

### Étape

```ts
type Step = {
  title: string;
  description: string;
};
```

### Lead / demande de rappel

```ts
type LeadRequest = {
  name: string;
  email: string;
  phone: string;
  postalCode?: string;
  energyType?: "electricite" | "gaz" | "les_deux";
  message?: string;
};
```

---

## 14. Comparateur MVP

Le comparateur MVP peut être simple au départ.

Objectif de la première version :

- afficher un formulaire ;
- récupérer les critères de l’utilisateur ;
- afficher des offres statiques ou simulées ;
- permettre une demande de rappel ;
- préparer la future connexion API.

Champs du formulaire :

### Étape 1 — Logement

- type de logement : appartement / maison ;
- surface ;
- nombre d’occupants ;
- code postal.

### Étape 2 — Énergie

- type d’énergie : électricité / gaz / les deux ;
- fournisseur actuel ;
- consommation annuelle en kWh ;
- puissance compteur si électricité.

### Étape 3 — Préférences

- offre verte uniquement ;
- prix fixe / variable / indexé ;
- sans engagement ;
- email ou téléphone pour recevoir les résultats.

Résultat attendu :

- cards d’offres ;
- prix annuel estimé si disponible ;
- fournisseur ;
- type d’énergie ;
- badge offre verte ;
- bouton “Voir l’offre” ;
- bouton “Être rappelé”.

---

## 15. Fonctionnalités futures à prévoir mais ne pas développer entièrement maintenant

Ces fonctionnalités doivent être considérées comme des évolutions futures :

- vraie API de comparaison ;
- intégration fournisseurs partenaires ;
- mise à jour automatique des tarifs ;
- CRM complet ;
- dashboard call center ;
- assignation des leads aux agents ;
- suivi des rappels ;
- tunnel de souscription ;
- signature électronique ;
- espace client ;
- tracking GA4 avancé ;
- gestion complète RGPD ;
- export CSV / CRM ;
- scoring des leads.

Pour l’instant, préparer le code pour être extensible, sans construire tout le système.

---

## 16. Phases de construction demandées à Codex

Le travail doit être fait phase par phase.

---

### Phase 1 — Analyse du projet existant

Objectif :

Comprendre la structure actuelle du projet avant de modifier le code.

À faire :

- détecter app router ou pages router ;
- détecter TypeScript ou JavaScript ;
- détecter le système de style ;
- lister les composants existants ;
- identifier les pages existantes ;
- identifier les fichiers constants/data ;
- identifier les formulaires existants ;
- identifier les metadata SEO existantes.

Livrable :

- résumé de l’architecture ;
- liste des fichiers importants ;
- risques éventuels ;
- plan de modification.

---

### Phase 2 — Adaptation du contenu vitrine

Objectif :

Remplacer le contenu actuel par le contenu ÉnergieCompare.

À faire :

- header ;
- navigation ;
- hero ;
- services ;
- avantages ;
- comment ça marche ;
- fournisseurs ;
- accompagnement conseiller ;
- FAQ courte ;
- CTA final ;
- footer ;
- metadata SEO.

Livrable :

- fichiers modifiés ;
- résumé des contenus changés ;
- résultat du lint/build si exécuté.

---

### Phase 3 — Création ou adaptation des pages

Objectif :

Créer les pages principales si elles n’existent pas.

Pages :

- `/`
- `/comparer`
- `/fournisseurs`
- `/electricite`
- `/gaz`
- `/energie-verte`
- `/guides`
- `/faq`
- `/contact`

À faire :

- réutiliser les layouts existants ;
- créer des pages simples mais propres ;
- éviter le code dupliqué ;
- utiliser les composants existants ;
- préparer les CTA.

Livrable :

- routes créées ou modifiées ;
- composants réutilisés ;
- points à compléter plus tard.

---

### Phase 4 — Données statiques

Objectif :

Structurer les données dans des fichiers propres.

À faire :

- créer ou adapter les fichiers de données ;
- ajouter les fournisseurs ;
- ajouter les FAQ ;
- ajouter les services ;
- ajouter les étapes ;
- ajouter les guides ;
- éviter le hardcoding.

Livrable :

- fichiers data créés/modifiés ;
- types TypeScript si nécessaire ;
- résumé des données structurées.

---

### Phase 5 — Comparateur MVP

Objectif :

Préparer une première version du comparateur.

À faire :

- créer ou adapter la page `/comparer` ;
- créer un formulaire simple ;
- ajouter les champs essentiels ;
- afficher des résultats statiques ou simulés ;
- ajouter CTA “Voir l’offre” et “Être rappelé” ;
- prévoir une structure extensible.

À ne pas faire pour l’instant :

- pas de vraie API fournisseur ;
- pas de calcul complexe ;
- pas de paiement ;
- pas de signature ;
- pas de tunnel complet.

Livrable :

- page comparateur fonctionnelle côté front ;
- composants créés ;
- TODO pour la future API.

---

### Phase 6 — Formulaire de lead / rappel

Objectif :

Préparer la capture de leads.

À faire :

- adapter ou créer un formulaire de contact ;
- ajouter les champs nécessaires ;
- validation basique côté front si déjà utilisée dans le projet ;
- message RGPD court ;
- préparer un handler propre ;
- si aucun backend n’existe, simuler l’envoi ou laisser un TODO clair.

Champs :

- nom ;
- email ;
- téléphone ;
- code postal ;
- type d’énergie ;
- message.

Livrable :

- formulaire intégré ;
- résumé de la logique ;
- TODO CRM/API.

---

### Phase 7 — SEO, responsive et qualité

Objectif :

Finaliser la qualité du site.

À faire :

- vérifier les H1/H2 ;
- vérifier les metadata ;
- vérifier le responsive ;
- vérifier les textes en français ;
- vérifier l’accessibilité basique ;
- vérifier les liens ;
- lancer lint ;
- lancer build ;
- corriger les erreurs bloquantes.

Livrable :

- résultat lint/build ;
- corrections faites ;
- points manuels à vérifier.

---

## 17. Instructions spécifiques pour Codex

Codex doit suivre ces règles :

1. Lire entièrement ce README avant de modifier le code.
2. Analyser d’abord le projet existant.
3. Ne pas tout faire en une seule fois sans structure.
4. Travailler phase par phase.
5. Respecter l’architecture actuelle.
6. Réutiliser les composants existants.
7. Ne pas ajouter de dépendance sans justification.
8. Ne pas transformer le projet en WordPress.
9. Ne pas créer de backend complet si le projet n’en a pas.
10. Ne pas casser le responsive.
11. Ne pas casser les imports.
12. Ne pas supprimer du code sans raison.
13. Tester le build si possible.
14. Donner un résumé après chaque phase.

---

## 18. Résultat final attendu

À la fin, le site doit contenir :

- un contenu complet adapté à ÉnergieCompare ;
- une homepage claire et professionnelle ;
- une navigation cohérente ;
- des pages principales prêtes ;
- une page comparateur MVP ;
- une page fournisseurs ;
- une FAQ ;
- un formulaire de rappel ;
- une structure de données propre ;
- des metadata SEO adaptées ;
- un code qui compile.

---

## 19. Prochaines évolutions recommandées

Après ce travail, les prochaines étapes seront :

- connecter le formulaire à un CRM ;
- créer un dashboard call center ;
- gérer les statuts de leads ;
- intégrer un vrai moteur de comparaison ;
- brancher des API fournisseurs ;
- ajouter le tracking GA4 ;
- ajouter les pages légales complètes ;
- mettre en place la conformité RGPD complète ;
- créer du contenu SEO long format ;
- ajouter l’espace client ;
- ajouter un tunnel de souscription.

---

## 20. Résumé rapide pour le développeur

Tu dois transformer un site vitrine Next.js existant en site vitrine professionnel pour un comparateur énergie nommé ÉnergieCompare.

Commence par analyser le projet.  
Puis applique les changements progressivement :

1. contenu vitrine ;
2. pages principales ;
3. données statiques ;
4. comparateur MVP ;
5. formulaire de rappel ;
6. SEO / qualité / build.

Ne construis pas tout le CRM ni les API maintenant.  
Prépare seulement une base propre, claire et extensible.
