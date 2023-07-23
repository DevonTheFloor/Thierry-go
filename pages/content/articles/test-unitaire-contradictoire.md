---
title : Test Unitaire contradictoire
description: Dans des tests unitaires avec vitest et happy-dom, ici on se retrouve a avoir un element HTML à la fois define et NULL, convenons en, c'est un peu casse pied!
img: ''
---


## Le Problème

Les tests automatisés sont un élément essentiel du processus de développement logiciel moderne, permettant de détecter rapidement les erreurs et de garantir la qualité du code. Cependant, il arrive parfois que des erreurs étranges et apparemment contradictoires se produisent lors de l'exécution de tests. Dans cet article, nous allons explorer un problème courant rencontré dans les tests JavaScript où un élément HTML est censé être créé et nul en même temps. Nous examinerons les raisons possibles de cette situation et les problèmes de configuration qui peuvent la provoquer.   
   
Imaginez un scénario où vous effectuez des tests pour vérifier si un élément HTML a été créé et ajouté correctement au document. Vous avez écrit les tests de manière logique, en vérifiant d'abord si l'élément est défini, puis s'il est null. Pourtant, malgré votre logique solide, le test échoue de manière contradictoire en affirmant que l'élément est défini et null en même temps. Comment cela est-il possible ? La raison réside souvent dans l'initialisation incorrecte de variables dans les tests. L'élément HTML est récupéré en dehors des tests et avant que le beforeEach() ne soit exécuté, ce qui signifie que l'élément n'a pas encore été créé et ajouté au document. Cela conduit à une contradiction dans les tests, car ils vérifient à la fois si l'élément est défini et s'il est null.

## La Solution

Heureusement, résoudre cette erreur contradictoire est assez simple une fois que nous avons identifié la cause sous-jacente. La clé est d'initialiser correctement la variable de l'élément HTML à l'intérieur du beforeEach() après avoir créé l'élément. De cette façon, les tests peuvent vérifier l'état de l'élément après qu'il a été correctement créé. En déclarant la variable à l'extérieur des tests, mais en l'initialisant à l'intérieur du beforeEach(), nous nous assurons que l'élément est récupéré correctement et que les tests vérifient son existence de manière cohérente. Le premier test vérifiera si l'élément est défini, et le deuxième test vérifiera s'il n'est pas null, ce qui est la façon appropriée de faire ces vérifications.   
   
En conclusion, les erreurs contradictoires dans les tests peuvent sembler déconcertantes, mais en examinant attentivement la configuration et l'initialisation des variables, on peut les résoudre efficacement. Dans notre cas, en corrigeant l'initialisation de la variable de l'élément HTML et en l'effectuant correctement dans le beforeEach(), nous avons éliminé la contradiction dans les tests et assuré leur fiabilité. Pour des tests plus robustes et fiables, il est essentiel de comprendre les erreurs possibles et de les résoudre méthodiquement. Avec cette approche, les tests automatisés continueront d'être un outil puissant pour garantir la qualité de notre code.   
   
