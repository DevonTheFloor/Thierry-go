<template>
  <article>
    <h1> Les langages du web</h1>
    <h2>Article premier</h2>
    <p>
      Le web te fascine, tu aimerais percer ses secrets?<br>
      Mais il est vrai que, de prime abord, il y a tellement d'informations, qui, qui plus est semblent contradictoires. Tantôt on te parle de JavaScript, tantôt de Python. Qu'est ce qui est vrai, qu'est ce qui est faut? Qu'est ce qui a changé au cours du temps et où est donc Ornicar?<br>
      Et bien tu es au bon endroit on va faire le tri dans tout ça.
    </p>
    <p>
      Pour bien tout comprendre, il faut remonter à la création du web. Je sais bien que certains d'entre vous n'étaient peut être même pas encore nés, mais ça ne remonte pas à aussi loin que ça finalement.<br>
      C'est en 1991 que tout commença avec un protocole: le HTTP. Et un langage: le HTML.<br>
      Pour la suite je te laisse visionner la vidéo ci dessous.<br>
      Et n'oublie pas de régler le convecteur temporel pour revenir!
    </p>
    <div class="vdo">
      <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/bQEHrY4E0IA"
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
    title: 'Les langages du web',
    htmlAttrs: {
      lang: 'fr'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Tous les langages qui composent le developpement web.Il y en a trois complètement inspensable et qui s\'execute côté client et une plethore côté serveur.' },
      // <!-- Open Graph data -->
      { property: 'og:title', content: 'Blog de Dev' },
      { property: 'og:type', content: 'Web site' },
      { property: 'og:url', content: 'https://thierry-go-dev.fr/blog/langages-du-web' },
      { property: 'og:image', content: 'https://thierry-go-dev/mvicon.png' },
      { property: 'og:description', content: 'Tous les langages qui composent le developpement web.Il y en a trois complètement inspensable et qui s\'execute côté client et une plethore côté serveur.' },
      // <!-- Twitter Card data -->
      { name: 'twitter:card', content: 'summary' },
      { name: 'twitter:site', content: '@floor_dev' },
      { name: 'twitter:title', content: 'Les langages du web' },
      { name: 'twitter:description', content: 'Tous les langages qui composent le developpement web.Il y en a trois complètement inspensable et qui s\'execute côté client et une plethore côté serveur.' },
      { name: 'twitter:creator', content: '@floor_dev' },
      // <!-- Twitter Summary card images must be at least 200x200px -->
      { name: 'twitter:image', content: 'https://thierry-go-dev/mvicon.png' }
    ]
  }
}
</script>
<style>
html {
  background-color: #469583;
  margin: 1vw;
  padding: 1vw;
  display: flex;
  flex-direction: column;
  align-items: center;
}
body {
  background-color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100%;
  border: 5px solid #355e50;
  border-radius: 10px;

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
  width: 100%;
  color: #469583;
}
h2 {
  font-family: 'Dancing Script', cursive;
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
