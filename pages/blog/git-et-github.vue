<template>
  <article>
    <h1> Git et github</h1>
    <h2>Le fameux content manager créer par Linus Thorvald himself et qui domine le monde.</h2>
    <h3>Git</h3>
    <p>
      Beaucoup trop de gens et parmis eux des professionnels aguerri, définissent Git comme étant un logiciel de versionning, en bon franglais. C'est un racourcit aussi court que simpliste.
    </p>
    <p>
      Dans le monde du développement logiciel, que ce soit des applications natives, des exécutables de  bureau ou des application web, il n’est pas rare de ne pas trop savoir où l’on va. L’idée de base est très souvent sommaire et évolue en fonction de tout un tas de chose: la compréhension des désidératas du client, la finalité commerciale du produit, mais aussi et surtout, en fonction des dead lines.
    </p>
    <p>
      Quand il faut 6 mois pour développer un truc, et qu’on se rend compte qu’au 4e on n’en a pas fait la moitié… Les objectifs sont revus. On va abandonner telle fonctionnalité, on va simplifier telle interface, etc...<br>
      Pour faire tous ces ajustements sans devoir tout recommencer à chaque fois, tout en permettant à toutes les équipes de disposer de la base de code qui lui incombe et de faire son travail sans gêner celui des autres. Pour tout cela on an besoin d’un SCM, un Source Code Manager.
    </p>
    <p>
      GIT est un des principaux SCM disponible. Par abus de langage on qualifie souvent GIT de logiciel de versionnage ou de gestion de version. En vérité la gestion des versions du logiciel par GIT n’est qu'une conséquence de son utilisation et qu’une infime partie seulement de toutes ses possibilités.<br>
      Git permets d’annuler des modifications même après sauvegarde du fichier (checkout).<br>
      Car Git sert à travailler sur son code avec la possibilité de le «sécurisé» à chaque fois que l’on fait une avancée intéressante (commit).<br>
      Un syteme de log permet de revenir en arrière même apres avoir commité.<br>
      Avec Git on peut travailler sur les améliorations du projet sans altérer le code source (branch).<br>
      Ce même système de branche permet à chaque membre d’une équipe de faire leur «fonctionnalité» de leur côté sans corrompre la base de code.<br>
      Évidemment ce système de branche possède une fonctionnalité qui permet de fusionner les changements viables au code source de base (merge). Et c'est par le jeu de ce système que sont gérés les versions. Ce n'est pas git qui va decider de passer de la version 2 à la version 3 par exemple.<br>
      Ce sont là les commandes élémentaires de git. Il y en a plusieurs autres qu’on utilisera en temps voulu.
    </p>
    <h3>Github</h3>
    <p>
      Tu l'auras compris tout seul, github est la version en ligne de Git, ce qui permet de conserver sur un serveur distant tout ton travail et ainsi disposer d'une copie de secours, mais pas que!<br>
      Oui car ce n'est rare d'avoir des problèmes avec son ordi: crash, vol, oupss la bouteille de lait... Ou tout simplement, tu en changes. Et bien souvent, dans ces moments là, tu es pris de court. L'utilité d'avoir une copie distante que tu peux télécharger sur n'importe quel ordinateur prend alors tout son sens.<br>
      Mais pas que, github permet aussi de partager ton code avec d'autres développeurs dans le cadre d'une collaboration ou juste pour avoir un avis, demander de l'aide ou présenter ton travail à un employeur.
    </p>
    <p>
      Bref , comme la quasi totalité des developpeurs logiciel, quand tu auras testé Git et github, la vie deviendra tout simplement impossible sans. Et ça c'est en utilisation basique, car il existe aussi Git Flow, mais c'est un autre sujet qui sera traité ailleurs.
    </p>
    <p>
      En attendant, tu peux commencer à apprendre Git via mes vidéos sur le sujet et aussi regarder la conférence faite par Linus Thorvald himself dans les locaux de Google en 2007 pour présenter git (en anglais).<br>
      Je te dis merci, ciao et à la semaine prochaine!
    </p>
    <p>PLay list Git et Github</p>
    <div class="vdo">
      <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/tBJ0UatJxCY"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      />
    </div>
    <p>Tech Talk de Linus Thoravld (créateur de git et de Linux) chez google en 2007: </p>
    <div class="vdo">
      <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/4XpnKHJAok8"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      />
    </div>
    <Nav-blog />
  </article>
</template>

<script>
export default {
  head: {
    title: 'Git et Github',
    htmlAttrs: {
      lang: 'fr'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Le fameux content manager créer par Linus Thorvald himself et qui domine le monde du developpement logiciel' },
      // <!-- Open Graph data -->
      { property: 'og:title', content: 'Git et Github' },
      { property: 'og:type', content: 'Web site' },
      { property: 'og:url', content: 'https://thierry-go-dev.fr/blog/git-et-github' },
      { property: 'og:image', content: 'https://thierry-go-dev/mvicon.png' },
      { property: 'og:description', content: '' },
      // <!-- Twitter Card data -->
      { name: 'twitter:card', content: 'summary' },
      { name: 'twitter:site', content: '@floor_dev' },
      { name: 'twitter:title', content: 'Bolg de Dev' },
      { name: 'twitter:description', content: 'Le fameux content manager créer par Linus Thorvald himself et qui domine le monde du developpement logiciel' },
      { name: 'twitter:creator', content: '@floor_dev' },
      // <!-- Twitter Summary card images must be at least 200x200px -->
      { name: 'twitter:image', content: 'https://thierry-go-dev/mvicon.png' }
    ]
  }
}
</script>
<style scoped>
html {
  /* background-color: #469583;
  margin: 1vw;
  padding: 1vw;*/
  display: flex;
  flex-direction: column;
  align-items: center;
}
body {
  display: flex;
  flex-direction: column;
  align-items: center;
  /* width: 100%;
  height: 100%;
  border: 5px solid #355e50;
  border-radius: 10px;*/

}

article {
  padding: 5%;
  text-align: justify;
  width: 100%;
}

.vdo {
  margin: 3%;
  width: 100%;
  display: flex;
  justify-content: center;
}
iframe {
  max-width: 100%;
  max-height: auto;
}

.title-blog {
  font-family: 'Dancing Script', cursive;
  font-size: 50px;
  text-align: center;
}
h1 {
  margin: 1%;
  width: 100%;
  color: #469583;
}
h2 {
  margin: 1%;
}
p {
  font-family: 'Cutive Mono', monospace;
  margin: 2%;
  color: #01130f;
}
@media screen and (max-width: 850px){
  .profile {
    min-width: 12vw;
  }
  .title {
    padding: 1%;
    font-size: 80px;
  }
  .links {
    margin: 2%;
  }
}
@media screen and (max-width: 470px) {
  .title {
    padding: 2%;
    font-size: 70px;
  }
  .links {
    margin: 1%;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .profile {
    min-width: 15vw;
  }
  .btn-custom {
    max-width: 60vw;
    margin: 1vh;
  }
  p {
    padding: 1%;
  }
}
</style>
