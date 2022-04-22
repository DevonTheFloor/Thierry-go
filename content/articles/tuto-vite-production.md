---
title: Faire le build de production avec Vite.js
description: Comment faire pour réaliser le build à pousser en production sachant qu'ici, ce sont les fonctions natives du navigateur qui s'occupent d'importer les modules.
img : 'https://thierry-go-dev.fr/tourn/images/blog/vitebuild.png'
---   
   
## Empaqueter avec Vite   
   
Et c'est rollup.js qui va s'occuper de configurer le projet de production pour permettre au navigateur de s'y retrouver.   
Rollup fonctionne sous le capot, on a pas besoin de s'en occuper, c'est comme webpack. Il faut juste lancer la commande   
```bash[console]
npm run build
```   
Le resultat se trouvera dans dossier dist.   
Vite (comme VueCLI) te permet de check le resultat final sur un serveur de prod (inclu dans vite) avec la commande   
```bash[console]
npm run serve
```   
Dans la documentation tu trouveras les explications du pourquoi bundler ton projet pour la production ainsi que les infos nécessaire pour héberger ton projet sur ton service préféré tel vercel, netlify, heroku, etc...   
   

liens utiles dans la doc officielle:   
[Pourquoi empaqueter pour la production](https://vitejs.dev/guide/why.html#why-bundle-for-production)   
[Déployer un site static](https://vitejs.dev/guide/static-deploy.html)   
   
## Variable d'environnement   
   
Les variables d'environnements sont normalement destinés au back end, car il faut les heberger de manière à ce que l'utilisateur ne les trouve jamais (donc pas dans le navigateur).   
Dans Vite , comme dans quasi tous les frameworks javascript modernes, c'est possible  côté front-end.   
Et rien de plus simple dans vite,il suffit juste de créer un fichier .env à la racine du projet et d'y stocker ses variables en majuscule snak case, c'est la norme.   
Vite propose plusieurs types de ficher .env, à découvrir dans la doc : [https://vitejs.dev/guide/env-and-mode.html#env-files](https://vitejs.dev/guide/env-and-mode.html#env-files) .   
Pour y acceder dans l'app en développement il faut utiliser: import.meta.env.MA_VARIABLE .   
En l'espèce elle sera illisible, car elle n'est pas censé être lu par l'utilisateur. Pour l'afficher pour nos besoin il faut la nommé avec le prefixe VITE_ . Ce qui donne: VITE_MA_VARIBLE .   
   




