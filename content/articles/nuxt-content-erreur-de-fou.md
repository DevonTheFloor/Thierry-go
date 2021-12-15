---
title: Erreur avec @nuxt/content dans VSCode
description: Alors que toute la code base est nickel, il n'y a pourtant pas de réponse dans l'appel API.
img: 'https://thierry-go-dev.fr/tourn/images/blog/contenterror1.png'
---
## L'erreur de skyzo !   
   
Alors, si tu utilises content dans Nuxt.js pour faire un blog peut être un jour tu auras ce problème. Peut être l’as tu même en ce moment (ce qui expliquerait ta présence ici… ). Il est d’autant plus imprévisible que le code est totalement clean, R.A.S de ce côté là.   
Alors wtf ?   
   
Donc content est un module de Nuxt qui permet de récupérer vos fichiers Markdown, JSON, YAML et CSV à travers une API de type MongoDB, agissant comme un Headless CMS basé sur Git.   
   
Par un simple fetch on va chercher le fichier ou les fichiers d’un dossier et afficher les éléments à l’aide des fonction de tri.   
Ici pour créer un sommaire a ce blog je fetch en asyncData sur le dossier articles de content pour en afficher que le titre, la description et l’uri (slug).   
   
```js{}[fetch sommaire]
async asyncData ({ $content, error }) {
const sommaire = await $content('articles').only(['title', 'description', 'slug'])
.fetch()
.catch((err) => {
error({ statusCode: 404, message: 'Page not found' })
})
```   
   
Cinq lignes, tout est très clair et on a jamais fait plus simple pour récupérer des données dans un fichier, enfin ici, dans des  fichiers d’un dossier, la nuance est quand même importante.   
Donc le code est correcte et dans VSCode j’ai bien mon dossier articles dans le dossier source content et le premier article sous forme du fichier bienvenue.md .   
   
<figure class="illu"><img src="https://thierry-go-dev.fr/tourn/images/blog/illu/vscode1.png"></figure>
   
Et pouratnt ça ne fetch pas.   
Enfin si, l’appel se fait mais y a rien dans la réponse. Le front affiche keud.   
Tu peux retourner la situation dans tous les sens y a rien qu’est mal fait , sauf que…   
   
Je ne sais pas comment VSCode est organisé en interne, mais visiblement lorsque tu créer un dossier dans un autre alors que celui ci est vide, ça ne donne pas le même chemin que si il y avait un fichier dedans (le fichier cale.md dans l’image).   

<figure class="illu"><img src="https://thierry-go-dev.fr/tourn/images/blog/illu/cale2.png"></figure>
Parce que là (attention spoileur!) ça marche !!!   
C’était un fichu problème de chemin qui ne devrait pas exister (le problème pas le chemin)! Comment ça se fait que j’ai pas le même chemin si je mets un dossier dans un dossier vide ou non ? Enfin bref, tout ça pour ça.   
   
Mais on a quand même frisouiller la skyzo: tout est nickel, tout fonctionne , mais pas de données dans la réponse!   
   
<br>
<br>
<br>
<Nav-blog />
<br>
<br> 


