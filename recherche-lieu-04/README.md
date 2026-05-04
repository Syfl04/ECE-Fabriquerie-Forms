# Recherche Lieu 04 — Espace Collaboratif

**Accès rapide :** https://syfl04.github.io/ECE-Fabriquerie-Forms/recherche-lieu-04/

---

## Structure du dossier

| Fichier | Usage | Public |
|---------|-------|--------|
| `index.html` | **Landing page** — Point d'entrée unique avec QR code | ✅ |
| `questionnaire-nouveau.html` | Formulaire pour nouveaux participants (Mai 2026) | ✅ |
| `presentation.html` | Présentation 7 slides des opportunités | ✅ |
| `tableau-criteres.html` | Tableau éditable des 6 participants existants | ✅ |
| `dashboard.html` | Dashboard Chart.js d'analyse des critères | ✅ |
| `backup.html` | Tableau vierge (backup) | ✅ |

---

## Configuration NocoDB requise

Le formulaire `questionnaire-nouveau.html` nécessite une table dans NocoDB :

**URL NocoDB :** https://sheets.viegratuitepourtous.tech

**Table à créer :** `nouveaux_participants_lieu04`

**Champs :**
- `nom` (Texte) — requis
- `email` (Texte)
- `surface` (Texte) — requis
- `budget` (Texte) — requis
- `type_terrain` (Texte) — requis
- `localisation` (Texte)
- `batiments` (Texte)
- `contraintes` (Long texte)
- `priorites` (Long texte)
- `apport` (Long texte)
- `date_inscription` (Date)
- `statut` (Enum: Nouveau, En cours, Validé)

**Token API :** Déjà intégré dans le formulaire (lecture seule côté client)

---

## Message WhatsApp (à copier-coller)

```
🎯 Recherche Lieu 04 — Espace collaboratif

Bonjour ! Voici le lien unique pour accéder à tous les documents du projet :

🔗 https://syfl04.github.io/ECE-Fabriquerie-Forms/recherche-lieu-04/

📱 QR code disponible sur la page pour accès rapide

Contenu :
• 📝 Questionnaire pour nouveaux participants (arrivées de mai)
• 🎯 Présentation des 7 biens identifiés
• 📊 Tableau des critères (6 participants actifs)
• 📈 Dashboard d'analyse

Pour les nouveaux ce mois-ci : remplissez le questionnaire directement, vos réponses seront intégrées au tableau collectif.

Merci !
```

---

## Historique

- **2026-05-04** : Création landing page unifiée + formulaire nouveaux participants
- **2026-05-03** : Réunion équipe + déploiement initial 4 documents
- **2026-04-28** : Recherche initiale + 3 biens majeurs identifiés

---

## Déploiement

```bash
# Pousser sur GitHub Pages
git add .
git commit -m "Ajout landing page + questionnaire nouveaux participants"
git push origin main
```

Les fichiers sont servis automatiquement via GitHub Pages sous 2-3 minutes.
