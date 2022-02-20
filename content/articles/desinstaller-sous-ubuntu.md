---
title: Désintaller un paquet sur Unbuntu avec apt.
description: Comment désinstaller un paquet dans ubuntu avec le gestionnaire apt. Ce qui implique de l'avoir installé avec, bien entendu.
img: 'https://thierry-go-dev.fr/tourn/images/blog/apt.jpg'
---
   

Il faut , bien sûr, commencer par trouver le paquet   


```bash
dpkg --list |grep <nom-du-paquet>
```   

Ainsi trouver le nom exacte du paquet en suivant les propositions si on n'a pas le bon nom.   
Ensuite on peut soit le remove, soit le purge. Le remove garde les fichiers de configuaration, ce qui peut poser des problèmes quand il y a des differences majeur entre les versions de paquet. Et purge efface tous et donc évite toutes sortes de problèmes de type conflit de version de dépendance.   
   
donc
```bash
sudo apt remove <nom-du-paquet>
```   
ou tu l'as compris:
```bash
sudo apt purge <nom-du-paquet>
```   
      
Une fois tout cela fait, pour être sûr de pas avoir de problème, surtout lorsque l'on fait cela pour installer différentes versions d'un même paquet, nous allons bien tout nétoyer:   
```bash
sudo apt clean
```   
   
On peut la complèter avec
```bash
sudo apt autoremove
```   
Pour être certain qu'il ne reste rien. Et enfin à l'installation de la nouvelle version, si tel était ton objectif, pour éviter les erreurs tu peux forcer l'install:
```bash
sudo apt -f install <nom-du-paquet>
```   
      
Et voilo.   
Je te dis à plus dans le bus.   

