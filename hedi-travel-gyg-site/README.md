# Hedax Travel + GetYourGuide — Site Starter (Static + Decap CMS)

Ce starter te permet de lancer rapidement un site de voyage avec des pages « landing » pour présenter
des activités/visites et insérer ton lien partenaire GetYourGuide (GYG).

## ⚙️ Stack
- **Site statique** (HTML/CSS/JS) — super simple et rapide
- **Decap CMS** (ex-Netlify CMS) — interface d’édition à `ton-domaine/admin`
- **Hébergement conseillé** : Netlify (1 clic depuis Git). Vercel fonctionne aussi, mais pour le CMS, Netlify facilite l’authentification.
- **Aucune base de données**, les contenus sont des fichiers Markdown + JSON dans `content/`

## 🚀 Déploiement (Netlify recommandé)
1) **Crée un dépôt GitHub** et push ce dossier (ou uploade directement les fichiers).
2) Va sur **Netlify → Add new site → Import from Git** et connecte ton repo.
3) Build command : *(aucune)* — Publish directory : `/` (racine du repo).
4) Une fois déployé, active **Identity** (Netlify → Identity → Enable Identity).
5) Dans **Identity → Settings → Services**, active **Git Gateway**.
6) Ajoute ton e‑mail comme utilisateur Identity (Invite user). Tu recevras un lien pour créer ton compte.
7) Accède au **CMS** à `https://ton-site.netlify.app/admin` pour créer/éditer tes pages.

> Si tu n’utilises pas Netlify, tu peux configurer Decap CMS en mode GitHub backend (voir `admin/config.yml`).

## ✍️ Édition de contenu
- Les **landings** (pages activités/visites) sont dans `content/landing/` au format Markdown avec _frontmatter_.
- La **liste des landings à afficher en home** est dans `content/landings.json` (champ `featured`). Tu peux éditer cette liste depuis le CMS.
- Accès direct à une landing : `/landing/<slug>` (grâce au fichier `_redirects`).

## 🔗 Liens GetYourGuide (affiliation)
- Utilise **le lien partenaire** fourni par ton compte GetYourGuide (avec ton tracking). Colle-le dans le champ **“Lien GetYourGuide”** de chaque landing.
- Le bouton s’affiche automatiquement avec l’attribut `rel="sponsored nofollow"` et s’ouvre dans un nouvel onglet.
- ⚖️ **Disclosure** : une mention d’affiliation est affichée dans le footer du site et aussi disponible par champ dans chaque landing.

## 🛠️ Personnalisation rapide
- Modifie le nom du site dans `index.html` (balise `<title>` et header) et dans le footer.
- Couleurs/typo : `css/styles.css`
- Images : place les médias dans `assets/uploads/` (le CMS le fait déjà pour toi).

## 🧪 Démo de contenu incluse
- Une landing d’exemple : `content/landing/hoi-an-street-food.md`
- Un item “featured” pour la home : `content/landings.json`

## 🧭 URLs propres
- Grâce à `_redirects`, tu peux partager `/landing/hoi-an-street-food` (redirection vers `landing.html?slug=hoi-an-street-food` côté client).

Bon build et bonnes ventes ! 💸✈️
