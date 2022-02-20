---
title: Itérer sur un objet javascript
description: Un objet javascript ne possède pas de méthode d'itération, mais depuis ES6 , il y a une solution.
img: 'https://thierry-go-dev.fr/tourn/images/blog/iteratorImg.png'
---
   
Itérer sur un tableau est Une opération banale mais essentiel à bien des égards dans la programmation et ce , quel que soit le langage.   

En javascript nous possédons les objets et il est certain que bien d'entre nous auraient bien eu besoin de pouvoir itérer sur un objet, principalement lors d'une communication avec une API.   
Si tu tentes une boucle for...of ou for...in, peut importe laquelle, ton navigateur te dira que   
```bash[console]
    Uncaught TypeError: myObject is not iterable
```  
E c'est là qu'intervient: Symbole.iterator.   
Une fonction génératrice qui rend itérable un objet. Alors soit à la création comme ceci:   
```js[itarable.js]
const myObject = {}
myObject.[Symbole.iterator] = function* (){
    yield = 1;
    yield = 'deuxiémement';
    yield = ['qu\'est', 'que on','peut bien inventer']
}
for(let iter of myObject) {
    console.log(iter))
}
```   
Et on aura bien, l'iteration sur chaque champ, y compris le tableau.   
```bash[console]
1
deuxièmement
Array (3) [ "qu'est", "que on", "peut bien inventer" ]
```   
Alors? C'est pas beau la vie?   
Et donc aussi en rajoutant un champ dans l'objet pour y ajouter la fonction generatrice.   
```js[iterable.js]
 const legend = {
    name: "Papa Noel",
    address: "Le Ciel",
    particularite: ['Manteau Rouge','Roule en traineau', 'Travaille un jour dans l\'année'],
    [Symbol.Iterator] = function*() {
      for(let key in this){
        yield { 
          [key]: this[key]
        };
      }
    }
 }
 console.log('spread tab: ', [...legend]);
 console.log('spread obj :', {...legend});
 ```   
 Et comme tu peux le voir, ça fonctionne aussi avec le spread operator.   
 Thank You ES6 !   
 Tu pourras noter, petit padawan, que l'on peut abréger la fonction génératrice   
 ```js[]
 [Symbol.iterator] = function* () {
     my loop
 }
 ```   
 en   
 ```js[]
 *[Symbole.iterator]() {
     my loop
 }
 ```   
 Sur cette bonne nouvelle, je te dis, bon week et à la semaine prochaine.   





