---
title: Unknow operator $or
description: Erreur dans mongoDB où l'opérateur $or n'est pas reconnu.
img:
---

## Definition

L'opérateur $or de mongoDB applique "un OU logique sur un tableau de deux expressions au moins et choisi les documents qui satisfont au moins une de ces expressions".   
Selon la syntaxe:   
   
   <code>db.collection.find({$or: [{expression 1},{expression 2},{expression 3}]})</code>