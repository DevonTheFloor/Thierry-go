---
title: Vite.js 
description: La taille grandissante des applications front-end fait accuser un sérieux ralentissement aux bundlers classiques durant le dévelopement. Vite.js est la solution que nous propose Evan You, qui est, entre autre, le créateur de Vue.js
img: '/img-blog/heros/vitejs.png'
---
   
   
## La problématique   
   
Vite.js arrive à un moment ou la taille des applications [front-end](/lexique) est telle que les bundlers classiques comme web-pack en sont sérieusement ralenti et cela commence à affecter la qualité de travail.   
Ce ralentissement se recent aussi dans le serveur de développement qui est obligé d'attendre que toute l'appli soit "re-bundlé" avant d'être reservit à chaque modification du code. Et ce, même avec un module de rechargement à chaud (Hot Module Reload) qui n'a servit , finalement, qu'a retarder l'inévitable.   
   
Vite s'appuie sur la faculté, désormais native, du navigateur à gérer lui-même les mudules ESM et par là même, les import/export ES6.   

## Le principe   
   
Vite sépare les fichiers en deux catégories: dépendance et code source.   
Vite pré-bundle les dépendances en utilisant [esbuild](https://github.com/evanw/esbuild).   
Et le code source, quand à lui, c'est donc tous les fichiers SFC (dans le carde d'une appli Vue.js).   
Le processus de build n'existe plus en tant que tel. C'est maintenant le navigateur qui prend sa part dans la gestion des imports ES6.   
   
Tu l'auras compris, en compartimentant et répartissant les tâches de cette façon, là où un bundler classique fait tout à lui tout seul, on obtient: Vite.js !   
Et c'est réellement HA-LLU-CI-NANT !   
   
Enfin et j'ai presque envie de dire : surtout (mais en fait non, tout est trop géniale dans ce truc), Vite fonctionne aussi bien avec Vue3 que Ract ou même du simple Vanilla. C'est ti pas beau la vie?   
Par contre là ou le bas blaisse, c'est que Vite ne fonctionne pas avec Vue2 (oh magoche!!). Du moins pas sans le plugin adéquat.   
Je parle de ce petit problème dans cet article: <nuxt-link to="./vite-vue2">Vite+Vue2</nuxt-link>.   
   
Par contre l'honnêteté m'oblige à te dire, que je n'ai pas encore tester le build en prod, affaire à suivre donc, mais vue les pricipes utilisés dans cet outil, il ne devrait pas trop y avoir de problème. De toutes façons on en reparle très... Vite! biensûr !   

   
   
   

   
   


