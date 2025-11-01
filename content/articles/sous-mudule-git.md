---
title: Sous module git
description: Comment faire pour entretenir plusieurs dépôts git dans un même projet?
img: '/img-blog/heros/sub-module.png'
---

Pour un projet qui utilise deux (ou plus) dépôts Git distincts, tout en maintenant chaque historique sans interférer avec les fichiers ".git" du projet complet, il est possible d'utiliser des sous-modules. Cela peut être utile lorque l'on utilise une librairie toujours en cours de developpement par exemple et donc hors du champ du gestionnaire de dépendence. Ou plus probablement, une librairie importée directement depuis github sans passer par un gestionnaire.

## Utiliser des sous-modules Git

Les sous-modules Git permettent d'intégrer un dépôt Git comme un répertoire dans un autre dépôt Git. Chaque sous-module conserve son propre fichier ".git" et son propre historique, sans interférence avec celui du projet qui l'inclus.

#### Étapes pour ajouter un sous-module :

1. **Ajouter le sous-module :**
   ```bash [terminal]
   git submodule add <url-du-depot-sous-module> <chemin/sous-module>
   ```

2. **Initialiser et mettre à jour les sous-modules :**
   ```bash [terminal]
   git submodule update --init --recursive
   ```

3. **Commiter le sous-module ajouté dans le dépôt principal :**
   ```bash [terminal]
   git add .gitmodules <chemin/sous-module>
   git commit -m "Ajout du sous-module"
   ```

4. **Pour cloner le dépôt principal avec les sous-modules :**
   ```bash [terminal]
   git clone <url-du-depot-principal>
   cd <nom-du-repertoire-clone>
   git submodule update --init --recursive
   ```


La méthode des sous-modules permet de maintenir des dépôts séparés facilement. Chaque sous-module peut être géré indépendamment.
On peut trouver celà génant de gérer plusieurs dépot git, c'est pour ça qu'il faut bien savoir pourquoi on utilise un sous-module. Au cas cela ne feraiot pas l'affaire il existe aussi les sous-arbres. Methode que nous verrons ulterieurement.   
