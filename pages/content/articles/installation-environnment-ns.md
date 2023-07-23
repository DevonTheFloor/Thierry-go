---
title: Installation de l'environnement nativScript.
description: Toutes les commandes pour installer l'environnement nativeScript. Le framework pour developper des applications mobiles avec les langages du web. En JS natif ou avec Vue, Angular ou React.
img: 'https://thierry-go-dev.fr/tourn/images/blog/natiangu.png'
---
   
   
## Sous Linux (pour windows se referer à la doc)   
   
   
Bien entendu il faut un environnement Node.js, installe celui qui te convient sur [NodeJs.org](https://nodejs.org/fr/download/).   
Ensuite installer OpenJDK ou OracleJDK. Sous linux  favorisont OpenJDK qui en plus est present dans les dépots en last realse, pourquoi s'embêter?   
Sinon en ligne de commande:   
```bash
sudo apt-get install -y openjdk-17-jdk
```   
Et lorsque que tu vérifieras la verison:   
```bash
java --version
```   
si il y un problème ton terminal te donnera la bonne commande à lancer.   
Tu auras surement besoin du run time environment:   
```bash
sudo apt install openjdk-17-jre-headless
```   
   
   
Installe enfin androidStudio, dispo aussi des les dépots ou sur le site d'android [ici](https://developer.android.com/studio?gclid=EAIaIQobChMIj7a5wKif9QIVFdxRCh39Hge_EAAYASAAEgKeuPD_BwE&gclsrc=aw.ds) .   
Dans le .bashrc du compte courant, rajoute:   
export ANDROID_HOME=$HOME/Android/Sdk   
export PATH=$PATH:$ANDROID_HOME/platform-tools   
   
Et enfin, install nativscript en global:
```
npm install -g nativescript
```   
   
Test ton installation en tapant:
```
ns doctor android
```   
si il ne relève pas d'erreur, tout est OK.   
Si tu as des trucs du genre
```console
✖ You need to have the Android SDK Build-tools installed on your system. You can install any version in the following range: '>=23 <=31'. 
 Run `$ sdkmanager` from your command-line to install required `Android Build Tools`. In case you already have them installed, make sure `ANDROID_HOME` environment variable is set correctly.
```   
Alors que juste au dessus il te dit que SDK est bien installé, va dans android studio => more action => SDK manager => et dans l'onglet SDK platform installe l'API qui (dans notre cas ici) Android 11 API level 30.   
Actuellement nous en sommes à la 32, qui est effectifvement plus recent que 23, mais supérieur à 31.   
Ensuite dans SDK tool , coches la case 'showpackage details' et click et selectionne la 30 pour l'installer, comme pour la version du SDK juste au dessus.   
   
And now madies and getlemen, you can run ENFIN ze commande
```
ns create MaSupperAppliNative
```   
!! All right Roye!   
Et comme nativeScript s'utilise avec ton framework préféré, n'oublie pasde specifier avec ```--vue``` .   
Alors, autant j'adore Vue.js, autant je préfère m'en tenir à du JS natif pour nativScript, ça nous évitera bien des problèmes de version de dépendance et donc de transpilage au build.   
   
Bon! Bah je crois bien que l'intro est fini, tout est bien installé, maintenant on se jète à l'eau!   
   
A bientôt pour une démo de projet.   
 





 


