---
title: Paramètrage de Happy DOM dans vitest
description: Le paramétrage de happy-dom dans les tests unitaires avec ViTest.
img: 'https://thierry-go-dev.fr/tourn/images/blog/vitesthappy.png'
write: 23/07/2023
theme: Vitest
---

Lorsque l'on fait des tests avec ViTest, l'environnement par défaut est Node.js. Cependant, si l'on souhaite tester la manipulation du DOM, il est nécessaire de substituer cet environnement Node.js par celui du navigateur.   
Bien entendu, au lieu d'utiliser un véritable navigateur pour ces tests, on utilisera une émulation.   
Pendant longtemps, la bibliothèque JSDOM était le choix par défaut pour cette tâche. Cependant, aujourd'hui, une alternative plus efficace et conviviale est disponible : Happy-DOM.   
Cette surcouche DOM légère offre une solution simple et puissante pour faciliter la manipulation des éléments du DOM lors des tests avec ViTest.   
   
 
## Pourquoi happy-dom est plus pratique que JSDOM?   
   

Contrairement a JSDOM toutes les fonctionnalités native du DOM, type document.create et autre getElementById, exsite dans happy-dom, alors qu'avec JSDOM il faut toutes les mocker.
On peut donc utiliser des sélecteurs CSS ou des attributs pour cibler les éléments, rendant les tests plus lisibles et compréhensibles.   
   
## Installation
   
Dans ton projet vitest install happy-dom, classiquement:   
```shell
npm install happy-dom
```
   

Sur la [page du wiki dédié](https://github.com/capricorn86/happy-dom/wiki/Getting-started) tu trouveras le script d'initialisation du DOM:   
```js
import { Window } from 'happy-dom';

const window = new Window({
   url: 'https://localhost:8080',
   width: 1024,
   height: 768
});
const document = window.document;

document.body.innerHTML = '<div class="container"></div>';

const container = document.querySelector('.container');
const button = document.createElement('button');

container.appendChild(button);

// Outputs "<div class="container"><button></button></div>"
console.log(document.body.innerHTML);   
```
   
Le premeir problème surviendra très rapidement une forme, similaire à celle ci:
```shell
ReferenceError: document is not defined
 ❯ js/module-liste/index.js:3:15
      1| import { dGEBId, dCrEl } from "../modules/dom-helpers.js";
      2| 
      3| const mount = document.getElementById('mount-point'),
       |               ^
      4|   body = document.querySelector('body'),
      5|   numt = [1,2,3,4,5],
 ❯ js/module-liste/__test__/indexTest.spec.js:2:31
 ```
Problème facilement resolu en ce référant à [la documentation de Vitest](https://vitest.dev/config/#environment) pour initialiser l'environnement.   
Une fois happy-dom initialiser dans tes tests en comments style (par exemple), document sera reconnu. Tu pourras donc tester ta fabuleuse fonction qui manipule le DOM et bien plus encore.   
   
Alors , on est âs bien là?
A dev secure, Détendu du test ?   
   
Sur ce, bon week et la semaine prochaiiiièène !   
   

