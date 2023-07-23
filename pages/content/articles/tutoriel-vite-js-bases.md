---
title: Tutoriel de découverte de Vite.js
description: Nous allons, aujourd'hui, démarrer avec Vite.js. Le bundler créer par Evan You et qui à pour ambition de remplacer webpack et VueCLI.
img: 'https://thierry-go-dev.fr/tourn/images/blog/vitebase.png'
---
   
      
## Init project   
   
   
```bash[console]
npm init vite@latest
```      
   
Et nous pouvons voir durant la phase d'édition du projet que Vite ne s'utilise pas uniquemlent avec Vue, mais peut l'être avec React ou en vanilla tout simplement.   
Une autre façon d'initialiser un projet vite:
```bash[console]
npm init vue@next
```   
et là on peut choisir pinia comme store.

Sur github, le dépot awesome-vite propose un certain nombre de template pour démarrer très vite, dont des packs starter en vue2.   
  
  
## CSS   
   
Dans les balises '< style >' des SFC avec l'option scoped. Sinon dans un fichier externe, idéalement dans le dossier assets. On peut  @import dans < style > ou import dans < script > et aussi dans le main.js . Il suffit d'y ajouter @media (etc...) juste à côté pour appliquer le media query.   
Il est possible de faire des fichiers séparés et de les @import dans le main.css .   
   

## Preprocesseur   
   
Installer dans le dossier avec le flag -D:
```bash[console]
npm install -D sass
```   
(dev dependance) et créer les fichiers dans assets.   
   
## Image   
  
Par import javascript:
```js[main.js]
import logo from "./assets/logo.png"
```   
pour l'utiliser dans une balise image:
```html[App.vue]
<img scr="./assets/logo.png">
```   
ou en bindant la valeur à la source: :src="logo" .   
Ou sans import en dur dans le code. Les images peuvent être stokées dans public.   
   
## Json   
   
Dansle dossier src, créer le fichier json et utilisation avec un import js
```js[main.js]
import datad from "./data.json"
```   
Ou plus specifiquement un champs du json
```js[main.js]
 import { champNumero2 } from "./data.json"
```   
Et on aura la valeur. En prod, seul les valeurs importées sont buildées.   
   
## Glob   
   
Pour importer dynamiquement deS moduleS, il faut utilser la méthode import.meta.glob() qui prend en paramètre l'adresse des fichiers à importer.   
```js[main.js]
const autoImportModule = import.meta.glob("/dossierDeModules/*.js");
console.log(autoImportModule);
```
On pourra looper sur cette constante pour en extraire les valeurs. Ou sinon il y a une fonction qui le fait d'office:   
```js[main.js]
 const autoImportedModules = import.meta.globEager("./autoImports/*.js");
```   
Et voilà pour cette première partie. Je t'invite maintenant, d'abord à pratiquer et ensuite à lire le tuto sur le build de production: [Build de production avec Vite](/blog/tuto-vite-production).   
   






 



   

