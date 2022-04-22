<template>
  <div class="container-fluid">
    <header id="indexhead">
      <Logo />
      <h1>
        Thierry Go Dev
        <figure>
          <img class="profile" src="~static/profil.jpg">
        </figure>
      </h1>
      <h2 class="sub-title">
        <strong>Développeur d'application web et mobile, full stack JS.</strong>
      </h2>
      <div>
        <figure>
          <img src="~@/static/HTML5.png" alt="logo html 5" class="ecusson">
          <img src="~@/static/css3.png" alt="logo css 3" class="ecusson">
          <img src="~@/static/JS.png" alt="logo JavaScript" class="ecusson">
          <img src="~@/static/node.png" alt="logo Node.js" class="ecusson">
          <img src="~@/static/mongo.png" alt="logo mongodb" class="ecusson">
          <img src="~@/static/vue.png" alt="logo vue js" class="ecusson">
          <img src="~@/static/v.png" alt="logo vuetify" class="ecusson">
          <img src="~@/static/nativ.png" alt="logo nativScript" class="ecusson">
          <img src="~@/static/nuxtjs3.png" alt="logo nuxt3" class="ecusson">
        </figure>
      </div>
    </header>
    <p>
      Développeur full stack d'applications web mon stack est 100% JavaScript. Node.js bien entendu en back, mocha pour les tests. Je suis aussi de très prêt l'évolution de Deno et m'interesse au serveur web à base de Rust.<br> Même si MongoDB est ma base de données de prédilection, il est, bien evidemment, impossible de ne pas utiliser SQL.<br>Enfin en front, où je ne suis pas en reste, je suis disciple de Vue.js et de son meta framework Français: Nuxt.js!
    </p>
    <div class="links">
      <a
        href="https://nuxtjs.org/"
        target="_blank"
        rel="noopener noreferrer"
        class="btn-custom button--green"
      >
        Nuxt.Js
      </a>
    </div>
    <p>
      Ses multiples formats de build pour la mise en prod offrent des perspectives de developpement qu'on ne trouve pas ailleurs. Et avec eux, Vuetify pour le CSS.<br>Maintenant avec l'arrivé de <nuxt-link to="/blog/vite-js">Vite.js</nuxt-link> (dont je suis super fan, tu verras) le developpement front-end devient encoreplus passionnant.<br> At last, mais pas des moindres, je m'adonne aussi avec plaisir au développement d'application mobile avec nativeScript pour Android et IOs.
    </p>
    <p>
      Tu peux retrouver ici mon Github.
    </p>
    <div class="links">
      <a
        href="https://github.com/DevonTheFloor"
        target="_blank"
        rel="noopener noreferrer"
        class="btn-custom button--grey"
      >
        Mon GitHub
      </a>
      <p>
        C'est non sans une certaine satisfaction que je te propose de visiter My Veille, qui comme son nom l'indique, est mon application web dediée à la veille technologique dans le domaine du développement web. Débuté comme projet de fin d'étude, je peux t'assurer que je vais porter le projet aussi loin et longtemps que je le pourrai.
      </p>
      <div class="links">
        <a
          href="https://myveille.herokuapp.com"
          target="_blank"
          rel="noopener noreferrer"
          class="btn-custom button--green"
        >
          My Veille
        </a>
      </div>
      <p>Un développeur qui cause de developpement, bah ça cause beaucoup! Entre les derniers outils de développement, un point sur un détail technique ou l'actu générale du web, on a toujours un truc à raconter. Alors forcement y a moment où ça fini en blog!</p>
      <nuxt-link to="blog/sommaire" class="btn-custom button--green">
        Sommaire Blog
      </nuxt-link>
    </div>
    <p>Bien entendu, tu peux regarder  mes productions, qui ont la particularité de ne pas être juste des sites de démonstration, mais de vrais projets poussés en poduction.</p>
    <div class="links">
      <nuxt-link
        to="/portfolio"
        rel="noopener noreferrer"
        class="btn-custom button--green"
      >
        Portfolio
      </nuxt-link>
    </div>
    <br>
    <br>
    <br>
  </div>
</template>

<script>
export default {

  head () {
    return {
      title: 'Thierry-go-Dev',
      htmlAttrs: {
        lang: 'fr'
      },
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { hid: 'description', name: 'description', content: 'Thierry G. développeur d\'application web et mobile, full stack JS, stack: Node.js, Vue.js, Nuxt.js, NativeScript, MongoDB.' },
        // <!-- Open Graph data -->
        { property: 'og:title', content: 'Thierry Go Dev' },
        { property: 'og:type', content: 'Web site' },
        { property: 'og:url', content: 'https://thierry-go-dev.fr' },
        { property: 'og:image', content: 'https://thierry-go-dev/mvicon.png' },
        { property: 'og:description', content: 'Thierry G. développeur d\'application web et mobile, full stack JS, stack: Node.js, Vue.js, Nuxt.js, NativeScript, MongoDB.' },
        // <!-- Twitter Card data -->
        { name: 'twitter:card', content: 'summary' },
        { name: 'twitter:site', content: 'Thierry Go Dev' },
        { name: 'twitter:title', content: 'Thierry Go Dev' },
        { name: 'twitter:description', content: 'Thierry G. développeur d\'application web et mobile, full stack JS, stack: Node.js, Vue.js, Nuxt.js, NativeScript, MongoDB.' },
        { name: 'twitter:creator', content: '@floor_dev' },
        // Twitter Summary card images must be at least 200x200px
        { name: 'twitter:image', content: 'https://thierry-go-dev/mvicon.png' }
      ]
    }
  }
}
</script>

<style>
#indexhead {
  min-width: 100%;
  border: 20px ridge rgb(12, 77, 12);
  background-image: url('~@/static/bann/boikourXL.jpg');
  background-repeat: no-repeat;
  background-size: cover;
  margin-bottom: 5%;
}
header h1 {
  color: rgb(59, 189, 20);
  text-align: center;
  text-shadow: 2px 2px 2px black;
  font-size: 6em;
}
.container-fluid {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
}
Logo {
  margin:2%;
}
.profile {
  min-width: 7vw;
  border-radius: 45%;
}
.ecusson {
  margin: 1vw;
}
.title {
  font-family:
    'Quicksand',
    'Source Sans Pro',
    -apple-system,
    BlinkMacSystemFont,
    'Segoe UI',
    Roboto,
    'Helvetica Neue',
    Arial,
    sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.sub-title {
  font-weight: 200;
  font-size: 35px;
  color: rgb(61, 255, 13);
  text-align: center;
  text-shadow: 2px 2px 2px black;
}

.links {
  margin: 3%;
  padding-top: 15px;
}

@media screen and (max-width: 850px){
  header {
    background-image: url('~@/static/bann/boikourL.jpg');
  }
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
  header {
    background-image: url('~@/static/bann/boikourS.jpg');
  }
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
