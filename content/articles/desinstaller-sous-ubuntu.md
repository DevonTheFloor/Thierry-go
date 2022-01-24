---
title: Desintaller un paquet sur Unbuntu avec apt.
description: Comment desinstaller un paquet dans ubuntu avec le gestionnaire apt. Ce qui implique de l'avoir installer avec, bien entendu.
img: 'https://thierry-go-dev.fr/tourn/images/blog/apt.jpg'
---
   

Il faut , bien sûr, commencer par trouver le paquet   


```bash
dpkg --list |grep openjdk
```   

Ainsi trouver le nom exacte du paquet en suivant les proposition si on n'apas le mbon nom.   
Ensuite on peut soit le remove soit le purge. Le remove garde les fichiers de configue, ce qui peut poser desproblèmes quand il y a des differencemajeur entre les version de paquet. Et purge efface tous et donc evite toutes sortes deproblème de type conflit de version de dependance.   
   
donc
```bash
sudo apt remove <nom-du-paquet>
```   
ou tu l'as compris:
```bash
sudo apt purge <nom-du-paquet>
```   
      
Une fois tout cela fait, pour être sûr de pas avoir de problème, surtout lorsque l'on fait cela pour installer différente version d'un même paquet, nous allons bien tout nétoyer:   
```bash
sudo apt clean
```   
   
On peut la complèter avec
```bash
sudo apt autoremove
```   
pour être certain qu'il ne reste rien. Et enfin à l'installation de la nouvelle version, si tel était ton objectif, pour éviter les erreurs tu peux forcer l'install:
```bash
sudo apt -f install <nom-du-paquet>
```   
      
Et voilo.   
Je te dis à plus dans le bus.   

