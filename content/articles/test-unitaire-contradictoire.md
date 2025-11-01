---
title : Test Unitaire contradictoire
description: Dans des tests unitaires avec vitest et happy-dom, ici on se retrouve a avoir un element HTML à la fois define et NULL, convenons en, c'est un peu casse-pied!
img: '/img-blog/heros/contradictoire.jpg'
write: 26/07/2023
theme: Vitest
---


## Le Problème

Les tests automatisés sont un élément essentiel du processus de développement d'application web  moderne, permettant de détecter rapidement les erreurs et de garantir la qualité du code. Cependant, il arrive parfois que des erreurs étranges et apparemment contradictoires se produisent lors de l'exécution de tests. Dans cet article, on va explorer un problème rencontré dans les tests avec Vitest et happy-DOM où un élément HTML est censé être créé et pourtant se trouve être null en même temps.   
Nous examinerons les raisons possibles de cette situation et les problèmes de configuration qui peuvent la provoquer.   
   
Après avoir convenablement paramétrer [happy-dom dans vitest](https://thierry-go-dev.fr/blog/happy-dom), imaginons un scénario où on effectue des tests pour vérifier si un élément HTML a été créé, ajouté correctement au document pour ensuite l'effacer grâce a notre super fonction erased().   
```js
export function erased() {
  const mount = document.getElementById('mount-point');
  mount.innerHTML = '';
  body.removeAttribute('style');
}
```

On a écrit les tests avec une première partie qui se borne à verifier la validité de l'environnement en vérifiant d'abord si l'élément est défini, puis s'il existe bel et bien avant d'intervenir dessus. Pourtant le test échoue de manière contradictoire en affirmant que l'élément est défini et null en même temps.  
Avec ces deux assertions, on verifie la validité de la du DOM avant d'executer nos fonctions:   
```js
  expect(testedElement).toBeDefined();
  expect(testedElement).toBeInstanceOf(HTMLElement);
```

Comment cela est-il possible ?   
La raison réside souvent dans l'initialisation incorrecte de variables dans les tests. L'élément HTML est récupéré en dehors des tests et avant que le beforeEach() ne soit exécuté, ce qui signifie que l'élément n'a pas encore été créé et ajouté au document. Cela conduit à une contradiction dans les tests, car ils vérifient à la fois que l'élément est défini et qu'il est null.   
```shell
TypeError: Cannot read properties of null (reading 'innerHTML')
 ❯ js/module-liste/__test__/indexTest.spec.js:26:50
     24|     
     25|     expect(document.getElementById('mount-point').innerHTML).toBe('');
       |                                                  ^
success:
```

## La Solution

Heureusement, résoudre cette erreur contradictoire est assez simple une fois que l'on a identifié la cause sous-jacente. La clé est d'initialiser correctement la variable de l'élément HTML à l'intérieur du beforeEach() après avoir créé l'élément. De cette façon, les tests peuvent vérifier l'état de l'élément après qu'il a été correctement créé. En déclarant la variable à l'extérieur des tests, mais en l'initialisant à l'intérieur du beforeEach(), nous nous assurons que l'élément est récupéré correctement et que les tests vérifient son existence de manière cohérente. Le premier test vérifiera si l'élément est défini, et le deuxième test vérifiera s'il n'est pas null.   

```js
let testedElement;
let modal;

beforeEach(()=> {
  const mount = document.createElement('div');
  mount.id = 'mount-point';
  document.body.appendChild(mount);
  testedElement = document.getElementById("mount-alert");
  modal = document.createElement('div');
  const inside = document.createElement('p');
  inside.textContent = 'Here a randome modal';
  testedElement.appendChild(modal);
  modal.appendChild(inside);

})
```
   
En conclusion, en examinant attentivement la configuration et l'initialisation des variables, on peut dire que c'est une simple erreur de javascript renvoyé entre la création et l'initialisation de la variable. Une fois que l'on a compris cela, ce type d'erreurs "contradictoires" dans nos tests et qui peuvent déconcerter, peuvent être resolus efficacement.   
Dans notre cas, en corrigeant l'initialisation de la variable de l'élément HTML et en l'effectuant correctement dans le beforeEach(), on a éliminé la contradiction dans les tests et assuré leur fiabilité. Pour des tests plus robustes et fiables, il est essentiel de comprendre les erreurs possibles et de les résoudre méthodiquement.   
Pour cela, comme dans tous les frameworks JS, il ne faut pas perdre de vue que tout cela c'est fondamentalement du javascript.   
  
Enjoye testing and happy coding !
   
