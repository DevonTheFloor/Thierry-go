<template>
  <div>
    <MyHeader urlim="https://thierry-go-dev.fr/tourn/images/real.jpg">
      <template #titre>
        Mes Réalisations
      </template>
    </MyHeader>
    <main>
      <h2>Nul n'Est Censé Ignorer La Loi</h2>
      <p>Site de la chaîne youtube du même nom. Chaîne de vulgarisation et diffusion du droit. Réalisé en Nuxt et Vuetify, le blog est en @nuxt/content.</p>
      <figure class="framebox">
        <a href="https://nulnestcenseignorerlaloi.fr" target="_blank">
          <img
            src="https://thierry-go-dev.fr/tourn/images/nulscreen.png"
            class="imframe"
          >
        </a>
      </figure>
      <h2>Pièce De Recup'</h2>
      <p>Site de vente de petites annonces de pièces de récupérations pour les bricoleurs. Projet réalisé en webcoponents et modules ES6 natifs. Base MongoDB et hébergement sur VPS servi par Node. </p>
      <figure class="framebox">
        <a href="https://piecederecup.fr" target="_blank">
          <img
            src="https://thierry-go-dev.fr/tourn/images/piecescreen.png"
            class="imframe"
          >
        </a>
      </figure>
      <h2>My Veille Dev Web</h2>
      <p>
        Projet de fin d'étude motivé par la difficulté de trouver une source de veille technologique exclusivement orientée dev web. Mais surtout, enfin avoir la possibilité de mettre de côté les articles qu'on ne peut pas lire tout de suite dans un espace perso accesible via une connexion Oauth2 via guithub.<br>
      </p>
      <figure class="framebox">
        <a href="https://myveille.herokuapp.com" target="_blank">
          <img
            src="https://thierry-go-dev.fr/tourn/images/veillescreen.png"
            class="imframe"
          >
        </a>
      </figure>
    </main>
    <div class="div-btn">
      <nuxt-link to="/" class="button--green btn-blog btn-custom">
        Accueil
      </nuxt-link>
    </div>
    <br>
    <br>
  </div>
</template>

<script>
export default {
  head () {
    return {
      title: 'Mes réalisations',
      htmlAttrs: {
        lang: 'fr'
      },
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { hid: 'description', name: 'description', content: 'Les sites et application web que j\'ai réaliser et poussé en prod' },
        // <!-- Open Graph data -->
        { property: 'og:title', content: 'Mes réalisations' },
        { property: 'og:type', content: 'Web site' },
        { property: 'og:url', content: 'https://thierry-go-dev.fr/portefolio' },
        { property: 'og:image', content: 'https://thierry-go-dev/mvicon.png' },
        { property: 'og:description', content: 'Les sites et application web que j\'ai réaliser et poussé en prod' },
        // <!-- Twitter Card data -->
        { name: 'twitter:card', content: 'summary' },
        { name: 'twitter:site', content: 'Thierry Go Dev' },
        { name: 'twitter:title', content: 'Mes réalisations' },
        { name: 'twitter:description', content: 'Les sites et application web que j\'ai réaliser et poussé en prod' },
        { name: 'twitter:creator', content: '@floor_dev' },
        // Twitter Summary card images must be at least 200x200px
        { name: 'twitter:image', content: 'https://thierry-go-dev/mvicon.png' }
      ]
    }
  }
}
</script>

<style>
main {
  padding: 1%;
}
.framebox {
  width: 100%;
  margin: 1% auto;
  padding: 2%;
  display: flex;
  justify-content: center;
}
.imframe {
  max-width: 60vw;
  margin: auto;
  object-fit: contain;
  border: 1px solid rgb(95, 92, 92);
  box-shadow: 4px 4px 4px rgb(172, 172, 172);
}
.div-btn {
  width: 100%;
  display: flex;
  justify-content: center;
}
h2 {
  text-align: center;
  color: rgb(23, 180, 23);
  font-size: 2em;
}
p {
  padding: 1%;
}
.techlogo {
  margin: auto;
}

</style>
