# Hedax en Vadrouille — Starter (Static + Decap CMS)

Site léger, clair et pensé pour des **landings d’activités** avec bouton **GetYourGuide** + CMS visuel.

## Stack
- **Statique** (HTML/CSS/JS) — rapide & SEO-friendly
- **Decap CMS** (ex Netlify CMS) à `/admin`
- **Netlify** recommandé (déjà compatible avec le CMS)

## Déploiement (rappel)
- Dossier à publier : **la racine** (là où il y a `index.html`).
- Sur Netlify : Build command **(vide)**, Publish directory **/**.
- Active **Identity** + **Git Gateway**, invite ton e‑mail, puis va sur `/admin`.

## Contenus
- Landings : `content/landing/*.md` (avec `gyg_offer_url`, FAQ, etc.)
- Pages simples : `content/pages/*.md` (À propos, Contact, Mentions…)
- Home (cartes en vedette) : `content/landings.json`

## URLs
- Accueil `/`
- Landing : `/landing/<slug>` (redirigé vers `landing.html?slug=…`)
- Page : `/page/<slug>` (redirigé vers `page.html?slug=…`)

## UTM & affiliation
Le bouton GetYourGuide ajoute automatiquement des UTM :  
`utm_source=site&utm_medium=affiliate&utm_campaign=hedax_en_vadrouille&utm_content=<slug>`  
Si ton lien a déjà `?`, on ajoute avec `&`.

Bon trip et bonnes réservations ! 🌍
