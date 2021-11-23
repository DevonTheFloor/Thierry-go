---
title: Unknow operator $or
description: Erreur dans mongoDB où l'opérateur $or n'est pas reconnu.
img:
---

## Definition

L'opérateur $or de mongoDB applique "un OU logique sur un tableau de deux expressions au moins et choisi les documents qui satisfont au moins une de ces expressions".   
Selon la syntaxe:   
   
```js{}[query.js]
maCollection.find({
   $or: [
      {expression 1},
      {expression 2}
   ]
})   
```   
   
## Explications   
   

Alors, que se passe t'il lorsqu'un message d'erreur dans mongoDB te dit que l'opérateur $or est inconnu?   
D'emblée, ne penses pas qu'il pourrait s'agir d'un problème de version de mongod et que la tienne n'est pas  à jour. Certain opérateur sont apparu au fur et à mesure des nouvelles versions et donc n'existaient pas dans les précédentes.   
Mais ce n'est pas le cas de $or.   
   

En fait, on est tout simplement en face d'un problème très basique de type syntaxe error. Un peu comme tu pourrais avoir une erreur dans la console qui te dit:   
```js{}[console]
monObjet.maFonction() is not a function
```   
   Ta requête est tout simplement mal écrite.   
Détails importants à respecter sous peine d'erreur: les expressions sont dans un tableau.   
L'opérateur ouvre avec deux points (":").   
Et enfin, il ne se trouve au premier niveau de la requête car c'est un critère supplémentaire.   
   
   ```js{}[exemple]
   maCollection.find({
      { requete-de-base},
      $or :[
         {expression 1},
         {expression 2}
      ]
   })   
   ```
      

   Et dans le mongo shell, n'oublies pas les guillemets.
   Sur ce, amuses toi bien et à la semaine prochaine pour de superbes nouvelles aventure en Javascript !!   
   
    
<br>
<br>
<br>
<Nav-blog />
<br>
<br>


